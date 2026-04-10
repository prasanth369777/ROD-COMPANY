import React from 'react';
import Navigation from '../pages/Navigation';
import Hero from '../Homepage/Hero';
import Products from './Products';
import About from './About';
import Industry from './Industryweservce';
import Process from './Process';
import Blogsec from './Blog1';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import Contact from './Contact';

import Infintyscroll from '../Homepage/infinityscolling';

export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
      <Navigation />
      <Hero />

    
       <Products />
       <Infintyscroll />
      <About />
      
      <Industry />
      <Process />
      <Blogsec />
      <FAQ />
      <Testimonials />
      <Contact />
 
    </div>
  );
}
