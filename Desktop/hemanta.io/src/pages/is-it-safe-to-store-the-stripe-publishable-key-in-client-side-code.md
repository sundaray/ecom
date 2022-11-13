---
title: "Is it Safe to Store the Stripe Publishable Key in Client-side Code?"
date: "2022-10-26"
excerpt: "The publishable key CAN BE publicly exposed while the secret key should NEVER BE publicly exposed."
categories: ["Stripe"]
---

```toc

```

When implementing payment processing using Stripe, you get two API keys for both test mode and live mode.

One is a **publishable key** & the other is a **secret key**. Stripe uses these API keys to authenticate your API requests.

### Publishable key

According to [Stripe DOCS](https://stripe.com/docs/keys), the publishable key **can be publicly accessible** in your web or mobile
app’s client-side code. For example, in the code snippet below, the publishable key is in client-side code and becomes publicly accessible when the code is pushed to GitHub.

```js {numberLines}
import { loadStripe } from "@stripe/stripe-js"

export const stripePromise = loadStripe(
  "pk_test_61I29144e4HAv4tCvB2Srott0k9YQQKrSp4vDC9aZrs6BPpDajVBlU6Z00NWaijUhh"
)
```

### Secret key

The secret key, on the other hand, must be stored securely in your web or mobile app’s server-side code (such as in an environment variable).

You should **NEVER EXPOSE the secret key**, because anyone with access to your secret key can make any API call on behalf of your account to create a charge or perform a refund for example.
