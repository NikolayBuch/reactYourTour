import React from 'react';

import Logo from './Logo';
import Nav from './Nav';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <nav className={s.root}>
        <div className={s.container}>
          <Logo />
          <Nav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
