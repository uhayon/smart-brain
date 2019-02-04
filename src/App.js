import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Particles from 'react-particles-js';

import './App.css';
import Header from './components/Header/Header';
import ImageDetection from './components/ImageDetection/ImageDetection';

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
  render() {
    return (
      <div className="App">
        <Particles 
          className='particles' 
          params={particlesOptions} />
        <Header />
        <ImageDetection />
      </div>
    );
  }
}

export default App;
