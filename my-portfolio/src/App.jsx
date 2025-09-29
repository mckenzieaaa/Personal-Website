import React, { useState, useEffect } from 'react'
import ThreeScene from './components/ThreeScene'
import projectsData from './data/projects.json'
import './App.css'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // Load projects data
    setProjects(projectsData.filter(project => project.featured))
  }, [])

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: 'white' }}>
      {/* Header with personal info */}
      <header style={{ 
        position: 'fixed', 
        zIndex: 10, 
        top: 40, 
        left: 40,
        fontSize: '18px'
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: '2.5rem', 
          fontWeight: '300',
          letterSpacing: '2px'
        }}>
          Your Name
        </h1>
        <p style={{ 
          margin: '10px 0', 
          fontSize: '1.2rem',
          opacity: 0.8,
          letterSpacing: '1px'
        }}>
          Creative Developer & Designer
        </p>
        <p style={{ 
          margin: 0, 
          fontSize: '1rem',
          opacity: 0.6,
          maxWidth: '400px',
          lineHeight: '1.5'
        }}>
          An Easter egg hunter in reality, raiding Earth-Online for creative treasures.
        </p>
      </header>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        zIndex: 10,
        top: 40,
        right: 40,
        fontSize: '1rem'
      }}>
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          gap: '30px'
        }}>
          <li><a href="#work" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Work</a></li>
          <li><a href="#about" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>About</a></li>
          <li><a href="#contact" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Contact</a></li>
        </ul>
      </nav>

      {/* Main 3D Scene */}
      <main style={{ 
        minHeight: '100vh', 
        width: '100vw',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <ThreeScene />
        
        {/* Center message */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 5,
          pointerEvents: 'none'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '100',
            letterSpacing: '3px',
            margin: '0 0 20px 0',
            opacity: 0.9
          }}>
            PORTFOLIO
          </h2>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.7,
            letterSpacing: '2px'
          }}>
            Scroll to explore creative treasures
          </p>
        </div>
      </main>

      {/* About Section */}
      <section id="about" style={{
        minHeight: '100vh',
        padding: '100px 40px',
        background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,26,46,0.95) 50%, rgba(22,33,62,0.95) 100%)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', letterSpacing: '2px' }}>About Me</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8, marginBottom: '30px' }}>
            I'm a creative developer who sees the digital world as an endless playground. 
            Like an easter egg hunter exploring every corner of reality, I search for hidden 
            gems and creative possibilities in the intersection of technology and art.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', opacity: 0.7 }}>
            My mission is to craft immersive digital experiences that surprise, delight, 
            and inspire. Every project is a treasure hunt for that perfect blend of 
            functionality and magic.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" style={{
        minHeight: '100vh',
        padding: '100px 40px',
        background: 'linear-gradient(135deg, rgba(22,33,62,0.95) 0%, rgba(26,26,46,0.95) 50%, rgba(10,10,10,0.95) 100%)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '60px', letterSpacing: '2px', textAlign: 'center' }}>Featured Work</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
          }}>
            {projects.map((project) => (
              <div key={project.id} style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '30px',
                borderRadius: '15px',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)'
              }} 
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px)'
                e.target.style.boxShadow = '0 20px 40px rgba(136,170,255,0.2)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}>
                
                {/* Project Image Placeholder */}
                <div style={{
                  width: '100%',
                  height: '200px',
                  background: 'linear-gradient(135deg, #88aaff, #0066cc)',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  opacity: 0.7
                }}>
                  Project Image
                </div>

                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#88aaff' }}>
                  {project.title}
                </h3>
                
                <p style={{ opacity: 0.7, lineHeight: '1.6', marginBottom: '20px' }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} style={{
                        background: 'rgba(136,170,255,0.2)',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        border: '1px solid rgba(136,170,255,0.3)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div style={{ display: 'flex', gap: '15px' }}>
                  <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" style={{
                    color: '#88aaff',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    padding: '8px 16px',
                    border: '1px solid #88aaff',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#88aaff'
                    e.target.style.color = '#000'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent'
                    e.target.style.color = '#88aaff'
                  }}>
                    View PDF
                  </a>
                  
                  {project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{
                      color: '#88aaff',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      padding: '8px 16px',
                      border: '1px solid rgba(136,170,255,0.5)',
                      borderRadius: '20px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#88aaff'
                      e.target.style.background = 'rgba(136,170,255,0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = 'rgba(136,170,255,0.5)'
                      e.target.style.background = 'transparent'
                    }}>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <button style={{
              background: 'transparent',
              border: '2px solid #88aaff',
              color: '#88aaff',
              padding: '12px 30px',
              borderRadius: '30px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#88aaff'
              e.target.style.color = '#000'
              e.target.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = '#88aaff'
              e.target.style.transform = 'scale(1)'
            }}>
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        minHeight: '100vh',
        padding: '100px 40px',
        background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,26,46,0.95) 100%)',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', letterSpacing: '2px' }}>Let's Create Together</h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '40px' }}>
            Ready to embark on a creative treasure hunt?
          </p>
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
            <a href="mailto:your@email.com" style={{
              color: '#88aaff',
              textDecoration: 'none',
              fontSize: '1.1rem',
              opacity: 0.8,
              transition: 'opacity 0.3s ease'
            }}>Email</a>
            <a href="#" style={{
              color: '#88aaff',
              textDecoration: 'none',
              fontSize: '1.1rem',
              opacity: 0.8,
              transition: 'opacity 0.3s ease'
            }}>LinkedIn</a>
            <a href="#" style={{
              color: '#88aaff',
              textDecoration: 'none',
              fontSize: '1.1rem',
              opacity: 0.8,
              transition: 'opacity 0.3s ease'
            }}>GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px',
        textAlign: 'center',
        background: 'rgba(10,10,10,0.9)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        zIndex: 1
      }}>
        <p style={{ opacity: 0.6, margin: 0 }}>
          © 2025 Your Name. All treasures reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
