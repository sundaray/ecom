---
title: "React Router - Nested Routes"
date: "2021-10-06"
excerpt: "Learn to render several routes at the same time."
categories: ["React Router"]
---

###### Learn the fundamentals of React router in my blog post [here](https://hemanta.io/introduction-to-react-router/).

Nested routes allow us to render several routes at the same time.

Let’s say there is a website with an **about** page located at ~~/about~~ and the **about** page has two subpages:

- About Founder: located at ~~/about/founder~~
- About Team: located at ~~about/team~~

The **About Founder** page would render the same content as the ~~/about~~ page but with the addition of an **About Founder** section underneath.

Similarly, the **About Team** page would render the same content as the ~~/about~~ page but with the addition of an **About Team** section underneath.

This is an example of nested routes. This is because the ~~/about/founder~~ route is rendering two routes at the same time. It’s rendering the content from the ~~/about~~ route as well as the content from the ~~/about/founder~~ route. The same goes for the ~~/about/team~~ route.

We can visualize the concept of nested routes as shown below:

**/about**

![About Page](../images/nestedRoutes/about.png)

**/about/founder**

![About Founder Page](../images/nestedRoutes/aboutFounder.png)

**/about/team**

![About Team Page](../images/nestedRoutes/aboutTeam.png)

Making nested routes work in React is a two step process.

- Make any component return a (nested) ~~Switch~~ which contains routes. In our example, the ~~About~~ component will return a ~~Switch~~.
- The route that supports nested routes should **NOT** have the ~~exact~~ prop anymore. In our example, the ~~/about~~ page supports nested routes, so we should remove the ~~exact~~ prop from the ~~\<Route />~~

The following code samples will make the concept clearer:

```js:title=src/App.js {numberLines, 13-13}
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
```

On line 13, note that the route that renders the ~~About~~ page does not have an ~~exact~~ prop. If we keep the ~~exact~~ prop on the ~~\<Route path=”/about” />~~, it won’t match for ~~/about/founder~~ or ~~/about/team~~. So, we won’t get any nested routes.

```js:title=src/components/About.js {numberLines, 22-29}
import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";

const About = () => {
  return (
    <>
      <h2>DiDi Chuxing is a Chinese taxi-hailing service.</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/about/founder" activeClassName="selected">
              About Founder
            </NavLink>
          </li>
          <li>
            <NavLink to="/about/team" activeClassName="selected">
              About Team
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about/founder" exact>
          <h4>DiDi was founded by Cheng Wei.</h4>
        </Route>
        <Route path="/about/team" exact>
          <h4>DiDi is led by a team of thinkers & doers.</h4>
        </Route>
      </Switch>
    </>
  );
};

export default About;
```

The ~~About~~ component also returns a ~~Switch~~. This is a nested ~~Switch~~ because the ~~App~~ component also returns a ~~Switch~~.

The nested ~~Switch~~ has two routes:

- one matching ~~/about/founder~~
- another one matching ~~/about/team~~
