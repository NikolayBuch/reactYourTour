import React from "react";
import BlockName from '../../common/BlockName';
import s from "./TravelPhoto.module.scss";
import cx from "classnames";
import { gallery } from "../../../stubs/gallery";
import ImageB1 from "./Img/ImageB1";
import ImageB2 from "./Img/ImageB2";

const TravelPhoto = () => {

  let arr = gallery;
  let startPos = 0;
  const parts = [4, 5, 4];
  const newArr = [];

  parts.forEach((part, i) => {
    newArr.push({
      id: `line_${i}`,
      items: arr.slice(startPos, startPos + part),
    });
    startPos += part;
  });
  
  const blok1 = newArr[0].items;
  const blok2 = newArr[1].items;
  const blok3 = newArr[2].items;
  return (
    <div className={s.photo}>
      <BlockName
        title="Фотографии путешествий"
        description="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
      />
      <div className={s.photoBlok}>
        <div className={cx(s.block, s.disable1)}>
          {blok1.map((block) => (
            <ImageB1 block={block} key={block.id} line='1'/>
          ))}
        </div>
        <div className={cx(s.block, s.disable2)}>
          {blok2.map((block) => (
            <ImageB1 block={block} key={block.id} line='2'/>
          ))}
        </div>
        <div className={cx(s.block, s.disable3)}>
          {blok3.map((block) => (
            <ImageB1 block={block} key={block.id} line='1'/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelPhoto;
