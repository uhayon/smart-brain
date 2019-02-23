import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { ratingStar, starActive } from './Rating.module.scss';

const Rating = ({ totalStars, filledStars, onStarClick, label }) => {
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <FontAwesomeIcon 
        key={i}
        icon={faStar}
        onClick={() => onStarClick(i)}
        className={`mh1 pointer grow ${ratingStar} ${i <= filledStars ? starActive : ''}`} />
    );
  }

  return (
    <fieldset className='tc ba b--white'>
      <legend>{label}</legend>
      <div className='pv2'>{stars}</div>
    </fieldset>
  );
};

export default Rating;