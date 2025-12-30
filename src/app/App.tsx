import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expectations } from './components/Expectations';
import { Highlights } from './components/Highlights';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import '../styles/crt-effects.css';

export default function App() {
  return (
    <div className="relative bg-black text-[#F5F5F5] overflow-x-hidden crt-screen">
      {/* CRT Scanlines Overlay */}
      <div className="scanlines"></div>
      
      {/* Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Expectations />
        <Highlights />
        <Registration />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}