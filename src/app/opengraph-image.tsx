import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Alexandre Alan — Network Analyst N2 & Software Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#080808',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
        {/* Gold border top */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: '#c9a84c', display: 'flex' }} />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(201,168,76,0.08)',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: 100,
            padding: '8px 20px',
            marginBottom: 40,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399', display: 'flex' }} />
          <span style={{ color: '#34d399', fontSize: 14, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Disponível para projetos
          </span>
        </div>

        {/* Name */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
          <span style={{ color: '#8a8070', fontSize: 18, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Network Analyst N2 · Software Developer
          </span>
          <span style={{ color: '#f0ebe0', fontSize: 88, fontWeight: 900, lineHeight: 1, letterSpacing: '-2px' }}>
            Alexandre
          </span>
          <span style={{ color: '#c9a84c', fontSize: 88, fontWeight: 900, lineHeight: 1, letterSpacing: '-2px' }}>
            Alan.
          </span>
        </div>

        {/* Description */}
        <span style={{ color: '#6a6055', fontSize: 22, maxWidth: 700, lineHeight: 1.6 }}>
          pfSense · Python · TypeScript · Docker · Linux · Next.js
        </span>

        {/* Domain */}
        <div style={{ position: 'absolute', bottom: 48, right: 80 }}>
          <span style={{ color: '#4a4540', fontSize: 18, letterSpacing: '0.1em' }}>
            blog.morenadoaco.com.br
          </span>
        </div>
      </div>
    ),
    { ...size },
  )
}
