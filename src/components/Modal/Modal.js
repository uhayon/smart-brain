import React from 'react';
import ReactDOM from 'react-dom';

import { modalContainer, modal } from './Modal.module.scss';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  onModalClick = event => {
    event.stopPropagation();
  }

  render() {
    const { handleClose } = this.props;
    const fnClose = typeof handleClose === 'function' ? handleClose : function(){};
    return ReactDOM.createPortal(
      <div className={modalContainer} onClick={fnClose}>
        <div 
          className={`${modal} br3 flex justify-center items-center bg-purple`}
          onClick={this.onModalClick} >
          {this.props.children}
        </div>
      </div>, 
      this.el
    );
  }
}

export default Modal;