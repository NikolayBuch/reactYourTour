import React from 'react';
import s from './RadioBtn.module.css'
import st from '../../Main.module.css'


const RadioBtn = ({label, value}) => {
	return (
		<div className={s.div}>
			<input type="radio" value={value} id={value} className={s.radio} name="answer" />
            	<label className={st.pNormal} htmlFor={value}> {label}</label> 
		</div>
	);
};

export default RadioBtn;