import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="glass-card max-w-4xl mx-auto hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-primary" size={32} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Full-Stack Developer Intern</h3>
                      <p className="text-xl text-primary font-semibold mb-2">Lacespace</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Contributed to full-stack applications using Next.js, Node.js, and MongoDB</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Developed reusable React components and optimized API integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Collaborated with senior developers on scalability and maintainability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Participated in code reviews and Agile development practices</span>
                    </li>
                  </ul>

                  <div>
                    <p className="text-sm font-semibold mb-3">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'Node.js', 'MongoDB', 'React.js', 'JavaScript', 'API Integration'].map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-accent/20 text-accent hover:bg-accent/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
