import { motion } from 'framer-motion';
import { ArrowDownIcon, DownloadIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from './ParticleBackground';
import { personalInfo } from '@/utils/portfolioData';
import { useState, useEffect } from 'react';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, delay + currentIndex * 100);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse border-r-2 border-primary ml-1">|</span>
    </span>
  );
};

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = personalInfo.cvPath;
    link.download = 'Nimantha_Gayan_CV.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 min-h-[2.5rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <TypewriterText text={personalInfo.title} delay={1000} />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="neural-glow bg-gradient-primary hover:bg-gradient-secondary border-0 text-white font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-primary"
            >
              View My Work
              <ArrowDownIcon className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={downloadCV}
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <DownloadIcon className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm floating"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 rounded-full bg-secondary/20 backdrop-blur-sm floating"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 3 }}
          style={{ animationDelay: '2s' }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm floating"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          style={{ animationDelay: '4s' }}
        />

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};