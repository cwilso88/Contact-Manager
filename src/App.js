import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
        <Contact 
        name="Abby Cruz" 
        email="avacruz@gmail.com" 
        phone="555-404-7700"/>
       
        <Contact 
        name="Adam Grahm" 
        email="adamg@gmail.com" 
        phone="555-343-2705"/>
        </div>
      </div>
    );
  }
}

export default App;
