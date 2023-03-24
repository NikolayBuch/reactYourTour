import React, { useState } from 'react';
import BlockName from '../BlockName/BlockName';
import Cards from './Cards/Cards';
import { StoryTravel } from '../../../Stubs/StoryTravel';
import s from "./Story.module.css"

const Story = () => {
	const [storyCards, useStoryCards] = useState(StoryTravel)

	return (
			<div className={s.story} id="story">
				<BlockName title='Истории путешествий' description='Идейные соображения высшего порядка, а также рамки и место обучения кадров'/>
            <div className={s.container}>
				{storyCards.map((cards) =>
				<Cards cards={cards} key={cards.id}/>)}
            </div>
		</div>
	);
};

export default Story;