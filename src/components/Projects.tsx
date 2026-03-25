import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Mobile', 'Web App'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full-Stack',
      description: 'Complete e-commerce solution with payment integration, admin dashboard, and responsive UI.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: '#',
      codeLink: '#',
      emoji: '🛒',
    },
    {
      title: 'Task Management App',
      category: 'Web App',
      description: 'Real-time task management with team collaboration and progress tracking.',
      technologies: ['React', 'Express.js', 'Socket.io', 'MongoDB'],
      liveLink: '#',
      codeLink: '#',
      emoji: '✅',
    },
    {
      title: 'Portfolio Website',
      category: 'Frontend',
      description: 'SEO-optimized portfolio with smooth animations and contact form.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      liveLink: '#',
      codeLink: '#',
      emoji: '🌐',
    },
    {
      title: 'Weather Dashboard',
      category: 'Web App',
      description: 'Interactive weather dashboard with real-time data and visualization.',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      liveLink: '#',
      codeLink: '#',
      emoji: '☁️',
    },
    {
      title: 'REST API Service',
      category: 'Backend',
      description: 'Scalable REST API with JWT auth, rate limiting, and documentation.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      liveLink: '#',
      codeLink: '#',
      emoji: '🔗',
    },
    {
      title: 'Social Media App',
      category: 'Mobile',
      description: 'Mobile app with real-time messaging, post sharing, and push notifications.',
      technologies: ['React Native', 'Node.js', 'Socket.io', 'Firebase'],
      liveLink: '#',
      codeLink: '#',
      emoji: '📱',
    },
  ];

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-primary">FEATURED</span> PROJECTS
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 mb-8">
            A showcase of my best work across different technologies
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeFilter === f
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Colored top bar */}
              <div className="h-1 bg-primary w-0 group-hover:w-full transition-all duration-500" />

              <div className="p-6">
                <div className="text-4xl mb-3">{project.emoji}</div>
                <Badge className="mb-3 bg-primary/10 text-primary border-0 text-xs uppercase tracking-wider">
                  {project.category}
                </Badge>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 text-xs"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink size={14} className="mr-1.5" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 text-xs"
                    onClick={() => window.open(project.codeLink, '_blank')}
                  >
                    <Github size={14} className="mr-1.5" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/Munakc1', '_blank')}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github size={18} className="mr-2" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
