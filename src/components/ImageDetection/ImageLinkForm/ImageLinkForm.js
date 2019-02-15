import React from 'react';

import ModelSelector from './ModelSelector/ModelSelector';
import { form, formInput } from './ImageLinkForm.module.scss';

const ImageLinkForm = ({ onFormInputChange, onImageSubmit, inputValue, onFormModelChange, selectedModel, models }) => {
  return (
    <div>
      <p className="f3 white">
        {'This Magic Brain will detect what you want in your pictures. Give it a try.'}
      </p>
      <div className='flex-justify-center center'>
        <div className={`pa4 br3 shadow-5 flex-justify-center center column ${form}`}>
          <div className="flex-justify-center center" style={{margin: '0'}}>
            <ModelSelector
              onFormModelChange={onFormModelChange}
              selectedModel={selectedModel}
              models={models} />
            <input 
              className={`${formInput} f4 pa2 w-70 flex-justify-center center input-reset ba b--white-10`} 
              type="text" 
              onChange={onFormInputChange}
              value={inputValue} />
            <button 
              className="w-30 grow f4 link ph3 pv2 dib white bg-dark-gray b--white-10 bg-light-purple" 
              onClick={onImageSubmit}>
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