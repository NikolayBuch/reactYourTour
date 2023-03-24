import React from "react";
import s from "./MyInput.module.css";
import cx from "classnames";
import st from "../../Main.module.css";

const MyInput = ({ label, type, placeholder, onFocus }) => {
  return (
    <div className={s.container}>
      <label className={s.label}>
        {label}
        <input
          type={type}
          placeholder={placeholder}
          className={cx(st.pNormal, s.customInput)}
		  onFocus={onFocus}
        />
      </label>
    </div>
  );
};

export default MyInput;
