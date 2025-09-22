import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:hariskhanse.technology@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className='h-6 w-6' />,
      title: "Email",
      value: "hariskhanse.technology@gmail.com",
      href: "mailto:hariskhanse.technology@gmail.com",
    },
    {
      icon: <Phone className='h-6 w-6' />,
      title: "Phone",
      value: "+92 328 816 9757",
      href: "tel:+923288169757",
    },
    {
      icon: <MapPin className='h-6 w-6' />,
      title: "Location",
      value: "Lahore, Punjab, Pakistan",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className='h-6 w-6' />,
      label: "GitHub",
      href: "https://github.com/hariskhanse",
      color: "hover:text-foreground",
    },
    {
      icon: <Linkedin className='h-6 w-6' />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/haris-se-khan/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id='contact' className='section-professional'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gradient'>
            Get In Touch
          </h2>
          <div className='w-24 h-1 bg-gradient-primary mx-auto mb-8'></div>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Ready to work together? Let's discuss your next project or
            opportunity.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl font-bold text-foreground mb-6'>
                Let's Connect
              </h3>
              <p className='text-muted-foreground leading-relaxed mb-8'>
                I'm always interested in hearing about new opportunities,
                whether that's working on exciting projects, discussing
                potential collaborations, or just having a chat about technology
                and software development.
              </p>
            </div>

            <div className='space-y-6'>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className='flex items-center p-4 card-professional animate-slide-up'
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className='text-primary mr-4'>{info.icon}</div>
                  <div>
                    <h4 className='text-sm font-medium text-muted-foreground mb-1'>
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className='text-foreground hover:text-primary transition-colors duration-300'
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className='text-foreground'>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className='pt-8'>
              <h4 className='text-lg font-semibold text-foreground mb-4'>
                Follow Me
              </h4>
              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 transform`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='card-glow'>
            <h3 className='text-2xl font-bold text-foreground mb-6'>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300'
                    placeholder='your.email@example.com'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-foreground mb-2'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300'
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-foreground mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className='w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none'
                  placeholder='Tell me about your project or opportunity...'
                />
              </div>

              <button
                type='submit'
                className='btn-primary w-full flex items-center justify-center gap-2'
              >
                <Send className='h-5 w-5' />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
