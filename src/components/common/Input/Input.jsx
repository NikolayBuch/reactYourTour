import React from "react";
import s from "./Input.module.scss";

const MyInput = ({ label, type, placeholder, onFocus, onBlur }) => {
  return (
    <div className={s.root}>
      <label className={s.label}>
        {label}
        <input
          type={type}
          placeholder={placeholder}
          className={s.customInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </label>
    </div>
  );
};

export default MyInput;
