import { NextResponse, type NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  if (url.pathname === '/he' || url.pathname.startsWith('/he/')) return NextResponse.next()
  if (url.pathname === '/en' || url.pathname.startsWith('/en/')) return NextResponse.next()
  url.pathname = `/he${url.pathname === '/' ? '' : url.pathname}`
  return NextResponse.rewrite(url)
}

export const config = { matcher: ['/((?!api|_next|.*\\..*).*)'] }
