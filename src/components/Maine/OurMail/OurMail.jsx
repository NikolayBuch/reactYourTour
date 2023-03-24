import React from 'react';
import s from './OurMail.module.css'
import st from '../Main.module.css'
import cx from 'classnames'

const OurMail = () => {
	return (
		<div className={s.mail}>
            <img src="/img/png/footer-photo.png" alt="Our tour"/>
            <div className={s.info}>
                <h3>Пора в путешествие вместе с нами!</h3>
                <p className={st.pNormal}>Напиши на почту и узнай подробности на <a href="yourtour@gmail.com">yourtour@gmail.com</a> </p>
            </div>
        </div>
	);
};

export default OurMail;