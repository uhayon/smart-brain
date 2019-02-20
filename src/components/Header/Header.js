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
              <UserMenu user={userData} setUserLogged={setUserLogged} />
            </nav>
            : null
          }
        </header>
      }
    </LoggedUserConsumer>
  );
};

export default Header;