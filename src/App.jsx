import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import { BreakpointProvider } from 'react-socks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import HouseMarkUp from './House/HouseMarkUp';
import ThreeSixtyMarkUp from './ThreeSixty/TnreeSixtyMarkUp';



function App() {
 return(
  <Router>
  <div>
  <BreakpointProvider>
  <Navbar />
  <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/house" element={<HouseMarkUp />} />
            <Route path="/360" element={<ThreeSixtyMarkUp />} />
  </Routes>
  
  </BreakpointProvider>
  </div>

  </Router>
 )
}

export default App
