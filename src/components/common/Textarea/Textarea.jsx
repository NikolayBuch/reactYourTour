import React from 'react';

import Text from 'components/common/Text';

import s from './Textarea.module.scss';

const Textarea = () => {
  return (
    <Text className={s.root}>
      <label>
        Комментарий
        <textarea name='comment' id='comment' cols='30' rows='10' />
      </label>
    </Text>
  );
};

export default Textarea;
