import React from 'react';
import s from './Agreement.module.css'
import st from '../../Main.module.css'

const Agreement = () => {
	return (
		<div className={s.agreement}>
        	<input id="checkbox" type="checkbox" className={s.checkbox}/>
        	<label className={st.pSmall} htmlFor="checkbox"><p>Нажимая кнопку, я принимаю условия <a href="Лицензионного договора"> Лицензионного договора</a></p></label>
        </div>
	);
};

export default Agreement;