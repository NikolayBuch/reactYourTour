import React from 'react';
import s from './Textarea.module.scss';

const Textarea = () => {
  return (
    <div className={s.root}>
      <label>
        Комментарий
        <textarea name='comment' id='comment' cols='30' rows='10'></textarea>
      </label>
    </div>
  );
};

export default Textarea;
