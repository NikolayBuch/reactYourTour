import React from 'react';
import Text from 'components/common/Text';

const Link = ({ link }) => {
  return (
    <li>
      <img src={`./img/svg/${link.icon}`} alt={link.title} />
      <Text>
        <a href={link.link}>{link.title}</a>
      </Text>
    </li>
  );
};

export default Link;
