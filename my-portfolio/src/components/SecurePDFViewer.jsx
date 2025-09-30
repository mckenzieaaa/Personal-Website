import React, { useState, useEffect } from 'react';

const SecurePDFViewer = ({ pdfUrl, title }) => {
  const [error, setError] = useState(null);
  
  // 禁用右键菜单
  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  // 禁用键盘快捷键
  const handleKeyDown = (e) => {
    // 禁用 Ctrl+S (保存), Ctrl+P (打印), Ctrl+A (全选) 等
    if (e.ctrlKey && (e.key === 's' || e.key === 'p' || e.key === 'a')) {
      e.preventDefault();
      return false;
    }
    // 禁用 F12 (开发者工具)
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div 
      className="secure-pdf-viewer"
      onContextMenu={handleContextMenu}
      onSelectStart={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none'
      }}
    >
      <iframe
        src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0`}
        width="100%"
        height="100%"
        title={title}
        style={{
          border: 'none',
          borderRadius: '8px',
          pointerEvents: 'auto'
        }}
        onContextMenu={handleContextMenu}
        sandbox="allow-same-origin allow-scripts"
        onLoad={() => {
          // 尝试隐藏PDF工具栏
          try {
            const iframe = document.querySelector('iframe[title="' + title + '"]');
            if (iframe && iframe.contentDocument) {
              const style = iframe.contentDocument.createElement('style');
              style.textContent = `
                #toolbarContainer, .toolbar, #secondaryToolbar {
                  display: none !important;
                }
                #viewerContainer {
                  top: 0 !important;
                }
              `;
              iframe.contentDocument.head.appendChild(style);
            }
          } catch (e) {
            // 忽略跨域错误
          }
        }}
      >
        <div style={{ 
          padding: '40px', 
          textAlign: 'center', 
          color: '#88aaff',
          background: '#1a1a2e'
        }}>
          <p>Your browser doesn't support PDF viewing.</p>
          <p>Please use a modern browser to view this content.</p>
        </div>
      </iframe>
      
      {/* 透明覆盖层防止直接访问PDF */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '40px',
          background: 'transparent',
          zIndex: 10,
          pointerEvents: 'auto'
        }}
        onContextMenu={handleContextMenu}
        title="Protected Content - Viewing Only"
      />
    </div>
  );
};

export default SecurePDFViewer;