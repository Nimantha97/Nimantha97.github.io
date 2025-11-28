import { motion } from 'framer-motion';
import { Heart, Code2, Cpu } from 'lucide-react';
import { personalInfo } from '@/utils/portfolioData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-card via-background to-card border-t border-border/50">
      {/* Subtle glow lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Logo/Name */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gradient bg-gradient-primary bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-muted-foreground">
              AI Software Engineer | Data Scientist | Cloud Enthusiast
            </p>
          </div>

          {/* Animated Divider */}
          <motion.div 
            className="flex items-center justify-center space-x-4 py-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent to-primary/50 flex-1" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="p-2"
            >
              <Cpu className="w-6 h-6 text-primary" />
            </motion.div>
            <div className="h-px bg-gradient-to-l from-transparent to-primary/50 flex-1" />
          </motion.div>

          {/*/!* Made with love *!/*/}
          {/*<motion.div*/}
          {/*  className="flex items-center justify-center space-x-2 text-sm text-muted-foreground"*/}
          {/*  initial={{ opacity: 0 }}*/}
          {/*  whileInView={{ opacity: 1 }}*/}
          {/*  viewport={{ once: true }}*/}
          {/*  transition={{ duration: 0.6, delay: 0.4 }}*/}
          {/*>*/}
          {/*  <span>Built with</span>*/}
          {/*  <motion.div*/}
          {/*    animate={{ scale: [1, 1.2, 1] }}*/}
          {/*    transition={{ duration: 1.5, repeat: Infinity }}*/}
          {/*  >*/}
          {/*    <Heart className="w-4 h-4 text-red-400 fill-current" />*/}
          {/*  </motion.div>*/}
          {/*  <span>using</span>*/}
          {/*  <Code2 className="w-4 h-4 text-primary" />*/}
          {/*  <span>React, TypeScript & Framer Motion</span>*/}
          {/*</motion.div>*/}

          {/* Copyright */}
          <motion.p
            className="text-xs text-muted-foreground/70 pt-4 border-t border-border/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            © {currentYear} {personalInfo.name}. All rights reserved. 
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            Designed & developed with passion for innovation.
          </motion.p>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight,
                  opacity: 0
                }}
                animate={{
                  y: -100,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};