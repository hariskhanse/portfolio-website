import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    "Senior Backend Developer",
    "Full Stack Engineer",
    ".NET Developer",
    "Software Engineer",
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = setInterval(
      () => {
        if (!isDeleting && charIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          charIndex++;
        } else if (isDeleting && charIndex > 0) {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          charIndex--;
        } else if (!isDeleting && charIndex === currentRole.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          setCurrentIndex((prev) => (prev + 1) % roles.length);
          clearInterval(typeEffect);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearInterval(typeEffect);
  }, [currentIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className='section-hero'>
      <div className='container mx-auto px-4 text-center relative z-10'>
        <div className='animate-fade-in'>
          <div className='mb-8'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 mt-16 leading-tight'>
              Hi, I'm{" "}
              <span className='text-gradient animate-glow'>Haris Khan</span>
            </h1>
            <div className='text-xl md:text-2xl text-muted-foreground mb-6 h-8'>
              I am a{" "}
              <span className='text-primary font-semibold font-mono'>
                {displayText}
                <span className='animate-pulse'>|</span>
              </span>
            </div>
          </div>

          <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up'>
            Software Engineer with{" "}
            <strong className='text-primary'>3+ years</strong> of experience
            designing and developing high-quality web applications using{" "}
            <strong className='text-accent'>.NET Core</strong>,{" "}
            <strong className='text-accent'>Angular</strong>,{" "}
            <strong className='text-accent'>React</strong>, and modern
            technologies.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 items-center justify-center mb-12 animate-scale-in'>
            <a
              href='#contact'
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className='btn-primary'
            >
              Get In Touch
            </a>
            <a
              href='https://drive.google.com/file/d/1vfW-QP8KHekASm0jzRERriaXhrT3pa9U/view?usp=drive_link'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-secondary'
            >
              View Resume
            </a>
          </div>

          <div className='flex items-center justify-center space-x-6 mb-16 animate-scale-in'>
            <a
              href='https://github.com/hariskhanse'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform'
            >
              <Github className='h-6 w-6' />
            </a>
            <a
              href='https://www.linkedin.com/in/haris-se-khan/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform'
            >
              <Linkedin className='h-6 w-6' />
            </a>
            <a
              href='mailto:hariskhanse.technology@gmail.com'
              className='text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform'
            >
              <Mail className='h-6 w-6' />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className='animate-bounce text-muted-foreground hover:text-primary transition-colors duration-300'
          >
            <ChevronDown className='h-8 w-8 mx-auto' />
          </button>
        </div>

        {/* Floating Elements */}
        <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-float'></div>
        <div
          className='absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-float'
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className='absolute top-1/3 right-1/3 w-16 h-16 bg-success/10 rounded-full animate-float'
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Background Pattern */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
