import React from 'react';
import cx from 'classnames';

import modsClasses from 'utils/modsClasses';

import s from './Btn.module.scss';

const Btn = ({ type, color, children }) => {
  const mods = modsClasses(s, {
    type,
    color,
  });

  return (
    <button className={cx(s.root, mods)} type={type}>
      {children}
    </button>
  );
};

export default Btn;
