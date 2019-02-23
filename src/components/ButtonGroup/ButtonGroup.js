import React from 'react';

import { buttonGroup, buttonActive } from './ButtonGroup.module.scss';

class ButtonGroup extends React.Component {
  render() {
    const { buttonsConfiguration, legend, onButtonClick, selectedButton } = this.props;

    return (
      <fieldset className={`${buttonGroup} tc ba b--white`}>
        <legend>{legend}</legend>
        {
          buttonsConfiguration.map(button => {
            return (
              <button 
                key={button.id}
                className={`w-100 w-auto-m outline-0 f6 link dim ba ph3 pv2 mv2 dib bg-white purple shadow-5 ${button.id === selectedButton ? buttonActive : ''}`}
                onClick={() => onButtonClick(button.id)} >
                {button.label}
              </button>
            )
          })
        }
      </fieldset>
    )
  }
}

export default ButtonGroup;