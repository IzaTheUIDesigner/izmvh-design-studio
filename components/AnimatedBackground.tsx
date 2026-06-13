'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return
      glowRef.current.style.left = `${e.clientX - 200}px`
      glowRef.current.style.top = `${e.clientY - 200}px`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Soft green radial at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(15,92,74,0.08) 0%, transparent 60%)' }}
      />
      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none transition-[left,top] duration-300 ease-out"
        style={{ background: 'radial-gradient(circle, rgba(15,92,74,0.1) 0%, transparent 70%)', willChange: 'left, top' }}
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'linear-gradient(rgba(18,24,58,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(18,24,58,0.05) 1px, transparent 1px)',
backgroundSize: '60px 60px',
        }}
      />
      {/* Floating dots */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full" style={{ background: 'rgba(15,92,74,0.3)', animation: 'float1 6s ease-in-out infinite' }} />
      <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full" style={{ background: 'rgba(15,92,74,0.2)', animation: 'float2 8s ease-in-out infinite' }} />
      <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(15,92,74,0.25)', animation: 'float3 7s ease-in-out infinite' }} />
      <style>{`
        @keyframes float1 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(-12px,-18px); } }
        @keyframes float2 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(10px,14px); } }
        @keyframes float3 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(-8px,12px); } }
      `}</style>
    </div>
  )
}
