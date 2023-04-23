import React from 'react';
import BlockName from 'components/common/BlockName';
import s from './TravelPhoto.module.scss';
import { gallery } from 'stubs/gallery';
import photoSorting from 'utils/photoSorting';
import ImageB1 from './Img/Img';

const TravelPhoto = () => {
  const photo = photoSorting(gallery);

  return (
    <div className={s.photo}>
      <BlockName
        title='Фотографии путешествий'
        description='Идейные соображения высшего порядка, а также рамки и место обучения кадров'
      />
      <div className={s.photoBlok}>
        {photo.map((section, index) => (
          <div className={s.block} key={index}>
            {section.items.map((block) => (
              <ImageB1
                block={block}
                line={index % 2 === 0 ? '1' : '2'}
                key={block.id}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPhoto;
