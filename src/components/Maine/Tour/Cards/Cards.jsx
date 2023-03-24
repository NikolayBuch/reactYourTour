import React from 'react';
import BtnMore from '../../../Buttons/BtnMore/BtnMore';
import st from '../../Main.module.css'
import s from './Cards.module.css'
import cx from 'classnames';


const Cards = ({card}) => {
    
	return (
		<div className={s.cards}>
                    <img src={`./img/png/${card.img}`} alt="Tour" className={s.fon}/>
                    <div className={s.info}>
                        <h3 className={s.header}>{card.title}</h3>
                        <p className={cx(st.pSmall, s.price)}>{card.price}</p>
                    </div>
                    <div className={s.more}>
                        <BtnMore/>
                    </div>
                </div>
	);
};

export default Cards;