import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  
  // 简化的项目数据，避免外部依赖
  const projects = [
    {
      id: 'virtual-soul',
      title: 'Virtual Soul',
      category: 'Digital Painting',
      year: '2024',
      image: `${import.meta.env.BASE_URL}images/1-Virtual Soul/image001.jpg`,
      description: 'A series exploring the ethereal essence of identity in digital realms.'
    },
    {
      id: 'nether-portal', 
      title: 'Nether Portal',
      category: 'Generative Art',
      year: '2023',
      image: `${import.meta.env.BASE_URL}images/2-Nether Portal/image008.jpg`,
      description: 'Hypnotic tunnels and geometry bending through imaginary space.'
    }
  ];

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ 
      fontFamily: "'Helvetica Neue', Arial, sans-serif", 
      color: 'white',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1925 50%, #0f0f19 100%)'
    }}>
      {/* 导航栏 */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '20px 40px',
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold',
            color: '#88aaff'
          }}>
            XINRAN OUYANG
          </div>
          
          <div style={{ display: 'flex', gap: '30px' }}>
            {['Home', 'Work', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: currentSection === item.toLowerCase() ? '#88aaff' : 'rgba(255,255,255,0.7)',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main style={{ paddingTop: '80px' }}>
        
        {/* 英雄区域 */}
        <section id="home" style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '100',
            letterSpacing: '4px',
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #88aaff, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            CREATIVE VISUAL ARTIST
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.8,
            maxWidth: '600px',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Digital art that explores the intersection of technology, emotion, and human experience
          </p>
          <button
            onClick={() => scrollToSection('work')}
            style={{
              background: 'linear-gradient(45deg, #88aaff, #6699ff)',
              border: 'none',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '25px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Explore Work
          </button>
        </section>

        {/* 作品区域 */}
        <section id="work" style={{
          minHeight: '100vh',
          padding: '80px 40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '100',
            textAlign: 'center',
            marginBottom: '60px',
            letterSpacing: '2px'
          }}>
            Featured Work
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px'
          }}>
            {projects.map((project) => (
              <div 
                key={project.id}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '30px',
                  borderRadius: '15px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(136,170,255,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '250px',
                  marginBottom: '20px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  background: 'rgba(136,170,255,0.1)'
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#88aaff',
                    fontSize: '1.2rem'
                  }}>
                    {project.title}
                  </div>
                </div>
                
                <h3 style={{
                  fontSize: '1.4rem',
                  marginBottom: '10px',
                  color: '#88aaff'
                }}>
                  {project.title}
                </h3>
                
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  marginBottom: '15px',
                  opacity: 0.8
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
                    background: 'rgba(136,170,255,0.1)',
                    padding: '5px 10px',
                    borderRadius: '15px'
                  }}>
                    {project.category}
                  </span>
                  <span style={{
                    fontSize: '0.9rem',
                    opacity: 0.6
                  }}>
                    {project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 关于区域 */}
        <section id="about" style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '80px 40px'
        }}>
          <div style={{
            maxWidth: '600px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '100',
              marginBottom: '30px',
              letterSpacing: '2px'
            }}>
              About
            </h2>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.7',
              opacity: 0.8
            }}>
              I am a digital artist and creative technologist working at the intersection 
              of art, technology, and human emotion. My work explores how digital mediums 
              can express complex feelings and experiences through innovative visual narratives.
            </p>
          </div>
        </section>

        {/* 联系区域 */}
        <section id="contact" style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '80px 40px'
        }}>
          <div style={{
            maxWidth: '500px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '100',
              marginBottom: '30px',
              letterSpacing: '2px'
            }}>
              Get In Touch
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              opacity: 0.8,
              marginBottom: '40px'
            }}>
              Interested in collaborating on innovative digital experiences?
              Let's explore new possibilities together.
            </p>
            <a 
              href="mailto:contact@xinranouyang.com"
              style={{
                background: 'linear-gradient(45deg, #88aaff, #6699ff)',
                color: 'white',
                textDecoration: 'none',
                padding: '15px 30px',
                borderRadius: '25px',
                fontSize: '1rem',
                transition: 'transform 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;