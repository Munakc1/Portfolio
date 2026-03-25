import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Frontend Development',
      issuer: 'Lacespace',
      icon: '🎨',
      image: '/Certificate.jpg',
    },
    {
      title: 'Full-Stack Development',
      issuer: 'Coming Soon',
      icon: '🎓',
    },
  ];

  return (
    <section id="certificates" className="section-padding section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-primary">CERTIFICATES</span> & ACHIEVEMENTS
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Continuously learning and expanding my skillset
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-1 bg-primary w-0 group-hover:w-full transition-all duration-500" />
              <div className="p-6 text-center">
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>

                {cert.image && (
                  <a href={cert.image} target="_blank" rel="noopener noreferrer">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="rounded-lg mx-auto shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                    />
                  </a>
                )}

                <Award className="text-primary mx-auto mt-4" size={22} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
