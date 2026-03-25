import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-primary">WORK</span> EXPERIENCE
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />

            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Full-Stack Developer Intern</h3>
                  <p className="text-primary font-semibold">Lacespace</p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground mt-2 md:mt-0">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>Remote</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-muted-foreground text-sm">
                {[
                  'Contributed to full-stack applications using Next.js, Node.js, and MongoDB',
                  'Developed reusable React components and optimized API integrations',
                  'Collaborated with senior developers on scalability and maintainability',
                  'Participated in code reviews and Agile development practices',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Node.js', 'MongoDB', 'React.js', 'JavaScript', 'API Integration'].map((tech) => (
                  <Badge key={tech} className="bg-primary/10 text-primary hover:bg-primary/20 border-0 text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
