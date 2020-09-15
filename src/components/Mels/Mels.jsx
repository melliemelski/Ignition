import React, { Component } from "react";
import styles from "./Mels.module.scss";

class Mels extends Component {
  state = {
    visitors: 9
  }
  incrementVisitors = () => {
    this.setState({visitors: this.state.visitors+1})
  }
  render() {
    return (
      <>
      <div className={styles.visitors}>
        <h4>Current visitor count: {this.state.visitors}</h4>
        <button onClick={this.incrementVisitors}>REGISTER YOUR VISIT</button>
      </div>
      </>
    );
  }
}

export default Mels;
