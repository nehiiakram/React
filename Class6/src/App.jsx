import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navber'
import Footer from './components/Footer';
import  Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'

function App() {
  return (
    <>
    <Navbar/>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
        <Footer/>

    </>
  )
}

export default App