import React, { Component }from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends Component {
  render () {
  return (
    <>
    <Jumbotron></Jumbotron>
    <NavBar></NavBar>
    <Footer></Footer>
    </>  
  );
};
}
export default App;