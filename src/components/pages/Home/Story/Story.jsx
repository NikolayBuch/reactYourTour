import React from 'react';

import BlockName from 'components/common/BlockName';
import Card from 'components/common/Card';
import { storyTravel } from 'stubs/storyTravel';

import s from './Story.module.scss';

const Story = () => {
  return (
    <div className={s.root} id='story'>
      <BlockName
        title='Истории путешествий'
        description='Идейные соображения высшего порядка, а также рамки и место обучения кадров'
      />
      <div className={s.container}>
        {storyTravel.map((item) => (
          <Card size='story' item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Story;
