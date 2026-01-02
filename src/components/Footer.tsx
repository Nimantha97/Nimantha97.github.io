import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { personalInfo } from '@/utils/portfolioData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-muted/30 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-5"
        >
          {/* Logo/Name */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-gradient bg-gradient-primary bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              AI Software Engineer | Data Scientist | Cloud Enthusiast
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center space-x-4 py-4">
            <div className="h-px bg-border flex-1 max-w-[100px]" />
            <Cpu className="w-5 h-5 text-primary" />
            <div className="h-px bg-border flex-1 max-w-[100px]" />
          </div>

          {/* Copyright */}
          <p className="text-xs md:text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
