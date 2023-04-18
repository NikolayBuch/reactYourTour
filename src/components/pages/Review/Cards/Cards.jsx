import React from 'react';
import s from './Cards.module.scss';
import Text from 'components/common/Text';

const cards = ({ item }) => {
  return (
    <div className={s.root}>
      <Text size='big'>
        <p className={s.review}>{item.review}</p>
      </Text>
      <div className={s.name}>
        <div>
          <h3>{item.name}</h3>
          <Text size='small'>
            <p>Тур: {item.nameTour}</p>
          </Text>
        </div>
        <img src={`./img/png/${item.avatar}`} alt='avatar__review' />
      </div>
    </div>
  );
};

export default cards;
