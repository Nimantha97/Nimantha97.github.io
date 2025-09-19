import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/utils/portfolioData';
import { useState } from 'react';

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
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Innovative solutions that showcase the intersection of AI, software engineering, and real-world impact
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="glass-card rounded-2xl overflow-hidden neural-glow"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-[1fr,1.2fr]' : 'lg:grid-cols-[1.2fr,1fr]'} gap-8 p-8`}>
                  {/* Project Image */}
                  <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''} relative group`}>
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
                      <img
                        src={projectImages[project.imageUrl as keyof typeof projectImages]}
                        alt={project.title}
                        className="w-full h-64 md:h-72 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Video Play Button */}
                      {project.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.button
                            className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-primary-glow/50"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ 
                              opacity: hoveredProject === project.id ? 1 : 0.7,
                              scale: hoveredProject === project.id ? 1.1 : 1 
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <Play className="w-6 h-6 text-white ml-1" />
                          </motion.button>
                        </div>
                      )}

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''} flex flex-col justify-center space-y-6`}>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <ArrowRight className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <Button
                          className="bg-gradient-primary hover:bg-gradient-secondary text-white border-0"
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
                          className="border-primary/50 text-primary hover:bg-primary/10"
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