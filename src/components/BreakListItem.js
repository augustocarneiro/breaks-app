import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const BreakListItem = ({
  id,
  createdAt,
  description,
  endtime,
  initialtime,
}) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">
        {moment(createdAt).format("MMMM Do, YYYY")}
      </span>
    </div>
    <h3 className="list-item__data">{initialtime}</h3>
    <h3 className="list-item__data">{endtime}</h3>
    <h3 className="list-item__data">
      {(moment("2020-06-25 " + endtime, "yyyy-MM-dd HH:mm") -
        moment("2020-06-25 " + initialtime, "yyyy-MM-dd HH:mm")) /
        1000 /
        60}
    </h3>
  </Link>
);

export default BreakListItem;
