import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/utils/portfolioData';

// Import project images
import chatbotImg from '/images/chatbot.png';
import facenetImg from '/images/facenet.png';
import yogaImg from '/images/yoga.png';
import dashboardImg from '/images/dashboard.png';
import neuralImg from '/images/neural-optimizer.png';

const projectImages = {
  '/images/chatbot.png': chatbotImg,
  '/images/facenet.png': facenetImg,
  '/images/yoga.png': yogaImg,
  '/images/dashboard.png': dashboardImg,
  '/images/neural-optimizer.png': neuralImg,
};

export const Projects = () => {
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
    <section id="projects" className="py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Innovative solutions showcasing AI, software engineering, and real-world impact
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="glass-card rounded-xl md:rounded-2xl overflow-hidden"
              >
                <div className={`grid lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 p-5 md:p-6 lg:p-8`}>
                  {/* Project Image */}
                  <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''} relative`}>
                    <div className="relative overflow-hidden rounded-lg md:rounded-xl bg-muted/30">
                      <img
                        src={projectImages[project.imageUrl as keyof typeof projectImages]}
                        alt={project.title}
                        className="w-full h-48 md:h-56 lg:h-64 object-cover"
                      />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''} flex flex-col justify-center space-y-4`}>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border border-primary/20 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 5 && (
                        <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                          +{project.technologies.length - 5}
                        </Badge>
                      )}
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <ArrowRight className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0" />
                          <span className="text-xs md:text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      {project.liveUrl && (
                        <Button
                          className="bg-primary hover:bg-primary/90 text-primary-foreground border-0"
                          size="sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/50 text-foreground hover:bg-primary/10"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
