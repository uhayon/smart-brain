import React from 'react';

// import Input from '../../../Input/Input';

class Profile extends React.Component {
  render() {
    const { user, handleCloseModal } = this.props;

    return (
      <>
        <img 
          src={`https://robohash.org/${user.username}`} 
          className='br-100 h4 w4 dib bg-light-purple-50'
          alt='avatar' />
        <div>
          <h1 className='white mv2 tc'>{user.fullname}</h1>
          <h4 className='white mv3'>{`Images submitted: ${user.entries}`}</h4>
          <p className='white mv2 f6'>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
        </div>
        <fieldset id='user_profile' className='white ba b--transparent ph0 mh0'>
          <hr />
          <div className='mv4'>
            
          </div>
        </fieldset>
        <div className='flex justify-around w-100'>
          <button
            className='b ph3 pv2 button-reset ba b--white purple bg-white grow pointer f5 dib hover-bg-light-purple hover-white outline-0'>
            Save
          </button>
          <button 
            className='b ph3 pv2 button-reset bn b--white white bg-transparent grow pointer f5 dib hover-white underline outline-0'
            onClick={handleCloseModal} >
            Cancel
          </button>
        </div>
      </>
    )
  }
};

export default Profile;