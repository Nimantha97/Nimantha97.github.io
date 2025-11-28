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
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Academic foundation that shaped my journey in software engineering and AI
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <div className="text-center mb-8">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GraduationCap className="w-10 h-10 text-primary" />
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {education.degree}
                </h3>
                <h4 className="text-xl md:text-2xl text-primary font-semibold mb-4">
                  {education.university}
                </h4>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground font-medium">{education.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-foreground font-semibold">GPA: {education.gpa}</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-foreground flex items-center">
                    <Award className="w-5 h-5 text-secondary mr-2" />
                    Academic Highlights
                  </h5>
                  <div className="space-y-3">
                    {education.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3 group"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:bg-secondary transition-colors duration-200" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-foreground">
                    Key Learning Areas
                  </h5>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Data Structures & Algorithms',
                      'Machine Learning',
                      'Software Engineering',
                      'Database Systems',
                      'Computer Vision',
                      'Web Technologies',
                      'Mobile Development',
                      'Project Management'
                    ].map((area, index) => (
                      <motion.div
                        key={index}
                        className="bg-muted/30 p-3 rounded-lg text-center text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-transparent hover:border-primary/30 transition-all duration-200 cursor-default"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
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