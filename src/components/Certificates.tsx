import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Frontend Development',
      issuer: 'Coming Soon',
      icon: '🎨',
    },
    {
      title: 'Full-Stack Development',
      issuer: 'Coming Soon',
      icon: '🎓',
    },
  ];

  return (
    <section id="certificates" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificates & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuously learning and expanding my skillset
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glass-card h-full hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{cert.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                  <Award className="text-primary mx-auto" size={24} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
