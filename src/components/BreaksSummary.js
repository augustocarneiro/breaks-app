import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectBreaks from "../selectors/breaks";

export const BreaksSummary = ({ breakCount }) => {
  const breakWord = breakCount === 1 ? "break" : "breaks";

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{breakCount}</span> {breakWord}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Break
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleBreaks = selectBreaks(state.breaks, state.filters);

  return {
    breakCount: visibleBreaks.length,
  };
};

export default connect(mapStateToProps)(BreaksSummary);
