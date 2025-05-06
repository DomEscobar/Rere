import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UseCases } from './components/UseCases';
import { ProductOverview } from './components/ProductOverview';
import { Demos } from './components/Demos';
import { FAQ } from './components/FAQ';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { GetStarted } from './components/GetStarted';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#045462] text-white">
      <Navbar />
      <main>
        <Hero />
        <UseCases />
        <ProductOverview />
        <Demos />
        <FAQ />
        <Team />
        <Contact />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}

export default App;