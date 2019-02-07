import React from 'react';

const LoggedUserContext = React.createContext({
  userLogged: false,
  userData: {}
});

export const LoggedUserProvider = LoggedUserContext.Provider;
export const LoggedUserConsumer = LoggedUserContext.Consumer;