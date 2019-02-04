import React from 'react';
import Clarifai from 'clarifai';

import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import Rank from './Rank/Rank';
import ImageContainer from './ImageContainer/ImageContainer';

import models from '../../mockData/models.json';

Clarifai.CELEBRITY_MODEL = 'e466caa0619f444ab97497640cefc4dc';
const app = new Clarifai.App({
  apiKey: '554a106d9c1747378c5459a215c0fb80'
});

class ImageDetection extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      imageUrl: '',
      selectedModelValue: Clarifai[models[0].value]
    };
  }

  onFormInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onFormModelChange = (event) => {
    this.setState({selectedModelValue: Clarifai[event.target.value]})
  }

  onFormSubmit = () => {
    const { selectedModelValue, input } = this.state;
    this.setState({imageUrl: input});

    app.models.predict(selectedModelValue, input).then(
      function(response) {
        console.log('OK', response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        console.log('Error', err);
      }
    );
  }

  getSelectedModel = () => {
    return models.find(model => Clarifai[model.value] === this.state.selectedModelValue) || models[0];
  }

  render() {
    const { input, imageUrl } = this.state;
    const selectedModel = this.getSelectedModel();

    return (
      <div className='h-100'>
        <div className='mt5'>
          <Rank />
          <ImageLinkForm 
            onFormInputChange={this.onFormInputChange}
            inputValue={input}
            onFormSubmit={this.onFormSubmit}
            onFormModelChange={this.onFormModelChange}
            selectedModel={selectedModel}
            models={models} />
          <ImageContainer image={imageUrl} />
        </div>
      </div>
    )
  }
}

export default ImageDetection;