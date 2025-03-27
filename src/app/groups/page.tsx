import Link from 'next/link';

export default function Groups() {
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

        <h2 className="text-3xl font-bold text-gray-800 mb-8">한자 학습 그룹</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link href="/groups/family" className="block">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">가족과 사람</h3>
              <div className="text-3xl mb-4 space-x-2">
                <span className="inline-block">父</span>
                <span className="inline-block">母</span>
                <span className="inline-block">女</span>
                <span className="inline-block">人</span>
                <span className="inline-block">兄</span>
                <span className="inline-block">弟</span>
              </div>
              <p className="text-gray-600 mb-4">
                가족 구성원과 사람에 관련된 한자들을 재미있는 이야기로 배워봅시다.
              </p>
              <p className="text-blue-600">이야기 보러가기 →</p>
            </div>
          </Link>

          <Link href="/groups/nature" className="block">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">자연과 방향</h3>
              <div className="text-3xl mb-4 space-x-2">
                <span className="inline-block">山</span>
                <span className="inline-block">水</span>
                <span className="inline-block">木</span>
                <span className="inline-block">火</span>
                <span className="inline-block">土</span>
                <span className="inline-block">東</span>
                <span className="inline-block">西</span>
                <span className="inline-block">南</span>
                <span className="inline-block">北</span>
              </div>
              <p className="text-gray-600 mb-4">
                자연 요소와 방향을 나타내는 한자들을 모험 이야기를 통해 배워봅시다.
              </p>
              <p className="text-blue-600">이야기 보러가기 →</p>
            </div>
          </Link>

          <Link href="/groups/numbers" className="block">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">숫자와 기본 개념</h3>
              <div className="text-3xl mb-4 space-x-2">
                <span className="inline-block">一</span>
                <span className="inline-block">二</span>
                <span className="inline-block">三</span>
                <span className="inline-block">四</span>
                <span className="inline-block">五</span>
                <span className="inline-block">七</span>
                <span className="inline-block">八</span>
                <span className="inline-block">九</span>
                <span className="inline-block">十</span>
                <span className="inline-block">大</span>
                <span className="inline-block">小</span>
                <span className="inline-block">中</span>
                <span className="inline-block">長</span>
              </div>
              <p className="text-gray-600 mb-4">
                숫자와 기본 개념을 나타내는 한자들을 축제 이야기를 통해 배워봅시다.
              </p>
              <p className="text-blue-600">이야기 보러가기 →</p>
            </div>
          </Link>

          <Link href="/groups/school" className="block">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">학교와 배움</h3>
              <div className="text-3xl mb-4 space-x-2">
                <span className="inline-block">校</span>
                <span className="inline-block">敎</span>
                <span className="inline-block">學</span>
                <span className="inline-block">生</span>
                <span className="inline-block">先</span>
                <span className="inline-block">門</span>
                <span className="inline-block">室</span>
              </div>
              <p className="text-gray-600 mb-4">
                학교와 배움에 관련된 한자들을 지혜의 문 이야기를 통해 배워봅시다.
              </p>
              <p className="text-blue-600">이야기 보러가기 →</p>
            </div>
          </Link>

          <Link href="/groups/country" className="block">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">국가와 사회</h3>
              <div className="text-3xl mb-4 space-x-2">
                <span className="inline-block">國</span>
                <span className="inline-block">民</span>
                <span className="inline-block">王</span>
                <span className="inline-block">金</span>
                <span className="inline-block">白</span>
                <span className="inline-block">靑</span>
                <span className="inline-block">韓</span>
              </div>
              <p className="text-gray-600 mb-4">
                국가와 사회에 관련된 한자들을 푸른 나라 이야기를 통해 배워봅시다.
              </p>
              <p className="text-blue-600">이야기 보러가기 →</p>
            </div>
          </Link>

          <Link href="/groups/time" className="block">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">시간과 자연 현상</h3>
              <div className="text-3xl mb-4 space-x-2">
                <span className="inline-block">日</span>
                <span className="inline-block">月</span>
                <span className="inline-block">年</span>
                <span className="inline-block">外</span>
                <span className="inline-block">寸</span>
                <span className="inline-block">兄</span>
                <span className="inline-block">車</span>
                <span className="inline-block">萬</span>
              </div>
              <p className="text-gray-600 mb-4">
                시간과 자연 현상에 관련된 한자들을 시간 여행자 이야기를 통해 배워봅시다.
              </p>
              <p className="text-blue-600">이야기 보러가기 →</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2025 한자 이야기. 모든 권리 보유.</p>
        </div>
      </footer>
    </div>
  );
}
