import {addExpense, editExpense, removeExpense} from "../../actions/expenses";


test("Should setup remove expense action object", () => {
  const action = removeExpense({id: "123abc"});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: "123abc"
  })
});

test("should setup editExpense action object", () => {
  const action = editExpense("123abc", {description: 'new'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: "123abc",
    updates: {description: "new"}
  })
});

test('should setup addExpense action object with provided values', () => {
  const expenseData = {
    description: 'new',
    note: 'new note,',
    amount: 100,
    createdAt: 15000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should setup addExpense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
});