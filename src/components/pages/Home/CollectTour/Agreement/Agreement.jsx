import React from 'react';

import Text from 'components/common/Text';

import s from './Agreement.module.scss';

const Agreement = () => {
  return (
    <Text size='small' className={s.root}>
      <input id='checkbox' type='checkbox' className={s.checkbox} />
      <label htmlFor='checkbox'>
        <p>
          Нажимая кнопку, я принимаю условия{' '}
          <a href='Лицензионный договор'> Лицензионного договора</a>
        </p>
      </label>
    </Text>
  );
};

export default Agreement;
