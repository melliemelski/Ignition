import React, { Component }from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';

class App extends Component {
  render () {
  return (
    <>
    <Jumbotron></Jumbotron>
    <NavBar></NavBar>
    <ImageCarousel></ImageCarousel>
    <Footer></Footer>
    </>  
  );
};
}
export default App;