import React from 'react';
import s from './Header.module.scss';
import Logo from './Logo';
import Nav from './Nav';
import Text from '../Text';

const Header = () => {
  return (
    <header>
      <nav className={s.root}>
        <div className={s.container}>
          <Logo />
          <Text as='div'>
            <Nav />
          </Text>
        </div>
      </nav>
    </header>
  );
};

export default Header;
