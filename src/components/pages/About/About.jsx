import React from 'react';
import s from './About.module.scss';

const About = () => {
  return (
    <div className={s.root}>
      <div className={s.about}>
        <h1 className={s.title}>Идеальные путешествия существуют</h1>
        <p className={s.description}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <button className={s.btm}>Найти тур</button>
      </div>
    </div>
  );
};

export default About;
