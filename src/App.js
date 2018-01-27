import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

/* Sidebar.jsx */

/* App.jsx */
class App extends React.Component { 
  render() {
    
    return (
      <div className='form'>
      
        <div className='form_title'>
          <h1>Test</h1>
        </div>
        <form className='form_items'>
          <div className='form_inputs'>
            <input 
              type='text'
              required
              placeholder="Username"
              />
          </div>
          <div className='form_inputs'>
            <input
              type='password'
              required
              placeholder = "password"
              />
            
          </div>
          <button className='form_button'>Log In</button>
        </form>
        <div className='form_other'>
          <a href='#'>forgot password?</a>
          <a href='#'>Join Now</a>
        </div>
      </div>
    );
  }
  
}

/* main.js */
class Main extends React.Component{
  render(){
    return (
      <div>
        <App />
      </div>
    );
  }
};


export default App;

