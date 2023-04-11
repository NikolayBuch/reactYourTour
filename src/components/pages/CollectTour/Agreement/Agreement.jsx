import React from 'react';
import s from './Agreement.module.scss';

const Agreement = () => {
  return (
    <div className={s.root}>
      <input id='checkbox' type='checkbox' className={s.checkbox} />
      <label htmlFor='checkbox'>
        <p>
          Нажимая кнопку, я принимаю условия{' '}
          <a href='Лицензионного договора'> Лицензионного договора</a>
        </p>
      </label>
    </div>
  );
};

export default Agreement;
