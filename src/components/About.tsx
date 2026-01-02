import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { aboutMe } from '@/utils/portfolioData';

export const About = () => {
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

  return (
    <section id="about" className="py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div variants={itemVariants}>
              <div className="glass-card p-6 md:p-8 rounded-xl md:rounded-2xl h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
                  Passionate About <span className="text-primary">Innovation</span>
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                  {aboutMe.intro}
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  I believe in the power of technology to transform industries and improve lives. 
                  My journey spans from developing cutting-edge AI models to building scalable 
                  cloud architectures that serve real-world production environments.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="glass-card p-6 md:p-8 rounded-xl md:rounded-2xl h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
                  Key <span className="text-secondary">Highlights</span>
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {aboutMe.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 group"
                      variants={itemVariants}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary mt-0.5 flex-shrink-0 group-hover:text-secondary transition-colors duration-200" />
                      <span className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          >
            {[
              { number: "2.5+", label: "Years Experience" },
              { number: "10+", label: "Projects Completed" },
              { number: "20+", label: "Technologies" },
              { number: "98%", label: "Code Coverage" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 md:p-6 glass-card rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient bg-gradient-primary bg-clip-text text-transparent mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm lg:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
