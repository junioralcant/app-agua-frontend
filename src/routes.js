import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import SingIn from "./pages/SignIn";
import Main from "./pages/Main";
import Financeiro from "./pages/Financeiro";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: `/signin`, state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <Switch>
    <Route path="/signin" component={SingIn} />
    <PrivateRoute path="/" exact component={Main} />
    <PrivateRoute path="/financeiro" component={Financeiro} />
  </Switch>
);

export default Routes;
