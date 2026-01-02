import { motion } from 'framer-motion';
import { skills } from '@/utils/portfolioData';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Technical <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              A comprehensive toolkit of modern technologies and frameworks
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-6 md:gap-8">
            {skills.map((skillCategory) => (
              <motion.div
                key={skillCategory.category}
                variants={itemVariants}
                className="glass-card p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl"
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-4 md:mb-6 flex items-center">
                  <span className="w-1.5 md:w-2 h-6 md:h-8 bg-gradient-primary rounded-full mr-3 md:mr-4" />
                  {skillCategory.category}
                </h3>
                
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {skillCategory.items.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={skillItemVariants}
                      className="group"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="bg-background/60 px-3 py-2 md:px-4 md:py-2.5 rounded-lg md:rounded-xl border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-default">
                        <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200 whitespace-nowrap">
                          {skill}
                        </span>
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
            className="mt-10 md:mt-12 text-center"
          >
            <div className="glass-card p-5 md:p-6 rounded-xl">
              <h4 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                Continuous Learning
              </h4>
              <p className="text-sm md:text-base text-muted-foreground">
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
