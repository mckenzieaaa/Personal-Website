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
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0
    
    // Background ambient particles
    const backgroundParticles = []
    const backgroundParticleCount = 100
    const backgroundGeometry = new THREE.BufferGeometry()
    const backgroundPositions = new Float32Array(backgroundParticleCount * 3)
    const backgroundSizes = new Float32Array(backgroundParticleCount)
    
    for (let i = 0; i < backgroundParticleCount; i++) {
      backgroundPositions[i * 3] = (Math.random() - 0.5) * 20
      backgroundPositions[i * 3 + 1] = (Math.random() - 0.5) * 20
      backgroundPositions[i * 3 + 2] = (Math.random() - 0.5) * 20
      backgroundSizes[i] = Math.random() * 2 + 1
    }
    
    backgroundGeometry.setAttribute('position', new THREE.BufferAttribute(backgroundPositions, 3))
    backgroundGeometry.setAttribute('size', new THREE.BufferAttribute(backgroundSizes, 1))
    
    // Background particle material
    const backgroundMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0x4488ff) }
      },
      vertexShader: `
        attribute float size;
        uniform float time;
        varying float vOpacity;
        
        void main() {
          vOpacity = 0.3 + 0.2 * sin(time * 2.0 + position.x * 0.1);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying float vOpacity;
        
        void main() {
          float distance = length(gl_PointCoord - vec2(0.5));
          if (distance > 0.5) discard;
          
          float alpha = 1.0 - distance * 2.0;
          gl_FragColor = vec4(color, alpha * vOpacity * 0.6);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    })
    
    const backgroundParticleSystem = new THREE.Points(backgroundGeometry, backgroundMaterial)
    scene.add(backgroundParticleSystem)
    
    // Mouse trail particles (special effect)
    const mouseParticles = []
    const maxMouseParticles = 200
    const mouseGeometry = new THREE.BufferGeometry()
    const mousePositions = new Float32Array(maxMouseParticles * 3)
    const mouseVelocities = new Float32Array(maxMouseParticles * 3)
    const mouseLifetimes = new Float32Array(maxMouseParticles)
    const mouseSizes = new Float32Array(maxMouseParticles)
    
    for (let i = 0; i < maxMouseParticles; i++) {
      mousePositions[i * 3] = 0
      mousePositions[i * 3 + 1] = 0
      mousePositions[i * 3 + 2] = 0
      mouseVelocities[i * 3] = 0
      mouseVelocities[i * 3 + 1] = 0
      mouseVelocities[i * 3 + 2] = 0
      mouseLifetimes[i] = 0
      mouseSizes[i] = 0
    }
    
    mouseGeometry.setAttribute('position', new THREE.BufferAttribute(mousePositions, 3))
    mouseGeometry.setAttribute('lifetime', new THREE.BufferAttribute(mouseLifetimes, 1))
    mouseGeometry.setAttribute('size', new THREE.BufferAttribute(mouseSizes, 1))
    
    // Mouse particle material (different from background)
    const mouseMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0xff6644) } // Orange/red color for mouse particles
      },
      vertexShader: `
        attribute float lifetime;
        attribute float size;
        uniform float time;
        varying float vLifetime;
        varying float vOpacity;
        
        void main() {
          vLifetime = lifetime;
          vOpacity = 1.0 - lifetime;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (400.0 / -mvPosition.z) * (1.0 - lifetime * 0.5);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying float vLifetime;
        varying float vOpacity;
        
        void main() {
          float distance = length(gl_PointCoord - vec2(0.5));
          if (distance > 0.5) discard;
          
          float alpha = (1.0 - distance * 2.0) * vOpacity;
          vec3 finalColor = mix(color, vec3(1.0, 1.0, 0.0), vLifetime * 0.5); // Fade from orange to yellow
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    })
    
    const mouseParticleSystem = new THREE.Points(mouseGeometry, mouseMaterial)
    scene.add(mouseParticleSystem)
    
    // Mouse events for particle interaction
    function handleMouseMove(event) {
      const rect = mount.getBoundingClientRect()
      targetMouseX = ((event.clientX - rect.left) / width) * 2 - 1
      targetMouseY = -((event.clientY - rect.top) / height) * 2 + 1
      
      // Emit particles when mouse moves
      const distance = Math.sqrt(
        (targetMouseX - lastMousePosition.x) ** 2 + 
        (targetMouseY - lastMousePosition.y) ** 2
      )
      
      if (distance > 0.02) { // Only emit if mouse moved significantly
        emitMouseParticles(targetMouseX, targetMouseY)
        lastMousePosition = { x: targetMouseX, y: targetMouseY }
        mouseMoved = true
      }
    }
    
    function emitMouseParticles(x, y) {
      const particlesToEmit = Math.floor(Math.random() * 5) + 3 // 3-7 particles
      
      for (let i = 0; i < particlesToEmit; i++) {
        const index = (particleIndex + i) % maxMouseParticles
        const baseIndex = index * 3
        
        // Position - convert screen coords to world coords
        mousePositions[baseIndex] = x * 5 + (Math.random() - 0.5) * 0.5
        mousePositions[baseIndex + 1] = y * 5 + (Math.random() - 0.5) * 0.5
        mousePositions[baseIndex + 2] = (Math.random() - 0.5) * 2
        
        // Velocity
        mouseVelocities[baseIndex] = (Math.random() - 0.5) * 0.2
        mouseVelocities[baseIndex + 1] = (Math.random() - 0.5) * 0.2
        mouseVelocities[baseIndex + 2] = (Math.random() - 0.5) * 0.1
        
        // Reset lifetime and size
        mouseLifetimes[index] = 0
        mouseSizes[index] = Math.random() * 15 + 10
      }
      
      particleIndex = (particleIndex + particlesToEmit) % maxMouseParticles
      
      // Update geometry
      mouseGeometry.attributes.position.needsUpdate = true
      mouseGeometry.attributes.lifetime.needsUpdate = true
      mouseGeometry.attributes.size.needsUpdate = true
    }
    
    mount.addEventListener('mousemove', handleMouseMove)
    
    // Animation loop
    const clock = new THREE.Clock()
    let animationId

    function animate() {
      const elapsedTime = clock.getElapsedTime()
      
      // Update shader uniforms
      backgroundMaterial.uniforms.time.value = elapsedTime
      mouseMaterial.uniforms.time.value = elapsedTime
      
      // Smooth mouse movement
      mouseX += (targetMouseX - mouseX) * 0.1
      mouseY += (targetMouseY - mouseY) * 0.1
      
      // Update background particles (gentle floating motion)
      const bgPositions = backgroundGeometry.attributes.position.array
      for (let i = 0; i < backgroundParticleCount; i++) {
        const index = i * 3
        bgPositions[index + 1] += Math.sin(elapsedTime * 0.5 + i * 0.1) * 0.002
        bgPositions[index] += Math.cos(elapsedTime * 0.3 + i * 0.05) * 0.001
      }
      backgroundGeometry.attributes.position.needsUpdate = true
      
      // Update mouse particles (physics simulation)
      for (let i = 0; i < maxMouseParticles; i++) {
        const baseIndex = i * 3
        
        if (mouseLifetimes[i] < 1.0) {
          // Update position based on velocity
          mousePositions[baseIndex] += mouseVelocities[baseIndex]
          mousePositions[baseIndex + 1] += mouseVelocities[baseIndex + 1]
          mousePositions[baseIndex + 2] += mouseVelocities[baseIndex + 2]
          
          // Apply gravity and drag
          mouseVelocities[baseIndex + 1] -= 0.005 // Gravity
          mouseVelocities[baseIndex] *= 0.98 // Drag
          mouseVelocities[baseIndex + 1] *= 0.98
          mouseVelocities[baseIndex + 2] *= 0.98
          
          // Update lifetime
          mouseLifetimes[i] += 0.01
        } else {
          // Reset particle if lifetime exceeded
          mouseSizes[i] = 0
        }
      }
      
      mouseGeometry.attributes.position.needsUpdate = true
      mouseGeometry.attributes.lifetime.needsUpdate = true
      
      // Rotate the logo group
      logoGroup.rotation.x += 0.003
      logoGroup.rotation.y += 0.005
      logoGroup.rotation.z += 0.002

      // Camera controls
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.02
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Initial animations with GSAP
    gsap.from(logoGroup.scale, { 
      duration: 2, 
      x: 0, 
      y: 0, 
      z: 0, 
      ease: "elastic.out(1, 0.3)" 
    })

    gsap.from(logoGroup.rotation, {
      duration: 3,
      x: Math.PI,
      y: Math.PI,
      ease: "power2.out"
    })

    // Handle window resize
    function handleResize() {
      width = mount.clientWidth
      height = mount.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup function
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement)
      }
      mount.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }

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