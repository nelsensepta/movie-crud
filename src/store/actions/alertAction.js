import { v1 as uuid } from "uuid";

export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

export const setAlert =
  (msg, alertType, timeout = 2000) =>
  (dispatch) => {
    const id = uuid();
    dispatch({ type: SET_ALERT, payload: { msg, alertType, id } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };
