import React from 'react';
import NavBar from './NavBar/NavBar';
import s from './About.module.css';
import st from '../../styles/App.css'
import cx from 'classnames';

const About = () => {
	return (
		<header className={s.background}>
        <NavBar/>
        <div className={s.about}>
            <h1 className={s.title}>Идеальные путешествия существуют</h1>
            <p className={cx(s.description, st.pNormal)}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
            <button className={cx(st.pSmall, s.btm) }>Найти тур</button>
        </div>
        
    </header>
	);
};

export default About;