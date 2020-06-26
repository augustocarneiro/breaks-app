import React from "react";
import { connect } from "react-redux";
import BreakForm from "./BreakForm";
import { startEditBreak, startRemoveBreak } from "../actions/breaks";

export class EditbreakPage extends React.Component {
  onSubmit = (breaktime) => {
    this.props.startEditBreak(this.props.breaktime.id, breaktime);
    this.props.history.push("/");
  };
  onRemove = () => {
    this.props.startRemoveBreak({ id: this.props.breaktime.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Break</h1>
          </div>
        </div>
        <div className="content-container">
          <BreakForm
            breaktime={this.props.breaktime}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>
            Remove break
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  breaktime: state.breaks.find(
    (breaktime) => breaktime.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditBreak: (id, breaktime) => dispatch(startEditBreak(id, breaktime)),
  startRemoveBreak: (data) => dispatch(startRemoveBreak(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditbreakPage);
