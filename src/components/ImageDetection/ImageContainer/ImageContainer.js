import React from 'react';

import ImageReferences from './ImageReferences/ImageReferences';
import { boundingBox, container } from './ImageContainer.module.scss';
import { hovered } from './ImageReferences/ImageReferences.module.scss';

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resizeBoxes: false
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeBoxes.bind(this));
  }

  componentWillMount() {
    window.removeEventListener('resize', this.resizeBoxes.bind(this))
  }

  resizeBoxes = () => {
    this.setState({resizeBoxes: true});
  }

  calculateBoundingBoxVertices = (boundingBox) => {
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
  
    return {
      leftCol: boundingBox.left_col * width,
      topRow: boundingBox.top_row * height,
      rightCol: width - (boundingBox.right_col * width),
      bottomRow: height - (boundingBox.bottom_row * height)
    };
  }

  getReferenceListElement = key => {
    return document.querySelector(`li[data-reference="${key}"]`)
  }
  
  highlightReference = key => {
    const liElement = this.getReferenceListElement(key);
    if (liElement) {
      liElement.classList.add(hovered);
    }
  }

  unhighlightReference = key => {
    const liElement = this.getReferenceListElement(key);
    if (liElement) {
      liElement.classList.remove(hovered);
    }
  }

  render() {
    const { image, references } = this.props;
    return (
      <div className={`${container} ${image.trim() === '' ? 'dn' : 'flex'} justify-around center ma`}>
        <div className="relative">
          <img 
            id='inputimage'
            style={{display: `${image === '' ? 'none' : 'block'}`}} 
            src={image}
            alt="Recognize"
            height='100%'
            width='100%' />
          {
            references.map(({box, key}, i) => {
              const {topRow, bottomRow, leftCol, rightCol} = this.calculateBoundingBoxVertices(box);
              return (
                <div 
                  data-reference={key} 
                  key={key} 
                  className={boundingBox} 
                  style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}
                  onMouseEnter={() => this.highlightReference(key)}
                  onMouseLeave={() => this.unhighlightReference(key)} >
                </div>
              )
            })
          }
        </div>
        <ImageReferences references={references} />
      </div>
    );
  }
} // = ({ image, references }) => {


export default ImageContainer;