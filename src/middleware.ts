import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Allow public access to these routes
  const publicRoutes = [
    '/',
    '/templates',
    '/pricing',
    '/about',
    '/contact',
    '/api/templates',
    '/api/pricing',
  ]

  // Check if the current path is in public routes
  const isPublicRoute = publicRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  )

  // If it's a public route, allow access
  if (isPublicRoute) {
    return NextResponse.next()
  }

  // For all other routes, check authentication
  const token = request.cookies.get('next-auth.session-token')?.value

  if (!token) {
    // Redirect to home page if not authenticated
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 