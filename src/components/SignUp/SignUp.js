import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Input/Input';
import { LoggedUserConsumer } from '../../contexts/LoggedUserContext';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        fullname: '',
        username: '',
        password: ''
      },
      formErrors: {
        fullname: false,
        username: false,
        password: false
      }
    }
  }

  handleFullnameChange = event => {
    const { value: fullname } = event.target;
    this.setState({
      formErrors: {
        ...this.state.formErrors,
        fullname: fullname.trim().length === 0
      },
      formData: {
        ...this.state.formData,
        fullname
      }   
    });
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

  fieldsValid = () => {
    const { fullname, username, password } = this.state.formData;
    const fullnameValid = fullname.trim().length > 0;
    const passwordValid = password.trim().length >= 8;
    const usernameValid = username.trim().length > 0 && !this.state.formErrors.username;

    this.setState({
      formErrors: {
        fullname: !fullnameValid,
        username: !usernameValid,
        password: !passwordValid
      }
    });

    return fullnameValid && passwordValid && usernameValid;
  }

  onInputKeyPress = (key, setUserLogged) => {
    if (key === 'Enter') {
      this.onSubmitSignUp(setUserLogged);
    }
  }

  onSubmitSignUp = setUserLogged => {
    if (!this.fieldsValid()) {
      return;
    }

    fetch('http://localhost:3000/signup', {
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
    .then(user => {
      console.log('lala',user)
      setUserLogged(true, user)
    })
    .catch(() => {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          username: true
        }
      })
    });
  }

  render() {
    const { fullname, username, password } = this.state.formData;
    const { fullname: fullnameErrorState, username: usernameErrorState, password: passwordErrorState } = this.state.formErrors;

    return (
      <LoggedUserConsumer>
        {
          ({ setUserLogged }) => {
            return(
              <article className='br3 ba dark-gray b--black-10 mv4 w-100 w-50-m mw6 center bg-black-translucent'>
                <main className='pa4 black-80'>
                <fieldset id='sign_in' className='white ba b--transparent ph0 mh0'>
                  <legend className='f3 fw6 ph0 mh0'>Sign Up</legend>
                  <div className='mt4'>
                    <Input
                      id='signup_fullname'
                      errorState={fullnameErrorState}
                      onInputChange={this.handleFullnameChange}
                      inputValue={fullname}
                      onInputKeyPress={({ key }) => this.onInputKeyPress(key, setUserLogged)}
                      errorMessage='You must enter your name'

                      label='Name' />
                  </div>
                  <div className='mv4'>
                    <Input
                        id='signup_username'
                        errorState={usernameErrorState}
                        onInputChange={this.handleUsernameChange}
                        inputValue={username}
                        errorMessage={username.trim().length > 0 ? 'The username is already taken' : 'You must enter a username'}
                        onInputKeyPress={({ key }) => this.onInputKeyPress(key, setUserLogged)}
                        label='Username' />
                  </div>
                  <div className='mv4'>
                    <Input
                        id='signup_password'
                        errorState={passwordErrorState}
                        onInputChange={this.handlePasswordChange}
                        inputValue={password}
                        errorMessage='The password must be at least 8 characters long'
                        label='Password'
                        onInputKeyPress={({ key }) => this.onInputKeyPress(key, setUserLogged)}
                        password />
                  </div>
                </fieldset>
                <div>
                  <button 
                    className='b ph3 pv2 button-reset ba b--white white bg-transparent grow pointer f5 dib hover-bg-light-purple hover-black'
                    onClick={() => this.onSubmitSignUp(setUserLogged)} >
                    Sign Up
                  </button>
                </div>
                <div className='lh-copy mt3'>
                  <Link to='signin' className='f6 link dim white db'>Already have an account? Sign In!</Link>
                </div>
                </main>
              </article>
            );
          }
        }
      </LoggedUserConsumer>
    );
  }
};

export default SignUp;