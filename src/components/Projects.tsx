import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
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
      description: 'A complete e-commerce solution with payment integration, admin dashboard, user authentication, and responsive UI.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Payment Integration', 'Admin Dashboard', 'User Authentication', 'Responsive UI'],
      liveLink: '#',
      codeLink: '#',
      image: '🛒',
    },
    {
      title: 'Task Management App',
      category: 'Web App',
      description: 'Real-time task management application with team collaboration features and progress tracking.',
      technologies: ['React', 'Express.js', 'Socket.io', 'MongoDB'],
      features: ['Real-time Updates', 'Team Collaboration', 'Progress Tracking'],
      liveLink: '#',
      codeLink: '#',
      image: '✅',
    },
    {
      title: 'Portfolio Website',
      category: 'Frontend',
      description: 'SEO-optimized portfolio website with smooth animations and interactive contact form.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      features: ['SEO Optimized', 'Smooth Animations', 'Contact Form'],
      liveLink: '#',
      codeLink: '#',
      image: '🌐',
    },
    {
      title: 'Weather Dashboard',
      category: 'Web App',
      description: 'Interactive weather dashboard with real-time data, maps, and data visualization.',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      features: ['Real-time Weather', 'Interactive Maps', 'Data Visualization'],
      liveLink: '#',
      codeLink: '#',
      image: '☁️',
    },
    {
      title: 'REST API Service',
      category: 'Backend',
      description: 'Scalable REST API with JWT authentication, rate limiting, and comprehensive documentation.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      features: ['JWT Auth', 'Rate Limiting', 'API Documentation', 'Error Handling'],
      liveLink: '#',
      codeLink: '#',
      image: '🔗',
    },
    {
      title: 'Social Media App',
      category: 'Mobile',
      description: 'Mobile social media application with real-time messaging, post sharing, and push notifications.',
      technologies: ['React Native', 'Node.js', 'Socket.io', 'Firebase'],
      features: ['Real-time Messaging', 'Post Sharing', 'Push Notifications'],
      liveLink: '#',
      codeLink: '#',
      image: '📱',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my best work across different technologies and domains
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? 'bg-primary text-primary-foreground' : ''}
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{project.image}</div>
                  <Badge className="mb-3 bg-accent/20 text-accent">{project.category}</Badge>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold mb-2 text-primary">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold mb-2 text-primary">Features:</p>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-xs text-muted-foreground flex items-start gap-1">
                          <span className="text-accent">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.codeLink, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open('https://github.com/Munakc1', '_blank')}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
