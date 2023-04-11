import React from 'react';
import s from './BlockName.module.scss';

const BlockName = ({ title, description }) => {
  return (
    <div className={s.root}>
      <h2 className={s.headerInfo}>{title}</h2>
      <p className={s.info}>{description}</p>
    </div>
  );
};

export default BlockName;
