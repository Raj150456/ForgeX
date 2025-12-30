import { motion } from 'motion/react';
import { Zap, ExternalLink } from 'lucide-react';

export function Registration() {
  // Replace this URL with your actual registration form URL (Tally, Google Forms, etc.)
  const REGISTRATION_URL = 'https://tally.so/r/your-form-id';

  const handleRegistrationClick = () => {
    window.open(REGISTRATION_URL, '_blank');
  };

  return (
    <section id="register" className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="cyber-grid absolute inset-0 opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF4500]/10 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Terminal Initialization */}
          <div className="font-mono text-[#00FF00] text-sm mb-4">
            &gt; Initializing registration module...
          </div>

          {/* Main Title */}
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl glitch mb-6" data-text="READY TO JOIN?">
              READY TO JOIN?
            </h2>
            <div className="loading-bar h-1 max-w-md mx-auto mb-8"></div>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-[#FFB347] font-mono text-base md:text-lg">
              <span className="text-[#FF6B35]">&gt;&gt;</span> Be the first to know when registration opens.
            </p>
            <p className="text-[#F5F5F5] font-mono text-sm md:text-base opacity-80">
              Get exclusive early access and updates about FORGEX
            </p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <button
              onClick={handleRegistrationClick}
              className="group relative inline-flex items-center gap-3 px-12 py-5 bg-black border-2 border-[#FF6B35] text-[#F5F5F5] font-mono text-lg uppercase tracking-widest overflow-hidden hover:text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,53,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Zap className="w-6 h-6" />
                Register Now
                <ExternalLink className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#FFA500] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </motion.div>

          {/* Terminal Status */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-[#FF6B35]/20 mt-12 max-w-2xl mx-auto"
          >
            <div className="text-[#00FF00] font-mono text-xs space-y-2">
              <p className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse"></div>
                &gt;&gt; System ready
              </p>
              <p className="flex items-center justify-center gap-2">
                &gt;&gt; Awaiting input<span className="terminal-cursor">_</span>
              </p>
            </div>
          </motion.div>

          {/* Privacy Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <p className="text-[#FFB347] font-mono text-xs">
              <span className="text-[#FF6B35]">[NOTICE]</span> Your data is encrypted and secure.
              We'll only contact you about FORGEX updates.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}