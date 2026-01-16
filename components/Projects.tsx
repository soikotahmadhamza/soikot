
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronRight, Eye } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Cyber Mart E-commerce",
      description: "A full-stack modern e-commerce platform with Stripe integration.",
      image: "https://picsum.photos/600/400?random=1",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      githubUrl: "https://github.com/soikotahmadhamza",
      liveUrl: "#",
      details: "This project features a comprehensive dashboard for sellers, real-time order tracking, and a sleek glassmorphic UI. Optimized for speed and mobile users."
    },
    {
      id: 2,
      title: "AI Image Generator",
      description: "App that generates high-quality images from text prompts using OpenAI.",
      image: "https://picsum.photos/600/400?random=2",
      tags: ["React", "OpenAI API", "Cloudinary"],
      githubUrl: "https://github.com/soikotahmadhamza",
      liveUrl: "#",
      details: "Leveraging the DALL-E API to allow users to generate unique art. Includes a community showcase feed and download options."
    },
    {
      id: 3,
      title: "Portfolio 3.0",
      description: "The very website you are browsing! Highly animated and responsive.",
      image: "https://picsum.photos/600/400?random=3",
      tags: ["React", "Framer Motion", "Tailwind"],
      githubUrl: "https://github.com/soikotahmadhamza",
      liveUrl: "#",
      details: "A focused personal portfolio demonstrating high-level animation orchestration and modern React patterns."
    },
    {
      id: 4,
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with live charts.",
      image: "https://picsum.photos/600/400?random=4",
      tags: ["React", "Chart.js", "CoinGecko API"],
      githubUrl: "https://github.com/soikotahmadhamza",
      liveUrl: "#",
      details: "Displays live price data for 1000+ coins. Features price alerts, historical data charts, and news aggregation."
    },
    {
      id: 5,
      title: "Task Management SaaS",
      description: "Collaborative task manager with drag-and-drop boards.",
      image: "https://picsum.photos/600/400?random=5",
      tags: ["React", "Firebase", "DND-Kit"],
      githubUrl: "https://github.com/soikotahmadhamza",
      liveUrl: "#",
      details: "A productivity tool for teams. Includes role-based access control, file attachments, and real-time chat for tasks."
    },
    {
      id: 6,
      title: "Social Sphere",
      description: "A minimal social network with feed and direct messaging.",
      image: "https://picsum.photos/600/400?random=6",
      tags: ["React", "Tailwind", "Socket.io"],
      githubUrl: "https://github.com/soikotahmadhamza",
      liveUrl: "#",
      details: "Focuses on user privacy and minimal distraction. Built with real-time updates for notifications and messages."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Showcase
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-4"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-50 dark:bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform"
                  >
                    <Eye size={24} />
                  </button>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-dark/90 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-4xl bg-white dark:bg-darker rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 glass rounded-full z-10 hover:bg-red-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-black mb-4">{selectedProject.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {selectedProject.details}
                  </p>

                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a 
                      href={selectedProject.liveUrl}
                      className="flex-1 py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center shadow-lg shadow-primary/25"
                    >
                      Live Demo <ExternalLink className="ml-2" size={18} />
                    </a>
                    <a 
                      href={selectedProject.githubUrl}
                      className="flex-1 py-4 glass border-slate-200 dark:border-slate-800 rounded-xl font-bold flex items-center justify-center"
                    >
                      Repository <Github className="ml-2" size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
