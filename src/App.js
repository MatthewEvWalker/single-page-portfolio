import React from 'react';
import './App.scss';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import { Element } from 'react-scroll';


function App() {
  return (
    <>
    <Navbar />  

    <Element name="hero">
      <Hero/>
    </Element>

    <Element name="about">
      <About/>
    </Element>
    </>
  );
}

export default App;
