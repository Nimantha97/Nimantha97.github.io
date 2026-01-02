import { motion } from 'framer-motion';
import { GraduationCap, Star, Calendar, Award } from 'lucide-react';
import { education } from '@/utils/portfolioData';

export const Education = () => {
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
    <section className="py-16 md:py-20 bg-muted/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Academic foundation that shaped my journey in software engineering and AI
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="glass-card p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl">
              <div className="text-center mb-8">
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5"
                >
                  <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </motion.div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {education.degree}
                </h3>
                <h4 className="text-lg md:text-xl text-primary font-semibold mb-4">
                  {education.university}
                </h4>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6">
                  <div className="flex items-center space-x-2 bg-muted/50 px-3 py-1.5 rounded-full">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground font-medium">{education.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-primary/10 px-3 py-1.5 rounded-full">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground font-semibold">GPA: {education.gpa}</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4">
                  <h5 className="text-base md:text-lg font-semibold text-foreground flex items-center">
                    <Award className="w-5 h-5 text-primary mr-2" />
                    Academic Highlights
                  </h5>
                  <div className="space-y-3">
                    {education.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3 group"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-base md:text-lg font-semibold text-foreground">
                    Key Learning Areas
                  </h5>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {[
                      'Data Structures',
                      'Machine Learning',
                      'Software Engineering',
                      'Database Systems',
                      'Computer Vision',
                      'Web Technologies',
                      'Deep Learning',
                      'Cloud Computing'
                    ].map((area, index) => (
                      <motion.div
                        key={index}
                        className="bg-background/60 p-2.5 md:p-3 rounded-lg text-center text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/30 transition-all duration-200 cursor-default"
                        whileHover={{ scale: 1.02 }}
                      >
                        {area}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
