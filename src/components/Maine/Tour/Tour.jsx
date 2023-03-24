import React, { useState } from 'react';
import Cards from './Cards/Cards';
import s from './Tour.module.css';
import st from '../Main.module.css'
import cx from 'classnames'
import { Tours } from '../../../Stubs/Tours';

const Tour = () => {

  const [tours, stateTours] = useState(Tours)

	return (
		<div className={s.container} id="tours"> 
            <div className={s.wrapperInfo}>
                <h2 className={s.headerInfo}>Выбери свой тур</h2>
                <ul className={cx(st.pBig, s.navbar)}>
                    <li><a href="#Популярные">Популярные</a></li>
                    <li><a href="#Авторские">Авторские</a></li>
                    <li><a href="#Походы">Походы</a></li>
                    <li><a href="#Сплавы">Сплавы</a></li>
                    <li><a href="#Велопрогулки">Велопрогулки</a></li>
                </ul>
            </div>
            <div className={s.tour} id="Популярные">
                {tours.map((card)=>
                <Cards card={card} key={card.id}/>)}
            </div>
        </div>
	);
};

export default Tour;