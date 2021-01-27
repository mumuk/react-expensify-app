import React from 'react';
import {connect} from "react-redux";
import {DateRangePicker} from "react-dates"
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../actions/filters";


export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,

  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}))
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    e.target.value === 'date' ?
      this.props.sortByDate()
      :
      this.props.sortByAmount()
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}/>
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          startDateId="your_unique_start_date_id"
          endDateId="your_unique_end_date_id"

        />
      </div>
    );
  }

}


const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: ()=>dispatch(sortByDate()),
  sortByAmount:()=>dispatch(sortByAmount()),
  setStartDate:(startDate)=>dispatch(setStartDate()),
  setEndDate:(endDate)=>dispatch(setEndDate())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);