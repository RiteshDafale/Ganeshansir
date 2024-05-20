import React from 'react'
import Navbar from './Navbar'
import Layout from './Layout'
import Footer from './Footer'
import Past from './Past'
import Present from './Present'
import { BrowserRouter } from 'react-router-dom';

export default function Home() {
  return (
    <div>
          <Navbar/>
         <BrowserRouter>
          <Layout/>
          </BrowserRouter>
  
    </div>
  )
}
