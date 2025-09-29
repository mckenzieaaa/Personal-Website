import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
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

    // Load OBJ model with MTL materials (optimized for large files)
    const logoGroup = new THREE.Group()
    scene.add(logoGroup)
    
    console.log('Starting to load model files...')
    
    // Get the correct base path for production vs development
    const basePath = import.meta.env.PROD ? '/Personal-Website' : ''
    const mtlPath = `${basePath}/models/middle2.mtl`
    const objPath = `${basePath}/models/middle2.obj`
    
    console.log('Using paths:', { mtlPath, objPath })
    
    // Test if files are accessible first
    fetch(mtlPath)
      .then(response => {
        console.log('MTL file fetch response:', response.status, response.statusText)
        if (!response.ok) {
          throw new Error(`MTL file not found: ${response.status}`)
        }
        return response.text()
      })
      .then(mtlText => {
        console.log('MTL file content loaded, size:', mtlText.length)
        
        // Test OBJ file accessibility
        return fetch(objPath)
      })
      .then(response => {
        console.log('OBJ file fetch response:', response.status, response.statusText)
        if (!response.ok) {
          throw new Error(`OBJ file not found: ${response.status}`)
        }
        console.log('OBJ file is accessible, proceeding with Three.js loaders...')
        
        // If files are accessible, proceed with Three.js loaders
        const mtlLoader = new MTLLoader()
        
        // Set loading manager for better error handling
        const loadingManager = new THREE.LoadingManager()
        loadingManager.onLoad = () => console.log('All resources loaded')
        loadingManager.onError = (url) => console.error('Error loading:', url)
        
        mtlLoader.manager = loadingManager
        
        mtlLoader.load(
          mtlPath,
          (materials) => {
            console.log('MTL loaded successfully with Three.js:', materials)
            materials.preload()
            
            const objLoader = new OBJLoader()
            objLoader.manager = loadingManager
            objLoader.setMaterials(materials)
            
            objLoader.load(
              objPath,
              (obj) => {
                console.log('OBJ loaded successfully:', obj)
                
                // Get bounding box
                const box = new THREE.Box3().setFromObject(obj)
                const size = box.getSize(new THREE.Vector3())
                const center = box.getCenter(new THREE.Vector3())
                
                console.log('Model size:', size)
                console.log('Model center:', center)
                
                // Calculate scale and center the model
                const maxDimension = Math.max(size.x, size.y, size.z)
                const targetSize = 2
                const scale = targetSize / maxDimension
                
                obj.scale.setScalar(scale)
                obj.position.copy(center.multiplyScalar(-scale)) // Center the model
                
                // Setup materials and shadows
                obj.traverse((child) => {
                  if (child.isMesh) {
                    child.castShadow = true
                    child.receiveShadow = true
                    if (child.material) {
                      child.material.needsUpdate = true
                    }
                  }
                })
                
                logoGroup.add(obj)
                console.log('Model successfully added to scene')
              },
              (progress) => {
                const percent = (progress.loaded / progress.total * 100)
                console.log('OBJ loading progress:', percent + '%', 'Size:', (progress.loaded / 1024 / 1024).toFixed(1) + 'MB')
                
                // Add loading indicator for large files
                if (progress.total > 10 * 1024 * 1024) { // > 10MB
                  console.log('Large file detected, this may take a while...')
                }
              },
              (error) => {
                console.error('Three.js OBJ loading error:', error)
                addFallbackCube('red', 'OBJ loading failed')
              }
            )
          },
          (progress) => {
            console.log('MTL loading progress:', (progress.loaded / progress.total * 100) + '%')
          },
          (error) => {
            console.error('Three.js MTL loading error:', error)
            addFallbackCube('orange', 'MTL loading failed')
          }
        )
      })
      .catch(error => {
        console.error('File accessibility test failed:', error)
        addFallbackCube('blue', 'Files not accessible')
      })
    
    // Helper function to add fallback cubes with different colors for different errors
    function addFallbackCube(color, reason) {
      console.log(`Adding ${color} fallback cube - ${reason}`)
      const fallbackGeometry = new THREE.BoxGeometry(1, 1, 1)
      const colorValue = color === 'red' ? 0xff0000 : 
                        color === 'orange' ? 0xff8800 : 
                        color === 'blue' ? 0x0000ff : 0x888888
      const fallbackMaterial = new THREE.MeshStandardMaterial({ color: colorValue })
      const fallbackMesh = new THREE.Mesh(fallbackGeometry, fallbackMaterial)
      logoGroup.add(fallbackMesh)
    }

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

    // Enhanced Interactive Particle System
    const particleGroups = []
    const maxParticleGroups = 10
    let isMouseMoving = false
    let mouseTimeout
    
    // Mouse trail positions
    let mouseX = 0
    let mouseY = 0
    let mouseZ = 0

    // Create particle explosion effect at mouse position
    function createParticleExplosion(x, y, z) {
      const particleCount = 30
      const positions = new Float32Array(particleCount * 3)
      const velocities = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)
      const opacities = new Float32Array(particleCount)
      
      for (let i = 0; i < particleCount; i++) {
        // Random positions around mouse
        positions[i * 3] = x + (Math.random() - 0.5) * 0.5
        positions[i * 3 + 1] = y + (Math.random() - 0.5) * 0.5
        positions[i * 3 + 2] = z + (Math.random() - 0.5) * 0.5
        
        // Random velocities for explosion effect
        velocities[i * 3] = (Math.random() - 0.5) * 0.02
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
        
        // Random colors (blue to purple gradient)
        const hue = Math.random() * 0.3 + 0.6 // Blue to purple range
        const color = new THREE.Color().setHSL(hue, 0.8, 0.6)
        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b
        
        opacities[i] = 1.0
      }
      
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      geometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1))
      
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          pointSize: { value: 25.0 } // Much larger particles
        },
        vertexShader: `
          attribute float opacity;
          attribute vec3 color;
          varying float vOpacity;
          varying vec3 vColor;
          uniform float time;
          uniform float pointSize;
          
          void main() {
            vOpacity = opacity;
            vColor = color;
            
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            
            // Dynamic size based on distance and time
            float distance = length(mvPosition.xyz);
            gl_PointSize = pointSize * (300.0 / distance) * vOpacity;
          }
        `,
        fragmentShader: `
          varying float vOpacity;
          varying vec3 vColor;
          
          void main() {
            // Create circular particles
            vec2 center = gl_PointCoord - vec2(0.5);
            float distance = length(center);
            
            if (distance > 0.5) discard;
            
            // Soft edge with glow effect
            float alpha = (1.0 - distance * 2.0) * vOpacity;
            alpha = smoothstep(0.0, 1.0, alpha);
            
            // Add inner glow
            float glow = exp(-distance * 8.0) * 0.5;
            alpha += glow;
            
            gl_FragColor = vec4(vColor, alpha * 0.8);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      })
      
      const points = new THREE.Points(geometry, material)
      scene.add(points)
      
      // Store particle group info
      const particleGroup = {
        points,
        geometry,
        material,
        velocities,
        life: 1.0,
        maxLife: 1.0
      }
      
      particleGroups.push(particleGroup)
      
      // Remove old particle groups if too many
      if (particleGroups.length > maxParticleGroups) {
        const oldGroup = particleGroups.shift()
        scene.remove(oldGroup.points)
        oldGroup.geometry.dispose()
        oldGroup.material.dispose()
      }
    }

    // Background ambient particles (subtle)
    const ambientParticleCount = 200
    const ambientPositions = new Float32Array(ambientParticleCount * 3)
    
    for (let i = 0; i < ambientParticleCount; i++) {
      ambientPositions[i * 3] = (Math.random() - 0.5) * 30
      ambientPositions[i * 3 + 1] = (Math.random() - 0.5) * 30
      ambientPositions[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    
    const ambientGeometry = new THREE.BufferGeometry()
    ambientGeometry.setAttribute('position', new THREE.BufferAttribute(ambientPositions, 3))
    
    const ambientMaterial = new THREE.PointsMaterial({ 
      size: 2, // Slightly larger ambient particles
      transparent: true, 
      opacity: 0.2,
      color: 0x88aaff,
      blending: THREE.AdditiveBlending
    })
    
    const ambientParticles = new THREE.Points(ambientGeometry, ambientMaterial)
    scene.add(ambientParticles)

    // Animation loop
    const clock = new THREE.Clock()
    let animationId

    function animate() {
      const elapsedTime = clock.getElapsedTime()
      
      // Update particle groups
      for (let i = particleGroups.length - 1; i >= 0; i--) {
        const group = particleGroups[i]
        group.life -= 0.016 // Decrease life (assuming 60fps)
        
        if (group.life <= 0) {
          // Remove expired particle group
          scene.remove(group.points)
          group.geometry.dispose()
          group.material.dispose()
          particleGroups.splice(i, 1)
          continue
        }
        
        // Update particle positions and properties
        const positions = group.geometry.attributes.position.array
        const opacities = group.geometry.attributes.opacity.array
        
        for (let j = 0; j < positions.length / 3; j++) {
          // Apply velocity
          positions[j * 3] += group.velocities[j * 3]
          positions[j * 3 + 1] += group.velocities[j * 3 + 1]
          positions[j * 3 + 2] += group.velocities[j * 3 + 2]
          
          // Add some physics (gravity and drag)
          group.velocities[j * 3] *= 0.98 // Drag
          group.velocities[j * 3 + 1] *= 0.98
          group.velocities[j * 3 + 2] *= 0.98
          group.velocities[j * 3 + 1] -= 0.001 // Gravity
          
          // Update opacity based on life
          opacities[j] = group.life / group.maxLife
        }
        
        group.geometry.attributes.position.needsUpdate = true
        group.geometry.attributes.opacity.needsUpdate = true
        group.material.uniforms.time.value = elapsedTime
      }
      
      // Rotate the logo group
      logoGroup.rotation.x += 0.003
      logoGroup.rotation.y += 0.005
      logoGroup.rotation.z += 0.002

      // Animate ambient background particles
      const ambientPositions = ambientGeometry.attributes.position.array
      for (let i = 0; i < ambientParticleCount; i++) {
        ambientPositions[i * 3 + 1] += Math.sin(elapsedTime + i * 0.1) * 0.001
        ambientPositions[i * 3] += Math.cos(elapsedTime * 0.5 + i * 0.05) * 0.0005
        
        // Reset particles that drift too far
        if (ambientPositions[i * 3 + 1] > 15) ambientPositions[i * 3 + 1] = -15
        if (ambientPositions[i * 3] > 15) ambientPositions[i * 3] = -15
      }
      ambientGeometry.attributes.position.needsUpdate = true

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

    // Enhanced mouse interaction with particle effects
    function onPointerMove(event) {
      const rect = mount.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      
      // Update mouse position for particle creation
      mouseX = x * 8 // Scale for 3D space
      mouseY = -y * 8 // Invert Y and scale
      mouseZ = Math.sin(Date.now() * 0.001) * 2 // Oscillating Z
      
      // Create particle explosion at mouse position
      createParticleExplosion(mouseX, mouseY, mouseZ)
      
      // Mark mouse as moving
      isMouseMoving = true
      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false
      }, 100)
      
      // Subtle camera movement
      gsap.to(camera.position, { 
        x: x * 1.5, 
        y: -y * 1.5, 
        duration: 1.5, 
        ease: 'power2.out' 
      })
      camera.lookAt(scene.position)
    }

    // Add click interaction for more intense particle burst
    function onPointerClick(event) {
      const rect = mount.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      
      const clickX = x * 8
      const clickY = -y * 8
      const clickZ = 0
      
      // Create multiple particle explosions for click
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          createParticleExplosion(
            clickX + (Math.random() - 0.5) * 2,
            clickY + (Math.random() - 0.5) * 2,
            clickZ + (Math.random() - 0.5) * 2
          )
        }, i * 100)
      }
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
    mount.addEventListener('click', onPointerClick)
    window.addEventListener('resize', onResize)

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId)
      mount.removeEventListener('pointermove', onPointerMove)
      mount.removeEventListener('click', onPointerClick)
      window.removeEventListener('resize', onResize)
      
      // Clean up particle groups
      particleGroups.forEach(group => {
        scene.remove(group.points)
        group.geometry.dispose()
        group.material.dispose()
      })
      
      // Clean up other resources
      if (ambientGeometry) ambientGeometry.dispose()
      if (ambientMaterial) ambientMaterial.dispose()
      
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement)
      }
      
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