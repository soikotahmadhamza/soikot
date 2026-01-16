
import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Phone, Mail, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Experience', value: '3+ Years' },
    { label: 'Projects', value: '50+' },
    { label: 'Clients', value: '20+' },
    { label: 'Coffee', value: 'Infinity' },
  ];

  const highlights = [
    'Clean and reusable code',
    'Responsive mobile-first design',
    'Performance optimization',
    'Pixel perfect UI implementation',
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Discovery
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://picsum.photos/800/1000" 
                  alt="Working" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Award size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400">Certified</p>
                    <p className="text-sm font-bold">Web Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <User className="mr-3 text-primary" /> My Identity
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
              I am <span className="font-bold text-slate-900 dark:text-white">Soikot Ahmad</span>, a web developer who thrives on turning complex problems into simple, beautiful, and intuitive designs. My journey in the tech world is driven by a desire to innovate and create impactful digital experiences.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="p-3 glass rounded-lg text-primary"><MapPin size={20} /></div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400">Location</p>
                  <p className="font-medium">Dhamorhat, Naogaon, BD</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 glass rounded-lg text-primary"><Mail size={20} /></div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400">Email</p>
                  <p className="font-medium">soikotahmad123@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 glass rounded-lg text-primary"><Phone size={20} /></div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400">Phone</p>
                  <p className="font-medium">01784443710</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 glass rounded-lg text-primary"><CheckCircle size={20} /></div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400">Status</p>
                  <p className="font-medium text-emerald-500">Available for Work</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle size={14} />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl glass border-slate-200 dark:border-slate-800 text-center">
                  <p className="text-2xl font-black text-primary mb-1">{stat.value}</p>
                  <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
