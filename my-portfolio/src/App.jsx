import React, { useState, useEffect } from 'react';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [selectedTag, setSelectedTag] = useState('all');

  // 项目数据，包含图片路径和软件标签
  const projects = [
    {
      id: 'virtual-soul',
      title: 'Virtual Soul',
      category: 'Digital Art',
      year: '2024',
      description: 'A series exploring the ethereal essence of identity in digital realms.',
      software: ['photoshop', 'blender', 'aftereffects'],
      image: '/Personal-Website/images/1-Virtual%20Soul/image001.jpg',
      gallery: [
        '/Personal-Website/images/1-Virtual%20Soul/image001.jpg',
        '/Personal-Website/images/1-Virtual%20Soul/image002.jpg',
        '/Personal-Website/images/1-Virtual%20Soul/image003.jpg',
        '/Personal-Website/images/1-Virtual%20Soul/image004.jpg'
      ]
    },
    {
      id: 'nether-portal', 
      title: 'Nether Portal',
      category: 'Generative Art',
      year: '2023',
      description: 'Hypnotic tunnels and geometry bending through imaginary space.',
      software: ['cinema4d', 'octane', 'photoshop'],
      image: '/Personal-Website/images/2-Nether%20Portal/image008.jpg',
      gallery: [
        '/Personal-Website/images/2-Nether%20Portal/image008.jpg',
        '/Personal-Website/images/2-Nether%20Portal/image009.jpg',
        '/Personal-Website/images/2-Nether%20Portal/image010.jpg',
        '/Personal-Website/images/2-Nether%20Portal/image011.jpg'
      ]
    },
    {
      id: 'prayer-bloom',
      title: 'Prayer of Wind and Bloom',
      category: 'Interactive Installation',
      year: '2023',
      description: 'An immersive experience connecting nature and technology.',
      software: ['touchdesigner', 'blender', 'arduino'],
      image: '/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image015.jpg',
      gallery: [
        '/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image015.jpg',
        '/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image016.jpg',
        '/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image017.jpg',
        '/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image018.jpg'
      ]
    },
    {
      id: 'unnatural-chronologies',
      title: 'Unnatural Chronologies',
      category: 'Video Art',
      year: '2022',
      description: 'A meditation on time and digital decay through glitch aesthetics.',
      software: ['premiere', 'aftereffects', 'touchdesigner'],
      image: '/Personal-Website/images/4-Unnatural%20Chronologies/image020.jpg',
      gallery: [
        '/Personal-Website/images/4-Unnatural%20Chronologies/image020.jpg',
        '/Personal-Website/images/4-Unnatural%20Chronologies/image021.jpg',
        '/Personal-Website/images/4-Unnatural%20Chronologies/image022.jpg',
        '/Personal-Website/images/4-Unnatural%20Chronologies/image023.jpg'
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
    { id: 'premiere', name: 'Premiere', icon: '🎞️' },
    { id: 'octane', name: 'Octane', icon: '✨' },
    { id: 'arduino', name: 'Arduino', icon: '🔧' }
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

      {/* Featured Work - 平铺展示 */}
      <section id="work" style={{
        height: '100vh',
        width: '100vw',
        padding: '80px 40px',
        background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        overflow: 'hidden auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '300',
            margin: 0,
            letterSpacing: '-0.02em',
            color: 'white',
            fontFamily: "'Inter', sans-serif"
          }}>
            Featured Work
          </h2>
          <p style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
            color: 'rgba(255,255,255,0.6)',
            margin: '15px 0 25px 0',
            fontFamily: "'Inter', sans-serif"
          }}>
            A selection of recent projects exploring digital art and interactive experiences
          </p>
          
          {/* 软件标签过滤器 */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
            justifyContent: 'center',
            marginTop: '20px'
          }}>
            {softwareTags.map(tag => (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                style={{
                  background: selectedTag === tag.id 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  border: selectedTag === tag.id ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '0.5rem 1rem',
                  color: 'white',
                  fontSize: '0.8rem',
                  fontWeight: '400',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backdropFilter: 'blur(10px)',
                  transform: selectedTag === tag.id ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: selectedTag === tag.id 
                    ? '0 6px 20px rgba(102, 126, 234, 0.3)' 
                    : '0 3px 10px rgba(0, 0, 0, 0.1)',
                  fontFamily: "'Inter', sans-serif"
                }}
                onMouseEnter={(e) => {
                  if (selectedTag !== tag.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.target.style.transform = 'scale(1.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedTag !== tag.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'scale(1)';
                  }
                }}
              >
                <span style={{ fontSize: '0.9rem' }}>{tag.icon}</span>
                {tag.name}
              </button>
            ))}
          </div>
        </div>

        {/* 作品网格展示 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          width: '100%',
          flex: 1,
          overflow: 'auto',
          paddingBottom: '20px'
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
                opacity: 1
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
                height: '200px',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'rgba(255,255,255,0.05)'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
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
                  top: '20px',
                  right: '20px',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(0,0,0,0.7)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '16px',
                  opacity: 0.8,
                  transition: 'all 0.3s ease'
                }}>
                  ↗
                </div>
              </div>
              
              {/* 项目信息 */}
              <div style={{
                padding: '20px',
                background: 'rgba(0,0,0,0.3)'
              }}>
                <div style={{
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {project.category} • {project.year}
                </div>
                
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '500',
                  margin: '0 0 15px 0',
                  color: 'white',
                  letterSpacing: '-0.01em',
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: '1.3'
                }}>
                  {project.title}
                </h3>
                
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: '1.6',
                  margin: 0,
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {project.description || "An exploration of digital art and interactive design, pushing the boundaries of technology and creativity."}
                </p>
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
          gap: '60px',
          alignItems: 'start',
          height: '100%'
        }}>
          {/* 左侧：个人信息 */}
          <div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '300',
              margin: '0 0 30px 0',
              letterSpacing: '-0.02em',
              color: 'white',
              fontFamily: "'Inter', sans-serif"
            }}>
              About Me
            </h2>
            
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: 'rgba(255,255,255,0.8)',
              margin: '0 0 30px 0',
              fontFamily: "'Inter', sans-serif"
            }}>
              I'm a digital artist and creative technologist passionate about exploring the intersection of art, technology, and human experience. My work spans interactive installations, immersive digital environments, and experimental media.
            </p>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.7)',
              margin: '0 0 40px 0',
              fontFamily: "'Inter', sans-serif"
            }}>
              Through my practice, I investigate how digital tools can create new forms of storytelling and emotional connection, pushing the boundaries between virtual and physical spaces.
            </p>

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

            {/* 联系信息 */}
            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '500',
                margin: '0 0 20px 0',
                color: 'white',
                fontFamily: "'Inter', sans-serif"
              }}>
                Let's Connect
              </h3>
              <div style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap'
              }}>
                <a
                  href="mailto:your.email@example.com"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontFamily: "'Inter', sans-serif",
                    padding: '12px 24px',
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
                    padding: '12px 24px',
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
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontFamily: "'Inter', sans-serif",
                    padding: '12px 24px',
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
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* 右侧：个人照片和额外信息 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            height: '100%'
          }}>
            {/* 个人照片 */}
            <div style={{
              width: '100%',
              height: '80px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1rem',
              fontFamily: "'Inter', sans-serif",
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
                📸 Personal Photo
              </div>
              <div style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: '1.5' }}>
                Please manually copy your photo to:<br/>
                <code style={{ 
                  background: 'rgba(255,255,255,0.1)', 
                  padding: '2px 6px', 
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                  public/images/xinran-photo.jpg
                </code>
              </div>
              {/* 隐藏的img标签，当照片存在时会显示 */}
              <img
                src="/Personal-Website/images/xinran-photo.jpg"
                alt="Xinran Ouyang"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  opacity: 0
                }}
                onLoad={(e) => {
                  e.target.style.opacity = 1;
                  e.target.parentElement.querySelector('div').style.display = 'none';
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* 额外信息卡片 */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '25px',
              flex: 1
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '500',
                margin: '0 0 20px 0',
                color: 'white',
                fontFamily: "'Inter', sans-serif"
              }}>
                Currently Working On
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '12px',
                  fontFamily: "'Inter', sans-serif",
                  position: 'relative',
                  paddingLeft: '20px'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: 'rgba(255,255,255,0.5)'
                  }}>→</span>
                  New interactive installation series
                </li>
                <li style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '12px',
                  fontFamily: "'Inter', sans-serif",
                  position: 'relative',
                  paddingLeft: '20px'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: 'rgba(255,255,255,0.5)'
                  }}>→</span>
                  Exploring AI-generated visual narratives
                </li>
                <li style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '0',
                  fontFamily: "'Inter', sans-serif",
                  position: 'relative',
                  paddingLeft: '20px'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: 'rgba(255,255,255,0.5)'
                  }}>→</span>
                  Collaborative projects with other artists
                </li>
              </ul>
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px'
                  }}>
                    {selectedProject.gallery.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${selectedProject.title} ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '180px',
                          objectFit: 'cover',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
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
    </div>
  );
}

export default App;