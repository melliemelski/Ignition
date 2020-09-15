import React, { Component } from "react";
import styles from "./Gallery.module.scss";
import image1Large from '../../assets/GalleryImages/1-large.jpg';
import image6Large from '../../assets/GalleryImages/6-large.jpg';


class Gallery extends Component {
  state = {
    isOpen: false
  };

  toggleState = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  showModal = () => {
    if (this.state.isOpen === true) {
      return <p>modal</p>
    } else {
      return null;
    }
  }
  render () {
  const image1 = this.props.image1
  const image2 = this.props.image2
  const image3 = this.props.image3
  const image4 = this.props.image4
  const image5 = this.props.image5
  const image6 = this.props.image6

  const modal = this.state.isOpen ? (
    <img src={image1Large} classNAme={styles.modal} onClick={this.toggleState}/>
  ) : null;
  
  return (
    <>
    <div className={styles.grid}>
      {modal}
      <img src= {image1}/>
      <img src= {image2} onClick={this.toggleState}/>
      <img src= {image3}/>
      <img src= {image4}/>
      <img src= {image5}/>
      <img src= {image6}/>
    </div>
    </>
  )
  }
}
export default Gallery;
