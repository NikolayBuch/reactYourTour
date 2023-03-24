import React from "react";
import st from "../../Main.module.css";
import s from "./MySelect.module.css";
import cx from "classnames";

const MySelect = ({ label, defaultValue, value, options }) => {

  return (
    <div className={s.container}>
      <label>
        {label}
        <select
          name="paragraph"
          id=""
          className={cx(s.select, st.pNormal)}
          required>
            <option hidden disabled selected value="">
            {defaultValue}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.name}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default MySelect;
