import React, { Component } from 'react';
import './App.css';
import Footer from './footer/footer';
import Header from './header/header';
import Main from './content/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
