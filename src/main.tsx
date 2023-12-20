import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import MainWindow from './components/MainWindow.tsx'
import AboutMe from './components/AboutMe.tsx'
import Works from './components/Works.tsx'
import ShareMe from './components/ShareMe.tsx'
import Footer from './components/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <MainWindow />
    <AboutMe />
    <Works />
    <Footer />
  </React.StrictMode>,
)
