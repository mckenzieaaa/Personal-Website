import React from 'react';
import FluidParticleSystem from './FluidParticleSystem';

function ThreeScene() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'radial-gradient(ellipse at center, rgba(15,20,35,0.95) 0%, rgba(8,12,20,0.98) 50%, rgba(5,5,10,1) 100%)',
      pointerEvents: 'auto'
    }}>
      <FluidParticleSystem />
    </div>
  );
}

export default ThreeScene;
