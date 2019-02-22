import React from 'react';

import { referenceElement } from './ImageReferences.module.scss';
import { boundingBoxHovered } from '../ImageContainer.module.scss';

import Spinner from '../../../SuspenseLoading/Spinner/Spinner';

const getBox = key => {
  return document.querySelector(`[data-reference="${key}"]`);
}

const highlightBox = key => {
  const box = getBox(key);
  if (box) {
    box.classList.add(boundingBoxHovered);
  }
}

const unhighlightBox = key => {
  const box = getBox(key);
  if (box) {
    box.classList.remove(boundingBoxHovered);
  }
}

const ImageReferences = ({ isSearching, references, selectedModel: { value: selectedModel } }) => {
  console.log(selectedModel)
  return (
    <div style={{minWidth: '25%'}}>
      <ul className='list pl0'>
        {
          isSearching ?
          <Spinner /> :
          references.map(({ description, key }) =>
            <li 
              style={
                selectedModel === 'COLOR_MODEL' ?
                {
                  backgroundColor: key
                } :
                {}
              }
              className={`${referenceElement} pointer pa2 ttc`}
              onMouseOver={() => highlightBox(key)}
              onMouseOut={() => unhighlightBox(key)}
              key={description}
              data-reference={key} >
              <span
                style={
                  selectedModel === 'COLOR_MODEL' ?
                  {
                    backgroundColor: 'rgba(0, 0, 0, .75)',
                  color: '#fff'
                  } :
                  {}
                }
              >
                {description}
              </span>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default ImageReferences;