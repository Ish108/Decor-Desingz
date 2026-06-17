import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import ProjectGallery from './components/sections/ProjectGallery';
import Portfolio from './components/sections/Portfolio';
import VideoGallery from './components/sections/VideoGallery';
import Testimonials from './components/sections/Testimonials';
import Trust from './components/sections/Trust';
import Blog from './components/sections/Blog';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <Cursor />
      
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <ProjectGallery />
            <Portfolio />
            <VideoGallery />
            <Testimonials />
            <Trust />
            <Blog />
            <FAQ />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
