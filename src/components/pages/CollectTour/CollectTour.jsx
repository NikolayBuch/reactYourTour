import React, { useState } from 'react';
import s from './CollectTour.module.scss';
import Input from '../../common/Input';
import Select from '../../common/Select';
import Textarea from '../../common/Textarea';
import RadioBtn from '../../common/RadioBtn';
import Agreement from './Agreement';
import BtnTour from '../../common/Buttons/BtnTour';
import BlockName from '../../common/BlockName';

const CollectTour = () => {
  const [type, setType] = useState('text');
  const onFocus = () => setType('date');
  const onBlur = () => setType('text');

  return (
    <div className={s.root} id='create_a_tour'>
      <BlockName
        title='Собери свой тур'
        description='Идейные соображения высшего порядка, а также рамки и место обучения кадров'
      />
      <form className={s.form}>
        <div className={s.group}>
          <Input
            label='Имя'
            type='text'
            required
            placeholder='Введите Ваше имя'
          />
          <Select
            label='Направление'
            defaultValue='Выберите пункт'
            options={[
              { value: 'Пункт1', name: 'Пункт выбран' },
              { value: 'Пункт2', name: 'Пункт выбран' },
              { value: 'Пункт3', name: 'Пункт выбран' },
            ]}
          />
        </div>
        <div className={s.group}>
          <Input
            label='Email'
            type='Email'
            required
            placeholder='example@mail.com'
          />
          <Input
            label='Телефон'
            type='number'
            required
            placeholder='+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _'
          />
        </div>
        <div className={s.group}>
          <Input
            type={type}
            label='Дата от'
            placeholder='ДД.ММ.ГГГГ'
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <Input
            type={type}
            label='Дата до'
            placeholder='ДД.ММ.ГГГГ'
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        <Textarea />
        <div className={s.have18}>
          <p>Вам есть 18 лет?</p>
          <div className={s.answer}>
            <RadioBtn value='yes' label='Да' />
            <RadioBtn value='no' label='Нет' />
          </div>
        </div>
        <Agreement />
        <div className={s.btn}>
          <BtnTour type='submit' value='Найти тур' />
          <BtnTour type='reset' value='Сбросить' />
        </div>
      </form>
    </div>
  );
};

export default CollectTour;
