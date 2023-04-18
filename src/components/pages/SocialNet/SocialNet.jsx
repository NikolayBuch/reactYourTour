import React, { useState } from 'react';
import s from './SocialNet.module.scss';
import { socialNet } from '../../../stubs/socialNet';
import Link from './Link';
import Text from 'components/common/Text';

const SocialNet = () => {
  const [links, useLinks] = useState(socialNet);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Text>
          <p>Наши социальные сети</p>
        </Text>
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
