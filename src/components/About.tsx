import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Sparkles, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Problem Solving',
      description: 'Passionate about writing clean, maintainable code that solves real-world problems.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Understanding client needs to build responsive, user-friendly interfaces.',
    },
    {
      icon: Sparkles,
      title: 'Best Practices',
      description: 'Ensuring scalability and maintainability through industry best practices.',
    },
  ];

  const stats = [
    { label: 'Technologies', value: '5+' },
    { label: 'Experience', value: '1+ Years' },
    { label: 'Projects', value: '10+' },
    { label: 'Commitment', value: '100%' },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Motivated and adaptable Full-Stack Web Developer with hands-on experience in building 
              responsive, client-focused applications using Next.js, Node.js, and React. Passionate 
              about creating innovative solutions and staying up-to-date with the latest web technologies.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <GraduationCap className="text-primary" size={32} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Education</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">BSc. CSIT (Current)</h4>
                    <p className="text-sm text-muted-foreground">Asian School of Management and Technology</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">+2 Science (Completed)</h4>
                    <p className="text-sm text-muted-foreground">Himal Academy</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card text-center">
                    <CardContent className="p-6">
                      <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
