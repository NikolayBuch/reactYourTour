import React from 'react';
import BlockName from 'components/common/BlockName';
import Card from './Card';
import { storyTravel } from 'stubs/storyTravel';
import s from './Story.module.scss';

const Story = () => {

  return (
    <div className={s.story} id='story'>
      <BlockName
        title='Истории путешествий'
        description='Идейные соображения высшего порядка, а также рамки и место обучения кадров'
      />
      <div className={s.container}>
        {storyTravel.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Story;
