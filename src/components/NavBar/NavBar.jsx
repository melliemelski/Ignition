import React, { Component } from "react";
import styles from "./NavBar.module.scss";

class NavBar extends Component {
  
  render() { 
    return ( 
      <div className={styles.bar}>
        <ul>
          <li><a href="#">WORK</a></li>
          <li><a href="#">COGUIDE</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT</a>  </li>
        </ul>      
      </div>
    );
  }
}

export default NavBar;