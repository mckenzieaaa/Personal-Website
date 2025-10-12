import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeModel = ({ 
  modelPath, 
  scale = 1, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0],
  modelSize = 2,
  rotationSpeed = 0.01,
  showWireframe = false,
  color = 0x4a90e2,
  geometry = 'box'
}) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x4a90e2, 0.5);
    pointLight.position.set(-10, -10, -5);
    scene.add(pointLight);

    // Create geometry based on type
    let geometryObj;
    switch (geometry) {
      case 'sphere':
        geometryObj = new THREE.SphereGeometry(modelSize, 32, 32);
        break;
      case 'torus':
        geometryObj = new THREE.TorusGeometry(modelSize, modelSize * 0.4, 16, 32);
        break;
      default:
        geometryObj = new THREE.BoxGeometry(modelSize, modelSize, modelSize);
    }
    
    const material = new THREE.MeshPhongMaterial({ 
      color: color,
      transparent: true,
      opacity: showWireframe ? 0.6 : 0.8,
      wireframe: showWireframe
    });
    const cube = new THREE.Mesh(geometryObj, material);
    cube.position.set(...position);
    cube.rotation.set(...rotation);
    cube.scale.setScalar(scale);
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      // Rotate the object with custom speed
      cube.rotation.x += rotationSpeed;
      cube.rotation.y += rotationSpeed * 0.7;
      cube.rotation.z += rotationSpeed * 0.3;
      
      // Floating animation
      cube.position.y = position[1] + Math.sin(Date.now() * 0.001) * 0.3;
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js objects
      geometryObj.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [modelPath, scale, position, rotation, modelSize, rotationSpeed, showWireframe, color, geometry]);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        position: 'relative'
      }} 
    />
  );
};

export default ThreeModel;