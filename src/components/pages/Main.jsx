import React from "react";
import Tour from "./Tour/Tour";
import s from "./Main.module.scss";
import About from "./About/About";
import CollectTour from "./CollectTour";
import Review from "./Review";
import TravelPhoto from "./TravelPhoto";
import Story from "./Story";
import OurMail from "./OurMail";
import SocialNet from "./SocialNet";

const Main = () => {
  return (
    <main className={s.root}>
      <About/>
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
