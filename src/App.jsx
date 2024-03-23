import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/nav'
import Home from './pages/home'
import ComicsPage from './pages/Comics'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/comicsPage' element={<ComicsPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
