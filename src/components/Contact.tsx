import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: 'Message Sent!', description: "Thank you! I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

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

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold mb-1.5 uppercase tracking-wider">Name</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold mb-1.5 uppercase tracking-wider">Email</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold mb-1.5 uppercase tracking-wider">Subject</label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Project Inquiry" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold mb-1.5 uppercase tracking-wider">Message</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell me about your project..." rows={5} className="resize-none" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full py-5">
                  {isSubmitting ? 'Sending...' : (<><Send size={16} className="mr-2" /> Send Message</>)}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
