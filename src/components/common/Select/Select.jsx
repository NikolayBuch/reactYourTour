import React from 'react';

import s from './Select.module.scss';

const MySelect = ({ label, defaultValue, options }) => {
  return (
    <div className={s.root}>
      <div className={s.item}>
        <label>
          {label}
          <select name='paragraph' id='' className={s.select} required>
            <option hidden disabled selected value=''>
              {defaultValue}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default MySelect;
