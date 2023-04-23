import React from 'react';
import s from './Btn.module.scss';
import cx from 'classnames';
import Text from 'components/common/Text';

import modsClasses from 'utils/modsClasses';

const Btn = ({ value, type, size, color, children }) => {
  const mods = modsClasses(s, {
    type,
    color,
  });
  return (
    <Text as='button' className={cx(s.root, mods)} size={size} type={type}>
      {value}
      {children}
    </Text>
  );
};

export default Btn;
