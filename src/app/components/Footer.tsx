import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Mail, label: 'Email', href: '#' },
  ];

  return (
    <footer className="relative border-t border-[#FF6B35]/30 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* FORGEX Branding */}
          <div>
            <h3 className="text-2xl md:text-3xl glitch mb-4" data-text="FORGEX">
              FORGEX
            </h3>
            <p className="text-[#FFB347] font-mono text-sm">
              Forging the future of entrepreneurship, one startup at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FF6B35] font-mono uppercase tracking-wider mb-4 text-sm">
              &gt; Quick Links
            </h4>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a href="#about" className="text-[#F5F5F5] hover:text-[#FF6B35] transition-colors">
                  &gt; About
                </a>
              </li>
              <li>
                <a href="#expectations" className="text-[#F5F5F5] hover:text-[#FF6B35] transition-colors">
                  &gt; What to Expect
                </a>
              </li>
              <li>
                <a href="#highlights" className="text-[#F5F5F5] hover:text-[#FF6B35] transition-colors">
                  &gt; Highlights
                </a>
              </li>
              <li>
                <a href="#register" className="text-[#F5F5F5] hover:text-[#FF6B35] transition-colors">
                  &gt; Register
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#FF6B35] font-mono uppercase tracking-wider mb-4 text-sm">
              &gt; Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="group relative w-10 h-10 border border-[#FF6B35] flex items-center justify-center hover:bg-[#FF6B35] transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-[#FF6B35] group-hover:text-black transition-colors" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="loading-bar h-0.5 mb-8"></div>

        {/* Organizers */}
        <div className="mb-8">
          <h4 className="text-[#FF6B35] font-mono uppercase tracking-wider mb-4 text-sm text-center">
            &gt; Presented By
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* IEDC Logo Placeholder */}
            <div className="wireframe px-6 py-3 bg-black/50 holographic">
              <span className="text-[#F5F5F5] font-mono">IEDC PRC</span>
            </div>
            {/* PSS Logo Placeholder */}
            <div className="wireframe px-6 py-3 bg-black/50 holographic">
              <span className="text-[#F5F5F5] font-mono">PSS</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center font-mono text-sm text-[#FFB347]">
          <p className="mb-2">
            <span className="text-[#00FF00]">&gt;&gt;</span> Built with passion by the FORGEX team
          </p>
          <p className="text-xs text-[#F5F5F5]/50">
            © 2025 FORGEX. All rights reserved. | Terminal v2.0
          </p>
        </div>

        {/* Terminal Cursor */}
        <div className="mt-4 text-center font-mono text-[#00FF00] text-sm">
          <span>&gt; </span>
          <span className="terminal-cursor">_</span>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent opacity-50"></div>
    </footer>
  );
}
