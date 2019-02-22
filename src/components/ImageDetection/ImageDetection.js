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
      references: [],
      isSearching: false
    };
  }

  onFormInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onFormModelChange = (event) => {
    this.setState({
      selectedModelValue: event.target.value,
      references: []
    });
  }

  onImageSubmit = (id, setUserLogged) => {
    const { selectedModelValue, input } = this.state;
    this.setState({
      imageUrl: input,
      isSearching: true
    }, () => {
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
    });
  }

  handleImageRecognition = apiResponse => {
    this.setReferences(apiResponse);
  }

  setReferences = (references) => {
    this.setState({
      references,
      isSearching: false
    });
  }

  getSelectedModel = () => {
    return models.find(model => model.value === this.state.selectedModelValue) || models[0];
  }

  render() {
    const { input, imageUrl, references, isSearching } = this.state;
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
                <ImageContainer 
                  image={imageUrl}
                  references={references}
                  selectedModel={selectedModel} 
                  isSearching={isSearching} />
              </div>
            );
          }
        }
      </LoggedUserConsumer>
    )
  }
}

export default ImageDetection;