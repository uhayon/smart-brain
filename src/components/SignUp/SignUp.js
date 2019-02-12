import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { LoggedUserConsumer } from '../../contexts/LoggedUserContext';
import { inputContainer, inputError, errorIcon, errorMessage } from './SignUp.module.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        fullName: '',
        username: '',
        password: ''
      },
      formErrors: {
        fullName: false,
        username: false,
        password: false
      },
      formSent: false,
      showPassword: false
    }
  }

  handleFullNameChange = event => {
    const { value: fullName } = event.target;
    this.setState({
      formErrors: {
        ...this.state.formErrors,
        fullName: fullName.trim().length === 0
      },
      formData: {
        ...this.state.formData,
        fullName
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
    const { fullName, username, password } = this.state.formData;
    const fullNameValid = fullName.trim().length > 0;
    const passwordValid = password.trim().length >= 8;
    const usernameValid = username.trim().length > 0 && !this.state.formErrors.username;

    this.setState({
      formErrors: {
        fullName: !fullNameValid,
        username: !usernameValid,
        password: !passwordValid
      }
    });

    return fullNameValid && passwordValid && usernameValid;
  }

  onSubmitSignIn = setUserLogged => {
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
        response.json();
      } else {
        throw Error();
      }
    })
    .then(user => {
      console.log(user)
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
    const { showPassword } = this.state;
    const { fullName, username, password } = this.state.formData;
    const { fullName: fullNameErrorState, username: usernameErrorState, password: passwordErrorState } = this.state.formErrors;

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
                    <label 
                      htmlFor='signup_fullName' 
                      className='tl db fw6 lh-copy f6'>
                      Name
                    </label>
                    <div className={`${inputContainer} ${fullNameErrorState ? inputError : ''} ba hover-bg-light-silver`}>
                      <input 
                        name='signup_fullName' 
                        id='signup_fullName' 
                        type='text' 
                        className='white pa2 input-reset bn bg-transparent hover-black outline-0 w-100'
                        onChange={this.handleFullNameChange}
                        value={fullName} />
                      {fullNameErrorState && <FontAwesomeIcon icon={faTimesCircle} className={`${errorIcon} f4 pr2`} />}
                    </div>
                    {fullNameErrorState && <p className={errorMessage}>You must enter your name</p>}
                  </div>
                  <div className='mv4'>
                  <label 
                      htmlFor='signup_username' 
                      className='tl db fw6 lh-copy f6'>
                      Username
                    </label>
                    <div className={`${inputContainer} ${usernameErrorState ? inputError : ''} ba hover-bg-light-silver`}>
                      <input 
                        name='signup_username' 
                        id='signup_username' 
                        type='text' 
                        className='white pa2 input-reset bn bg-transparent hover-black outline-0 w-100'
                        onChange={this.handleUsernameChange}
                        value={username} />
                        {usernameErrorState && <FontAwesomeIcon icon={faTimesCircle} className={`${errorIcon} f4 pr2`} />}
                    </div>
                    {usernameErrorState && <p className={errorMessage}>{username.trim().length > 0 ? 'The username is already taken' : 'You must enter a username'}</p>}
                  </div>
                  <div className='mv4'>
                    <label htmlFor='signup_password'
                      className='tl db fw6 lh-copy f6'>
                      Password
                    </label>
                    <div className={`${inputContainer} ${passwordErrorState ? inputError : ''} ba hover-bg-light-silver`}>
                      <input 
                        id='signup_password'
                        name='signup_password'
                        type={showPassword ? 'text' : 'password'}
                        className='white pa2 input-reset bn bg-transparent hover-black outline-0 w-100'
                        onChange={this.handlePasswordChange}
                        value={password} />
                      <FontAwesomeIcon 
                        icon={showPassword ? faEyeSlash : faEye} 
                        className='f4 pr2 pointer hover-black'
                        onClick={() => this.setState({showPassword: !showPassword})} />
                      {passwordErrorState && <FontAwesomeIcon icon={faTimesCircle} className={`${errorIcon} f4 pr2`} />}
                    </div>
                    {passwordErrorState && <p className={errorMessage}>The password must be at least 8 characters long</p>}
                  </div>
                </fieldset>
                <div>
                  <button 
                    className='b ph3 pv2 button-reset ba b--white white bg-transparent grow pointer f5 dib hover-bg-light-purple hover-black'
                    onClick={() => this.onSubmitSignIn(setUserLogged)} >
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