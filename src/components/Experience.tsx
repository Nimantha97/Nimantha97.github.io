import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/utils/portfolioData';

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-16 md:py-20 bg-muted/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Work <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Building innovative solutions across diverse industries and technologies
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/50" />

            <div className="space-y-6 md:space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  <div className="ml-10 md:ml-20">
                    <div className="glass-card p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 md:mb-6">
                        <div className="mb-3 lg:mb-0">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                            {experience.position}
                          </h3>
                          <h4 className="text-lg md:text-xl text-primary font-semibold">
                            {experience.company}
                          </h4>
                        </div>
                        
                        <div className="flex items-center text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full w-fit">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{experience.duration}</span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-5 md:mb-6">
                        {experience.description.map((desc, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{desc}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-primary/30 text-foreground bg-primary/5 text-xs md:text-sm"
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
