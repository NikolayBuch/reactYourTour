import React from 'react';
import s from './BlockName.module.scss';
import Text from 'components/common/Text';

const BlockName = ({ title, description }) => {
  return (
    <div className={s.root}>
      <h2 className={s.headerInfo}>{title}</h2>
      <Text size="normal">
        <p className={s.info}>{description}</p>
      </Text>
    </div>
  );
};

export default BlockName;
