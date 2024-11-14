import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './Component/HeroSection'
import PricingSection from './Component/PricingSection'
import SponsorsSection from './Component/SponsorsSection'
import Navbar from './Component/navbar'
import Info from './Component/Info';
import Footer from './Component/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CssBaseline /> */}
      <Navbar />
     <HeroSection />
      <PricingSection />
      <Info />
      <SponsorsSection />
      <Footer/>
    </>
  )
}

export default App
