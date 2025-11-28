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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Achievements & <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">Recognition</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Milestones that reflect passion for innovation and excellence in AI
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievementIcons[achievement.type];
              const iconColor = achievementColors[achievement.type];

              return (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  className="glass-card p-8 rounded-2xl group"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                        <IconComponent className={`w-8 h-8 ${iconColor}`} />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                          {achievement.title}
                        </h3>
                        <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                          {achievement.date}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                      
                      <div className="mt-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize ${
                          achievement.type === 'hackathon' ? 'bg-yellow-400/10 text-yellow-400' :
                          achievement.type === 'research' ? 'bg-blue-400/10 text-blue-400' :
                          achievement.type === 'certification' ? 'bg-green-400/10 text-green-400' :
                          'bg-purple-400/10 text-purple-400'
                        }`}>
                          {achievement.type}
                        </span>
                      </div>
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