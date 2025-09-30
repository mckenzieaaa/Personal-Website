import React from 'react'
import './App.css'

function App() {
  const base = import.meta.env.BASE_URL || '/'
  const projects = [
    { title: '1-Virtual Soul', images: ['image001.jpg','image002.jpg','image003.jpg','image004.jpg','image005.jpg','image006.jpg','image007.jpg'] },
    { title: '2-Nether Portal', images: ['image008.jpg','image009.jpg','image010.jpg','image011.jpg','image013.jpg','image014.jpg'] },
    { title: '3-Prayer of Wind and Bloom', images: ['image015.jpg','image016.jpg','image017.jpg','image018.jpg','image019.jpg'] },
    { title: '4-Unnatural Chronologies', images: ['image020.jpg','image021.jpg','image022.jpg','image023.jpg','image024.jpg','image025.jpg','image026.jpg'] },
  ]

  const nav = [
    { label: 'HOME', href: '#home' },
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ]

  const imgUrl = (folder, file) => `${base}images/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`

  return (
    <div style={{ minHeight: '100vh', color: '#fff', background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #181818 100%)', fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, background: 'rgba(0,0,0,0.15)', borderBottom: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', zIndex: 10 }}>
        {nav.map(i => (
          <a key={i.label} href={i.href} style={{ color: '#fff', textDecoration: 'none', letterSpacing: 2 }}>{i.label}</a>
        ))}
      </nav>

      <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: 70 }}>
        <h1 style={{ fontSize: '64px', margin: 0, letterSpacing: 8, background: 'linear-gradient(90deg, #88aaff, #ffffff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>OYXR</h1>
        <p style={{ marginTop: 16, opacity: 0.8 }}>Digital Art, Interactive Experiences, Visual Stories</p>
      </section>

      <section id="work" style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 300, letterSpacing: 2, marginBottom: 40 }}>Featured Work</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {projects.map(p => (
            <div key={p.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 16 }}>
              <div style={{ fontWeight: 500, color: '#88aaff', marginBottom: 12 }}>{p.title}</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.images.map(img => (
                  <img key={img} src={imgUrl(p.title, img)} alt={img} style={{ width: 76, height: 76, objectFit: 'cover', borderRadius: 8, background: '#111', border: '1px solid rgba(255,255,255,0.08)' }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={{ padding: '60px 24px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 300, letterSpacing: 2, marginBottom: 12 }}>About</h2>
        <p style={{ opacity: 0.8 }}>I am a digital artist and creative technologist exploring the intersection of technology, emotion, and human experience.</p>
      </section>

      <section id="contact" style={{ padding: '60px 24px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 300, letterSpacing: 2, marginBottom: 12 }}>Get In Touch</h2>
        <a href="mailto:contact@oyxr.com" style={{ color: '#88aaff', textDecoration: 'none' }}>contact@oyxr.com</a>
      </section>
    </div>
  )
}

export default App
