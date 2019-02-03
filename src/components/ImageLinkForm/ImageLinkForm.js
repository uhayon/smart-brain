import React from 'react';

import { form, formInput } from './ImageLinkForm.module.scss';

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3 white">
        {'This Magic Brain will detect what you want in your pictures. Give it a try.'}
      </p>
      <div className='center'>
        <div className={`pa4 br3 shadow-5 center ${form}`}>
          <input className={`f4 pa2 w-70 center input-reset ba b--white-10 ${formInput}`} type="text"/>
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-dark-gray b--white-10">Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;