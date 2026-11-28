import { siteHost } from '@/lib/site'
import { ImageResponse } from 'next/og'

export const alt = 'BTDLabs / Product & Technology'
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
          backgroundColor: '#15120f',
          backgroundImage:
            'linear-gradient(135deg, rgba(241, 144, 75, 0.14) 0%, transparent 42%), linear-gradient(rgba(241, 144, 75, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(241, 144, 75, 0.06) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
          color: '#f5f1eb',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '999px',
              backgroundColor: '#f1904b',
            }}
          />
          <div style={{ display: 'flex', fontSize: 28, letterSpacing: '0.18em', color: '#b3aba2' }}>
            PRODUCT & TECHNOLOGY COMPANY
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '1056px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              fontWeight: 700,
            }}
          >
            <div style={{ display: 'flex', fontSize: 84, color: '#f5f1eb', whiteSpace: 'nowrap' }}>BTDLabs</div>
            <div style={{ display: 'flex', fontSize: 42, color: '#f1904b', whiteSpace: 'nowrap' }}>/ PRODUCT & TECHNOLOGY</div>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 36,
              lineHeight: 1.25,
              color: '#d8d2c8',
              letterSpacing: '-0.02em',
              maxWidth: '860px',
            }}
          >
            We build digital products that work in the real world.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            letterSpacing: '0.08em',
            color: '#b3aba2',
          }}
        >
          <div style={{ display: 'flex' }}>{siteHost}</div>
          <div style={{ display: 'flex', color: '#68cfb7' }}>OWNED PRODUCTS / SELECTED SYSTEMS</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
