import React, { useEffect, useState } from 'react'
import './styles/App.scss'
import Header, { HeaderPhone } from './components/Header'
import Home from './components/Home'
import Work from './components/Work'
import Experience from './components/Experience'
import Sevices from './components/Sevices'
// import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'


export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight)
    }

    window.addEventListener("resize", resizeRatio)

    return () => {
      window.removeEventListener("resize", resizeRatio)
    }
  }, [ratio])

  return ratio < 2 ? (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <Work />
      <Experience />
      <Sevices />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
      <Toaster />
    </>)
    : <em id='customMessage'>Please Change the ratio to view!</em>
}
