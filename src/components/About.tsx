import { Code, Database, Server, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full Stack Development",
      description: "Expert in both frontend and backend technologies"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Design",
      description: "Efficient database architecture and optimization"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Architecture",
      description: "Scalable and secure server-side solutions"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Modern Frameworks",
      description: "Expertise in latest web technologies"
    }
  ];

  return (
    <section id="about" className="section-professional">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Passionate Software Engineer with{' '}
              <span className="text-primary">3+ years</span> of experience
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building modular, scalable, and high-performing software solutions 
              that align with business needs and enhance user experience. My expertise spans 
              frontend and backend development, with a strong command of modern frameworks 
              and technologies.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Throughout my career, I have gained comprehensive experience across the software 
              development lifecycle (SDLC), including requirement analysis, architecture design, 
              implementation, testing, deployment, and maintenance.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="skill-badge">.NET Core</span>
              <span className="skill-badge">C#</span>
              <span className="skill-badge">Angular</span>
              <span className="skill-badge">React</span>
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">TypeScript</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="card-glow group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;