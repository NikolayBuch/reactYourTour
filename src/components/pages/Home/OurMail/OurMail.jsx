import React from 'react';
import s from './OurMail.module.scss';
import Text from 'components/common/Text';

const OurMail = () => {
  return (
    <div className={s.root}>
      <img src='./img/png/footer-photo.png' alt='Our tour' />
      <div className={s.info}>
        <Text as='h3' size='h3'>
          Пора в путешествие вместе с нами!
        </Text>
        <Text as='p'>
          Напиши на почту и узнай подробности на{' '}
          <a href='yourtour@gmail.com'>yourtour@gmail.com</a>{' '}
        </Text>
      </div>
    </div>
  );
};

export default OurMail;
