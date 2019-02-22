import React from 'react';

import ButtonGroup from '../../../ButtonGroup/ButtonGroup';
import Input from '../../../Input/Input';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  componentDidMount() {
    fetch(`http://localhost:3000/profile/${this.props.user.id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error();
        }
      })
      .then(profile => this.setState({ profile }))
      .catch(err => this.setState({ ...this.getInitialState() }));
  }

  getInitialState() {
    return {
      rating: 0,
      age: 0,
      favouriteDetectionType: null
    };
  }

  render() {
    const { user, handleCloseModal } = this.props;
    const { age } = this.state;

    return (
      <>
        <img 
          src={`https://robohash.org/${user.username}`} 
          className='br-100 h4 w4 dib bg-light-purple-50 shadow-5'
          alt='avatar' />
        <div>
          <h1 className='white mv2 tc'>{user.fullname}</h1>
          <h4 className='white mv3'>{`Images submitted: ${user.entries}`}</h4>
          <p className='white mv2 f6'>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
        </div>
        <fieldset id='user_profile' className='w-75 white ba b--transparent ph0 mh0'>
          <hr />
          <div className='mv4'>
            <Input 
              id='profile_age'
              label='Age' 
              onInputChange={(event) => {
                const { value } = event.target;
                const startingNumbers = parseInt(value, 10);
                this.setState({ age: isNaN(startingNumbers) ? 0 : startingNumbers })
              }}
              inputValue={age} />
          </div>
          <div className='mv4'>
            <ButtonGroup
              legend='Choose your favourite detection type'
              buttonsConfiguration={[
                {
                  id: 'celebrity',
                  label: 'Celebrities'
                },
                {
                  id: 'color',
                  label: 'Colors'
                },
                {
                  id: 'face',
                  label: 'Faces'
                },
                {
                  id: 'food',
                  label: 'Food'
                }
              ]} />
          </div>
        </fieldset>
        <div className='flex justify-around w-100'>
          <button
            className='shadow-5 b ph3 pv2 button-reset ba b--white purple bg-white grow pointer f5 dib hover-bg-light-purple hover-white outline-0'>
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