import React, { useRef, useEffect } from 'react';

// 粒子参数
const PARTICLE_COUNT = 120;
const COLORS = ['#88aaff', '#ffffff', '#222244', '#aaccff'];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function FluidParticleSystem({ width = 1200, height = 400 }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: randomBetween(0, width),
        y: randomBetween(0, height),
        vx: randomBetween(-0.7, 0.7),
        vy: randomBetween(-0.7, 0.7),
        r: randomBetween(2, 5),
        color: COLORS[Math.floor(Math.random() * COLORS.length)]
      });
    }
    // 让其他 effect 可访问粒子数组
    particlesRef.current = particles;
    canvas.particles = particles;
    let animationId;
    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
      // 连接线
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          let a = particles[i], b = particles[j];
          let dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = '#88aaff44';
            ctx.lineWidth = 1.2;
            ctx.globalAlpha = 0.25;
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        }
      }
    }
    function update() {
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
    }
    function animate() {
      update();
      draw();
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationId);
  }, [width, height]);

  // 鼠标交互：吸引粒子
  useEffect(() => {
    const canvas = canvasRef.current;
    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      // 鼠标附近粒子加速靠近
      for (let p of particlesRef.current || []) {
        let dist = Math.hypot(p.x - mx, p.y - my);
        if (dist < 100) {
          p.vx += (mx - p.x) * 0.0005;
          p.vy += (my - p.y) * 0.0005;
        }
      }
    }
    canvas.addEventListener('mousemove', handleMouseMove);
    return () => canvas.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '18px', background: 'rgba(20,25,40,0.7)' }}
    />
  );
}

export default FluidParticleSystem;
