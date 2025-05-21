import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Cafe from './pages/Cafe'
import Medical from './pages/Medical'
import RealEstate from './pages/RealEstate'
import Mart from './pages/Mart'
import Charity from './pages/Charity'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/mart" element={<Mart />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
