import selectExpenses from "../../selectors/expenses"
import moment from "moment";

const expenses = [
  {
    id: 1,
    description: 'Gum',
    note: '',
    amount: 350,
    createdAt: 0
  },
  {
    id: 2,
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'day').valueOf()
  },
  {
    id: 23,
    description: 'Credit card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'day').valueOf()
  },
];


test("should filter by text value", () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]])
});

test("should filter by startDate",()=>{
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]])
});


test("should filter by endDate",()=>{
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2,'day'),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0],expenses[1]])
});

test("should filter date",()=>{
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
});

test("should filter date",()=>{
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1],expenses[2],expenses[0]])
});
