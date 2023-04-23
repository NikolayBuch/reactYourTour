import React from 'react';
import s from './Agreement.module.scss';
import Text from 'components/common/Text';

const Agreement = () => {
  return (
    <div className={s.root}>
      <input id='checkbox' type='checkbox' className={s.checkbox} />
      <Text as='label' size='small' htmlFor='checkbox'>
        <p>
          Нажимая кнопку, я принимаю условия{' '}
          <a href='Лицензионного договора'> Лицензионного договора</a>
        </p>
      </Text>
    </div>
  );
};

export default Agreement;
