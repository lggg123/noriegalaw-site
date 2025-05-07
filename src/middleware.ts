import { NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Create rate limiter
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1 m'), // 10 requests per minute
  analytics: true,
})

export async function middleware(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1'
  
  // Rate limit API routes
  if (request.url.includes('/api/')) {
    const { success, limit, reset, remaining } = await ratelimit.limit(ip)
    
    if (!success) {
      return new NextResponse('Too Many Requests', {
        status: 429,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString(),
        },
      })
    }
  }

  // Bot protection
  const userAgent = request.headers.get('user-agent') ?? ''
  if (userAgent.toLowerCase().includes('bot') && !userAgent.includes('googlebot')) {
    return new NextResponse('Not allowed', { status: 403 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/api/:path*',
    '/contact/:path*',
  ],
}