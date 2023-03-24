import React, { useState } from 'react';
import BlockName from '../BlockName/BlockName';
import s from './TravelPhoto.module.css'
import cx from 'classnames'
import {Gallery} from '../../../Stubs/Gallery';
import ImageB1 from './Img/ImageB1';
import ImageB2 from './Img/ImageB2';

const TravelPhoto = () => {
	
	const blok1 = [Gallery[0], Gallery[1], Gallery[2], Gallery[3]]
	const blok2 = [Gallery[4], Gallery[5], Gallery[6], Gallery[7], Gallery[8]]
	const blok3 = [Gallery[9], Gallery[10], Gallery[11], Gallery[12]]
	const [block1, useBlock1] = useState(blok1)
	const [block2, useBlock2] = useState(blok2)
	const [block3, useBlock3] = useState(blok3)
	return (
		<div className={s.photo}>
			<BlockName title='Фотографии путешествий' description='Идейные соображения высшего порядка, а также рамки и место обучения кадров' />
		<div className={s.photoBlok}>
			<div className={cx(s.block, s.disable1)}>
				{block1.map((block) =>
				<ImageB1 block={block} key={block.id}/>)}
			</div>
			<div className={cx(s.block, s.disable2)}>
			{block2.map((block) =>
				<ImageB2 block={block} key={block.id}/>)}
			</div>
			<div className={cx(s.block, s.disable3)}>
			{block3.map((block) =>
				<ImageB1 block={block} key={block.id}/>)}
			</div>
		</div>

	</div>
	);
};

export default TravelPhoto;