import { motion } from 'motion/react';
import { Zap, Users, WandSparkles, Terminal } from 'lucide-react';

const expectations = [
  {
    icon: Terminal,
    title: 'Startup Planning & Execution',
    description: 'Learn the fundamentals of building a startup from ideation to execution with proven frameworks.',
  },
  {
    icon: WandSparkles,
    title: 'Brand & Marketing Strategies',
    description: 'Master the art of creating memorable brands and marketing campaigns that resonate.',
  },
  {
    icon: Users,
    title: 'Industry Mentors',
    description: 'Get direct access to successful entrepreneurs and industry experts who\'ve been there.',
  },
  {
    icon: Zap,
    title: 'Hands-on Innovation',
    description: 'Work on real projects, pitch your ideas, and iterate with immediate feedback from mentors.',
  },
];

export function Expectations() {
  return (
    <section id="expectations" className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="cyber-grid absolute inset-0 opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B35]/5 to-transparent"></div>
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
          <div className="inline-block mb-4">
            <div className="font-mono text-[#00FF00] text-sm mb-2">
              &gt; Loading modules...
            </div>
            <h2 className="text-4xl md:text-6xl glitch crt-flicker" data-text="WHAT TO EXPECT">
              WHAT TO EXPECT
            </h2>
          </div>
          <div className="loading-bar h-1 w-64 mx-auto mt-4"></div>
        </motion.div>

        {/* Wireframe Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {expectations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="wireframe bg-black/70 backdrop-blur-sm p-4 md:p-8 holographic hover:bg-black/90 transition-all duration-300">
                  {/* Icon with Neon Effect */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 border-2 border-[#FF6B35] relative group-hover:border-[#FFA500] transition-colors">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#FF6B35] group-hover:text-[#FFA500] transition-colors" strokeWidth={1.5} />

                      {/* Corner Brackets */}
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#FFA500]"></div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#FFA500]"></div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#FFA500]"></div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#FFA500]"></div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-2xl text-[#F5F5F5] mb-3 font-mono">
                    <span className="text-[#FF6B35]">[{String(index + 1).padStart(2, '0')}]</span> {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#FFB347] font-mono text-xs md:text-base leading-relaxed">
                    {item.description}
                  </p>

                  {/* Glitch Line Separator */}
                  <div className="mt-4 h-0.5 bg-[#FF6B35] opacity-30 vhs-tracking"></div>

                  {/* Status Indicator */}
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#00FF00]">
                    <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse"></div>
                    <span>MODULE_ACTIVE</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Terminal Command */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center font-mono text-sm text-[#00FF00]"
        >
          <p>&gt;&gt; All modules loaded successfully_</p>
        </motion.div>
      </div>
    </section>
  );
}