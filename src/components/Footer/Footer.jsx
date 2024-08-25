import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../assets/images/logo.png' 
import Social from '../../assets/images/socialmedia.png' 
import Spotify from '../../assets/images/spotify.png' 
import Insta from '../../assets/images/insta.png' 
import Reddit from '../../assets/images/reddit.png' 
import Fb from '../../assets/images/fb.png' 
import Whatsapp from '../../assets/images/whatsapp.png' 
import Youtube from '../../assets/images/youtube.png' 
import Mail from '../../assets/images/mail.png' 







import Telegram from '../../assets/images/telegram.png' 



import Scan from '../../assets/images/scan.png' 

import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
    <Container>
      <Row className='pt-5 pb-4'>
      <Col className='text-md-start text-center ' sm={6} md={4} lg={4}>

     <div className='d-flex flex-column justify-content-md-start justify-content-center'>
     <img className=' ms-md-1 m-auto mb-4 footerLogo' src={Logo} alt="My Image" />
     <img className='ms-md-1 m-auto footerScan' src={Scan} alt="My Image" />
     </div>
        </Col>
        <Col className='text-md-start text-center' xs md="2">
        <h4>Company</h4>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        </Col>
        <Col className='text-md-start text-center' sm="6" md="2">
        <h4>Company</h4>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        </Col>
        <Col className='text-md-start text-center' sm="6" md="2">
        <h4>Company</h4>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        </Col>
        <Col className='text-md-start text-center' sm="6" md="2">
        <h4>Company</h4>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        </Col>
      </Row>
      <Row >
        <Col className='text-md-start text-center' sm="6" md="4">
        <h4>Community</h4>

        <div class=" socialIcons justify-content-md-start justify-content-center  mb-4">
        <img className='footerImg' src={Social} alt="My Image" />
        <img className='footerImg' src={Spotify} alt="My Image" />
        <img className='footerImg' src={Insta} alt="My Image" />
        <img className='footerImg' src={Telegram} alt="My Image" />
        <img className='footerImg mt-md-4' src={Fb} alt="My Image" />
        <img className='footerImg mt-md-4' src={Whatsapp} alt="My Image" />
        <img className='footerImg mt-md-4' src={Youtube} alt="My Image" />
        <img className='footerImg mt-md-4' src={Reddit} alt="My Image" />
    </div>
   
        <div>
        <img className='footerImg me-2' src={Mail} alt="My Image" />
          <a href="http://">info@ultraproex.com</a>
        </div>
        
        </Col>
        <Col className='text-md-start text-center mt-md-0 mt-4' sm="6" md="2">
        <h4>Community</h4>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        </Col>
        <Col className='text-md-start text-center' sm="6" md="2">
        <h4>Company</h4>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        </Col>
        <Col className='text-md-start text-center' sm="6" md="2">
        <h4>Company</h4>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        </Col>
     
      </Row>
    
    </Container>
    <div className='py-3 mt-4' style={{ borderTop: '1px solid #F7EDE2' }}>
        <p className='text-center mb-0'>© 2024 ultrapro.com. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer


