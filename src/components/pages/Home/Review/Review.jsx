import React from 'react';
import s from './Review.module.scss';
import Cards from './Cards';
import { reviews } from 'stubs/reviews';
import BlockName from 'components/common/BlockName';

const Review = () => {
  return (
    <div className={s.root} id='reviews'>
      <BlockName
        title='Отзывы наших путешественников'
        description='Идейные соображения высшего порядка, а также рамки и место обучения кадров'
      />
      <div className={s.wraps}>
        {reviews.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Review;
