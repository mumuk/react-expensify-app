import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import 'normalize.css/normalize.css';
import {addExpense} from "./actions/expenses"
import {setTextFilter} from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"
import './styles/styles.scss';
import {Provider} from "react-redux";
import "react-dates/lib/css/_datepicker.css"
import 'react-dates/initialize';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: -200}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));
const expenseThree = store.dispatch(addExpense({description: 'Water bill', amount: 500, createdAt: 200}));
const expenseFour = store.dispatch(addExpense({description: 'Gas bill', amount: 800, createdAt: 1000}));
//store.dispatch(setTextFilter('bill'));


// store.dispatch(removeExpense(expenseOne));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));


const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));



