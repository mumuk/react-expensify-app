import moment from "moment";
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters";

test("should return setTextFilter action object with provided value", () => {
  const text ='test';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  })
});
test("should return setTextFilter action object with default", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  })
});

test('should return start Date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  })
});

test('should return end Date action object', () => {
  const action = setEndDate(moment(1000));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(1000)
  })
});

test('should return sortByAmount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  })
});

test('should return sortByDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  })
});