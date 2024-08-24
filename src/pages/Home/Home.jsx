import React from 'react'
import Titlebanner from '../../components/Titlebanner/Titlebanner'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Tabpills from '../../components/Tabpills/Tabpills'

const tabs = [
  { id: 'tab1', label: 'Unique characteristics of virtual or crypto assets', content: 'Unique characteristics of virtual or crypto assets' },
  { id: 'profile', label: 'Profile', content: 'Here is your Profile.' },
  { id: 'messages', label: 'Messages', content: 'Check your Messages here.' }
];

const home = () => {
  return (
    <div>
     <Navbar />
     <Titlebanner />
    <Tabpills />
     <Footer/>
    </div>
  )
}

export default home
