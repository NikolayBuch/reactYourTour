import React from 'react';
import s from './BlockName.module.css'
import st from '../Main.module.css';
import cx from 'classnames';

const BlockName = ({title, description}) => {
	return (
            <div className={s.wrapperInfo}>
                    <h2 className={s.headerInfo}>{title}</h2>
                    <p className={cx(st.pNormal, s.info) }>{description}</p>    
            </div>
	);
};

export default BlockName;