import React, { Component, useRef  } from 'react';
import { Button, Navbar, Container, Nav,NavDropdown, Row, Col } from 'react-bootstrap';
import logo from '../logo.svg';
import "./components.css";
import EmailTable from "../components/data/emailTable";

import emailjs,{ init } from '@emailjs/browser';

init("lLUKmWgHA9IfR-zoZ"); //user id

//Sendgrid:
/*const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'simifurti123@gmail.com', // Change to your recipient
  from: 'cozwei.project@gmail.com', // Change to your verified sender
  subject: 'Sending with this API is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with React.js</strong>:)',
}

function sendMail(event,sgMail){
  alert('Email sollte gesendet werden');
  
  sgMail.send(msg);
  sgMail.then(() => {
      console.log('Email sent')
    });
  sgMail.catch((error) => {
      console.error(error)
    });
  
  alert('Email sollte gesendet werden');
  //event.preventDefault(); 
}*/

//EmailJs:


const sendEmailJs = (e) => {
  emailjs.send("service_18g3pzj","template_daten",{
      to_name: "Simon",
      from_name: "CoZwei",
      message: "Hier sind deine angeforderten Daten von der Website",
      sensorID: "",
      datum: "",
      zeit: "",
      temperatur: "",
      luft: "",
      co2: "",
      dataTable: <EmailTable />,
      reply_to: "cozwei.project@gmail.com",
      });
  alert("Email wurde versendet.")
}

class NavBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('/daten/get')
      .then(res => res.json())
      .then(dataTable => this.setState({dataTable}, () => console.log('Data fetched...', dataTable)));
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
            
            <Button onClick={sendEmailJs} >Send a E-mail</Button>
          </Container>
        </Navbar>
      </div>
    );
  }
}



export default NavBar;