import React from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Home from "./components/Home";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Route path="/posts" exact>
          <Posts />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </main>
    </>
  );
};

export default App;
