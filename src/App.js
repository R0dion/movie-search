import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SearchBlock from './components/SearchBlock'
import PerformBest from './components/PerformBest'

class App extends Component {
  
  render() {
    return (
      <div >
        <Header />
        <SearchBlock />
        <PerformBest />
      </div>
    )
  }
}

export default App;
