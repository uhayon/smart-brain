import React, { Component, lazy } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Particles from 'react-particles-js';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SuspenseLoading from '../SuspenseLoading/SuspenseLoading';

const ImageDetection = lazy(() => import('../ImageDetection/ImageDetection'))
const SignIn = lazy(() => import('../SignIn/SignIn'))

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

const Context = React.createContext();

class App extends Component {
  constructor() {
    super();

    this.state = {
      userLogged: true,
      userData: {}
    }
  }

  setUserLogged = (userLogged) => {
    this.setState({userLogged});
  }

  render() {
    const { userLogged } = this.state;
    return (
      <div className="App">
        <Particles 
          className='particles' 
          params={particlesOptions} />
        <Context.Provider value={this.state}>
          <Header />
          <Router>
            <div className='h-100'>
              <Route 
                exact path='/home' 
                render={props => {
                  console.log('props', props)
                  return userLogged ? (
                  <SuspenseLoading>
                    <ImageDetection {...props} />
                  </SuspenseLoading>) : (
                  <Redirect
                    to={{
                      pathname: '/'
                    }} />)                
                }} />
              <Route
                exact path='/'
                render={() => <SuspenseLoading><SignIn /></SuspenseLoading>} />
            </div>
          </Router>
        </Context.Provider>
        <Footer />
      </div>
    );
  }
}

export default App;
