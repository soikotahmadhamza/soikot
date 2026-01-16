
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Facebook, Send, Music2 } from 'lucide-react';

const SocialWidget: React.FC = () => {
  const socials = [
    { icon: <Github size={20} />, url: 'https://github.com/soikotahmadhamza', color: 'hover:bg-slate-800' },
    { icon: <Facebook size={20} />, url: 'https://www.facebook.com/infomesoikotahmad', color: 'hover:bg-blue-600' },
    { icon: <Music2 size={20} />, url: 'https://tiktok.com/@md.soikot.ahmad', color: 'hover:bg-pink-600' },
    { icon: <Send size={20} />, url: 'https://t.me/+8801784443710', color: 'hover:bg-sky-500' },
  ];

  return (
    <div className="fixed left-6 bottom-0 z-40 hidden xl:flex flex-col items-center">
      <div className="flex flex-col space-y-4 mb-6">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
            className={`w-12 h-12 glass border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 transition-all hover:text-white ${social.color}`}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 100 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="w-px bg-slate-200 dark:bg-slate-800"
      ></motion.div>
    </div>
  );
};

export default SocialWidget;
