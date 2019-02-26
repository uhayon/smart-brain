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
      lastSearchedModel: '',
      selectedModelValue: models[0].value,
      references: [],
      isSearching: false,
      errorState: false,
      errorText: ''
    };
  }

  onFormInputChange = (event) => {
    this.setState({
      input: event.target.value,
      errorState: false
    })
  }

  onFormModelChange = (event) => {
    this.setState({
      selectedModelValue: event.target.value
    });
  }

  onImageSubmit = (id, setUserLogged) => {
    const { selectedModelValue, input } = this.state;
    this.setState({
      imageUrl: input,
      isSearching: true,
      lastSearchedModel: selectedModelValue
    }, () => {
      fetch(`https://ur-smart-brain-api.herokuapp.com/imageurl`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}`
        },
        body: JSON.stringify({
          imageUrl: input,
          detectionType: selectedModelValue
        })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(response.status)
      })
      .then(data => {
        if (data) {
          fetch(`https://ur-smart-brain-api.herokuapp.com/image`, {
            method: 'put',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({ id })
          })
          .then(response => response.json())
          .then(user => setUserLogged(true, user));
        }
        this.handleImageRecognition(data);
      })
      .catch((err) => {
        this.setState({
          isSearching: false,
          errorState: true,
          errorText: err === 401 ? 'You are unauthorized to execute this operation. Plase log out and enter again with your credentials' : 'There was an error. Please try again in a moment'
        }) 
      });
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
    const { input, imageUrl, references, isSearching, errorState, errorText, lastSearchedModel } = this.state;
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
                  {
                    <ImageContainer 
                      errorState={errorState}
                      image={imageUrl}
                      references={references}
                      selectedModel={selectedModel} 
                      isSearching={isSearching}
                      lastSearchedModel={lastSearchedModel} />
                  }
              </div>
            );
          }
        }
      </LoggedUserConsumer>
    )
  }
}

export default ImageDetection;