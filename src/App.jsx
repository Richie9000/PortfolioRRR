import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home/Home'
import Shirt from './Home/Shirt'
import { Breakpoint, BreakpointProvider } from 'react-socks';


function App() {
 return(
  <div>
    <BreakpointProvider>
    <Navbar/>
    <Home/>
    <Shirt />
    </BreakpointProvider>
  </div>
 )
}

export default App
