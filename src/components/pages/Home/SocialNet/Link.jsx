import React from 'react';
import Text from 'components/common/Text';

const Link = ({ link }) => {
  return (
    <li>
      <img src={`./img/svg/${link.icon}`} alt={link.title} />
      <Text as='a' href={link.link}>
        {link.title}
      </Text>
    </li>
  );
};

export default Link;
