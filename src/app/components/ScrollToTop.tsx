import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
        >
          <div className="wireframe bg-black/90 backdrop-blur-sm p-4 neon-box hover:scale-110 transition-transform">
            <ChevronDown className="w-6 h-6 text-[#FF6B35] rotate-180" strokeWidth={2} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
