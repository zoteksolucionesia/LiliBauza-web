'use client'
import { useEffect } from 'react'

export default function CitaPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const t = params.get('t')
    window.location.replace(
      t ? `https://zotek-ia.web.app/cita?t=${t}` : 'https://zotek-ia.web.app'
    )
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif', color: '#555' }}>
      Redirigiendo...
    </div>
  )
}
