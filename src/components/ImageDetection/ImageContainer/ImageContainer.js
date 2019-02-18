import React from 'react';

import ImageReferences from './ImageReferences/ImageReferences';
import { boundingBox, container } from './ImageContainer.module.scss';

const ImageContainer = ({ image, box: { topRow, bottomRow, leftCol, rightCol } }) => {
  console.log('image', image)
  return (
    <div className={`${container} ${image.trim() === '' ? 'dn' : 'flex'} justify-around center ma`}>
      <div className="relative mt2">
        <img 
          id='inputimage'
          style={{display: `${image === '' ? 'none' : 'block'}`}} 
          src={image}
          alt="Recognize"
          height='100%'
          width='100%' />
        <div className={boundingBox} style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}></div>
      </div>
      <ImageReferences />
    </div>
  );
}

export default ImageContainer;