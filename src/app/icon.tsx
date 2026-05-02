import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: '#0d0b09',
          border: '1px solid rgba(201,168,76,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'monospace',
            fontWeight: 900,
            fontSize: 13,
            color: '#c9a84c',
            letterSpacing: '-0.5px',
          }}
        >
          AA
        </span>
      </div>
    ),
    { ...size },
  )
}
