import React from 'react';

import Text from 'components/common/Text';
import Link from './Link';
import { socialNet } from 'stubs/socialNet';

import s from './SocialNet.module.scss';

const SocialNet = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Text as='p'>Наши социальные сети</Text>
        <div className={s.link}>
          <ul>
            {socialNet.map((link) => (
              <Link link={link} key={link.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SocialNet;
