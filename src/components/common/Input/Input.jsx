import React from 'react';
import s from './Input.module.scss';
import Text from 'components/common/Text';

const MyInput = ({ label, type, placeholder, onFocus, onBlur }) => {
  return (
    <div className={s.root}>
      <Text className={s.label}>
        {label}
        <Text
          as='input'
          type={type}
          placeholder={placeholder}
          className={s.customInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Text>
    </div>
  );
};

export default MyInput;
