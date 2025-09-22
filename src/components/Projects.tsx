import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E Health – Healthcare Platform",
      description: "Contributed to building and modernizing SE Health's healthcare applications with focus on security, performance, and scalability.",
      highlights: [
        "Developed backend applications using .NET 8 and modernized legacy .NET 4 codebases",
        "Designed React-based web portals improving patient engagement",
        "Implemented certificate-based authentication for secure data exchange",
        "Optimized MSSQL databases with performance-tuned queries"
      ],
      technologies: [".NET 8", "React", "MSSQL", "SOAP", "Healthcare Standards"],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Aclarian - Business Management System",
      description: "Full Stack development on comprehensive business management platform serving multiple US states.",
      highlights: [
        "Built frontend modules with Angular 16 and AG-Grid tables for dynamic data visualization",
        "Implemented repository and unit of work patterns for scalable architecture",
        "Developed RESTful APIs secured with JWT authentication",
        "Contributed to Inventory, Administration, HR, and General Ledger modules"
      ],
      technologies: ["Angular 16", ".NET Core", "C#", "MSSQL", "JWT", "AutoRest"],
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "VFX – Freelance Marketplace",
      description: "Backend development for filmmaker-focused marketplace platform with AI-powered features.",
      highlights: [
        "Built complete backend from scratch using NestJS and Prisma ORM",
        "Engineered multimodal RAG pipeline chatbot with AI capabilities",
        "Architected MySQL database schema for scalability and data integrity",
        "Integrated OpenAI and Hugging Face models for intelligent responses"
      ],
      technologies: ["NestJS", "Prisma", "MySQL", "OpenAI", "ChromaDB", "LangChain"],
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "NASCAR License Portal",
      description: "Digital licensing platform enabling online license applications with digital signature capabilities.",
      highlights: [
        "Developed frontend using C# .NET Core MVC with responsive design",
        "Built admin panel for comprehensive user and role management",
        "Implemented digital PDF signing functionality",
        "Contributed to complete architecture and development workflow"
      ],
      technologies: [".NET Core MVC", "HTML", "CSS", "Bootstrap", "Digital Signatures"],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Mithars – Tax Management Platform",
      description: "Tax document management platform for Irish users with secure collaboration features.",
      highlights: [
        "Designed backend services using NestJS with Prisma ORM",
        "Implemented secure file upload workflows for tax documents",
        "Integrated Microsoft Graph API and SharePoint for document collaboration",
        "Ensured compliance with financial data security standards"
      ],
      technologies: ["NestJS", "Prisma", "Microsoft Graph", "SharePoint", "Security Compliance"],
      icon: <Database className="h-6 w-6" />
    }
  ];

  return (
    <section id="projects" className="section-professional bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my professional work and contributions to various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-glow group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-primary mr-3 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {project.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">
                  Professional Project
                </span>
                <div className="flex space-x-2">
                  <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <a
            href="https://github.com/hariskhanse"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github className="h-5 w-5" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;