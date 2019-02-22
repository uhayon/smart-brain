import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { inputContainer, inputError, errorIcon, errorDescription } from './Input.module.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false
    }
  }

  render() {
    const { showPassword } = this.state;
    const { id, label, errorState, onInputChange, inputValue, errorMessage, password, onInputKeyPress} = this.props;

    return (
      <>
        <label htmlFor={id}
          className='tl db fw6 lh-copy f6'>
          {label}
        </label>
        <div className={`${inputContainer} ${errorState ? inputError : ''} ba hover-bg-light-silver`}>
          <input 
            id={id}
            name={id}
            type={(password && !showPassword) ? 'password' : 'text'}
            className='white pa2 input-reset bn bg-transparent hover-black outline-0 w-100'
            onChange={onInputChange || function(){} }
            value={inputValue}
            onKeyPress={onInputKeyPress || function(){} } />
          {
            password ?
            <FontAwesomeIcon 
              icon={showPassword ? faEyeSlash : faEye} 
              className='f4 pr2 pointer hover-black'
              onClick={() => this.setState({showPassword: !showPassword})} /> :
            null
          }
          {errorState && <FontAwesomeIcon icon={faTimesCircle} className={`${errorIcon} f4 pr2`} />}
        </div>
        {errorState && <p className={errorDescription}>{errorMessage}</p>}
      </>
    );
  }
}

export default Input;