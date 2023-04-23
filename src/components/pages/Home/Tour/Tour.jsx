import React from 'react';
import Card from './Card';
import Text from 'components/common/Text';
import s from './Tour.module.scss';
import { tours } from 'stubs/tours';
import { menu } from './constants';

const Tour = () => {
  return (
    <div className={s.root} id='tours'>
      <div  className={s.wrapperInfo}>
        <Text as='h2' size='h2' className={s.headerInfo}>Выбери свой тур</Text>
        <Text as='ul' size='big' className={s.navbar}>
          {menu.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))} 
        </Text>
      </div>

      <div className={s.tour} id='Популярные'>
        {tours.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Tour;
