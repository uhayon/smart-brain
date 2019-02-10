import React from 'react';

import UserMenu from './UserMenu/UserMenu';

import { header } from './Header.module.scss';
import { LoggedUserConsumer } from '../../contexts/LoggedUserContext';

const Header = () => {
  return (
    <LoggedUserConsumer>
      {
        ({ userLogged, userData, setUserLogged }) =>     
          <header className='bg-black-translucent'>
          {
            userLogged ? 
            <nav className={header}>
              <UserMenu user={userData} />
              <p 
                className='link dim black underline pa2 pointer white mh3'
                onClick={() => setUserLogged(false)}>
                Sign Out
              </p>
            </nav>
            : null
          }
        </header>
      }
    </LoggedUserConsumer>
  );
};

export default Header;