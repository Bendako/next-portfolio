import { ImageResponse } from 'next/og'

export const alt = 'SYSTEMS / BTD — Hybrid Product Builder'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          backgroundColor: '#070a08',
          backgroundImage:
            'linear-gradient(135deg, rgba(46, 184, 109, 0.18) 0%, transparent 42%), linear-gradient(rgba(46, 184, 109, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 184, 109, 0.07) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
          color: '#edf3ef',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '999px',
              backgroundColor: '#2eb86d',
            }}
          />
          <div style={{ display: 'flex', fontSize: 28, letterSpacing: '0.18em', color: '#8aa193' }}>
            PRODUCT / ENGINEERING / BOUNDED AI
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '920px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              fontSize: 92,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              fontWeight: 700,
              color: '#edf3ef',
            }}
          >
            <span>SYSTEMS</span>
            <span style={{ color: '#2eb86d' }}> / BTD</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 36,
              lineHeight: 1.25,
              color: '#c5d4cb',
              letterSpacing: '-0.02em',
              maxWidth: '760px',
            }}
          >
            Hybrid Product Builder — product judgment, full-stack systems, and bounded AI with control.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            letterSpacing: '0.08em',
            color: '#8aa193',
          }}
        >
          <div style={{ display: 'flex' }}>next-portfolio-nine-chi.vercel.app</div>
          <div style={{ display: 'flex', color: '#2eb86d' }}>OPEN GRAPH / IDENTITY</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
