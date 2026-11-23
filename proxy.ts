import { NextResponse, type NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const headers = new Headers(request.headers)
  headers.set('x-portfolio-locale', request.nextUrl.pathname === '/en' ? 'en' : 'he')
  return NextResponse.next({ request: { headers } })
}

export const config = { matcher: ['/((?!api|_next|.*\\..*).*)'] }
