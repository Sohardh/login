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
          <h1>Login</h1>
        </div>
        <form className='form_items' >
          <div className='form_inputs'>
            <input 
              type='text'
              required
              placeholder="Username"
              id="us"

              />
          </div>
          <div className='form_inputs'>
            <input
              type='password'
              required
              placeholder = "password"
              id ="ps"
              />
            
          </div>
          <button className='form_button'>Log In</button>
        </form>
        <div className='form_other'>
          <a href='#'>forgot password?</a><br />
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