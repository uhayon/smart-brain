import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';

import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

import models from './mockData/models.json';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 400
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      selectedModelValue: models[0].value
    };
  }

  onFormInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onFormModelChange = (event) => {
    this.setState({selectedModelValue: event.target.value})
  }

  onFormSubmit = () => {
    console.log('Submit click')
  }

  render() {
    const { input, selectedModelValue } = this.state;
    const selectedModel = models.find(model => model.value === selectedModelValue) || models[0];

    return (
      <div className="App">
        <Particles 
          className='particles' 
          params={particlesOptions} />
        <Navigation />
        <Rank />
        <ImageLinkForm 
          onFormInputChange={this.onFormInputChange}
          inputValue={input}
          onFormSubmit={this.onFormSubmit}
          onFormModelChange={this.onFormModelChange}
          selectedModel={selectedModel}
          models={models} />
        {/*
        
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
