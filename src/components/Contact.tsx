"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "kcm02051@gmail.com", link: "mailto:kcm02051@gmail.com" },
    { icon: Phone, label: "Phone", value: "9822927970", link: "tel:9822927970" },
    { icon: MapPin, label: "Location", value: "Sorhakhutte, Kathmandu", link: null },
  ];

  const socialLinks = [
    { icon: Github, link: "https://github.com/Munakc1" },
    { icon: Linkedin, link: "https://linkedin.com/in/muna-k-c-0739a9283" },
    { icon: Facebook, link: "https://facebook.com/muna.k.c.1" },
    { icon: FaWhatsapp, link: "https://wa.me/9779822927970" },
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-primary">Work Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE - Contact Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>

            {contactInfo.map((info) => (
              <Card key={info.label} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 flex items-center gap-4">
                  <info.icon className="text-primary" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-2">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-all hover:scale-110"
                  >
                    <social.icon size={24} className="text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Work Together / Email CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex items-center">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold">Let's Work Together</h3>
                <p className="text-muted-foreground">
                  I am always open to new opportunities and collaborations. You can email me directly or contact me on WhatsApp.
                </p>

                {/* Email Button */}
                <a href="mailto:kcm02051@gmail.com" className="block">
                  <Button className="w-full py-6 text-lg rounded-xl flex items-center justify-center gap-2">
                    <Mail size={18} /> Email Me Directly
                  </Button>
                </a>

                {/* WhatsApp Button */}
                <a href="https://wa.me/9779822927970" target="_blank" className="block">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-xl flex items-center justify-center gap-2 mt-3">
                    <FaWhatsapp /> Chat on WhatsApp
                  </Button>
                </a>
               
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;