import React, { Component } from 'react';
import { Button, Navbar, Container, Nav,NavDropdown, Row, Col } from 'react-bootstrap';
import logo from '../logo.svg';


class NavBar extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        
        <Navbar>
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} className="App-logo" alt="logo"/> CoZwei
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" />
            <Nav className = "me-auto">
              <Nav.Link href="/">Home</Nav.Link> 
              <Nav.Link href="/dashboard">Dashboard</Nav.Link> 
              <NavDropdown title="Daten" id="nav-dropdown">
                <NavDropdown.Item href="/data/co2">CO2</NavDropdown.Item>
                <NavDropdown.Item href="/data/air">Luftfeuchtichkeit</NavDropdown.Item>
                <NavDropdown.Item href="/data/temp">Temperatur</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;