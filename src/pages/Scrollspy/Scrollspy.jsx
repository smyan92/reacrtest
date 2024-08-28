import React, { useEffect, useRef, useState } from 'react';
import './Scrollspy.css';

const Scrollspy = () => {


const section1 = useRef();
const section2 = useRef();
const section3 = useRef();
const section4 = useRef();
const section5 = useRef();

const scrollHandler = (event, eleRef) => {
    console.log(event.target);
    
    event.target.classList.add('activeSec');
    Array.from(event.target.parentNode.children).forEach((sibling) => {
      if (sibling !== event.target) {
        sibling.classList.remove('activeSec');
      }
    });

window.scrollTo({ top: eleRef.current.offsetTop, behavior: "smooth" });

};

const [show, setShow] = useState(false);

useEffect(()=>{
  const handleScroll = (event) => {


    // console.log("windows.scrollY", window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);

  return()=> {
  window.addEventListener("scroll", handleScroll);
  }
})
  return (
    <div className='scrollspycontainer'>
<header className='scrollspyHead'>
  <ul className='scrollspyList'>
  <li onClick={(event) => scrollHandler(event, section1)}>sec1</li>
  <li onClick={(event) => scrollHandler(event, section2)}>sec2</li>
  <li onClick={(event) => scrollHandler(event, section3)}>sec3</li>
  <li onClick={(event) => scrollHandler(event, section4)}>sec4</li>
  <li onClick={(event) => scrollHandler(event, section5)}>sec5</li>
  </ul>
</header>
<div className='scrollspyBody'>
<div ref={section1} className="scrollSection">Section 1</div>
<div ref={section2} className="scrollSection">Section 2</div>
<div ref={section3} className="scrollSection">Section 3</div>
<div ref={section4} className="scrollSection">Section 4</div>
<div ref={section5} className="scrollSection">Section 5</div>
</div>
    </div>
  )
}

export default Scrollspy
