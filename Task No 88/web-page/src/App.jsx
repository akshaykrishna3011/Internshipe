import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './component/Navbar/CustomNavba';
import Home from './page/home/Home';
import Service from './page/service/Service';
import Number from './page/number/Number';
import About from './page/about/About';
import Testimonials from './page/testimonial/Testimonials';
import Client from './page/client/Client';
import Contact from './page/contact/Contact';
import Map from './page/map/Map';
import Footer from './component/footer/Footer';
import "./page/scrollAnimation/Scroll";
import "./page/scrollAnimation/Scroll.css";



function App() {
  return (
    <>
    <CustomNavbar />
    <Home/>
    <Service/>
    <Number/>
    <About/>
    <Testimonials/>
    <Client/>
    <Contact/>
    <Map/>
    <Footer/>
    </>
  )
}

export default App
