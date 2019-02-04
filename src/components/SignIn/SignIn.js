import React from 'react';

class SignIn extends React.Component {
  render() {
    return (
      <article className='br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center bg-black-translucent'>
        <main className='pa4 black-80'>
        <fieldset id='sign_up' className=' white ba b--transparent ph0 mh0'>
          <legend className='f4 fw6 ph0 mh0'>Sign In</legend>
          <div className='mt3'>
            <label 
              htmlFor='username' 
              className='tl db fw6 lh-copy f6'>
              Username
            </label>
            <input 
              name='username' 
              id='username' 
              type='text' 
              className='white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'/>
          </div>
        </fieldset>
        </main>
      </article>
    );
  }
};

export default SignIn;