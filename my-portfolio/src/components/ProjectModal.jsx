import React, { useEffect } from 'react'

// Lightweight modal to show a project's image gallery
// Props: { project: { title, images, description, year, category }, onClose: () => void }
function ProjectModal({ project, onClose }) {
	const base = import.meta.env.BASE_URL || '/'

	useEffect(() => {
		function onKey(e) {
			if (e.key === 'Escape') onClose()
		}
		document.addEventListener('keydown', onKey)
		return () => document.removeEventListener('keydown', onKey)
	}, [onClose])

	function asset(p) {
		if (!p) return ''
		// If already absolute (http or starts with base), return as is
		if (/^https?:/i.test(p) || p.startsWith(base)) return p
		// Normalize leading slash
		const clean = p.replace(/^\/+/, '')
		return `${base}${clean}`
	}

	return (
		<div
			role="dialog"
			aria-modal="true"
			aria-label={`${project.title} details`}
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose()
			}}
			style={{
				position: 'fixed',
				inset: 0,
				background: 'rgba(0,0,0,0.6)',
				backdropFilter: 'blur(6px)',
				zIndex: 2000,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '40px'
			}}
		>
			<div
				style={{
					position: 'relative',
					width: 'min(1000px, 92vw)',
					maxHeight: '86vh',
					overflow: 'auto',
					background: 'rgba(10,12,20,0.9)',
					border: '1px solid rgba(255,255,255,0.1)',
					borderRadius: '16px',
					padding: '28px',
					color: 'white'
				}}
			>
				<button
					onClick={onClose}
					aria-label="Close"
					style={{
						position: 'absolute',
						top: 12,
						right: 12,
						background: 'transparent',
						border: '1px solid rgba(255,255,255,0.25)',
						color: 'white',
						padding: '6px 10px',
						borderRadius: '10px',
						cursor: 'pointer'
					}}
				>
					✕
				</button>

				<h3 style={{ margin: '6px 0 12px', fontWeight: 300, letterSpacing: '1px' }}>{project.title}</h3>
				<div style={{
					display: 'flex',
					gap: '10px',
					alignItems: 'center',
					color: 'rgba(255,255,255,0.7)',
					fontSize: '0.95rem',
					marginBottom: '12px'
				}}>
					{project.category && <span style={{
						border: '1px solid rgba(136,170,255,0.3)',
						padding: '2px 8px',
						borderRadius: '999px',
						color: '#88aaff'
					}}>{project.category}</span>}
					{project.year && <span>{project.year}</span>}
				</div>
				{project.description && (
					<p style={{ opacity: 0.8, lineHeight: 1.6, marginBottom: '18px' }}>{project.description}</p>
				)}

				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
						gap: '12px'
					}}
				>
					{(project.images || []).map((src, idx) => (
						<div key={idx} style={{
							position: 'relative',
							width: '100%',
							aspectRatio: '4/3',
							overflow: 'hidden',
							borderRadius: '10px',
							border: '1px solid rgba(255,255,255,0.08)'
						}}>
							<img
								src={asset(src)}
								alt={`${project.title} ${idx + 1}`}
								style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProjectModal
