import React from 'react';

import Text from 'components/common/Text';
import Btn from 'components/common/Btn';

import s from './About.module.scss';

const About = () => {
  return (
    <div className={s.root}>
      <div className={s.about}>
        <Text as='h1' size='h1' className={s.title}>
          Идеальные путешествия существуют
        </Text>
        <Text as='p' className={s.description}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </Text>
        <Btn color='about'>Найти тур</Btn>
      </div>
    </div>
  );
};

export default About;
