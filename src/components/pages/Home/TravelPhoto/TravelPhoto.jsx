import React from 'react';

import photoSorting from 'utils/photoSorting';

import Container from 'components/common/Container';
import BlockName from 'components/common/BlockName';
import Img from './Img';
import { gallery } from 'stubs/gallery';

import s from './TravelPhoto.module.scss';

const TravelPhoto = () => {
  const photo = photoSorting(gallery);

  return (
    <div className={s.root}>
      <Container size='big'>
        <BlockName
          title='Фотографии путешествий'
          description='Идейные соображения высшего порядка, а также рамки и место обучения кадров'
        />
        <div className={s.photoBlok}>
          {photo.map((section, index) => (
            <div className={s.block} key={index}>
              {section.items.map((block) => (
                <Img
                  block={block}
                  line={index % 2 === 0 ? '1' : '2'}
                  key={block.id}
                />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TravelPhoto;
