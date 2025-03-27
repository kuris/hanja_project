'use server'
import { headers } from 'next/headers'

// 방문자 카운터 및 로그 기능 (Vercel 환경용 대체 구현)
export async function incrementAndLog() {
  const headersList = headers()
  
  // Vercel 환경에서는 실제 DB 연동 없이 더미 데이터 반환
  return {
    count: Math.floor(Math.random() * 100) + 1,
    recentAccess: [
      { accessed_at: new Date().toISOString() },
      { accessed_at: new Date(Date.now() - 1000 * 60 * 5).toISOString() },
      { accessed_at: new Date(Date.now() - 1000 * 60 * 10).toISOString() },
      { accessed_at: new Date(Date.now() - 1000 * 60 * 15).toISOString() },
      { accessed_at: new Date(Date.now() - 1000 * 60 * 20).toISOString() }
    ]
  } as { count: number; recentAccess: { accessed_at: string }[] }
}

// 현재 카운터 및 최근 방문 정보 조회
export async function getStats() {
  // Vercel 환경에서는 실제 DB 연동 없이 더미 데이터 반환
  return {
    count: Math.floor(Math.random() * 100) + 1,
    recentAccess: [
      { accessed_at: new Date().toISOString() },
      { accessed_at: new Date(Date.now() - 1000 * 60 * 5).toISOString() },
      { accessed_at: new Date(Date.now() - 1000 * 60 * 10).toISOString() },
      { accessed_at: new Date(Date.now() - 1000 * 60 * 15).toISOString() },
      { accessed_at: new Date(Date.now() - 1000 * 60 * 20).toISOString() }
    ]
  } as { count: number; recentAccess: { accessed_at: string }[] }
}
