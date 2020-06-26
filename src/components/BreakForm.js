import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export default class BreakForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.breaktime ? props.breaktime.description : "",
      note: props.breaktime ? props.breaktime.note : "",
      initialtime: props.breaktime ? props.breaktime.initialtime : "",
      endtime: props.breaktime ? props.breaktime.endtime : "",
      createdAt: props.breaktime ? moment(props.breaktime.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onInitialTimeChange = (e) => {
    const initialtime = e.target.value;

    if (!initialtime || /^\d{1,}(\:\d{0,2})?$/.test(initialtime)) {
      this.setState(() => ({ initialtime }));
    }
  };

  onEndTimeChange = (e) => {
    const endtime = e.target.value;

    if (!endtime || /^\d{1,}(\:\d{0,2})?$/.test(endtime)) {
      this.setState(() => ({ endtime }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.initialtime) {
      this.setState(() => ({
        error: "Please provide description and initial time of break",
      }));
    } else if (
      !/^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/.test(this.state.initialtime)
    ) {
      this.setState(() => ({
        error: "Initial Time is invalid",
      }));
    } else if (!/^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/.test(this.state.endtime)) {
      this.setState(() => ({
        error: "End Time is invalid",
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        initialtime: this.state.initialtime,
        endtime: this.state.endtime,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Employee Name"
          autoFocus
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Initial time"
          className="text-input"
          value={this.state.initialtime}
          onChange={this.onInitialTimeChange}
        />
        <input
          type="text"
          placeholder="Final time"
          className="text-input"
          value={this.state.endtime}
          onChange={this.onEndTimeChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for your break (optional)"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        ></textarea>
        <div>
          <button className="button">Save Break</button>
        </div>
      </form>
    );
  }
}
