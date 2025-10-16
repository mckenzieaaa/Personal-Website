/**
 * Fluid Particle System - 快速使用指南
 * 
 * 这个文件包含了如何自定义和扩展流体粒子系统的示例代码
 */

// ============================================
// 1. 调整粒子数量
// ============================================
// 在 FluidParticlesPage.jsx 中找到这一行：
const PARTICLE_COUNT = 3000; // 减少到 1500 可以提升性能，增加到 5000 可以更密集

// ============================================
// 2. 更改颜色方案
// ============================================
// 在 Particle 类的 getRandomColor() 方法中：
getRandomColor() {
  const colors = [
    // 尝试不同的颜色主题：
    
    // 火焰主题
    // { r: 255, g: 69, b: 0 },   // 橙红
    // { r: 255, g: 140, b: 0 },  // 橙
    // { r: 255, g: 215, b: 0 },  // 金
    
    // 海洋主题
    // { r: 0, g: 105, b: 148 },   // 深海蓝
    // { r: 0, g: 191, b: 255 },   // 天蓝
    // { r: 64, g: 224, b: 208 },  // 青绿
    
    // 霓虹主题
    // { r: 255, g: 0, b: 255 },   // 洋红
    // { r: 0, g: 255, b: 255 },   // 青色
    // { r: 255, g: 255, b: 0 },   // 黄色
    
    // 默认主题（紫蓝渐变）
    { r: 100, g: 200, b: 255 },
    { r: 150, g: 150, b: 255 },
    { r: 200, g: 150, b: 255 },
    { r: 255, g: 200, b: 150 },
    { r: 150, g: 255, b: 200 },
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// ============================================
// 3. 调整流体物理参数
// ============================================
const GRID_SIZE = 20;              // 网格大小（越小=更精细的流体）
const FLUID_DISSIPATION = 0.98;    // 流体衰减（0.95-0.99，越高衰减越慢）
const FLUID_ITERATIONS = 8;        // 流体迭代次数（未使用，预留）

// ============================================
// 4. 修改粒子行为
// ============================================
// 在 Particle.update() 方法中调整：

// 布朗运动强度
this.vx += (Math.random() - 0.5) * 0.1;  // 增大数值=更随机的运动

// 速度衰减
this.vx *= 0.99;  // 降低数值=更快停止

// 粒子生命周期
this.maxLife = Math.random() * 200 + 100;  // 增加数值=更长的生命

// ============================================
// 5. 添加粒子间连线（示例）
// ============================================
// 在 animate() 函数中的粒子绘制后添加：

/*
// 绘制粒子间的连线
const connectionDistance = 80; // 连接距离
for (let i = 0; i < particles.length; i++) {
  for (let j = i + 1; j < particles.length; j++) {
    const dx = particles[i].x - particles[j].x;
    const dy = particles[i].y - particles[j].y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    if (dist < connectionDistance) {
      ctx.beginPath();
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(particles[j].x, particles[j].y);
      ctx.strokeStyle = `rgba(100, 150, 255, ${(1 - dist / connectionDistance) * 0.2})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }
}
*/

// ============================================
// 6. 添加重力效果（示例）
// ============================================
// 在 Particle.update() 方法中添加：

/*
// 添加重力
this.vy += 0.05; // 向下的重力

// 地面反弹
if (this.y > height - 50) {
  this.y = height - 50;
  this.vy *= -0.8; // 反弹并损失能量
}
*/

// ============================================
// 7. 添加吸引/排斥力场（示例）
// ============================================
// 在 handlePointerMove 中可以切换吸引/排斥模式：

/*
const attractMode = e.shiftKey; // 按住 Shift 切换模式
const forceMult = attractMode ? -1 : 1; // 负值=吸引，正值=排斥

addFluidForce(
  x, y, 
  dx * forceMult, 
  dy * forceMult,
  canvasRef.current.width,
  GRID_SIZE,
  fluidVelocityRef.current
);
*/

// ============================================
// 8. 性能优化建议
// ============================================

/**
 * 低性能设备配置：
 * - PARTICLE_COUNT: 1000-1500
 * - GRID_SIZE: 30-40
 * - 移除粒子连线
 * - 减少拖尾效果（增加背景透明度）
 */

/**
 * 高性能设备配置：
 * - PARTICLE_COUNT: 5000-10000
 * - GRID_SIZE: 10-15
 * - 添加粒子连线
 * - 添加高斯模糊效果
 * - 使用 WebGL 代替 Canvas 2D
 */

// ============================================
// 9. 导出为图片（示例功能）
// ============================================

/*
// 添加到组件中的导出函数
const exportImage = () => {
  const canvas = canvasRef.current;
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = 'fluid-particles.png';
  link.href = dataURL;
  link.click();
};

// 添加导出按钮
<button onClick={exportImage}>
  📸 Export Image
</button>
*/

// ============================================
// 10. 添加音频响应（高级功能）
// ============================================

/*
// 使用 Web Audio API 让粒子响应音频
const audioContext = new AudioContext();
const analyser = audioContext.createAnalyser();

// 在 update 中根据音频频率调整粒子速度
analyser.getByteFrequencyData(dataArray);
const bass = dataArray[0] / 255;
this.vx += bass * (Math.random() - 0.5);
*/

export default {};
