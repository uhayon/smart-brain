import React from 'react';

import { referenceElement } from './ImageReferences.module.scss';

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
    <ul className='list pl0'>
      {
        references.map(({ description, key }) =>
          <li 
            className={`${referenceElement} pointer pa2`}
            onMouseOver={() => highlightBox(key)}
            onMouseOut={() => unhighlightBox(key)}
            key={description}>
            {description}
          </li>
        )
      }
    </ul>
  </div>
);

export default ImageReferences;