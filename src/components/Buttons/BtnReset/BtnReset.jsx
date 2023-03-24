import React from 'react';
import s from './BtnReset.module.css'
import st from '../../Maine/Main.module.css'
import cx from 'classnames'

const BtnReset = (props) => {
	return (
		<div>
			<button className={cx(st.pNormal, s.reset )}type="reset">{props.value}</button>
		</div>
	);
};

export default BtnReset;