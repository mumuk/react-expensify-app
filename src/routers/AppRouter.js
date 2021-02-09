import React from "react";
import {Router, Route, Switch} from "react-router-dom";

import NotFoundPage from "../components/404"
import HelpPage from "../components/HelpPage"
import AddExpensePage from "../components/AddExpensePage"
import EditExpensePage from "../components/EditExpensePage"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import PortfolioPage from "../components/Portfolio"
import LoginPage from "../components/LoginPage"
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from "./PublicRoute";

export const history =createHistory();


const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <PublicRoute path="/help" component={HelpPage} />
        <PublicRoute component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter
