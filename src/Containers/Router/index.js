import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import PageError from '../Pages/PageError';
import DashBoard from "../Pages/DashBoard/dashboard";
import Clientes from "../Pages/Clientes/clientes";

export const routes = {
  dashboard: "/",
  clientes: "/clientes"
  
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.dashboard} component={DashBoard} />
        <Route exact path={routes.clientes} component={Clientes} />
        <Route path={routes.error} component={PageError} />
      </Switch>
    </ConnectedRouter>
  )
};
export default Router;