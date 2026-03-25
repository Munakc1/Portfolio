import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg"
    >
      {/* Subtle overlay pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl px-6">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl">
            <img
              src="/logo.png"
              alt="Muna K.C."
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Hello I'm <span className="text-primary-foreground">Muna K.C.!</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-6 max-w-lg">
            Full-Stack Web Developer specializing in React, Next.js & Node.js.
            Building digital experiences with passion and precision.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-white/60 text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
              Let's Connect <ChevronRight size={16} />
            </span>
            <a
              href="https://github.com/Munakc1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/muna-k-c-0739a9283"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 flex justify-center w-full"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
