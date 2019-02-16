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
      selectedModelValue: Clarifai[models[0].value],
      box: {}
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    };
  }

  displayFaceBox = (box) => {
    this.setState({box});
  }

  onFormInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onFormModelChange = (event) => {
    this.setState({selectedModelValue: Clarifai[event.target.value]})
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
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err => console.log('Error', err)
    );
  }

  getSelectedModel = () => {
    return models.find(model => Clarifai[model.value] === this.state.selectedModelValue) || models[0];
  }

  render() {
    const { input, imageUrl, box } = this.state;
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
                <ImageContainer image={imageUrl} box={box} />
              </div>
            );
          }
        }
      </LoggedUserConsumer>
    )
  }
}

export default ImageDetection;