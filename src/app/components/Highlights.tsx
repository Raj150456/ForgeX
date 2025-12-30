import { motion } from 'motion/react';
import { Clock, Users, Sparkles, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Clock,
    stat: '1 Day',
    label: 'Intensive Workshop',
    color: '#FF6B35',
  },
  {
    icon: Users,
    stat: '10+',
    label: 'Expert Mentors',
    color: '#FFA500',
  },
  {
    icon: Sparkles,
    stat: '100%',
    label: 'Build Your Brand',
    color: '#FFB347',
  },
  {
    icon: Zap,
    stat: '∞',
    label: 'Network Opportunities',
    color: '#FF4500',
  },
];

export function Highlights() {
  return (
    <section id="highlights" className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="cyber-grid absolute inset-0 opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[#00FF00] text-sm mb-4">
            &gt; System diagnostics...
          </div>
          <h2 className="text-4xl md:text-6xl glitch crt-flicker" data-text="KEY HIGHLIGHTS">
            KEY HIGHLIGHTS
          </h2>
          <div className="loading-bar h-1 w-64 mx-auto mt-4"></div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Neon Stat Box */}
                <div className="neon-box wireframe bg-black/80 backdrop-blur-sm p-4 md:p-8 text-center flex flex-col items-center justify-center holographic hover:scale-105 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-4 md:mb-6 relative">
                    <div className="absolute inset-0 blur-xl opacity-50" style={{ backgroundColor: item.color }}></div>
                    <Icon
                      className="w-8 h-8 md:w-12 md:h-12 relative z-10 group-hover:animate-pulse"
                      style={{ color: item.color }}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Stat */}
                  <div
                    className="text-4xl md:text-6xl font-mono mb-3"
                    style={{
                      color: item.color,
                      textShadow: `0 0 10px ${item.color}, 0 0 20px ${item.color}, 0 0 30px ${item.color}`,
                    }}
                  >
                    {item.stat}
                  </div>

                  {/* Label */}
                  <div className="text-[#F5F5F5] font-mono text-xs md:text-base uppercase tracking-wider">
                    {item.label}
                  </div>

                  {/* Separator Line */}
                  <div className="mt-4 md:mt-6 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent opacity-50"></div>

                  {/* Status */}
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#00FF00]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse"></div>
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: item.color }}></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: item.color }}></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: item.color }}></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: item.color }}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Terminal Output */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="wireframe bg-black/70 p-6 font-mono text-sm">
            <div className="text-[#00FF00] space-y-2">
              <p>&gt;&gt; Scanning event parameters...</p>
              <p>&gt;&gt; Status: <span className="text-[#FFB347]">READY_TO_LAUNCH</span></p>
              <p>&gt;&gt; Workshop quality: <span className="text-[#FF6B35]">MAXIMUM</span></p>
              <p className="flex items-center gap-2">
                &gt;&gt; System status: <span className="text-[#00FF00]">ALL_SYSTEMS_GO</span>
                <span className="terminal-cursor">_</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}