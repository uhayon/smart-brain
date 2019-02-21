import React from 'react';

import { option } from './UserMenuOption.module.scss';

const UserMenuOption = ({ divider, onOptionClick, label }) => (
  divider ?
  <hr style={{width: '75%', margin: '0'}} /> :
  <p
    className={`link dim black pa2 pointer white ma0 w-100 ${option}`}
    onClick={onOptionClick}>
    {label}
  </p>
);

export default UserMenuOption;