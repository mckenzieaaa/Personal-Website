import React, { useState, useEffect } from 'react';
import ThreeModel from './components/ThreeModel';
import FluidParticlesPage from './components/FluidParticlesPage';

// Portfolio website - Homepage and Work sections only
function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [selectedTag, setSelectedTag] = useState('all');
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'fluid'
  
  // 加载状态
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // 项目数据，包含图片路径和软件标签
  const projects = [
    {
      id: 'virtual-soul',
      title: 'Virtual Soul',
      category: 'Digital Art',
      year: '2024',
      description: 'A series exploring the ethereal essence of identity in digital realms.',
      software: ['photoshop', 'aftereffects', 'cinema4d', '3dmax', 'unrealengine'],
      image: '/Personal-Website/images/1-Virtual%20Soul/image001.jpg',
      gallery: [
        '/Personal-Website/images/1-Virtual%20Soul/image001.jpg',
        '/Personal-Website/images/1-Virtual%20Soul/image002.jpg',
        '/Personal-Website/images/1-Virtual%20Soul/image003.jpg',
        '/Personal-Website/images/1-Virtual%20Soul/image004.jpg',
        '/Personal-Website/images/1-Virtual%20Soul/image005.jpg',
        '/Personal-Website/images/1-Virtual%20Soul/image006.jpg',
        '/Personal-Website/images/1-Virtual%20Soul/image007.jpg'
      ]
    },
    {
      id: 'nether-portal', 
      title: 'Nether Portal',
      category: 'Generative Art',
      year: '2023',
      description: 'Hypnotic tunnels and geometry bending through imaginary space. This project incorporates AI for code generation and image creation.',
      software: ['touchdesigner', 'aftereffects', 'photoshop', 'arduino', 'ai'],
      image: '/Personal-Website/images/2-Nether%20Portal/image008.jpg',
      gallery: [
        '/Personal-Website/images/2-Nether%20Portal/image008.jpg',
        '/Personal-Website/images/2-Nether%20Portal/image009.jpg',
        '/Personal-Website/images/2-Nether%20Portal/image010.jpg',
        '/Personal-Website/images/2-Nether%20Portal/image011.jpg',
        '/Personal-Website/images/2-Nether%20Portal/image013.jpg',
        '/Personal-Website/images/2-Nether%20Portal/image014.jpg'
      ]
    },
    {
      id: 'prayer-bloom',
      title: 'Prayer of Wind and Bloom',
      category: 'Interactive Installation',
      year: '2023',
      description: 'An immersive experience connecting nature and technology. This project combines digital tools with traditional handcraft techniques.',
      software: ['arduino', 'photoshop'],
      image: '/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image015.jpg',
      gallery: [
        '/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image015.jpg',
        '/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image016.jpg',
        '/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image017.jpg',
        '/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image018.jpg',
        '/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image019.jpg'
      ]
    },
    {
      id: 'unnatural-chronologies',
      title: 'Unnatural Chronologies',
      category: 'Video Art',
      year: '2022',
      description: 'A meditation on time and digital decay through glitch aesthetics.',
      software: ['touchdesigner', 'aftereffects', 'photoshop', 'artivive', 'blender'],
      image: '/Personal-Website/images/4-Unnatural%20Chronologies/image020.jpg',
      gallery: [
        '/Personal-Website/images/4-Unnatural%20Chronologies/image020.jpg',
        '/Personal-Website/images/4-Unnatural%20Chronologies/image021.jpg',
        '/Personal-Website/images/4-Unnatural%20Chronologies/image022.jpg',
        '/Personal-Website/images/4-Unnatural%20Chronologies/image023.jpg',
        '/Personal-Website/images/4-Unnatural%20Chronologies/image024.jpg',
        '/Personal-Website/images/4-Unnatural%20Chronologies/image025.jpg',
        '/Personal-Website/images/4-Unnatural%20Chronologies/image026.jpg'
      ]
    }
  ];

  // 软件标签配置
  const softwareTags = [
    { id: 'all', name: 'All', icon: '🎨' },
    { id: 'photoshop', name: 'Photoshop', icon: '🖼️' },
    { id: 'blender', name: 'Blender', icon: '🌪️' },
    { id: 'aftereffects', name: 'After Effects', icon: '🎬' },
    { id: 'cinema4d', name: 'Cinema 4D', icon: '🎭' },
    { id: 'touchdesigner', name: 'TouchDesigner', icon: '⚡' },
    { id: 'arduino', name: 'Arduino', icon: '🔧' },
    { id: '3dmax', name: '3D Max', icon: '🏗️' },
    { id: 'unrealengine', name: 'Unreal Engine', icon: '🎮' },
    { id: 'ai', name: 'AI Tools', icon: '🤖' },
    { id: 'artivive', name: 'Artivive', icon: '🔮' }
  ];

  // 筛选项目
  const filteredProjects = selectedTag === 'all' 
    ? projects 
    : projects.filter(project => project.software.includes(selectedTag));

  // 旋转画廊控制函数
  const rotateGallery = (direction) => {
    if (isRotating) return;
    setIsRotating(true);
    
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
    
    setTimeout(() => setIsRotating(false), 800);
  };

  // 自动旋转
  useEffect(() => {
    const interval = setInterval(() => {
      if (!selectedProject && !isRotating) {
        rotateGallery('next');
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [selectedProject, isRotating]);

  // 加载动画效果
  useEffect(() => {
    const loadingTimer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadingTimer);
          setTimeout(() => setIsLoading(false), 300); // 缩短延迟时间
          return 100;
        }
        return prev + Math.random() * 25; // 加快进度增长
      });
    }, 50); // 缩短间隔时间

    return () => clearInterval(loadingTimer);
  }, []);

  // 如果正在加载，显示加载屏幕
  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        color: 'white',
        fontFamily: "'Inter', sans-serif"
      }}>
        {/* Logo 动画 */}
        <div style={{
          marginBottom: '40px',
          animation: 'pulse 2s ease-in-out infinite',
          transform: `scale(${1 + Math.sin(Date.now() / 500) * 0.1})`
        }}>
          <img 
            src="/Personal-Website/images/logo111.svg" 
            alt="OYXR Logo" 
            style={{
              width: '100px',
              height: '100px',
              filter: 'invert(1)',
              opacity: 0.9,
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '15px',
              border: '3px solid rgba(255,255,255,0.8)',
              boxShadow: '0 0 30px rgba(255,255,255,0.3)'
            }}
          />
        </div>

        {/* 品牌名称 */}
        <div style={{
          fontSize: '2rem',
          fontWeight: '300',
          color: 'white',
          letterSpacing: '0.2em',
          marginBottom: '30px',
          fontFamily: "'Inter', sans-serif"
        }}>
          OYXR
        </div>

        {/* 加载文字 */}
        <div style={{
          fontSize: '1rem',
          color: 'rgba(255,255,255,0.7)',
          letterSpacing: '0.1em',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          Loading<br/>
          <span style={{ opacity: 0.5 }}>Step Into My Universe</span>
        </div>

        {/* 进度条 */}
        <div style={{
          width: '300px',
          height: '3px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '2px',
          overflow: 'hidden',
          marginBottom: '20px'
        }}>
          <div style={{
            width: `${loadingProgress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #ffffff 0%, #888888 50%, #ffffff 100%)',
            borderRadius: '2px',
            transition: 'width 0.3s ease',
            boxShadow: '0 0 10px rgba(255,255,255,0.5)'
          }} />
        </div>

        {/* 进度百分比 */}
        <div style={{
          fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.8)',
          letterSpacing: '0.1em'
        }}>
          {Math.round(loadingProgress)}%
        </div>

        {/* 3D旋转的粒子效果 */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          pointerEvents: 'none',
          zIndex: -1
        }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                background: 'rgba(255,255,255,0.3)',
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: `
                  translate(-50%, -50%) 
                  rotate(${i * 18}deg) 
                  translateY(-${100 + i * 10}px)
                  rotate(${Date.now() / (1000 + i * 100)}deg)
                `,
                animation: `float ${2 + i * 0.1}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* CSS动画定义 */}
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translate(-50%, -50%) rotate(${Math.random() * 360}deg) translateY(-100px) scale(0.8); }
            50% { transform: translate(-50%, -50%) rotate(${Math.random() * 360}deg) translateY(-120px) scale(1.2); }
          }
        `}</style>
      </div>
    );
  }

  // 如果在流体粒子页面，显示该页面
  if (currentPage === 'fluid') {
    return (
      <div style={{ position: 'relative' }}>
        {/* 返回按钮 */}
        <button
          onClick={() => setCurrentPage('home')}
          style={{
            position: 'fixed',
            top: '30px',
            left: '30px',
            zIndex: 1000,
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontFamily: "'Inter', sans-serif",
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          }}
        >
          ← Back to Portfolio
        </button>
        <FluidParticlesPage />
      </div>
    );
  }

  return (
        <div style={{
      width: '100vw',
      height: '100vh',
      background: '#000000',
      color: 'white',
      margin: 0,
      padding: 0,
      overflow: 'hidden auto',
      scrollSnapType: 'y mandatory'
    }}>
      {/* CSS动画 */}
      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.4; transform: translateY(0px); }
          50% { opacity: 1; transform: translateY(-5px); }
        }
      `}</style>

      {/* 首页 - 个人介绍 + 3D画廊预览 */}
      <section style={{
        minHeight: '100vh',
        height: '100vh',
        width: '100vw',
        padding: '40px',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        overflow: 'hidden'
      }}>
        {/* 左侧：个人介绍 */}
        <div style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 60px',
          zIndex: 2,
          maxWidth: '600px'
        }}>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <h1 style={{
              fontSize: 'clamp(4rem, 8vw, 6rem)',
              fontWeight: '100',
              margin: '0 0 30px 0',
              letterSpacing: '-0.03em',
              lineHeight: '1.1',
              background: 'linear-gradient(135deg, #ffffff 0%, #888888 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: "'Inter', sans-serif"
            }}>
              OYXR
            </h1>

            <div style={{
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.15em',
              marginBottom: '60px',
              textTransform: 'uppercase',
              fontWeight: '300',
              fontFamily: "'Inter', sans-serif",
              whiteSpace: 'nowrap'
            }}>
              Designer · Coder · Gamer · Occasional Reality Glitcher
            </div>

            {/* Fluid Particles 按钮 */}
            <button
              onClick={() => setCurrentPage('fluid')}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'rgba(255, 255, 255, 0.8)',
                padding: '18px 40px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontFamily: "'Inter', sans-serif",
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.15em',
                marginBottom: '40px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(100, 120, 255, 0.2)';
                e.target.style.borderColor = 'rgba(100, 120, 255, 0.4)';
                e.target.style.color = 'rgba(255, 255, 255, 1)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              🌊 FLUID PARTICLES
            </button>

            {/* 装饰性分隔线 */}
            <div style={{
              width: '60px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              margin: '0 auto 30px'
            }} />

            {/* 滚动提示 */}
            <div style={{
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif",
              animation: 'fadeInOut 2s ease-in-out infinite'
            }}>
              Scroll to Explore
            </div>
          </div>
        </div>

        {/* 右侧：作品预览画廊 */}
        <div style={{
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '0 80px 0 20px',
          perspective: '1000px',
          position: 'relative'
        }}>
          {/* 背景3D模型 */}
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '-100px',
            width: '300px',
            height: '300px',
            opacity: 0.3,
            zIndex: 0,
            pointerEvents: 'none'
          }}>
            <ThreeModel 
              modelSize={1.5}
              rotationSpeed={0.01}
              showWireframe={true}
              color={0x4a9eff}
              geometry='torus'
            />
          </div>

          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '700px',
            height: '400px',
            zIndex: 1
          }}>
            {/* 旋转的作品预览 */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '600px',
              height: '300px',
              transform: `translate(-50%, -50%) rotateY(${currentIndex * -90}deg)`,
              transformStyle: 'preserve-3d',
              transition: isRotating ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
            }}>
              {projects.map((project, index) => {
                const angle = index * 90;
                const isActive = index === currentIndex;
                
                return (
                  <div
                    key={project.id}
                    style={{
                      position: 'absolute',
                      width: '450px',
                      height: '280px',
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(300px)`,
                      transformStyle: 'preserve-3d',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: 'rgba(0,0,0,0.8)',
                      borderRadius: '16px',
                      border: isActive ? '2px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.1)',
                      overflow: 'hidden',
                      position: 'relative',
                      transform: isActive ? 'scale(1.05)' : 'scale(0.9)',
                      opacity: isActive ? 1 : 0.7,
                      transition: 'all 0.3s ease',
                      boxShadow: isActive ? '0 20px 40px rgba(0,0,0,0.5)' : '0 10px 20px rgba(0,0,0,0.3)',
                      display: 'flex',
                      padding: '20px',
                      gap: '20px'
                    }}>
                      {/* 图片容器 - 保持原始比例，占据左侧 */}
                      <div style={{
                        flex: '2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        borderRadius: '12px',
                        overflow: 'hidden'
                      }}>
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            borderRadius: '8px'
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* 备用显示 */}
                        <div style={{
                          display: 'none',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'rgba(255,255,255,0.6)',
                          fontSize: '1rem',
                          fontFamily: "'Inter', sans-serif",
                          textAlign: 'center',
                          padding: '20px'
                        }}>
                          {project.title}
                        </div>
                      </div>
                      
                      {/* 作品信息 - 占据右侧 */}
                      <div style={{
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '10px 0'
                      }}>
                        <div style={{
                          fontSize: '0.7rem',
                          color: 'rgba(255,255,255,0.6)',
                          letterSpacing: '0.1em',
                          marginBottom: '12px',
                          textTransform: 'uppercase',
                          fontFamily: "'Inter', sans-serif"
                        }}>
                          {project.category} • {project.year}
                        </div>
                        
                        <h3 style={{
                          fontSize: '1.1rem',
                          fontWeight: '500',
                          margin: '0',
                          color: 'white',
                          letterSpacing: '-0.01em',
                          fontFamily: "'Inter', sans-serif",
                          lineHeight: '1.3'
                        }}>
                          {project.title}
                        </h3>
                      </div>

                      {/* 点击指示器 */}
                      <div style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        width: '30px',
                        height: '30px',
                        background: 'rgba(0,0,0,0.7)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '14px',
                        opacity: isActive ? 1 : 0.7,
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}>
                        ↗
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 预览画廊控制 */}
            <div style={{
              position: 'absolute',
              bottom: '-60px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              {/* 左箭头 */}
              <button
                onClick={() => rotateGallery('prev')}
                disabled={isRotating}
                style={{
                  width: '35px',
                  height: '35px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  borderRadius: '50%',
                  cursor: isRotating ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  opacity: isRotating ? 0.5 : 1
                }}
              >
                ←
              </button>

              {/* 项目指示器 */}
              <div style={{
                display: 'flex',
                gap: '8px'
              }}>
                {projects.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      if (!isRotating) {
                        setCurrentIndex(index);
                      }
                    }}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: index === currentIndex 
                        ? 'rgba(255,255,255,0.8)' 
                        : 'rgba(255,255,255,0.3)',
                      cursor: isRotating ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

              {/* 右箭头 */}
              <button
                onClick={() => rotateGallery('next')}
                disabled={isRotating}
                style={{
                  width: '35px',
                  height: '35px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  borderRadius: '50%',
                  cursor: isRotating ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  opacity: isRotating ? 0.5 : 1
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
        
        {/* 滚动指示器 */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          fontFamily: "'Inter', sans-serif"
        }}>
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* Featured Work - 左右布局 */}
      <section id="work" style={{
        height: '100vh',
        width: '100vw',
        padding: '40px',
        background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        overflow: 'hidden'
      }}>
        {/* 左侧：标题和标签 */}
        <div style={{
          width: '320px',
          display: 'flex',
          flexDirection: 'column',
          paddingRight: '40px'
        }}>
          {/* 标题 */}
          <div style={{
            marginBottom: '40px'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              margin: '0 0 15px 0',
              letterSpacing: '-0.02em',
              color: 'white',
              fontFamily: "'Inter', sans-serif"
            }}>
              Featured Work
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.6)',
              margin: 0,
              fontFamily: "'Inter', sans-serif",
              lineHeight: '1.6'
            }}>
              A selection of recent projects exploring digital art and interactive experiences
            </p>
          </div>
          
          {/* 垂直软件标签 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            flex: 1,
            maxHeight: 'calc(100vh - 200px)',
            overflowY: 'auto'
          }}>
            {softwareTags.map(tag => (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                style={{
                  background: selectedTag === tag.id 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                    : 'rgba(255, 255, 255, 0.05)',
                  border: selectedTag === tag.id ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: '400',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  textAlign: 'left',
                  fontFamily: "'Inter', sans-serif",
                  transform: selectedTag === tag.id ? 'translateX(5px)' : 'translateX(0)',
                  boxShadow: selectedTag === tag.id ? '0 4px 15px rgba(102, 126, 234, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (selectedTag !== tag.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateX(3px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedTag !== tag.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.transform = 'translateX(0)';
                  }
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{tag.icon}</span>
                <span>{tag.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 右侧：作品网格 */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '20px',
          height: '100%',
          overflow: 'hidden'
        }}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)',
                opacity: 1,
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {/* 图片容器 */}
              <div style={{
                width: '100%',
                flex: '1',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'rgba(0,0,0,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '180px'
              }}>
                <img
                  src={`${project.image}?v=${Date.now()}`}
                  alt={project.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.4s ease'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '1.2rem',
                  fontFamily: "'Inter', sans-serif",
                  textAlign: 'center',
                  height: '100%'
                }}>
                  {project.title}
                </div>
                
                {/* 查看按钮 */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '32px',
                  height: '32px',
                  background: 'rgba(0,0,0,0.7)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '14px',
                  opacity: 0.8,
                  transition: 'all 0.3s ease'
                }}>
                  ↗
                </div>
              </div>
              
              {/* 项目信息 */}
              <div style={{
                padding: '12px 16px',
                background: 'rgba(0,0,0,0.3)',
                borderTop: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '0.1em',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {project.category} • {project.year}
                </div>
                
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '500',
                  margin: '0',
                  color: 'white',
                  letterSpacing: '-0.01em',
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: '1.3'
                }}>
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}
        onClick={() => setSelectedProject(null)}>
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            background: '#1a1a1a',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
          }}
          onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                padding: '10px',
                borderRadius: '50%',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)';
              }}
            >
              ×
            </button>

            {/* Modal content */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              maxHeight: '90vh',
              overflow: 'hidden'
            }}>
              {/* Image gallery */}
              <div style={{
                flex: '1.5',
                position: 'relative',
                minHeight: '500px',
                background: '#0a0a0a'
              }}>
                <img
                  src={selectedProject.gallery[currentIndex]}
                  alt={selectedProject.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                
                {/* Navigation arrows */}
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : selectedProject.gallery.length - 1)}
                      style={{
                        position: 'absolute',
                        left: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.5)',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.5rem',
                        padding: '15px 20px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(0,0,0,0.7)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(0,0,0,0.5)';
                      }}
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setCurrentIndex(currentIndex < selectedProject.gallery.length - 1 ? currentIndex + 1 : 0)}
                      style={{
                        position: 'absolute',
                        right: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.5)',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.5rem',
                        padding: '15px 20px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(0,0,0,0.7)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(0,0,0,0.5)';
                      }}
                    >
                      ›
                    </button>
                  </>
                )}
                
                {/* Image counter */}
                <div style={{
                  position: 'absolute',
                  bottom: '15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {currentIndex + 1} / {selectedProject.gallery.length}
                </div>
              </div>

              {/* Project details */}
              <div style={{
                flex: '1',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start'
              }}>
                <div style={{
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.6)',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {selectedProject.category} • {selectedProject.year}
                  </div>
                  <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '200',
                    margin: '0 0 15px 0',
                    color: 'white',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {selectedProject.title}
                  </h1>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: 'rgba(255,255,255,0.8)',
                    margin: '0 0 30px 0',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {selectedProject.description}
                  </p>
                </div>

                {/* Software tags */}
                <div style={{
                  marginBottom: '30px'
                }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '500',
                    margin: '0 0 12px 0',
                    color: 'rgba(255,255,255,0.8)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Tools Used
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {selectedProject.software.map((software, index) => {
                      const softwareTag = softwareTags.find(tag => tag.id === software);
                      return (
                        <span
                          key={index}
                          style={{
                            padding: '6px 12px',
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '15px',
                            fontSize: '0.8rem',
                            color: 'rgba(255,255,255,0.8)',
                            fontFamily: "'Inter', sans-serif",
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          {softwareTag?.icon} {softwareTag?.name || software}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
