import React from 'react';
import s from './Image.module.scss';
import modsClasses from 'utils/modsClasses';
import cx from'classnames';

const Img = ({ block, line}) => {
  const mods = modsClasses(s, {
    line
  });
  return (
    <div className={cx(s.root, mods)}>
      <img
        src={`./img/png/${block.img}`}
        alt='Foo travel'
      />
    </div>
  );
};

export default Img;
