const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: ".NET Core", level: 90 },
        { name: "C#", level: 95 },
        { name: "Node.js", level: 85 },
        { name: "NestJS", level: 80 },
        { name: "ASP.NET Core MVC", level: 88 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "Angular", level: 90 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 85 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MSSQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "Prisma ORM", level: 85 },
        { name: "Firebase", level: 75 },
        { name: "Git/GitHub", level: 85 }
      ]
    },
    {
      title: "Architecture & Patterns",
      skills: [
        { name: "RESTful APIs", level: 95 },
        { name: "Microservices", level: 80 },
        { name: "Repository Pattern", level: 85 },
        { name: "JWT Authentication", level: 90 },
        { name: "SDLC", level: 90 }
      ]
    }
  ];

  const technologies = [
    { name: ".NET Core", category: "Backend" },
    { name: "Angular", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "C#", category: "Language" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "MSSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "NestJS", category: "Backend" },
    { name: "Prisma", category: "ORM" },
    { name: "JWT", category: "Auth" },
    { name: "Firebase", category: "Cloud" }
  ];

  return (
    <section id="skills" className="section-professional bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I've been working with for the past 3+ years
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card-professional"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="skill-badge animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-medium">{tech.name}</span>
                <span className="text-xs text-muted-foreground ml-2">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;