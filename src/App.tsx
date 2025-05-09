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
import { I18nProvider } from './i18n/I18nProvider';

function App() {
  return (
    <I18nProvider preload={true}>
      <div className="min-h-screen bg-[#045462] text-white">
        <Navbar />
        <main>
          <Hero />
          <GetStarted />
          <ProductOverview />
          <Demos />
          <FAQ />
          <Team />
          <Contact />
          <UseCases />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;