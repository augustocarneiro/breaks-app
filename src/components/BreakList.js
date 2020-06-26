import React from "react";
import { connect } from "react-redux";
import BreakListItem from "./BreakListItem";
import selectBreaks from "../selectors/breaks";

export const BreakList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Breaks</div>
      <div className="show-for-desktop">Break</div>
      <div className="show-for-desktop">Initial Time</div>
      <div className="show-for-desktop">End Time</div>
      <div className="show-for-desktop">Minutes</div>
    </div>
    <div className="list-body">
      {props.breaks.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No breaks</span>
        </div>
      ) : (
        props.breaks.map((breaktime) => {
          return <BreakListItem key={breaktime.id} {...breaktime} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    breaks: selectBreaks(state.breaks, state.filters),
  };
};

export default connect(mapStateToProps)(BreakList);
