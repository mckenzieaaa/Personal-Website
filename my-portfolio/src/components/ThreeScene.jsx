import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { gsap } from 'gsap'

function ThreeScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    const mount = mountRef.current
    let width = mount.clientWidth
    let height = mount.clientHeight

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Load 3D Model
    const logoGroup = new THREE.Group()
    scene.add(logoGroup)
    
    const basePath = import.meta.env.PROD ? '/Personal-Website' : ''
    const mtlPath = `${basePath}/models/middle2.mtl`
    const objPath = `${basePath}/models/middle2.obj`
    
    fetch(mtlPath)
      .then(response => {
        if (!response.ok) throw new Error(`MTL file not found: ${response.status}`)
        return fetch(objPath)
      })
      .then(response => {
        if (!response.ok) throw new Error(`OBJ file not found: ${response.status}`)
        
        const mtlLoader = new MTLLoader()
        mtlLoader.load(
          mtlPath,
          (materials) => {
            materials.preload()
            const objLoader = new OBJLoader()
            objLoader.setMaterials(materials)
            objLoader.load(
              objPath,
              (obj) => {
                const box = new THREE.Box3().setFromObject(obj)
                const size = box.getSize(new THREE.Vector3())
                const maxDimension = Math.max(size.x, size.y, size.z)
                const scale = 2 / maxDimension
                
                obj.scale.setScalar(scale)
                obj.position.set(0, 0, 0)
                
                obj.traverse((child) => {
                  if (child.isMesh) {
                    child.castShadow = true
                    child.receiveShadow = true
                  }
                })
                
                logoGroup.add(obj)
              },
              undefined,
              (error) => {
                // Fallback cube
                const fallbackGeometry = new THREE.BoxGeometry(1, 1, 1)
                const fallbackMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 })
                const fallbackMesh = new THREE.Mesh(fallbackGeometry, fallbackMaterial)
                logoGroup.add(fallbackMesh)
              }
            )
          },
          undefined,
          (error) => {
            // Fallback if MTL fails
            const fallbackGeometry = new THREE.BoxGeometry(1, 1, 1)
            const fallbackMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 })
            const fallbackMesh = new THREE.Mesh(fallbackGeometry, fallbackMaterial)
            logoGroup.add(fallbackMesh)
          }
        )
      })
      .catch(error => {
        // Final fallback
        const fallbackGeometry = new THREE.BoxGeometry(1, 1, 1)
        const fallbackMaterial = new THREE.MeshStandardMaterial({ color: 0x0066ff })
        const fallbackMesh = new THREE.Mesh(fallbackGeometry, fallbackMaterial)
        logoGroup.add(fallbackMesh)
      })

    // Lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    // Background Particles (subtle floating effect)
    const backgroundParticleCount = 150
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
          gl_FragColor = vec4(color, alpha * vOpacity * 0.4);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    })
    
    const backgroundParticleSystem = new THREE.Points(backgroundGeometry, backgroundMaterial)
    scene.add(backgroundParticleSystem)
    
    // Mouse-triggered particles (explosive effect)
    const maxMouseParticles = 300
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
      mouseLifetimes[i] = 1.0 // Start as 'dead'
      mouseSizes[i] = 0
    }
    
    mouseGeometry.setAttribute('position', new THREE.BufferAttribute(mousePositions, 3))
    mouseGeometry.setAttribute('lifetime', new THREE.BufferAttribute(mouseLifetimes, 1))
    mouseGeometry.setAttribute('size', new THREE.BufferAttribute(mouseSizes, 1))
    
    const mouseMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0xff6644) }
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
          vec3 finalColor = mix(color, vec3(1.0, 1.0, 0.0), vLifetime * 0.5);
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    })
    
    const mouseParticleSystem = new THREE.Points(mouseGeometry, mouseMaterial)
    scene.add(mouseParticleSystem)
    
    // Mouse interaction variables
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0
    let particleIndex = 0
    let lastMousePosition = { x: 0, y: 0 }
    
    // Particle emission function
    function emitMouseParticles(x, y) {
      const particlesToEmit = Math.floor(Math.random() * 8) + 5 // 5-12 particles
      
      for (let i = 0; i < particlesToEmit; i++) {
        const index = (particleIndex + i) % maxMouseParticles
        const baseIndex = index * 3
        
        // Position
        mousePositions[baseIndex] = x * 5 + (Math.random() - 0.5) * 0.8
        mousePositions[baseIndex + 1] = y * 5 + (Math.random() - 0.5) * 0.8
        mousePositions[baseIndex + 2] = (Math.random() - 0.5) * 3
        
        // Velocity (explosive pattern)
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 0.3 + 0.1
        mouseVelocities[baseIndex] = Math.cos(angle) * speed
        mouseVelocities[baseIndex + 1] = Math.sin(angle) * speed + Math.random() * 0.1
        mouseVelocities[baseIndex + 2] = (Math.random() - 0.5) * 0.2
        
        // Properties
        mouseLifetimes[index] = 0
        mouseSizes[index] = Math.random() * 20 + 15
      }
      
      particleIndex = (particleIndex + particlesToEmit) % maxMouseParticles
      
      mouseGeometry.attributes.position.needsUpdate = true
      mouseGeometry.attributes.lifetime.needsUpdate = true
      mouseGeometry.attributes.size.needsUpdate = true
    }
    
    // Mouse event handler
    function handleMouseMove(event) {
      const rect = mount.getBoundingClientRect()
      targetMouseX = ((event.clientX - rect.left) / width) * 2 - 1
      targetMouseY = -((event.clientY - rect.top) / height) * 2 + 1
      
      const distance = Math.sqrt(
        (targetMouseX - lastMousePosition.x) ** 2 + 
        (targetMouseY - lastMousePosition.y) ** 2
      )
      
      if (distance > 0.03) {
        emitMouseParticles(targetMouseX, targetMouseY)
        lastMousePosition = { x: targetMouseX, y: targetMouseY }
      }
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
      
      // Update background particles
      const bgPositions = backgroundGeometry.attributes.position.array
      for (let i = 0; i < backgroundParticleCount; i++) {
        const index = i * 3
        bgPositions[index + 1] += Math.sin(elapsedTime * 0.5 + i * 0.1) * 0.002
        bgPositions[index] += Math.cos(elapsedTime * 0.3 + i * 0.05) * 0.001
      }
      backgroundGeometry.attributes.position.needsUpdate = true
      
      // Update mouse particles
      for (let i = 0; i < maxMouseParticles; i++) {
        const baseIndex = i * 3
        
        if (mouseLifetimes[i] < 1.0) {
          // Physics simulation
          mousePositions[baseIndex] += mouseVelocities[baseIndex]
          mousePositions[baseIndex + 1] += mouseVelocities[baseIndex + 1]
          mousePositions[baseIndex + 2] += mouseVelocities[baseIndex + 2]
          
          // Apply forces
          mouseVelocities[baseIndex + 1] -= 0.008 // Gravity
          mouseVelocities[baseIndex] *= 0.985 // Drag
          mouseVelocities[baseIndex + 1] *= 0.985
          mouseVelocities[baseIndex + 2] *= 0.985
          
          // Age particle
          mouseLifetimes[i] += 0.012
        } else {
          mouseSizes[i] = 0 // Hide dead particles
        }
      }
      
      mouseGeometry.attributes.position.needsUpdate = true
      mouseGeometry.attributes.lifetime.needsUpdate = true
      
      // Rotate the model
      logoGroup.rotation.x += 0.003
      logoGroup.rotation.y += 0.005
      logoGroup.rotation.z += 0.002

      // Camera parallax
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.02
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Initial animations
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

    // Resize handler
    function handleResize() {
      width = mount.clientWidth
      height = mount.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (mount && renderer.domElement) mount.removeChild(renderer.domElement)
      mount.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
}

export default ThreeScene