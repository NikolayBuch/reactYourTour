import React from 'react';

import Text from 'components/common/Text';

import s from './BlockName.module.scss';

const BlockName = ({ title, description }) => {
  return (
    <div className={s.root}>
      <Text as='h2' size='h2' className={s.headerInfo}>
        {title}
      </Text>
      <Text size='normal' as='p' className={s.info}>
        {description}
      </Text>
    </div>
  );
};

export default BlockName;
