import React from 'react';
import s from './Image.module.css'

const ImageB1 = ({block}) => {
	return (
			<img src={`./img/png/${block.img}`} alt="Foo travel" className={s.block1 }/>
		
	);
};

export default ImageB1;