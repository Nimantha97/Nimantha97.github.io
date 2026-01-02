import { motion } from 'framer-motion';
import { Trophy, Award, BookOpen, FileCheck } from 'lucide-react';
import { achievements } from '@/utils/portfolioData';

const achievementIcons = {
  hackathon: Trophy,
  research: BookOpen,
  certification: FileCheck,
  award: Award
};

const achievementColors = {
  hackathon: 'text-yellow-400',
  research: 'text-blue-400',
  certification: 'text-green-400',
  award: 'text-purple-400'
};

export const Achievements = () => {
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
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Achievements & <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">Recognition</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Milestones that reflect passion for innovation and excellence
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {achievements.map((achievement) => {
              const IconComponent = achievementIcons[achievement.type];
              const iconColor = achievementColors[achievement.type];

              return (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  className="glass-card p-5 md:p-6 rounded-xl md:rounded-2xl group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-muted/50 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                        <IconComponent className={`w-6 h-6 md:w-7 md:h-7 ${iconColor}`} />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 className="text-base md:text-lg font-bold text-foreground leading-tight">
                          {achievement.title}
                        </h3>
                        <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-full w-fit">
                          {achievement.date}
                        </span>
                      </div>
                      
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                        {achievement.description}
                      </p>
                      
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium capitalize ${
                        achievement.type === 'hackathon' ? 'bg-yellow-400/10 text-yellow-400' :
                        achievement.type === 'research' ? 'bg-blue-400/10 text-blue-400' :
                        achievement.type === 'certification' ? 'bg-green-400/10 text-green-400' :
                        'bg-purple-400/10 text-purple-400'
                      }`}>
                        {achievement.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
