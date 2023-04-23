import React from 'react';
import s from './RadioBtn.module.scss';
import Text from 'components/common/Text';

const RadioBtn = ({ label, value }) => {
  return (
    <Text className={s.root}>
      <input
        type='radio'
        value={value}
        id={value}
        className={s.radio}
        name='answer'
      />
      <label htmlFor={value}>{label}</label>
    </Text>
  );
};

export default RadioBtn;
