import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store, saveToLocalStorage } from "./store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import Alert from "./components/ui/Alert";
store.subscribe(() => saveToLocalStorage(store.getState()));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Alert />
        <App />
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
