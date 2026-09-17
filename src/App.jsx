import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import About from './sections/About';
import Stats from './sections/Stats'
import Dishes from './sections/Dishes';
import Features from './sections/Features';
import BookingProcess from './sections/BookingProccess';
import Timing from './sections/Timimg';
import TestimonialSection from './sections/TestimonialSection';
import FAQ from './sections/FAQ';
import CTA from './sections/Cta';
import Footer from './components/Footer';
import LenisScroll from './components/LenisScroll';

const App = () => {
  return (
    <>
    <LenisScroll />
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
      <Features/>
      <BookingProcess />
      <Timing/>
      <TestimonialSection />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
};

export default App;