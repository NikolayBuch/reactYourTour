import React from 'react';
import BtnMore from '../../../common/Buttons/BtnMore/BtnMore';
import s from './Card.module.scss';

const Cards = ({ item }) => {
  return (
    <div className={s.root}>
      <img src={`./img/png/${item.img}`} alt='Tour' className={s.fon} />
      <div className={s.info}>
        <h3 className={s.header}>{item.title}</h3>
        <p className={s.price}>{item.price}</p>
      </div>
      <div className={s.more}>
        <BtnMore />
      </div>
    </div>
  );
};

export default Cards;
