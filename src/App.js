import React from 'react';
import Topbar from './component/topbar';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Activity from './component/Activity';
import Booking from './component/Booking';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import Footer from './component/footer';

function App() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Activity/>
      <Booking/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
