import React, { Component } from 'react';
import { Button, Navbar, Container, Nav,NavDropdown, Row, Col } from 'react-bootstrap';
import "./components.css";

class NavBar extends Component {
  
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <br />
        <Navbar>
          <Container>
            <Nav className="justify-content-center">
              <Row>
                <Col><Nav.Link href="/impressum">Impressum</Nav.Link></Col>
                <Col><Nav.Link href="/about">About</Nav.Link></Col>
                <Col><Nav.Link href="/contact">Kontakt</Nav.Link></Col>
                <Col><Nav.Link href="/help">Help</Nav.Link></Col> 
              </Row>   
              <Row>
                <Col><p class="adsimple-121896969">Alte Bundestraße 11<br />4AHINF 2. Stockwerk<br />5600 St. Johann<br />Österreich</p></Col>
              </Row>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}



export default NavBar;