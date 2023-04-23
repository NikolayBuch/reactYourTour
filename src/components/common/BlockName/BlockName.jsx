import React from 'react';
import s from './BlockName.module.scss';
import Text from 'components/common/Text';

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
