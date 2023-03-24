import React from 'react';
import s from './BtnSubmit.module.css'
import st from '../../Maine/Main.module.css'
import cx from 'classnames'

const BtnSubmit = (props) => {
	return (
		<div>
			<button className={cx(st.pNormal, s.find )}type="submit">{props.value}</button>
		</div>
	);
};

export default BtnSubmit;