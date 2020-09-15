import React, { Component }from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';
import Article1 from './containers/Article1';
import Article2 from './containers/Article2';

class App extends Component {
  render () {
  return (
    <>
    <Jumbotron></Jumbotron>
    <NavBar></NavBar>
    <ImageCarousel></ImageCarousel>
    <Article1></Article1>
    <Article2></Article2>
    <Footer></Footer>
    </>  
  );
};
}
export default App;