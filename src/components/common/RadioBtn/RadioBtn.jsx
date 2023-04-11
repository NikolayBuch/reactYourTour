import React from 'react';
import s from './RadioBtn.module.scss';

const RadioBtn = ({ label, value }) => {
  return (
    <div className={s.root}>
      <input
        type='radio'
        value={value}
        id={value}
        className={s.radio}
        name='answer'
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
};

export default RadioBtn;
