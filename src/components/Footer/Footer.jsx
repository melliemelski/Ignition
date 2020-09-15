import React, { Component } from "react";
import styles from "./Footer.module.scss";


export default class Footer extends Component {
  
  render() { 
    return ( 
      <>
      <div className={styles.footer}>
        <div className={styles.links}>
          <h4>NAVIGATION</h4>
          <a href="#">Work</a>
          <a href="#">Spark</a>
          <a href="#">Codriver</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles.location}>
          <h4>LOCATION</h4>
          <p>2 Hadham Hall<br></br>Little Hadham<br></br>SG11 2EB</p>
        </div>
        <div className={styles.contact}>
          <h4>CONTACT</h4>
          <p>John Smith<br></br>Developer</p>
          <a href="mailto:info@ignitiononline.com">e: info@ignitiononline.com</a>
        </div>
        <div className={styles.newsletter}>
          <h4>NEWSLETTER</h4>
          <form action="./" method="post">
            <input type="email" name="email" className={styles.input}/>
            <input type="submit" value="Submit" className={styles.submit}/>
          </form>
        </div>
      </div>
      </>
    );
  }
}