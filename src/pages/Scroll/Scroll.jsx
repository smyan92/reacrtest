// App.js
import React, { useState, useEffect, useRef  } from 'react';
import { Link, Element, scroller, scrollSpy } from 'react-scroll';
import './Scroll.css';
import Tab1 from '../../assets/images/tab1.jpg' 

function App() {
  const [activeSection, setActiveSection] = useState('');


  useEffect(() => {
    // Update scrollSpy
    scrollSpy.update();

    const handleScroll = () => {
      
      const sections = document.querySelectorAll('.section');
      
      let active = '';

      sections.forEach((section) => {
        
        const rect = section.getBoundingClientRect();
        console.log(rect);
        console.log(window.innerHeight);

        // Check if the section is in the viewport
        if (rect.top >= -20 && rect.top < window.innerHeight / 2) {
          active = section.id;
          console.log(active);
      setActiveSection(active);

        }
        else
        {
        setActiveSection(prevCount => prevCount);

        }
        
      
      });

    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <nav className="side-navbar">
        <ul>
          <li>
            <Link 
              to="section1" 
              smooth={true} 
              duration={500} 
              className={activeSection === 'section1' ? 'active' : ''}
            >
           Unique characteristics of
           virtual or crypto assets
            </Link>
          </li>
          <li>
            <Link 
              to="section2" 
              smooth={true} 
              duration={500} 
              className={activeSection === 'section2' ? 'active' : ''}
            >
           Price fluctuations
            </Link>
          </li>
          <li>
            <Link 
              to="section3" 
              smooth={true} 
              duration={500} 
              className={activeSection === 'section3' ? 'active' : ''}
            >
             Market dynamics, pricing and liquidity
            </Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Element name="section1" className="section" id="section1">
       <div>
       <h2>Unique characteristics of
          virtual or crypto assets</h2>
          <p>Virtual or crypto assets have no intrinsic value and are not considered legal tender in many countries, including India. The value of these assets in transactions is determined solely by agreement between the parties, which may or may not correspond to the market value of the assets at the time of operation.</p>
          <img className='tabimg' src={Tab1} alt="My Image" />
       </div>
        </Element>
        <Element name="section2" className="section" id="section2">
          <h2>Section 2</h2>
        </Element>
        <Element name="section3" className="section" id="section3">
          <h2>Section 3</h2>
        </Element>
      </div>
    </div>
  );
}

export default App;
