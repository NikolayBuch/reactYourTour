import React from 'react';
import s from './Textarea.module.scss';
import Text from 'components/common/Text';

const Textarea = () => {
  return (
    <div className={s.root}>
      <Text as='label'>
        Комментарий
        <Text
          as='textarea'
          name='comment'
          id='comment'
          cols='30'
          rows='10'></Text>
      </Text>
    </div>
  );
};

export default Textarea;
