import React from "react";
import "./Input.css";

export default function Input({
  handleSubmit,
  setChange,
  valueChange,
  placeholder,
  btnX,
}) {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="list-form">
      <input
        type="text"
        value={valueChange}
        placeholder={placeholder}
        onChange={(e) => setChange(e.target.value)}
        className="list-input"
      />
      <button type="submit" className="btn-add">
        Add
      </button>
      {btnX && (
        <button type="button" onClick={(e) => btnX(e)} className="btn-add">
          Batal
        </button>
      )}
    </form>
  );
}
