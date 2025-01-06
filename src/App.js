import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App