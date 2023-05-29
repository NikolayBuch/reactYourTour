import React from 'react';
import cx from 'classnames';

import modsClasses from 'utils/modsClasses';
import Text from 'components/common/Text';
import Link from './Link';
import Btn from 'components/common/Btn';

import s from './Card.module.scss';

const Cards = ({ item, size }) => {
  const mods = modsClasses(s, {
    size,
  });

  return (
    <div className={cx(s.root, mods)}>
      <div className={cx(s.card)}>
        <div className={s.bg}>
          <img src={`./img/png/${item.img}`} alt='story ' />
        </div>
        <div className={s.info}>
          <Text as='h3' size='h3'>
            {item.title}
          </Text>
          <Text>
            <p>{item.description}</p>
            {item.list ? (
              <ul>
                {item.list.map((item) => (
                  <li key={item.id}>{item.list}</li>
                ))}
              </ul>
            ) : (
              ''
            )}
          </Text>
        </div>
        <div className={s.btn}>
          <Btn color='icon' size='big'>
            Подробнее
            <img src='./img/svg/arrow.svg' alt='arrow' />
          </Btn>
          <Text className={s.link}>
            {item.link
              ? item.link.map((link) => <Link link={link} key={link.id} />)
              : ''}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Cards;
