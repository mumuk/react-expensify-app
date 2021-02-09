import React from "react";
import ExpenseList from "./ExpenseList"
import ExpenseListFilters from "./ExpenseListFilters"
import ExpensesSummary from "./ExpensesSummary";
import LoginPage from "./LoginPage"


const ExpenseDashboardPage = () => (
  <div>
    <LoginPage/>
    <ExpensesSummary/>
    <ExpenseListFilters/>
    <ExpenseList/>
  </div>
);
export default ExpenseDashboardPage