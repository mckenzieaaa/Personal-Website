import React, { useState, useEffect } from 'react';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [selectedTag, setSelectedTag] = useState('all');
  const [expandedSection, setExpandedSection] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

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

  // 拖拽处理函数
  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = e.target.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setModalPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

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
      {/* 首页 - 个人介绍 + 3D画廊预览 */}
      <section style={{
        minHeight: '100vh',
        height: '100vh',
        width: '100vw',
        padding: '0 40px',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always'
      }}>
        {/* 左侧：个人信息 */}
        <div style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 80px',
          zIndex: 2
        }}>
          {/* Logo */}
          <div style={{
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <img 
              src="/Personal-Website/images/logo111.svg" 
              alt="OYXR Logo" 
              style={{
                width: '60px',
                height: '60px',
                filter: 'invert(1)',
                opacity: 0.9,
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '8px',
                border: '2px solid rgba(255,255,255,0.8)'
              }}
            />
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '300',
              color: 'white',
              letterSpacing: '0.1em',
              fontFamily: "'Inter', sans-serif"
            }}>
              OYXR
            </div>
          </div>

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
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '100',
            margin: '0 0 30px 0',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            background: 'linear-gradient(135deg, #ffffff 0%, #888888 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: "'Inter', sans-serif"
          }}>
            Xinran<br/>Ouyang
          </h1>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: '1.6',
            color: 'rgba(255,255,255,0.7)',
            fontWeight: '300',
            maxWidth: '500px',
            margin: '0 0 50px 0',
            fontFamily: "'Inter', sans-serif"
          }}>
            Exploring the intersection of technology, creativity, and human
            experience through immersive digital art and interactive installations.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '20px',
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
              onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
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
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              About
            </button>
          </div>
        </div>

        {/* 右侧：作品预览画廊 */}
        <div style={{
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '0 80px 0 20px',
          perspective: '1000px'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '700px',
            height: '400px'
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

      {/* About & Personal Information */}
      <section id="about" style={{
        height: '100vh',
        width: '100vw',
        padding: '80px 40px',
        background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 50%, #1a1a1a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        overflow: 'hidden auto'
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '50px',
          alignItems: 'start',
          height: 'fit-content',
          maxHeight: '100%'
        }}>
          {/* 左侧：个人信息 */}
          <div>
            {/* 头像和标题区域 */}
            <div style={{
              display: 'flex',
              gap: '30px',
              alignItems: 'center',
              marginBottom: '40px'
            }}>
              {/* 头像 */}
              <div style={{
                flexShrink: 0
              }}>
                <div style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '2px solid rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <span style={{
                    fontSize: '3rem',
                    color: 'rgba(255,255,255,0.4)'
                  }}>
                    👤
                  </span>
                  <img
                    src="/Personal-Website/images/xinran-photo.jpg?v=2025100909"
                    alt="Xinran Ouyang"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      opacity: 0
                    }}
                    onLoad={(e) => {
                      e.target.style.opacity = 1;
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* 标题和基本信息 */}
              <div style={{
                flex: 1
              }}>
                <h2 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: '200',
                  margin: '0 0 15px 0',
                  letterSpacing: '-0.02em',
                  color: 'white',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  About Me
                </h2>
                <div style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: '300'
                }}>
                  Xinran Ouyang · Digital Artist & Creative Technologist
                </div>
              </div>
            </div>

            {/* 简介文字 */}
            <div style={{
              marginBottom: '40px'
            }}>
              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.8',
                color: 'rgba(255,255,255,0.9)',
                margin: '0 0 20px 0',
                fontFamily: "'Inter', sans-serif",
                fontWeight: '300'
              }}>
                I'm a digital artist and creative technologist passionate about exploring the intersection of art, technology, and human experience.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'rgba(255,255,255,0.7)',
                margin: 0,
                fontFamily: "'Inter', sans-serif",
                fontWeight: '300'
              }}>
                My work focuses on creating immersive digital experiences that blur the boundaries between the virtual and physical worlds, always seeking to create meaningful connections through innovative technology.
              </p>
            </div>



            {/* 简化的信息卡片 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '20px',
              marginBottom: '30px'
            }}>
              {/* 教育背景卡片 */}
              <div 
                style={{
                  background: expandedSection === 'education' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setExpandedSection(expandedSection === 'education' ? null : 'education')}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: expandedSection === 'education' ? '16px' : '0'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>🎓</span>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    color: 'white',
                    margin: 0,
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Education
                  </h3>
                  <span style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.5)',
                    marginLeft: 'auto',
                    transform: expandedSection === 'education' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}>
                    ▼
                  </span>
                </div>
                
                {expandedSection === 'education' && (
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: '1.6',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    <div style={{ marginBottom: '10px' }}>
                      <strong>Master's in Digital Arts</strong><br/>
                      University of Arts | 2022-2024
                    </div>
                    <div>
                      <strong>Bachelor's in Interactive Media</strong><br/>
                      Design Institute | 2018-2022
                    </div>
                  </div>
                )}
              </div>

              {/* 兴趣爱好卡片 */}
              <div 
                style={{
                  background: expandedSection === 'interests' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setExpandedSection(expandedSection === 'interests' ? null : 'interests')}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: expandedSection === 'interests' ? '16px' : '0'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>💫</span>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    color: 'white',
                    margin: 0,
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Interests
                  </h3>
                  <span style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.5)',
                    marginLeft: 'auto',
                    transform: expandedSection === 'interests' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}>
                    ▼
                  </span>
                </div>
                
                {expandedSection === 'interests' && (
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: '1.6',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    <div style={{ marginBottom: '6px' }}>🎨 Digital Art & Animation</div>
                    <div style={{ marginBottom: '6px' }}>🤖 AI & Machine Learning</div>
                    <div style={{ marginBottom: '6px' }}>🎮 Interactive Experience Design</div>
                    <div>🎵 Electronic Music Production</div>
                  </div>
                )}
              </div>
            </div>

            {/* 技能标签 */}
            <div style={{
              marginBottom: '40px'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '500',
                margin: '0 0 20px 0',
                color: 'white',
                fontFamily: "'Inter', sans-serif"
              }}>
                Skills & Tools
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                {['Digital Art', 'Interactive Design', 'Creative Coding', 'Installation Art', 'Visual Design', 'Creative Direction'].map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '8px 16px',
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.8)',
                      fontFamily: "'Inter', sans-serif",
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 简化联系信息 */}
            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '500',
                margin: '0 0 20px 0',
                color: 'white',
                fontFamily: "'Inter', sans-serif"
              }}>
                Get in Touch
              </h3>
              <div style={{
                display: 'flex',
                gap: '15px',
                flexWrap: 'wrap'
              }}>
                <a
                  href="mailto:McKenzie.ouyang@gmail.com"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontFamily: "'Inter', sans-serif",
                    padding: '10px 20px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                  }}
                >
                  Email
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontFamily: "'Inter', sans-serif",
                    padding: '10px 20px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                  }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* 右侧：技能和联系方式 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            height: '100%',
            paddingTop: '20px'
          }}>
            {/* 技能概览 */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '30px',
              fontFamily: "'Inter', sans-serif"
            }}>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '500',
                color: 'white',
                margin: '0 0 25px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{ fontSize: '1.8rem' }}>⚡</span>
                Skills & Tools
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '15px'
              }}>
                {[
                  { name: 'TouchDesigner', level: '95%', color: '#00ff88' },
                  { name: 'Blender', level: '90%', color: '#ff6b35' },
                  { name: 'After Effects', level: '85%', color: '#9999ff' },
                  { name: 'Cinema 4D', level: '80%', color: '#ffcc00' },
                  { name: 'Arduino', level: '75%', color: '#00ccff' },
                  { name: 'Premiere Pro', level: '85%', color: '#ff3366' }
                ].map((skill, index) => (
                  <div key={index} style={{
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: '12px',
                    padding: '15px',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    <div style={{
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      color: 'rgba(255,255,255,0.9)',
                      marginBottom: '8px'
                    }}>
                      {skill.name}
                    </div>
                    <div style={{
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '6px',
                      height: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        background: skill.color,
                        height: '100%',
                        width: skill.level,
                        borderRadius: '6px',
                        transition: 'width 2s ease'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 联系方式 */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '30px',
              fontFamily: "'Inter', sans-serif"
            }}>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '500',
                color: 'white',
                margin: '0 0 25px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{ fontSize: '1.8rem' }}>�</span>
                Get In Touch
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  <span>🇨🇳</span>
                  <span>+86 15723351973</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  <span>🇭🇰</span>
                  <span>+852 84963034</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  <span>📧</span>
                  <span>McKenzie.ouyang@gmail.com</span>
                </div>
              </div>
            </div>

            {/* 当前状态 */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '25px',
              fontFamily: "'Inter', sans-serif",
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '10px'
              }}>
                🎯
              </div>
              <div style={{
                fontSize: '1.1rem',
                fontWeight: '500',
                color: 'white',
                marginBottom: '8px'
              }}>
                Currently Available
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: '1.5'
              }}>
                Open for creative collaborations and digital art projects
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Page */}
      <section id="contact" style={{
        height: '100vh',
        width: '100vw',
        padding: '80px 40px',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        overflow: 'hidden auto'
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          textAlign: 'center'
        }}>
          {/* 主标题 */}
          <div style={{
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: '200',
              margin: '0 0 20px 0',
              letterSpacing: '-0.02em',
              color: 'white',
              fontFamily: "'Inter', sans-serif"
            }}>
              Let's Connect
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '300'
            }}>
              Ready to collaborate on digital art projects, creative installations, or explore new technologies together.
            </p>
          </div>

          {/* 联系方式网格 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {/* 邮箱 */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '40px 30px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.06)';
              e.target.style.borderColor = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.03)';
              e.target.style.borderColor = 'rgba(255,255,255,0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => window.open('mailto:McKenzie.ouyang@gmail.com')}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '20px'
              }}>
                📧
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '500',
                color: 'white',
                margin: '0 0 15px 0',
                fontFamily: "'Inter', sans-serif"
              }}>
                Email
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.8)',
                margin: '0',
                fontFamily: "'Inter', sans-serif",
                wordBreak: 'break-all'
              }}>
                McKenzie.ouyang@gmail.com
              </p>
            </div>

            {/* 电话 - 中国 */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '40px 30px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.06)';
              e.target.style.borderColor = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.03)';
              e.target.style.borderColor = 'rgba(255,255,255,0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => window.open('tel:+8615723351973')}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '20px'
              }}>
                🇨🇳
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '500',
                color: 'white',
                margin: '0 0 15px 0',
                fontFamily: "'Inter', sans-serif"
              }}>
                China
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.8)',
                margin: '0',
                fontFamily: "'Inter', sans-serif"
              }}>
                +86 15723351973
              </p>
            </div>

            {/* 电话 - 香港 */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '40px 30px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.06)';
              e.target.style.borderColor = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.03)';
              e.target.style.borderColor = 'rgba(255,255,255,0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => window.open('tel:+85284963034')}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '20px'
              }}>
                🇭🇰
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '500',
                color: 'white',
                margin: '0 0 15px 0',
                fontFamily: "'Inter', sans-serif"
              }}>
                Hong Kong
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.8)',
                margin: '0',
                fontFamily: "'Inter', sans-serif"
              }}>
                +852 84963034
              </p>
            </div>
          </div>

          {/* 社交媒体链接 */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontFamily: "'Inter', sans-serif",
                padding: '15px 25px',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                background: 'rgba(255,255,255,0.02)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.borderColor = 'rgba(255,255,255,0.4)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.02)';
                e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>💼</span>
              LinkedIn
            </a>
            
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontFamily: "'Inter', sans-serif",
                padding: '15px 25px',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                background: 'rgba(255,255,255,0.02)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.borderColor = 'rgba(255,255,255,0.4)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.02)';
                e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>📸</span>
              Instagram
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontFamily: "'Inter', sans-serif",
                padding: '15px 25px',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                background: 'rgba(255,255,255,0.02)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.borderColor = 'rgba(255,255,255,0.4)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.02)';
                e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>💻</span>
              GitHub
            </a>
          </div>

          {/* 底部状态 */}
          <div style={{
            marginTop: '60px',
            padding: '25px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '15px',
            maxWidth: '500px',
            margin: '60px auto 0'
          }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '15px'
            }}>
              🚀
            </div>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: '500',
              color: 'white',
              marginBottom: '10px',
              fontFamily: "'Inter', sans-serif"
            }}>
              Currently Available
            </div>
            <div style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: '1.6',
              fontFamily: "'Inter', sans-serif"
            }}>
              Open for creative collaborations, digital art projects, and innovative technology explorations.
            </div>
          </div>
        </div>
      </section>

      {/* 作品详情模态框 */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.9)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
        onClick={() => setSelectedProject(null)}
        >
          <div style={{
            background: '#1a1a1a',
            borderRadius: '12px',
            maxWidth: '800px',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮 */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              ×
            </button>

            {/* 主图片 */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '12px 12px 0 0'
              }}
            />

            {/* 项目信息 */}
            <div style={{
              padding: '30px'
            }}>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.1em',
                marginBottom: '15px',
                textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif"
              }}>
                {selectedProject.category} • {selectedProject.year}
              </div>

              <h2 style={{
                fontSize: '2rem',
                fontWeight: '500',
                margin: '0 0 20px 0',
                color: 'white',
                fontFamily: "'Inter', sans-serif"
              }}>
                {selectedProject.title}
              </h2>

              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'rgba(255,255,255,0.8)',
                margin: '0 0 30px 0',
                fontFamily: "'Inter', sans-serif"
              }}>
                {selectedProject.description}
              </p>

              {/* 作品集图片网格 */}
              {selectedProject.gallery && (
                <div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    color: 'white',
                    marginBottom: '20px',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Gallery
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '25px'
                  }}>
                    {selectedProject.gallery.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${selectedProject.title} ${index + 1}`}
                        style={{
                          width: '100%',
                          height: 'auto',
                          minHeight: '250px',
                          objectFit: 'contain',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          backgroundColor: 'rgba(0,0,0,0.3)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.03)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sharyap风格可拖拽模态弹窗 */}
      {modalContent && (
        <div 
          style={{
            position: 'fixed',
            left: modalPosition.x,
            top: modalPosition.y,
            width: '400px',
            maxHeight: '500px',
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '12px',
            zIndex: 2000,
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            userSelect: 'none'
          }}
        >
          {/* 拖拽标题栏 */}
          <div 
            style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '12px 16px',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              cursor: isDragging ? 'grabbing' : 'grab',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            onMouseDown={handleMouseDown}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: '#ff5f57',
                borderRadius: '50%'
              }}></div>
              <div style={{
                width: '12px',
                height: '12px',
                background: '#ffbd2e',
                borderRadius: '50%'
              }}></div>
              <div style={{
                width: '12px',
                height: '12px',
                background: '#28ca42',
                borderRadius: '50%'
              }}></div>
            </div>
            
            <h3 style={{
              color: 'white',
              fontSize: '0.9rem',
              fontWeight: '500',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              {modalContent === 'about' && 'About Me'}
              {modalContent === 'education' && 'Education'}
              {modalContent === 'contact' && 'Contact'}
              {modalContent === 'awards' && 'Awards'}
              {modalContent === 'interests' && 'Interests'}
              {modalContent === 'skills' && 'Skills'}
            </h3>
            
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '16px',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '4px',
                transition: 'all 0.2s ease'
              }}
              onClick={() => setModalContent(null)}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'rgba(255,255,255,0.7)';
              }}
            >
              ×
            </button>
          </div>

          {/* 内容区域 */}
          <div style={{
            padding: '20px',
            maxHeight: '420px',
            overflow: 'auto',
            color: 'white',
            fontFamily: "'Inter', sans-serif"
          }}>
            {modalContent === 'about' && (
              <div>
                <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '16px' }}>👋</div>
                <p style={{ 
                  fontSize: '0.95rem', 
                  lineHeight: '1.6', 
                  color: 'rgba(255,255,255,0.9)',
                  margin: 0
                }}>
                  I'm a digital artist and creative technologist passionate about exploring the intersection of art, 
                  technology, and human experience. My work focuses on creating immersive digital experiences 
                  that blur the boundaries between the virtual and physical worlds.
                </p>
              </div>
            )}

            {modalContent === 'education' && (
              <div>
                <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '16px' }}>🎓</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <h4 style={{ 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      margin: '0 0 4px 0',
                      color: 'white'
                    }}>
                      Master's in Digital Arts
                    </h4>
                    <p style={{ 
                      fontSize: '0.85rem', 
                      color: 'rgba(255,255,255,0.8)', 
                      margin: '0 0 2px 0' 
                    }}>
                      University of Arts
                    </p>
                    <p style={{ 
                      fontSize: '0.8rem', 
                      color: 'rgba(255,255,255,0.6)', 
                      margin: 0 
                    }}>
                      2022-2024
                    </p>
                  </div>
                  <div>
                    <h4 style={{ 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      margin: '0 0 4px 0',
                      color: 'white'
                    }}>
                      Bachelor's in Interactive Media
                    </h4>
                    <p style={{ 
                      fontSize: '0.85rem', 
                      color: 'rgba(255,255,255,0.8)', 
                      margin: '0 0 2px 0' 
                    }}>
                      Design Institute
                    </p>
                    <p style={{ 
                      fontSize: '0.8rem', 
                      color: 'rgba(255,255,255,0.6)', 
                      margin: 0 
                    }}>
                      2018-2022
                    </p>
                  </div>
                </div>
              </div>
            )}

            {modalContent === 'contact' && (
              <div>
                <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '16px' }}>📫</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '12px',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>✉️</div>
                    <p style={{ fontSize: '0.9rem', margin: 0, color: 'rgba(255,255,255,0.9)' }}>
                      McKenzie.ouyang@gmail.com
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '10px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      flex: 1
                    }}>
                      <div style={{ fontSize: '1rem', marginBottom: '2px' }}>🇨🇳</div>
                      <p style={{ fontSize: '0.8rem', margin: 0, color: 'rgba(255,255,255,0.8)' }}>
                        +86 15723351973
                      </p>
                    </div>
                    <div style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '10px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      flex: 1
                    }}>
                      <div style={{ fontSize: '1rem', marginBottom: '2px' }}>🇭🇰</div>
                      <p style={{ fontSize: '0.8rem', margin: 0, color: 'rgba(255,255,255,0.8)' }}>
                        +852 84963034
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {modalContent === 'awards' && (
              <div>
                <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '16px' }}>🏆</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{ fontSize: '1.2rem' }}>🥇</div>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: '600', margin: '0 0 2px 0' }}>
                        Digital Art Excellence Award
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                        National Arts Competition 2024
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{ fontSize: '1.2rem' }}>🥈</div>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: '600', margin: '0 0 2px 0' }}>
                        Innovation in Interactive Media
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                        Tech Arts Festival 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {modalContent === 'interests' && (
              <div>
                <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '16px' }}>🎨</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                  {['3D Modeling', 'VR/AR', 'AI Art', 'Photography', 'Game Design', 'Motion Graphics'].map(interest => (
                    <span key={interest} style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '12px',
                      padding: '4px 8px',
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.9)'
                    }}>
                      {interest}
                    </span>
                  ))}
                </div>
                <p style={{ 
                  fontSize: '0.85rem', 
                  lineHeight: '1.5', 
                  color: 'rgba(255,255,255,0.8)',
                  margin: 0
                }}>
                  My creative journey spans multiple disciplines, always seeking new ways to merge traditional artforms with emerging technologies.
                </p>
              </div>
            )}

            {modalContent === 'skills' && (
              <div>
                <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '16px' }}>⚡</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px', color: 'rgba(255,255,255,0.9)' }}>
                      Design & Creative
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['Digital Art', 'Visual Design', 'Installation Art', 'Motion Graphics'].map(skill => (
                        <span key={skill} style={{
                          background: 'rgba(255,255,255,0.08)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '10px',
                          padding: '3px 8px',
                          fontSize: '0.7rem',
                          color: 'rgba(255,255,255,0.8)'
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px', color: 'rgba(255,255,255,0.9)' }}>
                      Technical
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['Creative Coding', 'Interactive Design', '3D Modeling', 'VR/AR Development'].map(skill => (
                        <span key={skill} style={{
                          background: 'rgba(255,255,255,0.08)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '10px',
                          padding: '3px 8px',
                          fontSize: '0.7rem',
                          color: 'rgba(255,255,255,0.8)'
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;