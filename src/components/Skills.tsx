import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js & Next.js', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Material UI', level: 80 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'RESTful APIs', level: 90 },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'DBMS Concepts', level: 85 },
      ],
    },
    {
      category: 'Programming & Tools',
      skills: [
        { name: 'C & C++', level: 75 },
        { name: 'Data Structures', level: 80 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Responsive Design', level: 95 },
      ],
    },
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express', icon: '🚂' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Git', icon: '🔀' },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Technology Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <Card className="glass-card h-full">
                <CardContent className="p-4 text-center">
                  <div className="text-4xl mb-2">{tech.icon}</div>
                  <p className="text-xs font-medium">{tech.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-primary">{category.category}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="glass-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Communication', 'Collaboration', 'Adaptability', 'Client Analysis', 'Problem Solving', 'Time Management'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium hover:bg-accent/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
