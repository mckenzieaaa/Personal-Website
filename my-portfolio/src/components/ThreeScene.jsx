import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

export default function ThreeScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const width = mount.clientWidth
    const height = mount.clientHeight

    // Scene, camera, renderer setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0) // Transparent background
    mount.appendChild(renderer.domElement)

    // Create OYXR logo - black background with white sans-serif text
    const logoGroup = new THREE.Group()
    scene.add(logoGroup)

    // Black background panel
    const bgGeometry = new THREE.PlaneGeometry(3, 1, 1, 1)
    const bgMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.9
    })
    const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial)
    logoGroup.add(bgMesh)

    // Create text texture using canvas
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    canvas.width = 512
    canvas.height = 128
    
    // Clear canvas
    context.fillStyle = 'transparent'
    context.fillRect(0, 0, canvas.width, canvas.height)
    
    // Set font properties - sans-serif
    context.font = 'bold 80px Arial, Helvetica, sans-serif'
    context.fillStyle = 'white'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    
    // Draw OYXR text
    context.fillText('OYXR', canvas.width / 2, canvas.height / 2)
    
    // Create texture from canvas
    const textTexture = new THREE.CanvasTexture(canvas)
    textTexture.needsUpdate = true
    
    // Create text material
    const textMaterial = new THREE.MeshBasicMaterial({
      map: textTexture,
      transparent: true,
      opacity: 1.0
    })
    
    // Create text plane slightly in front of background
    const textGeometry = new THREE.PlaneGeometry(3, 1, 1, 1)
    const textMesh = new THREE.Mesh(textGeometry, textMaterial)
    textMesh.position.z = 0.001
    logoGroup.add(textMesh)

    // Keep simple cube as backup reference
    const cubeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
    const cubeMaterial = new THREE.MeshStandardMaterial({
      transparent: true,
      opacity: 0
    })
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    // Lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    // Interactive trailing particles system
    const trailParticles = []
    const maxTrailLength = 50
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    // Create particle geometry for trails
    const trailGeometry = new THREE.BufferGeometry()
    const trailPositions = new Float32Array(maxTrailLength * 3)
    const trailOpacities = new Float32Array(maxTrailLength)
    
    for (let i = 0; i < maxTrailLength; i++) {
      trailPositions[i * 3] = 0
      trailPositions[i * 3 + 1] = 0
      trailPositions[i * 3 + 2] = 0
      trailOpacities[i] = (maxTrailLength - i) / maxTrailLength
    }
    
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3))
    trailGeometry.setAttribute('opacity', new THREE.BufferAttribute(trailOpacities, 1))

    // Custom shader material for trailing effect
    const trailMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0x88aaff) }
      },
      vertexShader: `
        attribute float opacity;
        varying float vOpacity;
        uniform float time;
        
        void main() {
          vOpacity = opacity * (0.5 + 0.5 * sin(time * 2.0));
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 8.0 * vOpacity;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying float vOpacity;
        
        void main() {
          float distance = length(gl_PointCoord - vec2(0.5));
          if (distance > 0.5) discard;
          
          float alpha = (1.0 - distance * 2.0) * vOpacity * 0.6;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    })

    const trailPoints = new THREE.Points(trailGeometry, trailMaterial)
    scene.add(trailPoints)

    // Background particles
    const particleCount = 800
    const positions = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    
    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    
    const particlesMaterial = new THREE.PointsMaterial({ 
      size: 0.04, 
      transparent: true, 
      opacity: 0.4,
      color: 0x88aaff,
      blending: THREE.AdditiveBlending
    })
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Animation loop
    const clock = new THREE.Clock()
    let animationId

    function animate() {
      const elapsedTime = clock.getElapsedTime()
      
      // Update shader time
      trailMaterial.uniforms.time.value = elapsedTime
      
      // Smooth mouse movement
      mouseX += (targetMouseX - mouseX) * 0.1
      mouseY += (targetMouseY - mouseY) * 0.1
      
      // Update trail particles
      const trailPos = trailGeometry.attributes.position.array
      
      // Shift existing trail positions
      for (let i = maxTrailLength - 1; i > 0; i--) {
        trailPos[i * 3] = trailPos[(i - 1) * 3]
        trailPos[i * 3 + 1] = trailPos[(i - 1) * 3 + 1]
        trailPos[i * 3 + 2] = trailPos[(i - 1) * 3 + 2]
      }
      
      // Add new trail position
      trailPos[0] = mouseX * 5
      trailPos[1] = -mouseY * 5
      trailPos[2] = Math.sin(elapsedTime * 2) * 0.5
      
      trailGeometry.attributes.position.needsUpdate = true
      
      // Rotate the logo group
      logoGroup.rotation.x += 0.003
      logoGroup.rotation.y += 0.005
      logoGroup.rotation.z += 0.002

      // Animate background particles
      const bgPositions = particlesGeometry.attributes.position.array
      for (let i = 0; i < particleCount; i++) {
        bgPositions[i * 3 + 1] += Math.sin(elapsedTime + i * 0.1) * 0.001
        bgPositions[i * 3] += Math.cos(elapsedTime * 0.5 + i * 0.05) * 0.0005
        
        // Reset particles that drift too far
        if (bgPositions[i * 3 + 1] > 10) bgPositions[i * 3 + 1] = -10
        if (bgPositions[i * 3] > 10) bgPositions[i * 3] = -10
      }
      particlesGeometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    // GSAP intro animation for the logo
    gsap.from(logoGroup.scale, { 
      duration: 2, 
      x: 0.1, 
      y: 0.1, 
      z: 0.1, 
      ease: 'power3.out' 
    })

    gsap.from(logoGroup.rotation, {
      duration: 3,
      x: Math.PI * 2,
      ease: 'power2.out'
    })

    animate()

    // Enhanced mouse interaction
    function onPointerMove(event) {
      const rect = mount.getBoundingClientRect()
      targetMouseX = (event.clientX - rect.left) / rect.width - 0.5
      targetMouseY = (event.clientY - rect.top) / rect.height - 0.5
      
      // Subtle camera movement
      gsap.to(camera.position, { 
        x: targetMouseX * 1, 
        y: -targetMouseY * 1, 
        duration: 1, 
        ease: 'power2.out' 
      })
      camera.lookAt(scene.position)
    }

    // Resize handler
    function onResize() {
      const newWidth = mount.clientWidth
      const newHeight = mount.clientHeight
      renderer.setSize(newWidth, newHeight)
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
    }

    mount.addEventListener('pointermove', onPointerMove)
    window.addEventListener('resize', onResize)

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId)
      mount.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement)
      }
      
      geometry.dispose()
      material.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      trailGeometry.dispose()
      trailMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        overflow: 'hidden'
      }} 
    />
  )
}