// src/Navbar.js

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Logo from '../../assets/images/logo.png' 
import Download from '../../assets/images/download.png' 
import Mode from '../../assets/images/mode.png' 




import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';


const MyNavbar = () => {

  const [expanded, setExpanded] = useState(false);

  // Function to handle the hamburger menu toggle
  const handleToggleClick = () => {
    setExpanded(prevExpanded => !prevExpanded); // Toggle expanded state
    console.log('Hamburger menu clicked');
    // Add any additional functionality here
  };

  return ( 
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img className='logo me-xl-5 me-2' src={Logo} alt="My Image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleClick}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className='ms-xl-5' href="#trade">Trade</Nav.Link>
            <Nav.Link href="#academy">Academy</Nav.Link>
            <Nav.Link href="#exchange">Exchange</Nav.Link>
            <Nav.Link href="#swap">Swap</Nav.Link>
            <Nav.Link className='me-xl-5 me-2' href="#deposite">Deposit</Nav.Link>
            <img className='downloadIcon mb-lg-auto mb-3 icon ms-xl-5 ms-3 me-2 mt-md-auto mt-2 cursor-pointer' src={Download} alt="My Image" />
            <Button className='mb-lg-0 mb-3'  variant="primary">Sign Up</Button>{' '}
            <Button className='mb-lg-0 mb-3 ms-2' variant="outline-primary">Sign In</Button>{' '}
            <img className='modeIcon icon mb-lg-auto mb-3 ms-2' src={Mode} alt="My Image" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
