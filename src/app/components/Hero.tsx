import { motion } from 'motion/react';
import { Terminal, Zap, Clock, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set a target date (you can adjust this)
    const targetDate = new Date('2025-02-15T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1763770448006-1f641339f28a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29sbGVnZSUyMGJ1aWxkaW5nJTIwc2lsaG91ZXR0ZSUyMG5pZ2h0fGVufDF8fHx8MTc2NzAyNDEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Dark college building"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Terminal Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <Terminal className="w-16 h-16 text-[#FF6B35]" strokeWidth={1.5} />
        </motion.div>

        {/* Coming Soon - CRT Framed */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="crt-frame inline-block px-12 py-4 bg-black/50 backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl tracking-[0.3em] neon-text uppercase">
              Coming Soon
            </h2>
          </div>
        </motion.div>

        {/* FORGEX Logo - Glitched */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6"
        >
          <h1
            className="text-7xl md:text-9xl glitch crt-flicker"
            data-text="FORGEX"
          >
            FORGEX
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-[#FFB347] font-mono italic">
            &gt; get ready to forge into the future_
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12 grid grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {[
            { label: 'DAYS', value: countdown.days },
            { label: 'HOURS', value: countdown.hours },
            { label: 'MIN', value: countdown.minutes },
            { label: 'SEC', value: countdown.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="wireframe p-4 md:p-6 bg-black/70 backdrop-blur-sm holographic"
            >
              <div className="text-3xl md:text-5xl neon-text font-mono">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm text-[#F5F5F5] mt-2 tracking-widest font-mono">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a href="#register">
            <button className="group relative px-8 py-4 bg-black border-2 border-[#FF6B35] text-[#F5F5F5] font-mono uppercase tracking-widest overflow-hidden hover:text-black transition-colors duration-300">
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Notify Me
              </span>
              <div className="absolute inset-0 bg-[#FF6B35] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </a>
        </motion.div>

        {/* Terminal Command Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 text-[#00FF00] font-mono text-sm"
        >
          <p>&gt; initializing_event.exe...</p>
          <p className="mt-1">&gt;&gt; Loading workshop_data...</p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-8 h-8 text-[#FF6B35] animate-bounce" />
      </motion.div>
    </section>
  );
}