import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../components/Header"
import NotFoundPage from "../components/404"
import HelpPage from "../components/HelpPage"
import AddExpensePage from "../components/AddExpensePage"
import EditExpensePage from "../components/EditExpensePage"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import PortfolioPage from "../components/Portfolio"





const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header>

      </Header>
      <Switch>
        <Route exact={true} path="/" component={ExpenseDashboardPage}/>
        <Route path="/create/" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/portfolio" component={PortfolioPage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter
