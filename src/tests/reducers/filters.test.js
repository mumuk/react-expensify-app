import filtersReducer from "../../reducers/filters";
import moment from "moment";

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@init'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT"});
  expect(state.sortBy).toBe('amount')
});


test("should set sortBy to date", () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = {type: 'SORT_BY_DATE'};
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date')
});

test('Should set text filter to - testing', () => {
  const action = {type: 'SET_TEXT_FILTER', text: 'testing'};
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(action.text)
});

test('Should set start date to 111222', () => {
  const action = {type: 'SET_START_DATE', startDate: '111222'};
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(action.startDate)
});

test('Should set star date to 111222', () => {
  const action = {type: 'SET_END_DATE', endDate: '222111'};
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(action.endDate)
});