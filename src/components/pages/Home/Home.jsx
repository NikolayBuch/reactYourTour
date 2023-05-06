import React from 'react';

import About from './About';
import Tour from './Tour/Tour';
import CollectTour from './CollectTour';
import Review from './Review';
import TravelPhoto from './TravelPhoto';
import Story from './Story';
import OurMail from './OurMail';
import SocialNet from './SocialNet';

import s from './Home.module.scss';

const Main = () => {
  return (
    <main className={s.root}>
      <About />
      <Tour />
      <CollectTour />
      <Review />
      <TravelPhoto />
      <Story />
      <OurMail />
      <SocialNet />
    </main>
  );
};

export default Main;
