

import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='info' className='text-dark text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-6 mb-md-0'>
          <h5 className="title"></h5>
            <p>
            Alte Bundestraße 11
            </p>
            <p>4AHINF 2. Stockwerk</p>
            <p>5600 St. Johann</p>
            <p>Österreich</p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-6 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/impressum' className='text-dark'>
                  Impressum
                </a>
              </li>
              <li>
                <a href='/about' className='text-dark'>
                  Über uns
                </a>
              </li>
              <li>
                <a href='/contact' className='text-dark'>
                  Kontakt
                </a>
              </li>
              <li>
                <a href='/help' className='text-dark'>
                  Hilfe
                </a>
              </li>
            </ul>
          </MDBCol>

        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(148, 224, 226, 0.555)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://github.com/SimonFurtm/CO2-TemperaturProjekt'>
          Github
        </a>
      </div>
    </MDBFooter>
  );
}

/*import React from "react";
import "./components.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="primary" className="font-big pt-4 mt-6">
      <MDBContainer fluid className="bg-info text-dark text-center">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title"></h5>
            <p>
            Alte Bundestraße 11
            </p>
            <p>4AHINF 2. Stockwerk</p>
            <p>5600 St. Johann</p>
            <p>Österreich</p>
          </MDBCol>
          <MDBCol md="6" >
              <div class="">
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="/impressum" class="text-dark">Impressum</a>
              </li>
              <li>
                <a href="/about" class="text-dark">About</a>
              </li>
              <li>
                <a href="/contact" class="text-dark">Contact</a>
              </li>
              <li>
                <a href="/help" class="text-dark">Help</a>
              </li>
            </ul>
          </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div class="footer-copyright text-center py-3 bg-info text-dark">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a> COZwei</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
/*
/*import React, { Component } from 'react';
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



export default NavBar;*/