import React from 'react';
import { motion } from 'framer-motion';

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

  const softSkills = ['Communication', 'Collaboration', 'Adaptability', 'Client Analysis', 'Problem Solving', 'Time Management'];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-primary">SKILLS</span> & TECHNOLOGIES
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            A comprehensive overview of my technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-lg font-bold mb-5 text-primary uppercase tracking-wider">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: si * 0.1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 bg-card border border-border rounded-lg p-6"
        >
          <h3 className="text-lg font-bold mb-4 text-primary uppercase tracking-wider">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
