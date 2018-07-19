import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem, Jumbotron, Button, } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Master React</h1>
        </header>
        <p className="App-intro">
          This is the start of mastering React.js
        </p>
        <div>
          <Navbar>
            <Navbar.Header>
              <a href="#">React Nav Bar</a>
            </Navbar.Header>
            <Nav>
              <NavItem href="#">
                Home
              </NavItem>
              <NavItem href="#">
                About
              </NavItem>
              <NavItem href="#">
                Articles
              </NavItem>
              <NavItem href="#">
                Contact
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default App;