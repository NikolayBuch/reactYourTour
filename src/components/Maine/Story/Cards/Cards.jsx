import React, { useState } from "react";
import BtnMore from "../../../Buttons/BtnMore/BtnMore";
import s from "./Cards.module.css"
import st from '../../Main.module.css';
import cx from 'classnames';
import Link from "./Link";

const Cards = ({cards}) => {
	const [links, useLinks] = useState(cards.link)
  const [list, useList] = useState(cards.list)
  const listItem = list.map((item) =>
  <li key={item.id}>{item.list}</li>);

  return (
    <div className={s.cards}>
      <img src={`./img/png/${cards.img}`} alt="story " className={s.fon} />
      <div className={s.info}>
        <h3>{cards.title}</h3>
        <p className={st.pNormal}>
          {cards.description}
        </p>
        {list !== ''
          ? <ul className={st.pNormal}>{listItem}</ul>
          : ''
          }
      </div>
      <div className={s.btn}>
		<BtnMore/>
        <div className={cx(s.link, st.pNormal)}>
          {links.map((link) =>
		  <Link link={link} key={link.id}/>)}
        </div>
      </div>
    </div>
  );
};

export default Cards;
