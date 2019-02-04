import React from 'react';

const ImageContainer = ({ image }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img 
          style={{display: `${image === '' ? 'none' : 'block'}`}} 
          src={image}
          alt="Recognize"
          width='500px'
          height='auto' />
      </div>
    </div>
  );
}

export default ImageContainer;