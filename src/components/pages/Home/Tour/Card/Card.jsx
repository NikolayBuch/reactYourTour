import React from 'react';
import Btn from 'components/common/Btn';
import Text from 'components/common/Text';
import s from './Card.module.scss';

const Cards = ({ item }) => {
  return (
    <div className={s.root}>
      <div className={s.fon}>
        <img src={`./img/png/${item.img}`} alt='Tour' />
      </div>
      <div className={s.info}>
        <Text as='h3' size='h3' className={s.header}>
          {item.title}
        </Text>
        <Text as='p' size='small' className={s.price}>
          {item.price}
        </Text>
      </div>
      <div className={s.more}>
        <Btn color='icon' size='big' value='Подробнее'>
          <img src='./img/svg/arrow.svg' alt='arrow' />
        </Btn>
      </div>
    </div>
  );
};

export default Cards;
