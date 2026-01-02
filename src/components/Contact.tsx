import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { personalInfo } from '@/utils/portfolioData';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // For now, show a message that the form needs backend integration
    toast({
      title: "Message Ready",
      description: "To enable email sending, please integrate with EmailJS or Formspree. See the documentation for setup instructions.",
    });
    
    setIsSubmitting(false);
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
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalInfo.linkedin,
    },
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.github,
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Let's <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Ready to collaborate on innovative AI solutions? Let's discuss your next project
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-6 md:p-8 rounded-xl md:rounded-2xl">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
                  Get in Touch
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and ways to push the boundaries of AI technology. Feel free to reach out!
                </p>

                <div className="space-y-4 md:space-y-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">Email</p>
                      <p className="text-sm md:text-base text-foreground font-medium">{personalInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg md:rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">Phone</p>
                      <p className="text-sm md:text-base text-foreground font-medium">{personalInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-muted/50 rounded-lg md:rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">Location</p>
                      <p className="text-sm md:text-base text-foreground font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 md:mt-8 pt-6 border-t border-border/50">
                  <p className="text-xs md:text-sm text-muted-foreground mb-4">Connect with me</p>
                  <div className="flex space-x-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 md:w-12 md:h-12 bg-muted/50 rounded-lg md:rounded-xl flex items-center justify-center hover:bg-primary/10 border border-border/50 hover:border-primary/40 transition-all duration-200 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-xl md:rounded-2xl space-y-5">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
                  Send a Message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
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
                      className="bg-background/50 border-border/50 focus:border-primary text-sm md:text-base"
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
                      className="bg-background/50 border-border/50 focus:border-primary text-sm md:text-base"
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
                    className="bg-background/50 border-border/50 focus:border-primary text-sm md:text-base"
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
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary text-sm md:text-base resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 font-semibold py-2.5 md:py-3"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
