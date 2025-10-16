import React, { useRef, useEffect, useState } from 'react';
import './FluidParticlesPage.css';

// 基于 Processing PixelFlow 的流体粒子系统
const FluidParticlesPage = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const fluidVelocityRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0, isPressed: false });
  const animationIdRef = useRef(null);

  const PARTICLE_COUNT = 3000;
  const GRID_SIZE = 20;
  const FLUID_DISSIPATION = 0.98;
  const FLUID_ITERATIONS = 8;

  // 粒子类
  class Particle {
    constructor(width, height) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = 0;
      this.vy = 0;
      this.radius = Math.random() * 2 + 1;
      this.alpha = Math.random() * 0.5 + 0.5;
      this.color = this.getRandomColor();
      this.life = 1.0;
      this.maxLife = Math.random() * 200 + 100;
      this.age = 0;
    }

    getRandomColor() {
      const colors = [
        { r: 100, g: 200, b: 255 },  // 浅蓝
        { r: 150, g: 150, b: 255 },  // 紫蓝
        { r: 200, g: 150, b: 255 },  // 粉紫
        { r: 255, g: 200, b: 150 },  // 橙粉
        { r: 150, g: 255, b: 200 },  // 青绿
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    update(width, height, fluidVelocity, gridSize) {
      // 从流体场中获取速度
      const gridX = Math.floor(this.x / gridSize);
      const gridY = Math.floor(this.y / gridSize);
      const gridWidth = Math.floor(width / gridSize);
      
      if (gridX >= 0 && gridX < gridWidth && gridY >= 0 && gridY < Math.floor(height / gridSize)) {
        const index = gridY * gridWidth + gridX;
        if (fluidVelocity[index]) {
          this.vx += fluidVelocity[index].vx * 0.5;
          this.vy += fluidVelocity[index].vy * 0.5;
        }
      }

      // 添加一些布朗运动
      this.vx += (Math.random() - 0.5) * 0.1;
      this.vy += (Math.random() - 0.5) * 0.1;

      // 速度衰减
      this.vx *= 0.99;
      this.vy *= 0.99;

      // 更新位置
      this.x += this.vx;
      this.y += this.vy;

      // 边界循环
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // 更新生命值
      this.age++;
      this.life = 1.0 - (this.age / this.maxLife);
      
      if (this.life <= 0) {
        this.reset(width, height);
      }
    }

    reset(width, height) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = 0;
      this.vy = 0;
      this.age = 0;
      this.life = 1.0;
      this.color = this.getRandomColor();
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha * this.life})`;
      ctx.fill();
    }
  }

  // 初始化流体场
  const initFluidField = (width, height, gridSize) => {
    const gridWidth = Math.floor(width / gridSize);
    const gridHeight = Math.floor(height / gridSize);
    const field = [];
    
    for (let i = 0; i < gridWidth * gridHeight; i++) {
      field.push({ vx: 0, vy: 0, density: 0 });
    }
    
    return field;
  };

  // 添加流体力
  const addFluidForce = (x, y, dx, dy, width, gridSize, fluidVelocity) => {
    const gridX = Math.floor(x / gridSize);
    const gridY = Math.floor(y / gridSize);
    const gridWidth = Math.floor(width / gridSize);
    
    const radius = 3; // 影响半径
    
    for (let i = -radius; i <= radius; i++) {
      for (let j = -radius; j <= radius; j++) {
        const gx = gridX + i;
        const gy = gridY + j;
        
        if (gx >= 0 && gx < gridWidth && gy >= 0) {
          const index = gy * gridWidth + gx;
          if (fluidVelocity[index]) {
            const dist = Math.sqrt(i * i + j * j);
            const force = Math.max(0, 1 - dist / radius);
            fluidVelocity[index].vx += dx * force * 0.5;
            fluidVelocity[index].vy += dy * force * 0.5;
          }
        }
      }
    }
  };

  // 流体场扩散
  const diffuseFluidField = (fluidVelocity) => {
    for (let cell of fluidVelocity) {
      cell.vx *= FLUID_DISSIPATION;
      cell.vy *= FLUID_DISSIPATION;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // 初始化粒子
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle(width, height));
    }
    particlesRef.current = particles;

    // 初始化流体场
    const fluidVelocity = initFluidField(width, height, GRID_SIZE);
    fluidVelocityRef.current = fluidVelocity;

    // 动画循环
    const animate = () => {
      // 半透明背景产生拖尾效果
      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // 更新流体场
      diffuseFluidField(fluidVelocity);

      // 更新和绘制粒子
      for (let particle of particles) {
        particle.update(width, height, fluidVelocity, GRID_SIZE);
        particle.draw(ctx);
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    // 清空画布开始
    ctx.fillStyle = 'rgba(10, 10, 20, 1)';
    ctx.fillRect(0, 0, width, height);
    
    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  // 鼠标/触摸交互
  const handlePointerDown = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseRef.current = { x, y, prevX: x, prevY: y, isPressed: true };
  };

  const handlePointerMove = (e) => {
    if (!mouseRef.current.isPressed) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const dx = x - mouseRef.current.prevX;
    const dy = y - mouseRef.current.prevY;
    
    addFluidForce(
      x, y, dx, dy,
      canvasRef.current.width,
      GRID_SIZE,
      fluidVelocityRef.current
    );
    
    mouseRef.current = { ...mouseRef.current, x, y, prevX: x, prevY: y };
  };

  const handlePointerUp = () => {
    mouseRef.current.isPressed = false;
  };

  return (
    <div className="fluid-particles-page">
      <div className="fluid-header">
        <h1>Fluid Particle System</h1>
        <p>Interactive particle simulation inspired by Processing PixelFlow</p>
        <p className="instructions">Drag your mouse to create fluid motion</p>
      </div>
      
      <div className="fluid-canvas-container">
        <canvas
          ref={canvasRef}
          width={1400}
          height={800}
          className="fluid-canvas"
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={(e) => {
            e.preventDefault();
            handlePointerDown(e.touches[0]);
          }}
          onTouchMove={(e) => {
            e.preventDefault();
            handlePointerMove(e.touches[0]);
          }}
          onTouchEnd={handlePointerUp}
        />
      </div>

      <div className="fluid-info">
        <div className="info-card">
          <h3>技术说明</h3>
          <ul>
            <li>基于流体动力学的粒子系统</li>
            <li>{PARTICLE_COUNT.toLocaleString()} 个交互粒子</li>
            <li>实时速度场计算</li>
            <li>支持鼠标/触摸交互</li>
          </ul>
        </div>
        
        <div className="info-card">
          <h3>灵感来源</h3>
          <p>
            这个项目受到 Processing 的 PixelFlow 库启发，
            将流体模拟的概念转化为 Web Canvas 实现。
            粒子跟随流体场运动，创造出有机而流畅的视觉效果。
          </p>
        </div>
      </div>
    </div>
  );
};

export default FluidParticlesPage;
