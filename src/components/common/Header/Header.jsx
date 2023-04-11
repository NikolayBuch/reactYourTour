import React from 'react';
import s from './Header.module.scss';
import Logo from './Logo';
import Nav from './Nav';

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
