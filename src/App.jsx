import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import { BreakpointProvider } from 'react-socks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import House from './House/House';
import ThreeSixty from './ThreeSixty/ThreeSixty';


function App() {
 return(
  <Router>
  <div>
  <BreakpointProvider>
  <Navbar />
  <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/house" element={<House />} />
            <Route path="/360" element={<ThreeSixty />} />
  </Routes>
  
  </BreakpointProvider>
  </div>

  </Router>
 )
}

export default App
