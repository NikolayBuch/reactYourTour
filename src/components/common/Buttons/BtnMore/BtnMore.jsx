import React from 'react';
import s from './BtnMore.module.scss'

const BtnMore = () => {
	return (
			<button className={s.root}>Подробнее<img src='./img/svg/arrow.svg' alt="arrow"/></button>
		
	);
};

export default BtnMore;