import React from 'react';

import Text from 'components/common/Text';

import s from './Cards.module.scss';

const cards = ({ item }) => {
  return (
    <div className={s.root}>
      <Text as='p' size='big' className={s.review}>
        {item.review}
      </Text>
      <div className={s.name}>
        <div>
          <Text as='h3' size='h3'>
            {item.name}
          </Text>
          <Text as='p' size='small'>
            Тур: {item.nameTour}
          </Text>
        </div>
        <img src={`./img/png/${item.avatar}`} alt='avatar__review' />
      </div>
    </div>
  );
};

export default cards;
