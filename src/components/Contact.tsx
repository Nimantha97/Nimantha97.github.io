import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { personalInfo } from '@/utils/portfolioData';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with EmailJS or Formspree
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${personalInfo.email}`,
      color: 'text-red-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalInfo.linkedin,
      color: 'text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.github,
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
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
              Let's <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Ready to collaborate on innovative AI solutions? Let's discuss your next project
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and ways to push the boundaries of AI technology. Whether you're looking for 
                  collaboration, consultation, or just want to chat about tech, feel free to reach out!
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">{personalInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-muted/50 rounded-xl flex items-center justify-center hover:bg-primary/10 transition-colors duration-200 group"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className={`w-5 h-5 ${social.color} group-hover:text-primary transition-colors duration-200`} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Send a Message
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-background/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project collaboration, consultation, etc."
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:bg-gradient-secondary text-white border-0 font-semibold py-3"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};