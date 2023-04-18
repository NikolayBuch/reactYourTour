import React from 'react';
import s from './About.module.scss';
import Text from 'components/common/Text';
import BtnTour from '../../common/Buttons/BtnTour';

const About = () => {
  return (
    <div className={s.root}>
      <div className={s.about}>
        <h1 className={s.title}>Идеальные путешествия существуют</h1>
        <Text>
          <p className={s.description}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </p>
        </Text>
        <BtnTour fw='about' value='Найти тур' size='small' />
      </div>
    </div>
  );
};

export default About;
