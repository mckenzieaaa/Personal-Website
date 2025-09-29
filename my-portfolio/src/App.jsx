import React from 'react'
import ThreeScene from './components/ThreeScene'
import './App.css'

function App() {
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '30px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Project {i}</h3>
                <p style={{ opacity: 0.7, lineHeight: '1.6' }}>
                  A creative treasure discovered through exploration and innovation. 
                  This project showcases the intersection of technology and artistry.
                </p>
              </div>
            ))}
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
