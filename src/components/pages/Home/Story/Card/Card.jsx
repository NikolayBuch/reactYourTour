import React from 'react';

import Text from 'components/common/Text';
import Link from './Link';
import Btn from 'components/common/Btn';

import s from './Card.module.scss';

const Cards = ({ item }) => {
  const links = item.link;
  const list = item.list;
  const listItem = list.map((item) => <li key={item.id}>{item.list}</li>);

  return (
    <div className={s.root}>
      <div className={s.fon}>
        <img src={`./img/png/${item.img}`} alt='story ' className={s.fon} />
      </div>
      <div className={s.info}>
        <Text as='h3' size='h3'>
          {item.title}
        </Text>
        <Text>
          <p>{item.description}</p>
          {list !== '' ? <ul>{listItem}</ul> : ''}
        </Text>
      </div>
      <div className={s.btn}>
        <Btn color='icon' size='big'>
          Подробнее
          <img src='./img/svg/arrow.svg' alt='arrow' />
        </Btn>
        <Text className={s.link}>
          {links.map((link) => (
            <Link link={link} key={link.id} />
          ))}
        </Text>
      </div>
    </div>
  );
};

export default Cards;
