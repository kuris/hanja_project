import Link from 'next/link';

export default function ProgressTracker() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-blue-800">한자 이야기</h1>
          <p className="text-gray-600">재미있는 이야기로 배우는 한자 공부</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← 홈으로 돌아가기
          </Link>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-8">학습 진행 현황</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">전체 진행률</h3>
          
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">8급 한자 학습 진행률</span>
              <span className="text-gray-700">40%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-blue-600 h-4 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-lg mb-2">완료한 그룹</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">완료</span>
                  <Link href="/groups/family" className="text-blue-600 hover:text-blue-800">가족과 사람</Link>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">완료</span>
                  <Link href="/groups/nature" className="text-blue-600 hover:text-blue-800">자연과 방향</Link>
                </li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-lg mb-2">학습 중인 그룹</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">진행 중</span>
                  <Link href="/groups/numbers" className="text-blue-600 hover:text-blue-800">숫자와 기본 개념</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 mt-6">
            <h4 className="font-bold text-lg mb-2">남은 그룹</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">예정</span>
                <Link href="/groups/school" className="text-blue-600 hover:text-blue-800">학교와 배움</Link>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">예정</span>
                <Link href="/groups/country" className="text-blue-600 hover:text-blue-800">국가와 사회</Link>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">예정</span>
                <Link href="/groups/time" className="text-blue-600 hover:text-blue-800">시간과 자연 현상</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">학습한 한자</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">父</div>
              <div className="text-xs text-gray-600">아비 부</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">母</div>
              <div className="text-xs text-gray-600">어미 모</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">女</div>
              <div className="text-xs text-gray-600">계집 녀</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">人</div>
              <div className="text-xs text-gray-600">사람 인</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">兄</div>
              <div className="text-xs text-gray-600">형 형</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">弟</div>
              <div className="text-xs text-gray-600">아우 제</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">山</div>
              <div className="text-xs text-gray-600">메[뫼] 산</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">水</div>
              <div className="text-xs text-gray-600">물 수</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">木</div>
              <div className="text-xs text-gray-600">나무 목</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">火</div>
              <div className="text-xs text-gray-600">불 화</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">土</div>
              <div className="text-xs text-gray-600">흙 토</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">東</div>
              <div className="text-xs text-gray-600">동녘 동</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">西</div>
              <div className="text-xs text-gray-600">서녘 서</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">南</div>
              <div className="text-xs text-gray-600">남녘 남</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">北</div>
              <div className="text-xs text-gray-600">북녘 북</div>
            </div>
          </div>
          
          <h4 className="font-bold text-lg mb-4">학습 중인 한자</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">一</div>
              <div className="text-xs text-gray-600">한 일</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">二</div>
              <div className="text-xs text-gray-600">두 이</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">三</div>
              <div className="text-xs text-gray-600">석 삼</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">四</div>
              <div className="text-xs text-gray-600">넉 사</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-1">五</div>
              <div className="text-xs text-gray-600">다섯 오</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">복습 추천</h3>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-lg mb-2">오늘의 복습 추천</h4>
              <p className="text-gray-600 mb-4">지난 학습에서 어려움을 겪은 한자들을 복습해보세요.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-1">東</div>
                  <div className="text-xs text-gray-600">동녘 동</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-1">西</div>
                  <div className="text-xs text-gray-600">서녘 서</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-1">南</div>
                  <div className="text-xs text-gray-600">남녘 남</div>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/review" className="text-blue-600 hover:text-blue-800">
                  복습 시작하기 →
                </Link>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-lg mb-2">다음 학습 추천</h4>
              <p className="text-gray-600 mb-4">현재 진행 중인 그룹을 계속 학습해보세요.</p>
              <div className="mt-4">
                <Link href="/groups/numbers" className="text-blue-600 hover:text-blue-800">
                  숫자와 기본 개념 계속 학습하기 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2025 한자 이야기. 모든 권리 보유.</p>
        </div>
      </footer>
    </div>
  );
}
