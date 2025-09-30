import React, { useEffect, useRef } from 'react'

// Minimal ParticleImageCanvas stub: draws the image to a canvas.
// Props: { imageSrc: string, width?: number, height?: number }
export default function ParticleImageCanvas({ imageSrc, width = 400, height = 300 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const base = import.meta.env.BASE_URL || '/'
    const normalize = (p) => {
      if (!p) return ''
      if (/^https?:/i.test(p)) return p
      const clean = p.replace(/^\/+/, '')
      return `${base}${clean}`
    }
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Cover fit
      const ratio = Math.max(width / img.width, height / img.height)
      const dw = img.width * ratio
      const dh = img.height * ratio
      const dx = (width - dw) / 2
      const dy = (height - dh) / 2
      ctx.drawImage(img, dx, dy, dw, dh)
    }
    img.onerror = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#111'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#666'
      ctx.font = '14px sans-serif'
      ctx.fillText('Image load failed', 10, 22)
    }
    img.src = normalize(imageSrc)
  }, [imageSrc, width, height])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ width: `${width}px`, height: `${height}px`, display: 'block' }}
    />
  )
}
