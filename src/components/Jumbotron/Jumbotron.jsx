import React, { Component } from "react";
import styles from "./Jumbotron.module.scss";
import { motion } from "framer-motion"
import on from '../../assets/Logo/on2.png';
import off from '../../assets/Logo/off2.png';


class Jumbotron extends Component {
  render() { 
    const string = Array.from("IGNITION")
    const containerVariants = {
      before: {},
      after: { transition: { repeat: Infinity, staggerChildren: 0.09, delay: 1 } },
    }
      
    
    const letterVariants = {
      before: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 8,
            repeat: Infinity,
            type: "spring",
            damping: 16,
            stiffness: 200,
        },
      },
      after: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 8,
            repeat: Infinity,
            type: "spring",
            damping: 16,
            stiffness: 200,
        },
      },
    }
    return ( 
      <>
      
      <motion.div
          className={styles.LogoText}
          center={ "y" }
          height={ 60 }
          width={ "100%" }
          background={ "" }
          style={{
            fontFamily: "Arial, Work Sans, sans-serif",
            fontWeight: "medium",
            letterSpacing: "0.3em",
            fontSize: 60,
            color: "#ff841c",
            display: "flex", 
            justifyContent: "left", 
            alignItems: "center"
          }}
          variants={ containerVariants }
          initial={ "before" }
          animate={ "after" }
          
        >
              <div className={styles.Logo}>
                <img src={on} alt="ignition logo" className={styles.on}/>
                <img src={off} alt="ignition logo" className={styles.off}/>
              </div>
          {string.map((letter, index) => (
            <motion.div
              key={ index }
              width={ "auto" } 
              height={ 60 } 
              background={ "" }
              style={{ position: "relative" }} 
              variants={ letterVariants }      
            >
              {letter}
            </motion.div>
          ))}
        
        <div className={styles.staticText}>
            <h4>Showcase</h4>
        </div>
        
        </motion.div>
      </>
     );
  }
}
 
export default Jumbotron;
