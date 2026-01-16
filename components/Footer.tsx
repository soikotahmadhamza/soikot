
import React from 'react';
import { Github, Facebook, Send, Music2, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-dark border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div>
            <a href="#home" className="text-2xl font-bold tracking-tighter flex items-center space-x-2">
              <span className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white">S</span>
              <span className="gradient-text">SOIKOT AHMED.</span>
            </a>
            <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xs">
              Crafting futuristic digital experiences through innovative code and creative design.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/soikotahmadhamza" target="_blank" rel="noopener" className="p-3 glass rounded-xl hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="https://www.facebook.com/infomesoikotahmad" target="_blank" rel="noopener" className="p-3 glass rounded-xl hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="https://tiktok.com/@md.soikot.ahmad" target="_blank" rel="noopener" className="p-3 glass rounded-xl hover:text-primary transition-colors"><Music2 size={20} /></a>
            <a href="https://t.me/+8801784443710" target="_blank" rel="noopener" className="p-3 glass rounded-xl hover:text-primary transition-colors"><Send size={20} /></a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 dark:text-slate-400 text-sm">
          <p>&copy; {currentYear} Soikot Ahmad. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500 animate-pulse" /> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
