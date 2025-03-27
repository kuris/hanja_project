import Link from 'next/link';

export default function NatureGroup() {
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
          <Link href="/groups" className="text-blue-600 hover:text-blue-800">
            ← 그룹 목록으로 돌아가기
          </Link>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">자연과 방향</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">한자 목록</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">山</div>
              <div className="text-sm text-gray-600">메[뫼] 산</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">水</div>
              <div className="text-sm text-gray-600">물 수</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">木</div>
              <div className="text-sm text-gray-600">나무 목</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">火</div>
              <div className="text-sm text-gray-600">불 화</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">土</div>
              <div className="text-sm text-gray-600">흙 토</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">東</div>
              <div className="text-sm text-gray-600">동녘 동</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">西</div>
              <div className="text-sm text-gray-600">서녘 서</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">南</div>
              <div className="text-sm text-gray-600">남녘 남</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">北</div>
              <div className="text-sm text-gray-600">북녘 북</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">자연의 보물 찾기</h3>
          
          <div className="prose max-w-none">
            <p>어느 날, 용감한 탐험가가 보물 지도를 발견했습니다. 지도에는 <span className="text-xl font-bold text-blue-700">東</span>(동)쪽에 큰 <span className="text-xl font-bold text-blue-700">山</span>(산)이 있고, <span className="text-xl font-bold text-blue-700">西</span>(서)쪽에는 맑은 <span className="text-xl font-bold text-blue-700">水</span>(수)가 흐르며, <span className="text-xl font-bold text-blue-700">南</span>(남)쪽에는 울창한 <span className="text-xl font-bold text-blue-700">木</span>(목) 숲이, <span className="text-xl font-bold text-blue-700">北</span>(북)쪽에는 신비로운 동굴이 있다고 표시되어 있었습니다.</p>
            
            <p>탐험가는 먼저 동쪽 산으로 향했습니다. 산을 오르는 동안 <span className="text-xl font-bold text-blue-700">土</span>(토) 흙 속에서 반짝이는 것을 발견했습니다. 그것은 오래된 등불이었습니다. 등불에 <span className="text-xl font-bold text-blue-700">火</span>(화) 불을 붙이자, 주변이 환하게 밝아졌습니다.</p>
            
            <p>이 이야기를 통해 자연 요소와 방향을 나타내는 한자들을 배우게 됩니다. 山(산)은 산, 水(수)는 물, 木(목)은 나무, 火(화)는 불, 土(토)는 흙을 의미하며, 東(동)은 동쪽, 西(서)는 서쪽, 南(남)은 남쪽, 北(북)은 북쪽을 의미합니다.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">한자 학습</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 text-center">
                <div className="text-6xl mb-2">山</div>
                <div className="text-xl text-gray-700">메[뫼] 산</div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-2">• 의미: 산</p>
                <p className="text-gray-600 mb-2">• 부수: 山 (산)</p>
                <p className="text-gray-600">• 획수: 3획</p>
                <p className="text-gray-600 mt-4">관련 단어: 山水(산수), 登山(등산)</p>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 text-center">
                <div className="text-6xl mb-2">水</div>
                <div className="text-xl text-gray-700">물 수</div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-2">• 의미: 물</p>
                <p className="text-gray-600 mb-2">• 부수: 水 (수)</p>
                <p className="text-gray-600">• 획수: 4획</p>
                <p className="text-gray-600 mt-4">관련 단어: 水泳(수영), 山水(산수)</p>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 text-center">
                <div className="text-6xl mb-2">木</div>
                <div className="text-xl text-gray-700">나무 목</div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-2">• 의미: 나무</p>
                <p className="text-gray-600 mb-2">• 부수: 木 (목)</p>
                <p className="text-gray-600">• 획수: 4획</p>
                <p className="text-gray-600 mt-4">관련 단어: 木材(목재), 樹木(수목)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">퀴즈</h3>
          
          <div className="space-y-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="font-bold mb-2">1. '동쪽'을 의미하는 한자는?</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">東</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">西</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">南</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">北</button>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="font-bold mb-2">2. '물'을 의미하는 한자는?</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">山</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">水</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">木</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">火</button>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="font-bold mb-2">3. '흙'을 의미하는 한자는?</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">水</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">火</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">土</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">木</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link href="/groups/family" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
            이전: 가족과 사람
          </Link>
          <Link href="/groups/numbers" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            다음: 숫자와 기본 개념
          </Link>
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
