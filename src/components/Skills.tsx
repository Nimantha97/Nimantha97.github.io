import { motion } from 'framer-motion';
import { skills } from '@/utils/portfolioData';
import { useState } from 'react';

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Neural nodes */}
              <circle cx="50" cy="50" r="3" fill="currentColor" className="text-primary">
                <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="50" r="3" fill="currentColor" className="text-secondary">
                <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" begin="1s" />
              </circle>
              <circle cx="100" cy="150" r="3" fill="currentColor" className="text-accent">
                <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" begin="2s" />
              </circle>
              
              {/* Neural connections */}
              <line x1="50" y1="50" x2="150" y2="50" stroke="currentColor" strokeWidth="1" className="text-primary/30">
                <animate attributeName="stroke-opacity" values="0.1;0.8;0.1" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="50" y1="50" x2="100" y2="150" stroke="currentColor" strokeWidth="1" className="text-secondary/30">
                <animate attributeName="stroke-opacity" values="0.1;0.8;0.1" dur="4s" repeatCount="indefinite" begin="1s" />
              </line>
              <line x1="150" y1="50" x2="100" y2="150" stroke="currentColor" strokeWidth="1" className="text-accent/30">
                <animate attributeName="stroke-opacity" values="0.1;0.8;0.1" dur="4s" repeatCount="indefinite" begin="2s" />
              </line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              A comprehensive toolkit of modern technologies and frameworks
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                variants={itemVariants}
                className="glass-card p-8 rounded-2xl neural-glow"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <span className="w-2 h-8 bg-gradient-primary rounded-full mr-4" />
                  {skillCategory.category}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillItemVariants}
                      className="group relative"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="bg-gradient-to-br from-muted/50 to-muted/20 p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                        <div className="text-center">
                          <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                            {skill}
                          </div>
                          
                          {/* Skill level indicator */}
                          <div className="mt-2 w-full bg-muted/30 rounded-full h-1 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-primary rounded-full"
                              initial={{ width: 0 }}
                              animate={{ 
                                width: hoveredSkill === skill ? "100%" : `${75 + Math.random() * 25}%` 
                              }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                          </div>
                        </div>

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Continuous Learning
              </h4>
              <p className="text-muted-foreground">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of innovation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};