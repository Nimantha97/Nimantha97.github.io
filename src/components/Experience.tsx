import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/utils/portfolioData';

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Building innovative solutions across diverse industries and technologies
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className="relative"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block z-10" />

                  <div className="md:ml-20">
                    <div className="glass-card p-8 rounded-2xl neural-glow">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {experience.position}
                          </h3>
                          <h4 className="text-xl text-primary font-semibold mb-2">
                            {experience.company}
                          </h4>
                        </div>
                        
                        <div className="flex flex-col lg:items-end space-y-2">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="font-medium">{experience.duration}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        {experience.description.map((desc, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <ArrowRight className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{desc}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-secondary/50 text-secondary hover:bg-secondary/10 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};