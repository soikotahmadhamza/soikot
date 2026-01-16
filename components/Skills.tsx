
import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
    { name: 'HTML5/CSS3', level: 98, category: 'Frontend' },
    { name: 'JavaScript (ES6+)', level: 92, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 70, category: 'Backend' },
    { name: 'Git/GitHub', level: 88, category: 'Tools' },
    { name: 'Figma', level: 80, category: 'Tools' },
    { name: 'Vite', level: 90, category: 'Tools' },
  ];

  const categories = ['Frontend', 'Backend', 'Tools'];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-darker relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-4"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {categories.map((category) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 glass border-slate-200 dark:border-slate-800 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center text-primary">
                <span className="w-2 h-8 bg-primary rounded-full mr-4"></span>
                {category}
              </h3>
              
              <div className="space-y-8">
                {skills.filter(s => s.category === category).map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-primary font-mono font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Icons Background */}
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none hidden xl:block">
           <div className="grid grid-cols-3 gap-8">
             {[...Array(9)].map((_, i) => (
               <div key={i} className="w-24 h-24 border border-primary rounded-2xl rotate-45"></div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
