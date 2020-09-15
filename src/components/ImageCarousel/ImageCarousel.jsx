import React, { Component } from "react";
import styles from "./ImageCarousel.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image from '../../assets/slider-image.jpg'

export class ImageCarousel extends Component {
  
  render() { 
    return ( 
      <Carousel 
      className={styles.carousel}
      autoPlay interval="5000" 
      transitionTime="1000" 
      infiniteLoop 
      showThumbs={false}>
      <div>
          <img src={image} />
          <p className="legend">Ignition - Online, digital and experiential content</p>
          <p className={styles.legend}>Ignition - Online, digital and experiential content</p>
      </div>
      <div>
          <img src={image} />
          <p className="legend">Ignition - Online, digital and experiential content</p>v
      </div>
      <div>
          <img src={image} />
          <p className="legend">Ignition - Online, digital and experiential content</p>
      </div>
      </Carousel>
    );
  }
}

export default ImageCarousel;