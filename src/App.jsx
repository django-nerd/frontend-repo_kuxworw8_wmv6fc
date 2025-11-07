import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="bg-black py-10 text-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <p className="text-sm">© {new Date().getFullYear()} Webnity. All rights reserved.</p>
        <p className="text-sm">Built by a 14-year-old founder.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
