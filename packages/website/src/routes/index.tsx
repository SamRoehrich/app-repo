import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import { RegisterPage } from "../pages/register";
import { DashboardPage } from "../pages/dashboard";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/register" component={RegisterPage} />
      <Route exact={true} path="/dashboard" component={DashboardPage} />
    </Switch>
  </BrowserRouter>
);
