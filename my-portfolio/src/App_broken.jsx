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
      fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", 
      color: 'white',
      minHeight: '100vh',
      background: '#000000'
    }}>
      {/* 重新设计的导航栏 */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '20px 5vw',
        background: 'rgba(0,0,0,0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          <div style={{ 
            fontSize: '1.2rem', 
            fontWeight: '500',
            color: 'white',
            letterSpacing: '0.1em',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
          }}>
            XINRAN OUYANG
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '60px',
            alignItems: 'center'
          }}>
            {['Home', 'Work', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: currentSection === item.toLowerCase() ? 'white' : 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  letterSpacing: '0.02em',
                  padding: '8px 0',
                  position: 'relative',
                  fontWeight: '300',
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => {
                  if (currentSection !== item.toLowerCase()) {
                    e.target.style.color = 'rgba(255,255,255,0.9)'
                    e.target.style.transform = 'translateY(-1px)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentSection !== item.toLowerCase()) {
                    e.target.style.color = 'rgba(255,255,255,0.6)'
                    e.target.style.transform = 'translateY(0)'
                  }
                }}
              >
                {item}
                {currentSection === item.toLowerCase() && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, white, transparent)',
                    opacity: 0.8
                  }}></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main style={{ paddingTop: '100px' }}>
        
        {/* 重新设计的英雄区域 */}
      {/* 全新Hero Section */}
      <section id="home" style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        position: 'relative',
        margin: 0,
        padding: 0
      }}>
        <div style={{
          textAlign: 'center',
          zIndex: 2
        }}>
          <div style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.3em',
            marginBottom: '30px',
            textTransform: 'uppercase',
            fontWeight: '300',
            fontFamily: "'Inter', sans-serif"
          }}>
            Digital Artist & Creative Technologist
          </div>
          
          <h1 style={{
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            fontWeight: '100',
            margin: '0 0 40px 0',
            letterSpacing: '-0.03em',
            lineHeight: '0.9',
            background: 'linear-gradient(135deg, #ffffff 0%, #888888 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: "'Inter', sans-serif"
          }}>
            Xinran<br/>Ouyang
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            lineHeight: '1.6',
            color: 'rgba(255,255,255,0.7)',
            fontWeight: '300',
            maxWidth: '600px',
            margin: '0 auto 60px auto',
            fontFamily: "'Inter', sans-serif"
          }}>
            Exploring the intersection of technology, creativity, and human<br/>
            experience through immersive digital art and interactive installations.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              style={{
                background: 'white',
                color: 'black',
                border: 'none',
                padding: '16px 32px',
                fontSize: '0.95rem',
                fontWeight: '500',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Inter', sans-serif",
                textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.9)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              View Work
            </button>
            
            <button
              style={{
                background: 'transparent',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '16px 32px',
                fontSize: '0.95rem',
                fontWeight: '400',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Inter', sans-serif",
                textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'white';
                e.target.style.background = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                e.target.style.background = 'transparent';
              }}
            >
              About
            </button>
          </div>
        </div>
        
        {/* 简洁的滚动指示器 */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          fontFamily: "'Inter', sans-serif",
          animation: 'fadeInUp 1s ease 2s both'
        }}>
          SCROLL
        </div>
      </section>        {/* 重新设计的作品区域 */}
        <section id="work" style={{
          minHeight: '100vh',
          padding: '100px 5vw',
          width: '100%',
          background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <div style={{
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.15em',
              marginBottom: '20px',
              textTransform: 'uppercase',
              fontWeight: '300',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
            }}>
              Selected Projects
            </div>
            
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '300',
              margin: 0,
              letterSpacing: '-0.02em',
              color: 'white',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
            }}>
              Featured Work
            </h2>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {projects.map((project) => (
              <div 
                key={project.id}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  padding: '40px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '100%',
                    height: '200px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    borderRadius: '4px',
                    marginBottom: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '1rem',
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    {project.title}
                  </div>
                  
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.1em',
                    marginBottom: '15px',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    {project.category} • {project.year}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '400',
                    margin: '0 0 20px 0',
                    color: 'white',
                    letterSpacing: '-0.01em',
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    {project.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    color: 'rgba(255,255,255,0.7)',
                    margin: '0',
                    fontWeight: '300',
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                  }}>
                    {project.description}
                  </p>
                </div>
                
                {/* 简化的视觉指示器 */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '8px',
                  height: '8px',
                  background: 'rgba(255,255,255,0.3)',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease'
                }}></div>
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
          padding: '80px 50px',
          width: '100%',
          borderTop: '1px solid rgba(255,255,255,0.06)'
        }}>
          <div style={{
            maxWidth: '800px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '100',
              marginBottom: 'clamp(20px, 4vw, 40px)',
              letterSpacing: 'clamp(1px, 0.3vw, 3px)'
            }}>
              About
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              lineHeight: 'clamp(1.5, 3vw, 1.8)',
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
          padding: '80px 50px',
          width: '100%',
          borderTop: '1px solid rgba(255,255,255,0.06)'
        }}>
          <div style={{
            maxWidth: '600px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '100',
              marginBottom: 'clamp(20px, 4vw, 40px)',
              letterSpacing: 'clamp(1px, 0.3vw, 3px)'
            }}>
              Get In Touch
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
              lineHeight: 'clamp(1.5, 3vw, 1.7)',
              opacity: 0.8,
              marginBottom: 'clamp(30px, 5vw, 50px)'
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
                padding: 'clamp(12px, 2vw, 18px) clamp(25px, 4vw, 40px)',
                borderRadius: 'clamp(20px, 3vw, 30px)',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                transition: 'transform 0.3s ease',
                display: 'inline-block',
                letterSpacing: 'clamp(0.5px, 0.1vw, 1px)'
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