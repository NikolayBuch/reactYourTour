import React, { useState } from 'react';
import s from './SocialNet.module.scss';
import { socialNet } from '../../../stubs/socialNet';
import Link from './Link';

const SocialNet = () => {
  const [links, useLinks] = useState(socialNet);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <p>Наши социальные сети</p>
        <div className={s.link}>
          <ul>
            {links.map((link) => (
              <Link link={link} key={link.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SocialNet;
