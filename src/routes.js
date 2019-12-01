import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SingIn from "./pages/SignIn";
import Main from "./pages/Main";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SingIn} />
      <Route path="/" exact component={Main} />
      <Route path="/signup" component={() => <h1>SignUp</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
