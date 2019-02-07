import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  render() {
    return (
      <article className='br3 ba dark-gray b--black-10 mv4 w-100 w-50-m mw6 center bg-black-translucent'>
        <main className='pa4 black-80'>
        <fieldset id='sign_in' className='white ba b--transparent ph0 mh0'>
          <legend className='f3 fw6 ph0 mh0'>Sign Up</legend>
          <div className='mt3'>
            <label 
              htmlFor='signup_mail' 
              className='tl db fw6 lh-copy f6'>
              E-Mail
            </label>
            <input 
              name='signup_mail' 
              id='signup_mail' 
              type='text' 
              className='white pa2 input-reset ba bg-transparent hover-bg-light-silver hover-black w-100'/>
          </div>
          <div className='mv3'>
          <label 
              htmlFor='signup_username' 
              className='tl db fw6 lh-copy f6'>
              Username
            </label>
            <input 
              name='signup_username' 
              id='signup_username' 
              type='text' 
              className='white pa2 input-reset ba bg-transparent hover-bg-light-silver hover-black w-100'/>
          </div>
          <div className='mv3'>
            <label htmlFor='signup_password'
              className='tl db fw6 lh-copy f6'>
              Password
            </label>
            <input 
              id='signup_password'
              name='signup_password'
              type='text'
              className='white pa2 input-reset ba bg-transparent hover-bg-light-silver hover-black w-100' />
          </div>
          <div className='mv3'>
            <label htmlFor='signup_confirm_password'
              className='tl db fw6 lh-copy f6'>
              Confirm Password
            </label>
            <input 
              id='signup_confirm_password'
              name='signup_confirm_password'
              type='text'
              className='white pa2 input-reset ba bg-transparent hover-bg-light-silver hover-black w-100' />
          </div>
        </fieldset>
        <div>
          <button className='b ph3 pv2 button-reset ba b--white white bg-transparent grow pointer f5 dib hover-bg-light-purple hover-black'>Sign Up</button>
        </div>
        <div className='lh-copy mt3'>
          <Link to='signin' className='f6 link dim white db'>Already have an account? Sign In!</Link>
        </div>
        </main>
      </article>
    );
  }
};

export default SignUp;