import React from 'react';
import Tilt from 'react-tilt';

import BrainLogo from './brain-logo.png';
import { tilt } from './Logo.module.scss'; 

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className={`Tilt br2 shadow-2 ${tilt}`} options={{ max : 25 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} src={BrainLogo} alt="Brain"/>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;