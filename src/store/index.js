import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export function saveToLocalStorage(state) {
  try {
    // if (!state.length) return undefined;
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
    console.warn(e);
    return undefined;
  }
}

// local Storage Problem redux
const ok = loadFromLocalStorage();

export const store = createStore(reducers, ok, compose(applyMiddleware(thunk)));

// export default store;
// export const store = createStore(reducers, compose(applyMiddleware(thunk)));
