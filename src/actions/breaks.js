import uuid from "uuid";
import database from "../firebase/firebase";

// ADD_break
export const addBreak = (breaktime) => ({
  type: "ADD_BREAK",
  breaktime,
});

export const startAddBreak = (breakData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      initialtime = "",
      endtime = "",
      createdAt = 0,
    } = breakData;
    const breaktime = { description, note, initialtime, endtime, createdAt };

    return database
      .ref(`users/${uid}/breaks`)
      .push(breaktime)
      .then((ref) => {
        dispatch(
          addBreak({
            id: ref.key,
            ...breaktime,
          })
        );
      });
  };
};

// REMOVE_break
export const removeBreak = ({ id } = {}) => ({
  type: "REMOVE_BREAK",
  id,
});

export const startRemoveBreak = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/breaks/${id}`)
      .remove()
      .then(() => {
        dispatch(removeBreak({ id }));
      });
  };
};

// EDIT_break
export const editBreak = (id, updates) => ({
  type: "EDIT_BREAK",
  id,
  updates,
});

export const startEditBreak = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/breaks/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editBreak(id, updates));
      });
  };
};

// SET_BREAKS
export const setBreaks = (breaks) => ({
  type: "SET_BREAKS",
  breaks,
});

export const startSetBreaks = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/breaks`)
      .once("value")
      .then((snapshot) => {
        const breaks = [];

        snapshot.forEach((childSnapshot) => {
          breaks.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        dispatch(setBreaks(breaks));
      });
  };
};
