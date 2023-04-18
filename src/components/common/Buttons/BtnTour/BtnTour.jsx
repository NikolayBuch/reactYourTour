import React from 'react';
import s from './BtnTour.module.scss';
import cx from 'classnames';
import Text from 'components/common/Text';

import modsClasses from 'utils/modsClasses';

const BtnTour = ({ value, type, fw, size }) => {
  const mods = modsClasses(s, {
    type,
    fw,
  });

  return (
    <button className={cx(s.root, mods)} type={type}>
      <Text size={size}>{value}</Text>
    </button>
  );
};

export default BtnTour;
