import {combineReducers, createStore} from 'redux'
import {v4 as uuidv4} from 'uuid'




store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -200}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));
//
//
// store.dispatch(removeExpense(expenseOne));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
//
//
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('fee'));
// store.dispatch(setTextFilter(''));
//
//
//store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate()); //dates

//store.dispatch(setStartDate(125)); //start
// store.dispatch(setStartDate()); //start
// store.dispatch(setEndDate(1250)); //start


const demoState = {
  expenses: [{
    id: 'dsgdsagsg',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
