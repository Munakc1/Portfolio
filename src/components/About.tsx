import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Sparkles, GraduationCap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const About = () => {
  const topSkills = [
    { name: 'HTML & CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React & Next.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB & MySQL', level: 80 },
  ];

  const stats = [
    { label: 'Technologies', value: '5+' },
    { label: 'Experience', value: '1+ Yrs' },
    { label: 'Projects', value: '10+' },
    { label: 'Commitment', value: '100%' },
  ];

  return (
    <section id="about" className="section-padding section-alt">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-primary">WHO AM I?</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground">
              I'm Muna K.C., a Full-Stack Web Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Motivated and adaptable Full-Stack Web Developer with hands-on experience in building
              responsive, client-focused applications using Next.js, Node.js, and React. Passionate
              about creating innovative solutions and staying up-to-date with the latest web technologies.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Code2, title: 'Problem Solving', desc: 'Clean, maintainable code that solves real-world problems.' },
                { icon: Users, title: 'Client-Focused', desc: 'Understanding client needs to build responsive UIs.' },
                { icon: Sparkles, title: 'Best Practices', desc: 'Ensuring scalability and maintainability.' },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-primary/10 p-2.5 rounded-lg">
                    <f.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{f.title}</h4>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="text-primary" size={22} />
                <h4 className="font-bold">Education</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-semibold text-primary">BSc. CSIT (Current)</p>
                  <p className="text-muted-foreground text-xs">Asian School of Management and Technology</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">+2 Science (Completed)</p>
                  <p className="text-muted-foreground text-xs">Himal Academy</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills bars + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Skill Bars */}
            <div className="space-y-5 mb-10">
              {topSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-semibold uppercase tracking-wider">{skill.name}</span>
                    <span className="text-sm font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-5 text-center hover:border-primary/50 transition-colors"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">{stat.label}</p>
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
