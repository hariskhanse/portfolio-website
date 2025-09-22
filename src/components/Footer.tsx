import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-secondary/30 border-t border-border'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-3 gap-8 text-center md:text-left'>
          {/* Brand */}
          <div>
            <h3 className='text-xl font-bold text-gradient mb-4'>Haris Khan</h3>
            <p className='text-muted-foreground mb-4 leading-relaxed'>
              Senior Backend Developer passionate about building scalable,
              high-performing software solutions.
            </p>
            <div className='flex justify-center md:justify-start space-x-4'>
              <a
                href='https://github.com/hariskhanse'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors duration-300'
                aria-label='GitHub'
              >
                <Github className='h-5 w-5' />
              </a>
              <a
                href='https://www.linkedin.com/in/haris-se-khan/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-blue-400 transition-colors duration-300'
                aria-label='LinkedIn'
              >
                <Linkedin className='h-5 w-5' />
              </a>
              <a
                href='mailto:hariskhanse.technology@gmail.com'
                className='text-muted-foreground hover:text-primary transition-colors duration-300'
                aria-label='Email'
              >
                <Mail className='h-5 w-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold text-foreground mb-4'>
              Quick Links
            </h4>
            <ul className='space-y-2'>
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(
                          `#${item.toLowerCase()}`
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className='text-muted-foreground hover:text-primary transition-colors duration-300'
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold text-foreground mb-4'>
              Get In Touch
            </h4>
            <div className='space-y-2 text-muted-foreground'>
              <p>Lahore, Punjab, Pakistan</p>
              <p>
                <a
                  href='mailto:hariskhanse.technology@gmail.com'
                  className='hover:text-primary transition-colors duration-300'
                >
                  hariskhanse.technology@gmail.com
                </a>
              </p>
              <p>
                <a
                  href='tel:+923288169757'
                  className='hover:text-primary transition-colors duration-300'
                >
                  +92 328 816 9757
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className='border-t border-border mt-8 pt-8 text-center'>
          <p className='text-muted-foreground flex items-center justify-center gap-2'>
            © {currentYear} Haris Khan. All rights reserved. Made by Haris Khan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
