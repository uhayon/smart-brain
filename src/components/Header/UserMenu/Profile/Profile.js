import React from 'react';

import ButtonGroup from '../../../ButtonGroup/ButtonGroup';
import Input from '../../../Input/Input';
import Rating from '../../../Rating/Rating';

import { LoggedUserConsumer } from '../../../../contexts/LoggedUserContext';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState() {
    const { rating, favouritedetectiontype, age } = this.props.user;
    return {
      rating,
      age,
      favouritedetectiontype,
      errorState: false
    };
  }

  handleSaveProfile = () => {
    const { errorState, ...profile } = this.state
    fetch(`https://ur-smart-brain-api.herokuapp.com/profile/${this.props.user.id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}`
      },
      body: JSON.stringify(profile)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error();
      }
    })
    .then(user => {
      this.props.setUserLogged(true, user);
      return this.props.handleCloseModal();
    })
    .catch(err => this.setState({ errorState: true }));
  }

  render() {
    const { user, handleCloseModal } = this.props;
    const { age, rating, favouritedetectiontype, errorState } = this.state;

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
              inputValue={age === 0 ? '' : age} />
          </div>
          <div className='mv4'>
            <ButtonGroup
              selectedButton={favouritedetectiontype}
              onButtonClick={(buttonId) => this.setState({favouritedetectiontype: buttonId})}
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
          <div className='mv4'>
              <Rating
                label='How much do you like the application?'
                totalStars={5}
                filledStars={rating}
                onStarClick={(starPosition) => this.setState({rating: starPosition})} />
          </div>
        </fieldset>
        <p className='mb4 mt0' style={{color: 'red', fontWeight: 'bold', display: errorState ? 'block' : 'none'}}>There was an error while updating your profile. Please try againg in a few moments</p>
        <div className='flex justify-around w-100'>
          <button
            className='shadow-5 b ph3 pv2 button-reset ba b--white purple bg-white grow pointer f5 dib hover-bg-light-purple hover-white outline-0'
            onClick={this.handleSaveProfile}>
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

export default React.forwardRef((props, ref) => (
  <LoggedUserConsumer>
    {({setUserLogged}) => <Profile {...props} setUserLogged={setUserLogged} /> }
  </LoggedUserConsumer>
))