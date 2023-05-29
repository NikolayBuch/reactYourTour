import React from 'react';

import Container from 'components/common/Container';
import Text from 'components/common/Text';
import Card from 'components/common/Card';
import { tours } from 'stubs/tours';
import { menu } from './constants';

import s from './Tour.module.scss';

const Tour = () => {
  return (
    <div className={s.root} id='tours'>
      <Container>
        <div className={s.list}>
          <div className={s.wrapperInfo}>
            <Text as='h2' size='h2' className={s.headerInfo}>
              Выбери свой тур
            </Text>
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
              <Card size='product' item={item} key={item.id} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tour;
