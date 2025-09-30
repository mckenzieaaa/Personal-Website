import React, { useState, useEffect } from 'react'
import ThreeScene from './components/ThreeScene'
import ParticleImageCanvas from './components/ParticleImageCanvas'
import ProjectModal from './components/ProjectModal'
import projectsImageData from './data/projects-images.json'
import './App.css'

function App() {
  const [imageProjects, setImageProjects] = useState([])
  const [currentSection, setCurrentSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setImageProjects(projectsImageData.filter(project => project.featured))
    
    // Professional loading effect
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }, [])

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, rgba(20,25,40,0.8) 0%, rgba(10,10,15,0.95) 50%, rgba(5,5,10,1) 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        fontFamily: "'Helvetica Neue', Arial, sans-serif"
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          border: '2px solid rgba(136,170,255,0.2)',
          borderTop: '2px solid #88aaff',
          borderRadius: '50%',
          animation: 'spin 1.5s linear infinite',
          marginBottom: '30px'
        }}></div>
        <div style={{
          fontSize: '2rem',
          letterSpacing: '6px',
          marginBottom: '15px',
          background: 'linear-gradient(45deg, #88aaff, #ffffff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '200'
        }}>
          OYXR
        </div>
        <p style={{ 
          fontSize: '0.9rem', 
          letterSpacing: '3px', 
          opacity: 0.7,
          textTransform: 'uppercase',
          fontWeight: '300'
        }}>
          Loading Experience
        </p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div style={{ 
      fontFamily: "'Helvetica Neue', Arial, sans-serif", 
      color: 'white',
      overflow: 'hidden'
    }}>
      {/* Professional Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '25px 60px',
        background: 'rgba(0,0,0,0.15)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1600px',
          margin: '0 auto'
        }}>
          <div style={{ 
            fontSize: '2.2rem', 
            fontWeight: '200',
            letterSpacing: '6px',
            background: 'linear-gradient(45deg, #88aaff, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            OYXR
          </div>
          
          <div style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
            {['Home', 'Work', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: currentSection === item.toLowerCase() ? '#88aaff' : 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  letterSpacing: '1.5px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  textTransform: 'uppercase',
                  position: 'relative',
                  fontWeight: '300'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#88aaff'
                  e.target.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = currentSection === item.toLowerCase() ? '#88aaff' : 'rgba(255,255,255,0.6)'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                {item}
                {currentSection === item.toLowerCase() && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, #88aaff, transparent)'
                  }}></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <ThreeScene />

      <div style={{ 
        height: '100vh', 
        overflowY: 'auto', 
        scrollBehavior: 'smooth',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Hero Section */}
        <section id="home" style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            background: 'rgba(0,0,0,0.2)',
            backdropFilter: 'blur(25px)',
            padding: '80px 100px',
            borderRadius: '25px',
            border: '1px solid rgba(255,255,255,0.08)',
            maxWidth: '1000px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
          }}>
            <h1 style={{
              fontSize: '5rem',
              fontWeight: '100',
              letterSpacing: '8px',
              marginBottom: '40px',
              background: 'linear-gradient(45deg, #88aaff, #ffffff, #ddddff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.1',
              textTransform: 'uppercase'
            }}>
              Digital Artistry
            </h1>
            <div style={{
              width: '60px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #88aaff, transparent)',
              margin: '30px auto',
              opacity: 0.8
            }}></div>
            <p style={{
              fontSize: '1.6rem',
              lineHeight: '1.7',
              opacity: 0.85,
              letterSpacing: '1px',
              marginBottom: '50px',
              fontWeight: '300'
            }}>
              Exploring the intersection of technology, creativity, and human experience through immersive digital installations and interactive visualizations.
            </p>
            <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
              <button
                onClick={() => scrollToSection('work')}
                style={{
                  background: 'linear-gradient(45deg, #88aaff, #6699ff)',
                  border: 'none',
                  color: 'white',
                  padding: '18px 45px',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  textTransform: 'uppercase',
                  fontWeight: '300'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)'
                  e.target.style.boxShadow = '0 15px 40px rgba(136,170,255,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                Explore Work
              </button>
              <button
                onClick={() => scrollToSection('about')}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(136,170,255,0.5)',
                  color: '#88aaff',
                  padding: '18px 45px',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  textTransform: 'uppercase',
                  fontWeight: '300'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(136,170,255,0.1)'
                  e.target.style.borderColor = '#88aaff'
                  e.target.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.borderColor = 'rgba(136,170,255,0.5)'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                About Me
              </button>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" style={{
          minHeight: '100vh',
          padding: '120px 60px',
          background: 'linear-gradient(135deg, rgba(10,10,15,0.97) 0%, rgba(20,25,40,0.97) 50%, rgba(15,15,25,0.97) 100%)',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '100px' }}>
              <h2 style={{ 
                fontSize: '3.5rem', 
                fontWeight: '100',
                letterSpacing: '4px', 
                marginBottom: '30px',
                textTransform: 'uppercase'
              }}>
                Featured Work
              </h2>
              <div style={{
                width: '80px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #88aaff, transparent)',
                margin: '0 auto 30px',
                opacity: 0.8
              }}></div>
              <p style={{ 
                fontSize: '1.3rem', 
                opacity: 0.7, 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: '1.6',
                fontWeight: '300'
              }}>
                A curated selection of digital experiences that push the boundaries of interactive design
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
              gap: '60px',
              marginBottom: '80px'
            }}>
              {imageProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    padding: '40px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.6s ease',
                    cursor: 'pointer',
                    backdropFilter: 'blur(20px)',
                    position: 'relative',
                    overflow: 'hidden'
                  }} 
                  onMouseEnter={(e) => {
                    setHoveredProject(project.id)
                    e.currentTarget.style.transform = 'translateY(-15px)'
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(136,170,255,0.15)'
                    e.currentTarget.style.borderColor = 'rgba(136,170,255,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    setHoveredProject(null)
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                  }}
                  onClick={() => openProjectModal(project)}
                >
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    fontSize: '0.8rem',
                    color: 'rgba(136,170,255,0.6)',
                    letterSpacing: '2px',
                    fontWeight: '300'
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div style={{
                    width: '100%',
                    height: '350px',
                    marginBottom: '30px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <ParticleImageCanvas
                      imageSrc={project.image}
                      width={420}
                      height={350}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: hoveredProject === project.id ? 'rgba(136,170,255,0.1)' : 'transparent',
                      transition: 'all 0.4s ease',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      {hoveredProject === project.id && (
                        <div style={{
                          padding: '12px 24px',
                          background: 'rgba(136,170,255,0.9)',
                          borderRadius: '25px',
                          color: 'white',
                          fontSize: '0.9rem',
                          letterSpacing: '1px',
                          textTransform: 'uppercase'
                        }}>
                          View Details
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 style={{ 
                      fontSize: '1.8rem', 
                      marginBottom: '15px', 
                      color: '#88aaff',
                      fontWeight: '300',
                      letterSpacing: '1px'
                    }}>
                      {project.title}
                    </h3>
                    
                    <p style={{ 
                      fontSize: '1.1rem', 
                      lineHeight: '1.7', 
                      marginBottom: '25px',
                      color: 'rgba(255,255,255,0.75)',
                      fontWeight: '300'
                    }}>
                      {project.description}
                    </p>
                    
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center'
                    }}>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        color: '#88aaff',
                        background: 'rgba(136,170,255,0.08)',
                        padding: '8px 16px',
                        borderRadius: '25px',
                        border: '1px solid rgba(136,170,255,0.2)',
                        letterSpacing: '1px'
                      }}>
                        {project.category}
                      </span>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        color: 'rgba(255,255,255,0.5)',
                        letterSpacing: '1px' 
                      }}>
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 60px',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            maxWidth: '800px',
            textAlign: 'center',
            background: 'rgba(0,0,0,0.2)',
            backdropFilter: 'blur(25px)',
            padding: '60px 80px',
            borderRadius: '25px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '100',
              letterSpacing: '4px',
              marginBottom: '40px',
              textTransform: 'uppercase'
            }}>
              About
            </h2>
            <div style={{
              width: '60px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #88aaff, transparent)',
              margin: '0 auto 40px',
              opacity: 0.8
            }}></div>
            <p style={{
              fontSize: '1.4rem',
              lineHeight: '1.8',
              opacity: 0.85,
              marginBottom: '30px',
              fontWeight: '300'
            }}>
              I am a digital artist and creative technologist passionate about pushing the boundaries 
              of what's possible in virtual spaces. My work explores themes of consciousness, 
              identity, and human experience through cutting-edge technology.
            </p>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.7',
              opacity: 0.7,
              fontWeight: '300'
            }}>
              Each project is an experiment in merging art with technology, creating immersive 
              experiences that challenge perception and invite contemplation.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 60px',
          background: 'linear-gradient(135deg, rgba(15,15,25,0.97) 0%, rgba(25,30,45,0.97) 50%, rgba(20,20,30,0.97) 100%)',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            maxWidth: '700px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '100',
              letterSpacing: '4px',
              marginBottom: '40px',
              textTransform: 'uppercase'
            }}>
              Let's Create
            </h2>
            <div style={{
              width: '60px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #88aaff, transparent)',
              margin: '0 auto 40px',
              opacity: 0.8
            }}></div>
            <p style={{
              fontSize: '1.3rem',
              lineHeight: '1.7',
              opacity: 0.8,
              marginBottom: '50px',
              fontWeight: '300'
            }}>
              Interested in collaborating on innovative digital experiences?<br/>
              Let's explore new possibilities together.
            </p>
            <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="mailto:contact@oyxr.com" 
                style={{
                  background: 'linear-gradient(45deg, #88aaff, #6699ff)',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  transition: 'all 0.4s ease',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontWeight: '300'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)'
                  e.target.style.boxShadow = '0 15px 40px rgba(136,170,255,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  )
}

export default App
