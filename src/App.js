import React, { Component } from 'react'
import ImageboardComponent from './imageboard'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Team E!</h2>
        </div>
        <div className='component-test'>
          <ImageboardComponent />
        </div>
      </div>
    )
  }
}

export default App
