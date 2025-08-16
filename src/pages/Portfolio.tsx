import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Bot, 
  Settings, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin,
  Calendar,
  ExternalLink,
  Send,
  Menu,
  X,
  Paintbrush
} from 'lucide-react';

// Use actual profile photo
const profilePhoto = '/lovable-uploads/4fccc229-061e-4831-83ec-83f0c5435514.png';
import workspace1 from '@/assets/workspace-1.jpg';
import workspace2 from '@/assets/workspace-2.jpg';
import projectChat from '@/assets/project-chat.jpg';
import projectBlog from '@/assets/project-blog.jpg';
import projectI18n from '@/assets/project-i18n.jpg';

const Portfolio = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // const skills = [
  //   {
  //     icon: Database,
  //     title: "Backend API Development",
  //     description: "Django REST APIs, .NET Core, Express.js"
  //   },
  //   {
  //     icon: Bot,
  //     title: "AI & Automation",
  //     description: "LangChain, Python Automation Scripts, OpenAI API basics"
  //   },
  //   {
  //     icon: Code2,
  //     title: "Java Development",
  //     description: "Core Java, Spring, Spring Boot, JDBC, OOP, Multithreading"
  //   },
  //   {
  //     icon: Globe,
  //     title: "Frontend Engineering",
  //     description: "React (Vite), React Native, HTML, CSS, JavaScript"
  //   },
  //   {
  //     icon: Globe,
  //     title: "Internationalization & Localization",
  //     description: "i18n automation, regex-based rule engines, multilingual-ready systems"
  //   },
  //   {
  //     icon: Settings,
  //     title: "Data Processing & Tools",
  //     description: "Excel VBA scripting, Regex utilities, Pandas, NumPy"
  //   },
  //   {
  //     icon: Github,
  //     title: "Version Control & Deployment",
  //     description: "GitHub, GitLab, SCM workflows"
  //   }
  // ];
  const skills = [
  {
    icon: Database,
    title: "Backend API Development",
    description: "Django REST APIs, .NET Core, Spring Boot, Express.js"
  },
  {
    icon: Code2,
    title: "Java Development",
    description: "Core Java, JDBC, OOP, Multithreading, Spring, Hibernate"
  },
  {
    icon: Code2,
    title: "Python Development & Automation",
    description: "Python OOP, File Handling, Web Scraping, Regex, Automation Scripts"
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "LangChain, OpenAI API basics, Prompt Engineering"
  },
  {
    icon: Paintbrush,
    title: "Frontend Engineering",
    description: "React (Vite), React Native, HTML, CSS, JavaScript, Bootstrap"
  },
  // {
  //   icon: Globe,
  //   title: "Internationalization & Localization",
  //   description: "i18n automation, regex-based rule engines, multilingual-ready systems"
  // },
  {
    icon: Settings,
    title: "Data Processing & Tools",
    description: "Excel VBA scripting, Regex utilities, Pandas, NumPy"
  },
  {
    icon: Database,
    title: "Databases",
    description: "MySQL, PostgreSQL, SQLite"
  },
  {
    icon: Github,
    title: "Version Control & Deployment",
    description: "GitHub, GitLab, SCM workflows"
  },
  {
    icon: Code2,
    title: "Software Practices",
    description: "SDLC, Debugging, Software Design, Configuration Management"
  }
];



  const projects = [
    {
      id: 1,
      title: "Real-Time Chat Application",
      description: "Server-client messaging with concurrent connections, stable error handling, and smooth real-time interaction.",
      image: projectChat,
      tags: ["Java", "Sockets", "Multithreading"],
      link: "#"
    },
    {
      id: 2,
      title: "Django Blog Platform",
      description: "Auth, role-based CRUD, responsive UI, REST APIs; includes a dark/light theme toggle and live deployment.",
      image: projectBlog,
      tags: ["Django", "DRF", "SQLite", "Bootstrap 5"],
      link: "https://rahul3998.pythonanywhere.com/"
    },
    {
      id: 3,
      title: "IBM Travel Recommendation Website",
      description: "A multi-page website built with HTML, CSS, and JavaScript to explore beaches, temples, and country-based destinations.",
      image: projectI18n,
      tags: ["HTML", "CSS", "Javascript"],
      link: "https://rahul3998.github.io/IBM-JS/"
    }
  ];

  const galleryPlaceholders = Array.from({ length: 12 }, (_, i) => i + 1);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-card-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo/Name */}
          <div className="font-heading font-bold text-lg sm:text-xl text-gradient">
            Rahul Adagale
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('about-me')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
            >
              About Me
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-muted-foreground hover:text-primary transition-colors p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card border-t border-card-border/50">
            <div className="px-4 py-2 space-y-1">
              <button 
                onClick={() => {
                  scrollToSection('hero');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors font-medium rounded-lg"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  scrollToSection('projects');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors font-medium rounded-lg"
              >
                Projects
              </button>
              <button 
                onClick={() => {
                  scrollToSection('about-me');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors font-medium rounded-lg"
              >
                About Me
              </button>
              <button 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors font-medium rounded-lg"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold font-heading text-gradient">
              Rahul Adagale
            </h1>
            <h2 className="text-xl lg:text-2xl text-muted-foreground font-semibold">
              Software Engineer | Java & Python Developer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Collaborative and innovative Software Engineer with hands-on experience in Java, Python, and full-stack development. 
              Skilled in building scalable web and mobile applications, RESTful APIs, and automation solutions. Strong expertise in 
              internationalization (i18n), regex-based rule engines, and multilingual-ready content delivery. Proficient in frameworks 
              like Django, Spring Boot, React, and .NET Core with proven ability to optimize workflows, reduce turnaround times, 
              and deliver impactful software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="neon" 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="animate-glow"
              >
                Let's Connect!
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center animate-float">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Rahul Adagale - Software Engineer" 
                className="w-80 h-85 object-cover rounded-2xl glow-primary"
              />
              
              {/* Floating annotations */}
              {/* <div className="absolute -top-4 -left-8 rotate-[-15deg] glass-card px-3 py-1 text-sm font-handwriting">
                Software Engineer
              </div>
              <div className="absolute -bottom-4 -right-8 rotate-[12deg] glass-card px-3 py-1 text-sm font-handwriting">
                Java
              </div>
              <div className="absolute top-1/2 -right-12 rotate-[8deg] glass-card px-3 py-1 text-sm font-handwriting">
                Python
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-16 text-gradient">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="glass-card p-6 hover:glow-accent transition-all duration-300 group">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <skill.icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold font-heading">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-background-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-16 text-gradient">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="glass-card overflow-hidden hover:glow-primary transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold font-heading">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.link !== "#" && (
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              See More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-16 text-gradient">
            About Me
          </h2>
          <div className="space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I'm <span className="text-primary font-semibold">Rahul Adagale</span>, a passionate Software Developer from Pune with a strong background in computer science 
              and a knack for solving real-world problems through code. I specialize in Java, Python, and full-stack development, 
              and I enjoy building applications that are not only functional but also impactful for users.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've worked on everything from real-time chat systems to Django-powered blog platforms, and have professional 
              experience in internationalization engineering, API development, automation scripting, and scalable software design. 
              I love collaborating with teams, exploring new technologies like LangChain and AI integrations, and continuously 
              improving the efficiency and quality of software products.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring tech trends, experimenting with automation scripts, or working on 
              side projects that challenge me to grow as a developer.
            </p>
          </div>
        </div>
      </section>


      {/* About Section
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-16 text-gradient">
            All You Need to Know
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Pune-based software engineer focused on building maintainable backends, clean APIs, 
                and multilingual-ready products. I enjoy turning complex requirements into reliable systems 
                and shipping features that improve user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Outside of work, I explore AI tooling (LangChain, OpenAI API) and performance-minded 
                Java/Python patterns.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-8xl font-bold text-gradient opacity-50">2025</div>
              </div>
            </div>
            <div className="relative grid grid-cols-2 gap-4">
              <img 
                src={workspace1} 
                alt="Development workspace" 
                className="w-full h-48 object-cover rounded-lg rotate-[-3deg] hover:rotate-0 transition-transform duration-300 glow-accent"
              />
              <img 
                src={workspace2} 
                alt="Coding environment" 
                className="w-full h-48 object-cover rounded-lg rotate-[2deg] hover:rotate-0 transition-transform duration-300 glow-primary mt-8"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Gallery Section
      <section id="gallery" className="py-20 px-6 bg-background-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-16 text-gradient">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryPlaceholders.map((item) => (
              <div 
                key={item} 
                className="aspect-square glass-card bg-muted/20 hover:bg-primary/10 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <span className="text-muted-foreground text-sm">Gallery {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-16 text-gradient">
            Experience & Education
          </h2>
          <div className="space-y-8">
            <Card className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold font-heading">Software Engineer</h3>
                <div className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Jan 2024 – Present
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold">Fidel Softech Private Limited, Pune</span>
              </div>
              <p className="text-muted-foreground">
                i18n engineering, Python/VBA automation (≈70% faster TAT), regex rule engines, REST APIs with Django, 
                modular UI/backend components, Git-based release workflows.
              </p>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold font-heading">Java Developer Internship</h3>
                <div className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Jul 2023 – Dec 2023
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold">Fidel Softech Private Limited, Pune (Previouly LinguaSol Privated Limited)</span>
              </div>
              <p className="text-muted-foreground">
                Java OOP/JDBC tools (JSON Manipulator, Regex Utility), backend modules with Django REST, Practical DSA.
              </p>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold font-heading">B.Sc. Computer Science</h3>
                <div className="text-muted-foreground">CGPA 8.25</div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold">Modern College of Arts, Science & Commerce, Pune</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-background-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-4 text-gradient">
            Contact Me
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Let's create something amazing together.
          </p>
          
          <Card className="glass-card p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input className="glass-card border-card-border" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input className="glass-card border-card-border" type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  className="glass-card border-card-border min-h-32" 
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button variant="neon" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="flex justify-center gap-6 mt-12">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Rahul3998/" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/rahul-adagale/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            {/* <Button variant="ghost" size="icon" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            </Button> */}
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:rahuladagale3998@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-card-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2025 Rahul Adagale. All rights reserved.
          </p>
          <div className="animate-float">
            <Globe className="w-6 h-6 text-primary glow-primary" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;