import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

<section
  id="home"
  className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/bg.jpg')" }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
    <div
      className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
      style={{ animationDelay: '1s' }}
    ></div>
  </div>

  {/* Hero Content */}
  <div className="relative z-10 text-center max-w-3xl px-4">
    <p className="text-white text-lg">Hello, I'm</p>
    <h1 className="text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 drop-shadow-xl">
      Muna K.C.
    </h1>
    <h2 className="text-3xl font-semibold mt-3 text-white drop-shadow-lg">
      Full-Stack Web Developer | React & Node.js
    </h2>

    <p className="text-gray-200 mt-5 leading-relaxed drop-shadow">
      I build fast, modern, and user-friendly web applications with a strong focus on frontend development using React. Passionate about clean UI, responsive design, and smooth user experiences.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex justify-center gap-4">
      <a
        href="#projects"
        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all"
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-black transition-all"
      >
        Contact Me
      </a>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-10 flex justify-center w-full">
    <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
    </div>
  </div>
</section>

  );
};

export default Hero;
