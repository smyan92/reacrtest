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
    <Navbar bg="dark" variant="dark" expand="lg"    style={{ 
        height: expanded ? '100vh' : 'auto', 
        backgroundColor: expanded ? 'white' : 'dark', // White background when expanded, dark otherwise
        position: expanded ? 'fixed' : 'relative', // Fixed position when expanded
        top: 0, // Ensure it stays at the top of the viewport
        left: 0,
        right: 0,
        transition: 'height 0.3s ease, background-color 0.3s ease' // Smooth transition for height and background color
      }}>
      <Container>
        <Navbar.Brand href="#home">
        <img className='logo' src={Logo} alt="My Image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleClick}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#trade">Trade</Nav.Link>
            <Nav.Link href="#academy">Academy</Nav.Link>
            <Nav.Link href="#exchange">Exchange</Nav.Link>
            <Nav.Link href="#swap">Swap</Nav.Link>
            <Nav.Link href="#deposite">Deposit</Nav.Link>
            <img className='icon' src={Download} alt="My Image" />
            <Button variant="primary">Sign Up</Button>{' '}
            <Button variant="outline-primary">Sign In</Button>{' '}
            <img className='icon' src={Mode} alt="My Image" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
