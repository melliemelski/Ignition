import React, { Component }from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import NavBar from './components/NavBar';

class App extends Component {
  render () {
  return (
    <>
     <p>app works</p>
     <Jumbotron></Jumbotron>
     <NavBar></NavBar>
    </>  
  );
};
}
export default App;