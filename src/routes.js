import React from "react";
import { Route, Switch } from "react-router-dom";

import SingIn from "./pages/SignIn";
import Main from "./pages/Main";
import Financeiro from "./components/Financeiro";

const Routes = () => (
  <Switch>
    <Route path="/signin" component={SingIn} />
    <Route path="/" exact component={Main} />
    <Route path="/financeiro" component={Financeiro} />
    <Route path="/signup" component={() => <h1>SignUp</h1>} />
  </Switch>
);

export default Routes;
