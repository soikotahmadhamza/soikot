
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Smartphone } from 'lucide-react';

const Hero: React.FC = () => {
  const titles = ["Frontend Developer", "React Specialist", "UI/UX Enthusiast", "Creative Thinker"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const title = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === title) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? title.substring(0, displayText.length - 1)
            : title.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass mb-6 text-sm font-medium border-primary/30 text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Available for new opportunities</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Hello, I'm <br />
            <span className="gradient-text">Soikot Ahmad</span>
          </h1>

          <div className="text-2xl lg:text-3xl font-bold mb-8 h-12 flex items-center space-x-2">
            <span className="text-slate-600 dark:text-slate-400">Professional</span>
            <span className="text-primary mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg">
            A passionate developer building high-quality websites and applications with modern technologies. Based in  Naogaon.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/25 flex items-center justify-center group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass border-slate-200 dark:border-slate-800 rounded-xl font-bold flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          {/* Futuristic Visual */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-10 border-2 border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl backdrop-blur-3xl border border-white/20 shadow-2xl relative overflow-hidden group">
                <img 
                  src="https://picsum.photos/600/600" 
                  alt="Soikot Ahmad" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-mono uppercase tracking-widest text-primary">System Core</p>
                  <p className="text-sm font-bold uppercase tracking-wider">Active & Ready</p>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 p-4 glass rounded-2xl border-white/10"
            >
              <Code size={32} className="text-primary" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-1/2 -left-8 p-4 glass rounded-2xl border-white/10"
            >
              <Smartphone size={32} className="text-secondary" />
            </motion.div>
            <motion.div 
              animate={{ x: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute bottom-4 right-1/4 p-4 glass rounded-2xl border-white/10"
            >
              <Database size={32} className="text-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
