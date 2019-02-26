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
    window.addEventListener('resize', this.resizeBoxes);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeBoxes)
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
    const { image, references, selectedModel, isSearching, lastSearchedModel } = this.props;
    return (
      <div className={`${container} ${image.trim() === '' ? 'dn' : 'flex'} justify-around center ma`}>
        <div className="relative">
          <img 
            id='inputimage'
            style={{display: `${image === '' ? 'none' : 'block'}`}} 
            src={image}
            alt="Recognize"
            width='100%'
            height='100%' />
          {
            references.map(({box, key}) => {
              let boxStyles = {};
              if (box) {
                  const {topRow, bottomRow, leftCol, rightCol} = this.calculateBoundingBoxVertices(box);
                  boxStyles = {top: topRow, right: rightCol, bottom: bottomRow, left: leftCol};
              }
              return (
                <div 
                  data-reference={key} 
                  key={key} 
                  className={boundingBox} 
                  style={boxStyles}
                  onMouseEnter={() => this.highlightReference(key)}
                  onMouseLeave={() => this.unhighlightReference(key)} >
                </div>
              )
            })
          }
        </div>
        <ImageReferences 
          references={references}
          selectedModel={selectedModel}
          isSearching={isSearching}
          lastSearchedModel={lastSearchedModel} />
      </div>
    );
  }
}


export default ImageContainer;