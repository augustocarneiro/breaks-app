// Breaks Reducer

const breaksReducerDefaultState = [];

export default (state = breaksReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_BREAK":
      return [...state, action.breaktime];
    case "REMOVE_BREAK":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_BREAK":
      return state.map((breaktime) => {
        if (breaktime.id === action.id) {
          return {
            ...breaktime,
            ...action.updates,
          };
        } else {
          return breaktime;
        }
      });
    case "SET_BREAKS":
      return action.breaks;

    default:
      return state;
  }
};
