import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Backend Developer",
      company: "Acclivousbyte Solution Pvt.LTD",
      location: "Lahore, Pakistan",
      duration: "Feb 2024 — Present",
      description: [
        "Designed and developed scalable, high-performing web applications using .NET Core, C#, Angular, React, and NestJS",
        "Collaborated closely with cross-functional teams (QA, UI/UX, Product Owners) to deliver features aligned with client needs",
        "Improved system performance by optimizing MSSQL queries, APIs, and backend services",
        "Integrated Firebase and third-party services for authentication, notifications, and real-time data synchronization",
        "Actively contributed to code reviews, knowledge sharing, and mentoring junior team members"
      ],
      technologies: [".NET Core", "C#", "Angular", "React", "NestJS", "MSSQL", "Firebase"]
    },
    {
      title: "Full Stack Software Engineer",
      company: "Awatech",
      location: "Lahore, Pakistan",
      duration: "May 2022 — Jan 2024",
      description: [
        "Built end-to-end web applications using .NET Core, C#, Angular, and MSSQL",
        "Designed and implemented scalable backend APIs and responsive frontend interfaces",
        "Worked on Techinoid startup project - Intelligent Cart for grocery retailers",
        "Collaborated within lean Agile team comprising frontend, backend engineers, PM, and QA",
        "Translated Figma designs to responsive Angular components with pixel-perfect precision",
        "Developed major component implementations for product details and listing pages"
      ],
      technologies: ["Angular 8", ".NET Core", "C#", "MSSQL", "HTML", "SCSS", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="section-professional">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 animate-pulse-glow"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="card-glow animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary mb-2">
                          <Building2 className="h-4 w-4 mr-2" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex items-start">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="skill-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;