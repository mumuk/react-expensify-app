import expensesReducer from '../../reducers/expenses';
import expenses from "../fixtures/expenses"


test("should set default state", () => {
  const state = expensesReducer(undefined, {type: '@@init'});
  expect(state).toEqual([])
});


test("should add expense", () => {
  const expense = {
    id: 4,
    description: 'Pepsi',
    note: '',
    amount: 450,
    createdAt: 0
  };
  const action = {type: "ADD_EXPENSE", expense};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});


test("should remove expense by id", () => {
  const action = {type: "REMOVE_EXPENSE", id: expenses[0].id};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[2]]);
});


test("should not remove expense if id not found", () => {
  const action = {type: "REMOVE_EXPENSE", id: -4};
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});


test("should update expense by id", () => {
  const action =
    {
      type: "EDIT_EXPENSE",
      id: expenses[0].id,
      updates: {
        description: 'coffee'
      }
    };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe('coffee');
});

test("should not edit expense if id not found", () => {
  const action =
    {
      type: "EDIT_EXPENSE",
      id: -3,
      updates: {
        description: 'coffee'
      }
    };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action =
    {
      type: "SET_EXPENSES",
      expenses: [expenses[1]]
    };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]])
});