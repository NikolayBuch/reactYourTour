import React, { useState } from 'react';
import s from './Review.module.css';
import st from '../Main.module.css';
import cx from 'classnames';
import Cards from './Cards/Cards';
import {Reviews} from '../../../Stubs/Reviews'
import BlockName from '../BlockName/BlockName';

const Review = () => {

    const [reviews, useReviews] = useState(Reviews)

	return (
		<div className={s.reviews} id="reviews">
            <div className={st.wrapperInfo}> 
                    <BlockName 
                    title='Отзывы наших путешественников' 
                    description='Идейные соображения высшего порядка, а также рамки и место обучения кадров' />  
            </div>
        
            <div className={s.wraps}>
                {reviews.map((review) => <Cards review={review} key={review.id}/>)}
            </div>
        </div>
	);
};

export default Review;