import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import SingIn from "./pages/SignIn";
import Main from "./pages/Main";
import Financeiro from "./pages/Financeiro";
import Produto from "./components/CadProduto";

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
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SingIn} />
      <PrivateRoute path="/" exact component={Main} />
      <PrivateRoute path="/financeiro" component={Financeiro} />
      <PrivateRoute path="/produto" component={Produto} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
