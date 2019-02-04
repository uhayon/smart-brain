import React from 'react';

import { boundingBox } from './ImageContainer.module.scss';

const ImageContainer = ({ image, box: { topRow, bottomRow, leftCol, rightCol } }) => {
  return (
    <div className="flex-justify-center center ma">
      <div className="absolute mt2">
        <img 
          id='inputimage'
          style={{display: `${image === '' ? 'none' : 'block'}`}} 
          src={image}
          alt="Recognize"
          width='500px'
          height='auto' />
          <div className={boundingBox} style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}></div>
      </div>
    </div>
  );
}

export default ImageContainer;