import React, { Component } from 'react';
import { Button, Navbar, Container, Nav,NavDropdown } from 'react-bootstrap';
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
        

      <Navbar fixed ='top' bg="dark" variant="dark" expand="lg">
        <Container alignment="left">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <Navbar.Brand href="/">CoZwei</Navbar.Brand>
        </Container>
        <Container>

        </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <br />
            <Nav.Link href="#raspberry">Raspberry</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#show/co2">|CO2|</NavDropdown.Item>
              <NavDropdown.Item href="#show/air">Luftfeuchtichkeit|</NavDropdown.Item>
              <NavDropdown.Item href="#show/temp">Temperatur|</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default NavBar;