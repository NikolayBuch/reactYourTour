import React from 'react';
import BtnMore from '../../../common/Buttons/BtnMore/BtnMore';
import s from './Card.module.scss';
import Link from './Link';

const Cards = ({ item }) => {
  const links = item.link;
  const list = item.list;
  const listItem = list.map((item) => <li key={item.id}>{item.list}</li>);

  return (
    <div className={s.root}>
      <img src={`./img/png/${item.img}`} alt='story ' className={s.fon} />
      <div className={s.info}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {list !== '' ? <ul>{listItem}</ul> : ''}
      </div>
      <div className={s.btn}>
        <BtnMore />
        <div className={s.link}>
          {links.map((link) => (
            <Link link={link} key={link.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
