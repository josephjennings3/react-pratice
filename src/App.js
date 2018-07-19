import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Recipes from './Recipes';
import Footer from './Footer'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Recipes />
        <Footer />
      </div>
    );
  }
}

export default App;