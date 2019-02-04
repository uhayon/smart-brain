import React from 'react';

const ModelSelector = ({ onFormModelChange, selectedModel, models }) => {
  return (
    <select 
      name="modelSelector" 
      id="model_selector" 
      className='bg-light-purple white'
      onChange={onFormModelChange}
      value={selectedModel.value}>
      {
        models.map((model, i) => <option key={i} value={model.value}>{model.text}</option>)
      }
    </select>
  )
}

export default ModelSelector;