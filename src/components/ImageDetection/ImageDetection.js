import React from 'react';
import Clarifai from 'clarifai';

import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import Rank from './Rank/Rank';
import ImageContainer from './ImageContainer/ImageContainer';
import { LoggedUserConsumer } from '../../contexts/LoggedUserContext';

import models from '../../mockData/models.json';

Clarifai.CELEBRITY_MODEL = 'e466caa0619f444ab97497640cefc4dc';

class ImageDetection extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      imageUrl: '',
      selectedModelValue: models[0].value,
      references: []
    };
  }

  onFormInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onFormModelChange = (event) => {
    window.a = event.target;
    this.setState({selectedModelValue: event.target.value})
  }

  onImageSubmit = (id, setUserLogged) => {
    const { selectedModelValue, input } = this.state;
    this.setState({imageUrl: input});

    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        imageUrl: input,
        detectionType: selectedModelValue
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response) {
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id })
        })
        .then(response => response.json())
        .then(user => setUserLogged(true, user));
      }
      this.handleImageRecognition(response);
    })
    .catch(err => console.log('Error', err)
    );
  }

  handleImageRecognition = apiResponse => {
    this.setReferences(apiResponse);
  }

  calculateBoundingBoxVertices = (boundingBox) => {
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: boundingBox.left_col * width,
      topRow: boundingBox.top_row * height,
      rightCol: width - (boundingBox.right_col * width),
      bottomRow: height - (boundingBox.bottom_row * height)
    };
  }

  setReferences = (references) => {
    this.setState({references});
  }

  getSelectedModel = () => {
    return models.find(model => model.value === this.state.selectedModelValue) || models[0];
  }

  render() {
    const { input, imageUrl, references } = this.state;
    const selectedModel = this.getSelectedModel();

    return (
      <LoggedUserConsumer>
        {
          ({ userData: { id }, setUserLogged }) => {
            return (
              <div className='mt5'>
                <Rank />
                <ImageLinkForm 
                  onFormInputChange={this.onFormInputChange}
                  inputValue={input}
                  onImageSubmit={() => this.onImageSubmit(id, setUserLogged)}
                  onFormModelChange={this.onFormModelChange}
                  selectedModel={selectedModel}
                  models={models} />
                <ImageContainer image={imageUrl} references={references} />
              </div>
            );
          }
        }
      </LoggedUserConsumer>
    )
  }
}

export default ImageDetection;