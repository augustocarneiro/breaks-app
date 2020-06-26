import moment from "moment";

// Get visible breaks

export default (breaks, { text, sortBy, startDate, endDate }) => {
  return breaks
    .filter((breaktime) => {
      const createdAtMoment = moment(breaktime.createdAt);

      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = breaktime.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "initialtime") {
        return a.initialtime < b.initialtime ? 1 : -1;
      }
    });
};
