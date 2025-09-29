import React from 'react'
import ThreeScene from './components/ThreeScene'
import './App.css'

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: 'white' }}>
      {/* Header with personal info */}
      <header style={{ 
        position: 'absolute', 
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
          你的名字
        </h1>
        <p style={{ 
          margin: '10px 0', 
          fontSize: '1.2rem',
          opacity: 0.8,
          letterSpacing: '1px'
        }}>
          Interactive Designer & Developer
        </p>
        <p style={{ 
          margin: 0, 
          fontSize: '1rem',
          opacity: 0.6
        }}>
          I create immersive digital experiences
        </p>
      </header>

      {/* Navigation */}
      <nav style={{
        position: 'absolute',
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
        height: '100vh', 
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
            Scroll to explore
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        position: 'absolute',
        bottom: 40,
        left: 40,
        zIndex: 10,
        fontSize: '0.9rem',
        opacity: 0.6
      }}>
        <p>© 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
