import React from 'react';
import s from './Select.module.scss';
import Text from 'components/common/Text';

const MySelect = ({ label, defaultValue, value, options }) => {
  return (
    <div className={s.root}>
      <label>
        {label}
        <Text as='select' name='paragraph' id='' className={s.select} required>
          <option hidden disabled selected value=''>
            {defaultValue}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </Text>
      </label>
    </div>
  );
};

export default MySelect;
