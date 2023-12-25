import React from 'react'
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Register from './components/Register'
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Routes>
      
      

      <Route path ="/" element={<Home/>}/>

      <Route path ="/register" element={<Register/>} />

      <Route path ="/login" element={<Login/>} />
    </Routes>

    </>
  )
}

export default App
