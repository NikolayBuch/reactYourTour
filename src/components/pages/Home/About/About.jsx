import React from 'react';
import s from './About.module.scss';
import Text from 'components/common/Text';
import Btn from 'components/common/Btn';

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
        <Btn size='small'  color='about' value='Найти тур' />
      </div>
    </div>
  );
};

export default About;
