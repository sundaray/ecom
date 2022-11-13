---
title: "Implement Stripe Checkout Using Netlify Functions & React"
date: "2022-10-28"
excerpt: "Learn how to process payments in a React app using Stripe Checkout with Netlify functions."
categories: ["Stripe"]
---

```toc

```

You have made an app using React and you want to process payments using Stripe Checkout, where the customer gets redirected to a payment page hosted on Stripe. You don’t want to deal with a custom backend and run a dedicated server, so you have chosen Netlify functions (serverless functions).

Cool.

Let’s get started.

### Prerequisites

This blog post assumes that you have already set up a React project. You should also have created a Stripe account, activated test mode and got the API keys from the dashboard.

You will have two API keys: a publishable key & a secret key. The publishable key is used client-side and can be publicly exposed. The secret key, on the other hand, is used server-side and should never be exposed to the outside world. We will store the secret key as an environment variable in a ~~.env~~ file and load it into ~~process.env~~ using the ~~dotenv~~ module.

### Install

First, let’s install React Stripe.js & the Stripe.js loader & the Stripe Node library.

```sh {numberLines}
npm i @stripe/stripe-js @stripe/react-stripe-js stripe
```

Next, we will install ~~axios~~ & ~~dotenv~~.

```sh {numberLines}
npm i axios dotenv
```

Finally, we will install Netlify CLI to run a local development server that mimics the Netlify production environment, so that we can test our serverless function locally.

```sh {numberLines}
npm i netlify-cli -g
```

We have installed all the packages we need. Now let’s move on to the client-side.

### Client-side

Copy & paste the highlighted code snippets in the ~~index.js~~ file.

```js:title=src/index.js {numberLines, 6-7, 9-11, 18-18, 20-20}
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_text_51I9jDKK144e4HAv4tCvB2Srottk9w4h6SepkBIRYQQKrSp4vDC9ars6BX57259L1CklrLhlTPpDajBlU6Z00NWaijUhh"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
    </Router>
  </React.StrictMode>
);
```

Before I explain what the code snippets mean, remember that **it is absolutely fine to expose the publishable key in client-side code**.

Ok, first, we render an ~~Elements~~ provider at the root of our React app. The ~~Elements~~ provider will allow us to access the Stripe object in any of our nested components.

To use the ~~Elements~~ provider, we use ~~loadStripe~~ from ~~@stripe/stripe-js~~ with the publishable key. The ~~loadStripe~~ function will asynchronously load the ~~Stripe.js~~ script and initialize a Stripe object. Then we pass the returned ~~Promise~~ to ~~Elements~~.

Next, we have a component called ~~Purchase~~, where we show a **Buy Now** button to the customer. When the customer clicks on the “Buy Now” button, we send a ~~POST~~ request to the API end point ~~/.netlify/functions/createCheckoutSession~~.

> Note that the API end point has the signature ~~/.netlify/functions/file_name~~. We call the serverless function at ~~/.netlify~~ followed by the directory that we have defined in order to avoid name clashes with other APIs.

This triggers the serverless function, which creates a Checkout Session and returns the session ID to the client. The client then uses the session ID to redirect the customer to a payment page hosted on Stripe.

Note that I am using Tailwind CSS for styling.

```js {numberLines, 6-6}
import React from "react"
import { useStripe } from "@stripe/react-stripe-js"
import axios from "axios"

const Purchase = () => {
  const stripe = useStripe()

  const handleClick = async () => {
    const {
      data: { id: sessionId },
    } = await axios.post("/.netlify/functions/createStripeCheckoutSession")

    const { error } = await stripe.redirectToCheckout({ sessionId })

    if (error) {
      console.log(error)
    }
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-600 text-xl font-bold px-2 py-1"
    >
      Buy Now
    </button>
  )
}

export default Purchase
```

On line 6, we use the ~~useStripe~~ hook to return a reference to the Stripe instance passed to the ~~Elements~~ provider.

### Anatomy of a serverless function

Before we move on to server-side code, let’s understand the signature of a serverless function.

A serverless function must contain an export of a function called ~~handler~~, which must be assigned an asynchronous function. The function will act as an API end point. This means that it will receive request context or event data, and return data back to the client.

The ~~handler~~ function must return an object with at least two properties: ~~statusCode~~ & ~~body~~. The body typically contains a JSON object.

### Server-side

At the root of your project, create a file named ~~.env~~. Inside the file, add the following key-value pair:

```sh {numberLines}
STRIPE_SECRET_KEY=sk_test_519jQXPWyRqKCFlCzWWu50FRSiiXItALAm7Rl7mKrw004224o9xN
```

Replace the secret key with the secret key that you would have got from the Stripe dashboard. Note that you don’t need quotes around the secret key, and you can name the key anything you want.

Importantly, don’t forget to add ~~.env~~ in the ~~.gitignore~~ file.

Next, at the root of your project, create a folder named ~~Netlify~~ and inside ~~Netlify~~, create a folder named ~~functions~~. Inside the ~~functions~~ folder, create a file named ~~createCheckoutSession.js~~. You can name the file anything you want.

Then, copy and paste the following code snippet in the ~~createCheckoutSession.js~~ file.

```js {numberLines}
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = async () => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: "A Notebook",
          },
          unit_amount: 120000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url:
      "http://localhost:8888/checkout/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:8888/checkout/cancel",
  })
  return {
    statusCode: 200,
    body: JSON.stringify({
      id: session.id,
    }),
  }
}
```

The serverless function, when triggered, creates a checkout session. A Checkout Session controls what your customer sees on the payment page such as line items, the order amount & currency, and acceptable payment methods. Note that it is always preferred to keep sensitive information about your product, price for example, on the server.

In the code sample above, we return ~~statusCode~~ of 200, which means everything is ok. And, the body contains the session ID.

We also specify URLs for success and cancel pages. After a customer successfully completes the checkout, Stripe redirects the customer to the success page. And when the customer clicks on the back button, Stripe redirects to the cancel page.

The implementation is complete. Now, run the command ~~netlify dev~~. This will spin up a development server. Click on the **Buy Now** button and check that the payment flow is working as expected.

That’s it. That's all there is to implement Stripe Checkout in a React app using Netlify functions. If you run into any issues, let me know in the comments.

Some useful links that will help you understand more about Stripe Checkout:

https://stripe.com/docs/checkout/quickstart

https://stripe.com/docs/stripe-js/react

https://stripe.com/docs/payments/checkout/custom-success-page
