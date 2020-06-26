import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import BreakDashboardPage from "../components/BreakDashboardPage";
import AddBreakPage from "../components/AddBreakPage";
import EditBreakPage from "../components/EditBreakPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={BreakDashboardPage} />
        <PrivateRoute path="/create" component={AddBreakPage} />
        <PrivateRoute path="/edit/:id" component={EditBreakPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
