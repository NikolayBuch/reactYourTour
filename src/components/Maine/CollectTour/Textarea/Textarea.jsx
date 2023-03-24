import React from 'react';
import s from './Textarea.module.css';
import cx from 'classnames'
import st from '../../Main.module.css'


const Textarea = () => {
	return (
		<div className={cx(s.comment, st.pNormal)}>
            <label >Комментарий
            	<textarea name="comment" id="comment" cols="30" rows="10" className={st.pNormal}></textarea>
			</label>
        </div>
	);
};

export default Textarea;