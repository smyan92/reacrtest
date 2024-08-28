import React from 'react';
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Scrollspy from './pages/Scrollspy/Scrollspy'
import Scroll from './pages/Scroll/Scroll'

const App = () => {
  return (
    <div className='app'>
      <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/scrollspy' element={<Scrollspy />} />
        <Route path = '/scroll' element={<Scroll />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
