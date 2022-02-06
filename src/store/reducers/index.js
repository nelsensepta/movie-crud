import { combineReducers } from "redux";
import movieReducer from "./movie";
import listReducer from "./list";
import alertReducer from "./alert";

export default combineReducers({ movieReducer, listReducer, alertReducer });
