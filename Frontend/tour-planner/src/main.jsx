import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './general/Home';
import AboutUs from './general/AboutUs';
import Destinations from './general/Destinations';
import ContactUs from './general/ContactUs';
import AddTourist from './general/AddTourist';
import Enquiry from './general/Enquiry';
import ShowEnquiry from './admin/showEnquiry';
import ShowTourist from './admin/Showtourist';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/destinations' element={<Destinations/>} />
      <Route path='/contact' element={<ContactUs/>} />
      <Route path='/addtourist' element={<AddTourist/>} />
      <Route path='/enquiry' element={<Enquiry/>} />
      <Route path='/admin/showEnquiry' element={<ShowEnquiry />} />
      <Route path='/admin/showtourist' element={<ShowTourist />} />

    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
