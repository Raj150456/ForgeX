import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Terminal Content - No Box */}
          <div className="space-y-6">
            {/* Terminal Header Bar */}
            <div className="flex items-center gap-2 mb-8">
              <Terminal className="w-5 h-5 text-[#FF6B35]" />
              <span className="text-[#F5F5F5] font-mono text-sm">FORGEX://about_workshop</span>
            </div>

            {/* Terminal Content */}
            <div className="font-mono text-sm md:text-base">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <span className="text-[#00FF00]">root@forgex:~$</span>
                  <span className="text-[#F5F5F5]">cat about.txt</span>
                </div>

                <div className="loading-bar h-1 my-4"></div>

                <div className="text-[#FFB347] space-y-4">
                  <p className="text-reveal">
                    <span className="text-[#FF6B35]">&gt;&gt;</span> FORGEX is a
                    <span className="neon-text"> one-day intensive workshop</span> designed to
                    transform ambitious college students into startup founders and brand architects.
                  </p>

                  <p className="text-reveal" style={{ animationDelay: '0.2s' }}>
                    <span className="text-[#FF6B35]">&gt;&gt;</span> In this
                    <span className="text-[#F5F5F5]"> high-energy, hands-on experience</span>, you'll
                    learn to forge ideas into viable businesses, build compelling brands from scratch,
                    and execute marketing strategies that actually work.
                  </p>

                  <p className="text-reveal" style={{ animationDelay: '0.4s' }}>
                    <span className="text-[#FF6B35]">&gt;&gt;</span> Whether you're a
                    <span className="text-[#00FF00]"> first-time founder</span> or an aspiring entrepreneur,
                    FORGEX will equip you with the tools, mentorship, and network to turn your vision into reality.
                  </p>
                </div>

                <div className="loading-bar h-1 my-4"></div>

                <div className="flex gap-2 text-[#00FF00]">
                  <span>&gt;</span>
                  <span className="terminal-cursor">_</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { label: 'Duration', value: '1 Day' },
              { label: 'Mode', value: 'Offline' },
              { label: 'Seats', value: 'Limited' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="wireframe bg-black/70 p-4 text-center holographic hover:scale-105 transition-transform"
              >
                <div className="text-[#F5F5F5] text-xs md:text-sm font-mono mb-1">
                  [{stat.label}]
                </div>
                <div className="text-[#FF6B35] font-mono">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}