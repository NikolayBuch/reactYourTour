import React from 'react';
import s from './Cards.module.scss';

const cards = ({ item }) => {
  return (
    <div className={s.root}>
      <p className={s.review}>{item.review}</p>
      <div className={s.name}>
        <div>
          <h3>{item.name}</h3>
          <p>Тур: {item.nameTour}</p>
        </div>
        <img src={`./img/png/${item.avatar}`} alt='avatar__review' />
      </div>
    </div>
  );
};

export default cards;
