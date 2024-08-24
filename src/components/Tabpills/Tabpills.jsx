import React, { useState } from 'react';
import './Tabpills.css';
import Tab1 from '../../assets/images/tab1.jpg' 

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Tabpills = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='TabpillsComp'>

<Container>
      <Row>
<h1>Risk Warning</h1>
      <Col xs={4}>
      <div className="blo-tabs">
        <div
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        >
        Unique characteristics of
        virtual or crypto assets
        </div>
        <div
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        >
        Price fluctuations
        </div>
        <div
          onClick={() => toggleTab(3)}
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        >
       Market dynamics, pricing and liquidity
        </div>
      </div>
      </Col>

      <Col xs={8}>
      <div className="content-tabs">
        <div className={toggleState === 1 ? "content active-content" : "content"}>
          <h1> <span className='text-orange'>Unique characteristics</span> of
          virtual or crypto assets</h1>
          <p>Virtual or crypto assets have no intrinsic value and are not considered legal tender in many countries, including India. The value of these assets in transactions is determined solely by agreement between the parties, which may or may not correspond to the market value of the assets at the time of operation.</p>
       <img className='tabimg' src={Tab1} alt="My Image" />
        </div>

        <div className={toggleState === 2 ? "content active-content" : "content"}>
          <h1>002</h1>
          <p>khjnhnt</p>
        </div>

        <div className={toggleState === 3 ? "content active-content" : "content"}>
          <h1>003</h1>
          <p>khjnhnt</p>
        </div>
      </div>
      </Col>
      </Row>
  
  
    </Container>


 

    </div>
  );
};

export default Tabpills;
