import React from 'react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
  render() {
    return (
      <article className='br3 ba dark-gray b--black-10 mv4 w-100 w-50-m mw6 center bg-black-translucent'>
        <main className='pa4 black-80'>
        <fieldset id='sign_in' className='white ba b--transparent ph0 mh0'>
          <legend className='f3 fw6 ph0 mh0'>Sign In</legend>
          <div className='mt3'>
            <label 
              htmlFor='signin_username' 
              className='tl db fw6 lh-copy f6'>
              Username
            </label>
            <input 
              name='signin_username' 
              id='signin_username' 
              type='text' 
              className='white pa2 input-reset ba bg-transparent hover-bg-light-silver hover-black w-100'/>
          </div>
          <div className='mv3'>
            <label htmlFor='signin_password'
              className='tl db fw6 lh-copy f6'>
              Password
            </label>
            <input 
              id='signin_password'
              name='signin_password'
              type='text'
              className='white pa2 input-reset ba bg-transparent hover-bg-light-silver hover-black w-100' />
          </div>
        </fieldset>
        <div>
          <button className='b ph3 pv2 button-reset ba b--white white bg-transparent grow pointer f5 dib hover-bg-light-purple hover-black'>Sign In</button>
        </div>
        <div className='lh-copy mt3'>
          <Link to='signup' className='f6 link dim white db'>Need an account? Sign Up!</Link>
        </div>
        </main>
      </article>
    );
  }
};

export default SignIn;