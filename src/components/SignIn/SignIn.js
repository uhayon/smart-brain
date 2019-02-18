import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Input/Input';
import { LoggedUserConsumer } from '../../contexts/LoggedUserContext';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  onInputKeyPress = (key, setUserLogged) => {
    if (key === 'Enter') {
      this.onSubmitSignIn(setUserLogged);
    }
  }

  onSubmitSignIn = setUserLogged => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(user => setUserLogged(true, user))
    .catch(err => setUserLogged(false));
  }

  render() {
    const { username, password } = this.state;
    return (
      <LoggedUserConsumer>
        {
          ({ setUserLogged }) => { 
            return (
              <article className='br3 ba dark-gray b--black-10 mv4 w-100 w-50-m mw6 center bg-black-translucent'>
                <main className='pa4 black-80'>
                <fieldset id='sign_in' className='white ba b--transparent ph0 mh0'>
                  <legend className='f3 fw6 ph0 mh0'>Sign In</legend>
                  <div className='mt3'>
                    <Input
                      id='signin_username'
                      label='Username'
                      onInputKeyPress={({ key }) => this.onInputKeyPress(key, setUserLogged)}
                      onInputChange={this.handleUsernameChange}
                      inputValue={username} />
                  </div>
                  <div className='mv3'>
                    <Input
                        id='signin_password'
                        label='Password'
                        onInputKeyPress={({ key }) => this.onInputKeyPress(key, setUserLogged)}
                        onInputChange={this.handlePasswordChange}
                        inputValue={password}
                        password />
                  </div>
                </fieldset>
                <div>
                  <button 
                    className='b ph3 pv2 button-reset ba b--white white bg-transparent grow pointer f5 dib hover-bg-light-purple hover-black'
                    onClick={() => this.onSubmitSignIn(setUserLogged)}>
                    Sign In
                  </button>
                </div>
                <div className='lh-copy mt3'>
                  <Link to='signup' className='f6 link dim white db'>Need an account? Sign Up!</Link>
                </div>
                </main>
              </article>
            )
          }
        }
      </LoggedUserConsumer>
    );
  }
};

export default SignIn;