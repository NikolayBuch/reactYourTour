import React from 'react';

import Text from 'components/common/Text';
import Container from 'components/common/Container';

import s from './OurMail.module.scss';

const OurMail = () => {
  return (
    <div className={s.root}>
      <Container>
        <div className={s.list}>
          <img src='./img/png/footer-photo.png' alt='Our tour' />
          <div className={s.info}>
            <Text as='h3' size='h3'>
              Пора в путешествие вместе с нами!
            </Text>
            <Text as='p'>
              Напиши на почту и узнай подробности на
              <a href='yourtour@gmail.com'>yourtour@gmail.com</a>
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurMail;
