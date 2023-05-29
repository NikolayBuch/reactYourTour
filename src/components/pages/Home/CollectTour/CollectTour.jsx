import React, { useState } from 'react';

import Container from 'components/common/Container';
import BlockName from 'components/common/BlockName';
import Text from 'components/common/Text';
import Input from 'components/common/Input';
import Select from 'components/common/Select';
import Textarea from 'components/common/Textarea';
import RadioBtn from 'components/common/RadioBtn';
import Agreement from './Agreement';
import Btn from 'components/common/Btn';

import s from './CollectTour.module.scss';

const CollectTour = () => {
  const [type, setType] = useState('text');
  const onFocus = () => setType('date');
  const onBlur = () => setType('text');

  return (
    <div className={s.root} id='create_a_tour'>
      <Container>
        <BlockName
          title='Собери свой тур'
          description='Идейные соображения высшего порядка, а также рамки и место обучения кадров'
        />
        <form className={s.form}>
          <div className={s.list}>
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
          <Text size='normal' className={s.have18}>
            <p>Вам есть 18 лет?</p>
            <div className={s.answer}>
              <RadioBtn value='yes' label='Да' />
              <RadioBtn value='no' label='Нет' />
            </div>
          </Text>
          <Agreement />
          <div className={s.btn}>
            <Btn type='submit'>Найти тур</Btn>
            <Btn type='reset'>Сбросить</Btn>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default CollectTour;
