import React from 'react';

const Link = ({ link }) => {
  return (
    <li>
      <img src={`./img/svg/${link.icon}`} alt={link.title} />
      <a href={link.link}>{link.title}</a>
    </li>
  );
};

export default Link;
