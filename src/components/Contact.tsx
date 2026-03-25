import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'kcm02051@gmail.com', link: 'mailto:kcm02051@gmail.com' },
    { icon: Phone, label: 'Phone', value: '9822927970', link: 'tel:9822927970' },
    { icon: MapPin, label: 'Location', value: 'Sorhakhutte, Kathmandu', link: null },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-primary">GET IN</span> TOUCH
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Have a project in mind? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
              >
                {info.link ? (
                  <a href={info.link} className="flex items-center gap-4 group">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <info.icon className="text-primary" size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</p>
                      <p className="font-semibold text-sm">{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <info.icon className="text-primary" size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</p>
                      <p className="font-semibold text-sm">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider">Connect With Me</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, link: 'https://github.com/Munakc1' },
                  { icon: Linkedin, link: 'https://linkedin.com/in/muna-k-c-0739a9283' },
                ].map((s) => (
                  <a
                    key={s.link}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <s.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="bg-card border border-border rounded-lg p-8 w-full text-center">
              <h3 className="text-xl font-bold mb-3">Let's Work Together</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                I'm always open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.
              </p>
              <a
                href="mailto:kcm02051@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                Email Me Directly
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
