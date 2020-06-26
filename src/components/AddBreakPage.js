import React from "react";
import { connect } from "react-redux";
import BreakForm from "./BreakForm";
import { startAddBreak } from "../actions/breaks";

export class AddBreakPage extends React.Component {
  onSubmit = (breaktime) => {
    this.props.startAddBreak(breaktime);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add New Break</h1>
          </div>
        </div>
        <div className="content-container">
          <BreakForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddBreak: (breaktime) => dispatch(startAddBreak(breaktime)),
});

export default connect(undefined, mapDispatchToProps)(AddBreakPage);
