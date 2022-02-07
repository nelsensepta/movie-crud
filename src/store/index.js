import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    return serialisedState !== null ? JSON.parse(serialisedState) : undefined;
  } catch (e) {
    return undefined;
  }
}

export const store = createStore(
  reducers,
  loadFromLocalStorage(),
  compose(applyMiddleware(thunk))
);
