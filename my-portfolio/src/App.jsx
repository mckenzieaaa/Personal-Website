import { useState } from 'react'
import './App.css';
import React from 'react';

function App() {
  // 作品区数据
  const projects = [
    {
      title: '1-Virtual Soul',
      images: [
        'image001.jpg','image002.jpg','image003.jpg','image004.jpg','image005.jpg','image006.jpg','image007.jpg'
      ]
    },
    {
      title: '2-Nether Portal',
      images: [
        'image008.jpg','image009.jpg','image010.jpg','image011.jpg','image013.jpg','image014.jpg'
      ]
    },
    {
      title: '3-Prayer of Wind and Bloom',
      images: [
        'image015.jpg','image016.jpg','image017.jpg','image018.jpg','image019.jpg'
      ]
    },
    {
      title: '4-Unnatural Chronologies',
      images: [
        'image020.jpg','image021.jpg','image022.jpg','image023.jpg','image024.jpg','image025.jpg','image026.jpg'
      ]
    }
  ];

  // 极简风格首页和导航
  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #181818 100%)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
      color: '#fff'
    }}>
      {/* 动态渐变背景粒子层，可后续集成Three.js/Canvas */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'linear-gradient(120deg, #181818 60%, #222 100%)',
        opacity: 0.7
      }} />

      {/* 极简导航栏 */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80px',
        background: 'rgba(0,0,0,0.15)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.04)'
      }}>
        <div style={{
          display: 'flex',
          gap: '60px',
          alignItems: 'center',
          fontSize: '1.1rem',
          letterSpacing: '2px',
          fontWeight: 300
        }}>
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.1rem',
                letterSpacing: '2px',
                position: 'relative',
                padding: '0 8px',
                transition: 'color 0.3s cubic-bezier(.4,0,.2,1), transform 0.3s cubic-bezier(.4,0,.2,1)',
                fontWeight: 300
              }}
              onMouseEnter={e => {
                e.target.style.color = '#88aaff';
                e.target.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={e => {
                e.target.style.color = '#fff';
                e.target.style.transform = 'scale(1)';
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* OYXR字母居中，极简风格 */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        position: 'relative'
      }}>
        <div style={{
          fontSize: '7vw',
          fontWeight: 900,
          letterSpacing: '0.2em',
          color: '#fff',
          textShadow: '0 0 60px #88aaff44',
          marginBottom: '2vw',
          background: 'linear-gradient(90deg, #88aaff 30%, #fff 70%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          userSelect: 'none',
          lineHeight: 1.1
        }}>
          OYXR
        </div>
        <div style={{
          fontSize: '1.5vw',
          fontWeight: 300,
          color: '#88aaff',
          letterSpacing: '0.1em',
          marginBottom: '2vw',
          opacity: 0.8,
          textAlign: 'center'
        }}>
          An Easter egg hunter, raiding Earth-Online for treasures
        </div>
        <div style={{
          fontSize: '1vw',
          fontWeight: 300,
          color: '#fff',
          opacity: 0.7,
          textAlign: 'center',
          marginBottom: '2vw'
        }}>
          McKenzie.ouyang@gmail.com
        </div>
        <div style={{
          width: '60vw',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #88aaff, transparent)',
          margin: '2vw auto',
          opacity: 0.5
        }} />
      </section>

      {/* ...后续作品区和内容区... */}
    </div>
  );
}

export default App;
