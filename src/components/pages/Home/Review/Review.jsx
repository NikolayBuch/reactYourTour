import React from 'react';

import Container from 'components/common/Container';
import BlockName from 'components/common/BlockName';
import Cards from './Cards';
import { reviews } from 'stubs/reviews';

import s from './Review.module.scss';

const Review = () => {
  return (
    <div className={s.root} id='reviews'>
      <Container>
        <BlockName
          title='Отзывы наших путешественников'
          description='Идейные соображения высшего порядка, а также рамки и место обучения кадров'
        />
        <div className={s.wraps}>
          {reviews.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Review;
