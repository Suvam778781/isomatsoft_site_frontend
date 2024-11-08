import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Page/Navbar'
import HeroSection from './Page/HeroSection'
import WhyExtendy from './Page/WhyExtendy'
import IconCarousel from './Page/IconCarousel'
import Clients from './Page/Clients'
import Carousel from './Page/Carousel'
import CasinoPlatform from './Page/CasinoPlatform'
import TurnkeySolution from './Page/TurnkeySolution'
import Footer from './Page/Footer'
import { ContactUs } from './Page/ContactUs'
import ClientsCarousel from './Page/ClientsCarousel'


function App() {
  return (
   
    <div className=''>
      <Navbar/>
      <CasinoPlatform/>
      <TurnkeySolution/>
      {/* <HeroSection/> */}
      <div className=' p-10'>
      <WhyExtendy/>
      </div>
     
      {/* <IconCarousel/> */}
      {/* <Clients/> */}
      {/* <Carousel/> */}
     <ClientsCarousel/>
     <div className=' p-10'>
     <ContactUs/>
     </div>
     <div className=' p-10'>
     <Footer/>
     </div>
   
    </div>
   
  )
}

export default App
