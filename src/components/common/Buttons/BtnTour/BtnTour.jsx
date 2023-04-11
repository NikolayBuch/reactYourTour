import React from 'react';
import s from './BtnTour.module.scss';
import cx from 'classnames';

import modsClasses from '../../../../utils/modsClasses';

const BtnTour = ({ value, type }) => {
  const mods = modsClasses(s, {
    type,
  });

  return (
    <button className={cx(s.root, mods)} type={type}>
      {value}
    </button>
  );
};

export default BtnTour;
