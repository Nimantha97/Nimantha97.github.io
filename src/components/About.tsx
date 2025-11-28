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
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Circuit Board Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80h-80z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="10" cy="10" r="2" fill="currentColor"/>
              <circle cx="90" cy="10" r="2" fill="currentColor"/>
              <circle cx="10" cy="90" r="2" fill="currentColor"/>
              <circle cx="90" cy="90" r="2" fill="currentColor"/>
              <path d="M10 10h20v20h20v-20h20v20h20v-20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" className="text-primary"/>
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
              About <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Passionate About <span className="text-primary">Innovation</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {aboutMe.intro}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of technology to transform industries and improve lives. 
                  My journey spans from developing cutting-edge AI models to building scalable 
                  cloud architectures that serve millions of users.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Key <span className="text-secondary">Highlights</span>
                </h3>
                <div className="space-y-4">
                  {aboutMe.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 group"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0 group-hover:text-secondary transition-colors duration-200" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
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
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "15+", label: "Technologies Mastered" },
              { number: "10K+", label: "Lines of Code" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 glass-card rounded-xl"
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
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