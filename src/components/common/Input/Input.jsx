import React from 'react';

import Text from 'components/common/Text';

import s from './Input.module.scss';

const MyInput = ({ label, type, placeholder, onFocus, onBlur }) => {
  return (
    <Text className={s.root}>
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
    </Text>
  );
};

export default MyInput;
