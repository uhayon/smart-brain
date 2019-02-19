import React from 'react';

const getBox = key => {
  return document.querySelector(`[data-reference="${key}"]`);
}

const highlightBox = key => {
  const box = getBox(key);
  if (box) {
    box.classList.add('box-highlighted');
  }
}

const unhighlightBox = key => {
  const box = getBox(key);
  if (box) {
    box.classList.remove('box-highlighted');
  }
}

const ImageReferences = ({ references }) => (
  <div style={{minWidth: '25%'}}>
    {
      references.map(({ description, key }) =>
        <p 
          className='pointer'
          onMouseOver={() => highlightBox(key)}
          onMouseOut={() => unhighlightBox(key)}
          key={description}>
          {description}
        </p>
      )
    }
  </div>
);

export default ImageReferences;