import React from 'react';

import { menu } from './constants';
import Text from 'components/common/Text';

import s from './Nav.module.scss';

const Nav = () => {
  return (
    <Text className={s.root}>
      <ul className={s.container}>
        {menu.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
      <a href='tel:+79999999999' className={s.tel}>
        +7 999 999 99 99
      </a>
    </Text>
  );
};

export default Nav;
