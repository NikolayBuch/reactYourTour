import React from 'react';

import Logo from './Logo';
import Nav from './Nav';
import Container from 'components/common/Container';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <nav className={s.root}>
        <Container>
          <div className={s.container}>
            <Logo />
            <Nav />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
