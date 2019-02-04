import React from 'react';

import ModelSelector from './ModelSelector/ModelSelector';
import { form, formInput } from './ImageLinkForm.module.scss';

const ImageLinkForm = ({ onFormInputChange, onFormSubmit, inputValue, onFormModelChange, selectedModel, models }) => {
  return (
    <div>
      <p className="f3 white">
        {'This Magic Brain will detect what you want in your pictures. Give it a try.'}
      </p>
      <div className='center'>
        <div className={`pa4 br3 shadow-5 center column ${form}`}>
          <div className="center" style={{margin: '0'}}>
            <ModelSelector
              onFormModelChange={onFormModelChange}
              selectedModel={selectedModel}
              models={models} />
            <input 
              className={`${formInput} f4 pa2 w-70 center input-reset ba b--white-10`} 
              type="text" 
              onChange={onFormInputChange}
              value={inputValue} />
            <button 
              className="w-30 grow f4 link ph3 pv2 dib white bg-dark-gray b--white-10 bg-light-purple" 
              onClick={onFormSubmit}>
              Detect
            </button>
          </div>
          <span className='white mt3 bg-black'>{selectedModel.description}</span>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;