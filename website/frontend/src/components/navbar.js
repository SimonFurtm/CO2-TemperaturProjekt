import React, { Component } from 'react';
import { Button, Navbar, Container, Nav,NavDropdown, Row, Col } from 'react-bootstrap';
import logo from '../logo.svg';
import "./components.css";


function sendMail(e){
  e.preventDefault();
  console.log('E-mail wird versendet...');
}

class NavBar extends Component {
  
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className='navbar'>
        
        <Navbar fixed="top">
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} className="App-logo" alt="logo"/> CoZwei
            </Navbar.Brand>
              <Nav className = "me-auto">
              <Navbar.Collapse id="basic-navbar-nav">

                <Nav.Link href="/grenzwert">Grenzwerte</Nav.Link> 
                <Nav.Link href="/dashboard">Dashboard</Nav.Link> 
                <NavDropdown title="Daten" id="nav-dropdown">
                  <NavDropdown.Item href="/data/co2">CO2</NavDropdown.Item>
                  <NavDropdown.Item href="/data/air">Luftfeuchtichkeit</NavDropdown.Item>
                  <NavDropdown.Item href="/data/temp">Temperatur</NavDropdown.Item>
                  <NavDropdown.Item href="/">Alle Daten</NavDropdown.Item>
                </NavDropdown>
                </Navbar.Collapse>
              </Nav>
            
            <Button disabled onSubmit={sendMail} >Send a E-mail</Button>
          </Container>
        </Navbar>
      </div>
    );
  }
}



export default NavBar;