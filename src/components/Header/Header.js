import React from 'react';

import { header } from './Header.module.scss';

const Header = () => {
  return (
    <header className='bg-black-translucent'>
      <nav className={header}>
        <p className='f4 link dim black underline pa2 pointer white'>Sign Out</p>
      </nav>
    </header>
  );
};

export default Header;