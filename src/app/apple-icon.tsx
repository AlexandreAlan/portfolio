import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: '#0d0b09',
          border: '3px solid rgba(201,168,76,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'monospace',
            fontWeight: 900,
            fontSize: 72,
            color: '#c9a84c',
            letterSpacing: '-2px',
          }}
        >
          AA
        </span>
      </div>
    ),
    { ...size },
  )
}
