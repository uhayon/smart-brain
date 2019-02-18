import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Input/Input';
import { LoggedUserConsumer } from '../../contexts/LoggedUserContext';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        username: '',
        password: ''
      },
      formErrors: {
        username: false,
        password: false
      },
      signInFailed: false
    }
  }

  handleUsernameChange = event => {
    const { value: username } = event.target;
    this.setState({
      formErrors: {
        ...this.state.formErrors,
        username: false
      },
      formData: {
        ...this.state.formData,
        username
      }   
    });
  }

  handlePasswordChange = event => {
    const { value: password } = event.target;
    this.setState({
      formErrors: {
        ...this.state.formErrors,
        password: password.length < 8
      },
      formData: {
        ...this.state.formData,
        password: password
      }   
    });
  }

  onInputKeyPress = (key, setUserLogged) => {
    if (key === 'Enter') {
      this.onSubmitSignIn(setUserLogged);
    }
  }

  fieldsValid = () => {
    const { username, password } = this.state.formData;
    const passwordValid = password.trim().length >= 8;
    const usernameValid = username.trim().length > 0;

    this.setState({
      formErrors: {
        username: !usernameValid,
        password: !passwordValid
      }
    });

    return passwordValid && usernameValid;
  }

  onSubmitSignIn = setUserLogged => {
    if (!this.fieldsValid()) {
      return;
    }

    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.formData)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw Error();
    })
    .then(user => setUserLogged(true, user))
    .catch(err => {
      this.setState({ signInFailed: true });
    });
  }

  render() {
    const { username, password } = this.state.formData;
    const { username: usernameErrorState, password: passwordErrorState } = this.state.formErrors;
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
                      inputValue={username}
                      errorState={usernameErrorState}
                      errorMessage='You must enter your username' />
                  </div>
                  <div className='mv3'>
                    <Input
                        id='signin_password'
                        label='Password'
                        onInputKeyPress={({ key }) => this.onInputKeyPress(key, setUserLogged)}
                        onInputChange={this.handlePasswordChange}
                        inputValue={password}
                        errorState={passwordErrorState}
                        errorMessage='The password must be at least 8 characters long'
                        password />
                  </div>
                </fieldset>
                {this.state.signInFailed ? <p className='mb4' style={{color: '#c0392b'}}>Username and password combination invalid</p> : null}
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