import React from "react";
import BreakList from "./BreakList";
import BreakListFilters from "./BreakListFilters";
import BreaksSummary from "./BreaksSummary";

const BreakDashboardPage = () => (
  <div>
    <BreaksSummary />
    <BreakListFilters />
    <BreakList />
  </div>
);

export default BreakDashboardPage;
