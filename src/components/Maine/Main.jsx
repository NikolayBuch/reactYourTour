import React from 'react';
import Tour from './Tour/Tour';
import s from './Main.module.css'
import CollectTour from './CollectTour/CollectTour';
import Review from './Review/Review';
import TravelPhoto from './TravelPhoto/TravelPhoto';
import Story from './Story/Story';
import OurMail from './OurMail/OurMail';
import SocialNet from './SocialNet/SocialNet';

const Main = () => {
	return (
		<main className={s.content}>
			<Tour/>
			<CollectTour/>
			<Review/>
			<TravelPhoto/>
			<Story/>
			<OurMail/>
			<SocialNet/>
		</main>
	);
};

export default Main;