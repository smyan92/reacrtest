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
        <Col xs={4}>
     <div className='d-flex flex-column'>
     <img className='ms-3 mb-3 footerLogo' src={Logo} alt="My Image" />
     <img className='ms-3 footerLogo' src={Scan} alt="My Image" />
     </div>
        </Col>
        <Col xs={2}>
        <h4>Company</h4>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        </Col>
        <Col xs={2}>
        <h4>Company</h4>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        </Col>
        <Col xs={2}>
        <h4>Company</h4>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        </Col>
        <Col xs={2}>
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
      <Row>
        <Col xs={4}>
        <h4>Company</h4>

        <div class=" socialIcons mb-4">
        <img className='ms-3 footerImg' src={Social} alt="My Image" />
        <img className='ms-3 footerImg' src={Spotify} alt="My Image" />
        <img className='ms-3 footerImg' src={Insta} alt="My Image" />
        <img className='ms-3 footerImg' src={Telegram} alt="My Image" />
        <img className='ms-3 footerImg' src={Fb} alt="My Image" />
        <img className='ms-3 footerImg' src={Whatsapp} alt="My Image" />
        <img className='ms-3 footerImg' src={Youtube} alt="My Image" />
        <img className='ms-3 footerImg' src={Reddit} alt="My Image" />
    </div>
   
        <div>
        <img className='ms-3 footerImg' src={Mail} alt="My Image" />
          <a href="http://">info@ultraproex.com</a>
        </div>
        
        </Col>
        <Col xs={2}>
        <h4>Community</h4>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        </Col>
        <Col xs={2}>
        <h4>Company</h4>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        </Col>
        <Col xs={2}>
        <h4>Company</h4>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        </Col>
        <Col xs={2}>
        </Col>
      </Row>
      <Row className='py-2' style={{ borderTop: '1px solid grey' }}>
        <p className='text-center'>© 2024 ultrapro.com. All Rights Reserved.</p>
      </Row>
    </Container>
    </div>
  )
}

export default Footer
