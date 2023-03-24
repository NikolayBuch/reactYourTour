import React from 'react';

import s from './Cards.module.css'
import st from '../../Main.module.css'
import cx from 'classnames'

const cards = ({review}) => {
	return (
			<div className={s.cards}>
                    <p className={cx(st.pBig, s.review)}>
                        {review.review}
                        </p>
                    <div className={s.name}>
                        <div>
                            <h3>
                                {review.name}
                            </h3>
                            <p className={st.pSmall}>
                                Тур: {review.nameTour}
                            </p>
                        </div>
                        <img src={`/img/png/${review.avatar}`}alt="avatar__review"/>
                    </div>
                </div>

	);
};

export default cards;