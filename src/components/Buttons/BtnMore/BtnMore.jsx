import React from 'react';
import s from './BtnMore.module.css'
import st from '../../Maine/Main.module.css'
import cx from 'classnames'

const BtnMore = () => {
	return (
		<div>
			<button className={cx(s.button, st.pBig)}>Подробнее<img src='/img/svg/Arrow.svg' alt="arrow"/></button>
		</div>
	);
};

export default BtnMore;