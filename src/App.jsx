import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AnimalsSection from './components/AnimalsSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import IgSection from './components/IgSection';
import Footer from './components/Footer';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className='bg-background min-h-screen font-line flex flex-col'>
      <Navbar />
      <main className='flex-1'>
        <Hero />
        <AnimalsSection />
        <ServicesSection />
        <AboutSection />
        <IgSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
