import React from 'react';
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
