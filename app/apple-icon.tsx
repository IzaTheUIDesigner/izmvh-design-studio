import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FF4D1C',
        }}
      >
        <span
          style={{
            color: '#040404',
            fontSize: 84,
            fontWeight: 700,
            fontFamily: 'sans-serif',
            letterSpacing: '0.02em',
          }}
        >
          IZ
        </span>
      </div>
    ),
    { ...size }
  )
}
