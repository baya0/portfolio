
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description: "A full-featured e-commerce app with cart functionality, user authentication, and payment integration.",
      tech: ["Flutter", "Dart", "Firebase", "Stripe API"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/ecommerce-app",
      playStore: "#",
      features: ["User Authentication", "Shopping Cart", "Payment Gateway", "Order History"]
    },
    {
      id: 2,
      title: "Weather Forecast App",
      description: "Beautiful weather app with location-based forecasts and interactive animations.",
      tech: ["Flutter", "Dart", "OpenWeather API", "Geolocator"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/weather-app",
      playStore: "#",
      features: ["Real-time Weather", "7-day Forecast", "Location Services", "Animated UI"]
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Productive task management app with categories, reminders, and progress tracking.",
      tech: ["Flutter", "Dart", "SQLite", "Local Notifications"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/task-app",
      playStore: "#",
      features: ["Task Categories", "Reminders", "Progress Tracking", "Dark Mode"]
    }
  ]

  const skills = [
    { name: "Flutter", level: 85 },
    { name: "Dart", level: 80 },
    { name: "Firebase", level: 75 },
    { name: "REST APIs", level: 70 },
    { name: "State Management", level: 65 },
    { name: "Git/GitHub", level: 80 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Your Name - Flutter Developer Portfolio</title>
        <meta name="description" content="Junior Flutter Developer Portfolio showcasing mobile app development projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-600">Your Name</h1>
              <span className="text-gray-600">Flutter Developer</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition duration-300">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition duration-300">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
                <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Projects</a>
                <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Skills</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Flutter Developer
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Building beautiful cross-platform mobile applications
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#projects" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                View My Work
              </a>
              <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 bg-gray-300 rounded-full mx-auto mb-8 flex items-center justify-center">
                <span className="text-gray-600">Your Photo</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Junior Flutter Developer</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate junior Flutter developer with a strong foundation in mobile app development. 
                I love creating intuitive, performant applications that solve real-world problems. My journey 
                started with learning Dart and Flutter, and I've been building projects to strengthen my skills 
                in cross-platform mobile development.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <strong className="text-gray-800">Experience:</strong>
                  <p className="text-gray-600">1+ Years</p>
                </div>
                <div>
                  <strong className="text-gray-800">Projects:</strong>
                  <p className="text-gray-600">5+ Completed</p>
                </div>
                <div>
                  <strong className="text-gray-800">Location:</strong>
                  <p className="text-gray-600">Your City, Country</p>
                </div>
                <div>
                  <strong className="text-gray-800">Available:</strong>
                  <p className="text-gray-600">Full-time</p>
                </div>
              </div>
              
              <a href="/resume.pdf" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent Flutter projects that demonstrate my skills in mobile app development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">App Screenshot</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center mb-1">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={project.github} className="flex-1 bg-gray-800 text-white text-center py-2 rounded hover:bg-gray-700 transition duration-300">
                      GitHub
                    </a>
                    <a href={project.playStore} className="flex-1 bg-green-600 text-white text-center py-2 rounded hover:bg-green-700 transition duration-300">
                      Play Store
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">What I Do</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Mobile App Development</h4>
                    <p className="text-gray-600">Building cross-platform mobile applications using Flutter and Dart</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">🎨</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">UI/UX Implementation</h4>
                    <p className="text-gray-600">Creating beautiful and intuitive user interfaces with Flutter widgets</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">🔗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">API Integration</h4>
                    <p className="text-gray-600">Connecting apps with REST APIs and managing app state efficiently</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">your.email@example.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600">💼</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">LinkedIn</p>
                    <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 hover:underline">
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600">🐙</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">GitHub</p>
                    <a href="https://github.com/yourusername" className="text-blue-600 hover:underline">
                      github.com/yourusername
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Location</p>
                    <p className="text-gray-600">Your City, Country</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}