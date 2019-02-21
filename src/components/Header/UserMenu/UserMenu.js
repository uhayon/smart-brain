import React from 'react';

import {menu, menuOpened, optionsContainer} from './UserMenu.module.scss';
import UserMenuOption from './UserMenuOption/UserMenuOption';
import Modal from '../../Modal/Modal';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      modalOpen: false
    }
  }

  handleMenuOpen = event => {
    event.stopPropagation();
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  setOpenedStatus = openStatus => {
    this.setState({menuOpen: openStatus });
  }

  closeMenu = () => {
    this.setOpenedStatus(false)
  }

  showProfileModal = () => {
    this.setState({modalOpen: true });
  }

  componentDidMount() {
    window.addEventListener('click', this.closeMenu);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeMenu)
  }

  render() {
    const { user: { username }, setUserLogged } = this.props;
    const { menuOpen, modalOpen } = this.state;

    return (
      <>
        <div className='dib relative'>
          <div className='tc ma2 pointer' onClick={this.handleMenuOpen}>
            <img 
              src={`https://robohash.org/${username}`} 
              className='br-100 h3 w3 dib bg-light-purple-50'
              alt='avatar' />
          </div>
          <div className={`${menu} ${menuOpen ? menuOpened : ''}`}>
            <div className={optionsContainer}>
              <UserMenuOption label='View Profile' onOptionClick={this.showProfileModal} />
              <UserMenuOption divider />
              <UserMenuOption label='Sign Out' onOptionClick={() => setUserLogged(false)} />
            </div>
          </div>
        </div>
        {
          modalOpen ?
          <Modal handleClose={() => this.setState({modalOpen: false})}>
            {'hola'}
          </Modal> :
          null
        }
      </>
    );
  }
}

export default UserMenu;