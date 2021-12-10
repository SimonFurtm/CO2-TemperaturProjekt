import React, { Component } from 'react';
import { Button, Navbar, Container, Nav,NavDropdown, Row, Col } from 'react-bootstrap';
import logo from '../logo.svg';



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
      <div>
        
        <Navbar fixed="bottom">
          <Container>
           This is a Footer
          </Container>
        </Navbar>
      </div>
    );
  }
}



export default NavBar;