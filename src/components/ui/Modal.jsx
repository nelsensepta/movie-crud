import React from "react";
import "./Modal.css";

export default function Modal({ children, add, setAdd }) {
  return (
    <>
      <div className={add ? "modal active" : "modal"}>{children}</div>
      <div
        className={add ? "underlay active" : "underlay"}
        onClick={() => setAdd(!add)}
      ></div>
    </>
  );
}
