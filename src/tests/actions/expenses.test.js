import {
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startAddExpense,
  startRemoveExpense,
  startSetExpenses
} from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = {description, note, amount, createdAt};
  });

  database.ref('expenses').set(expensesData).then(() => done());
});


test("Should setup remove expense action object", () => {
  const action = removeExpense({id: "123abc"});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: "123abc"
  })
});

test("should remove expense from firebase", (done) => {
  const store = createMockStore({});
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({id})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  })
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense with defaults to database and store', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  })
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefault = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };

  store.dispatch(startAddExpense(expenseDefault)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseDefault
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefault);
    done();
  });

});


test("should setup set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
});

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});
