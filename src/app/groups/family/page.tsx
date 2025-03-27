import Link from 'next/link';

export default function FamilyGroup() {
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

        <h2 className="text-3xl font-bold text-gray-800 mb-6">가족과 사람</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">한자 목록</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">父</div>
              <div className="text-sm text-gray-600">아비 부</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">母</div>
              <div className="text-sm text-gray-600">어미 모</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">女</div>
              <div className="text-sm text-gray-600">계집 녀</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">人</div>
              <div className="text-sm text-gray-600">사람 인</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">兄</div>
              <div className="text-sm text-gray-600">형 형</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">弟</div>
              <div className="text-sm text-gray-600">아우 제</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">우리 가족의 하루</h3>
          
          <div className="prose max-w-none">
            <p>옛날 옛적, 한 가족이 살았습니다. <span className="text-xl font-bold text-blue-700">父</span>(부) 아버지는 가족의 기둥이었고, <span className="text-xl font-bold text-blue-700">母</span>(모) 어머니는 가족을 따뜻하게 보살폈습니다. 그들에게는 두 아들과 한 딸이 있었는데, <span className="text-xl font-bold text-blue-700">兄</span>(형) 큰아들은 책임감이 강했고, <span className="text-xl font-bold text-blue-700">弟</span>(제) 작은아들은 장난기가 많았습니다. <span className="text-xl font-bold text-blue-700">女</span>(녀) 딸은 항상 밝은 미소를 지니고 있었죠.</p>
            
            <p>매일 아침, 이 다섯 <span className="text-xl font-bold text-blue-700">人</span>(인)은 함께 식사를 하며 하루를 시작했습니다. 아버지는 "오늘도 모두 건강하게 지내자"라고 말하곤 했습니다.</p>
            
            <p>이 이야기를 통해 가족 구성원을 나타내는 한자들을 배우게 됩니다. 父(부)는 아버지, 母(모)는 어머니, 兄(형)은 형, 弟(제)는 아우, 女(녀)는 여자, 人(인)은 사람을 의미합니다.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">한자 학습</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 text-center">
                <div className="text-6xl mb-2">父</div>
                <div className="text-xl text-gray-700">아비 부</div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-2">• 의미: 아버지</p>
                <p className="text-gray-600 mb-2">• 부수: 父 (부)</p>
                <p className="text-gray-600">• 획수: 4획</p>
                <p className="text-gray-600 mt-4">관련 단어: 父母(부모), 祖父(조부)</p>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 text-center">
                <div className="text-6xl mb-2">母</div>
                <div className="text-xl text-gray-700">어미 모</div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-2">• 의미: 어머니</p>
                <p className="text-gray-600 mb-2">• 부수: 母 (모)</p>
                <p className="text-gray-600">• 획수: 5획</p>
                <p className="text-gray-600 mt-4">관련 단어: 父母(부모), 祖母(조모)</p>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 text-center">
                <div className="text-6xl mb-2">女</div>
                <div className="text-xl text-gray-700">계집 녀</div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-2">• 의미: 여자</p>
                <p className="text-gray-600 mb-2">• 부수: 女 (녀)</p>
                <p className="text-gray-600">• 획수: 3획</p>
                <p className="text-gray-600 mt-4">관련 단어: 女子(여자), 少女(소녀)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">퀴즈</h3>
          
          <div className="space-y-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="font-bold mb-2">1. '아버지'를 의미하는 한자는?</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">父</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">母</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">兄</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">弟</button>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="font-bold mb-2">2. '사람'을 의미하는 한자는?</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">女</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">人</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">兄</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">弟</button>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="font-bold mb-2">3. '어머니'를 의미하는 한자는?</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">父</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">母</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">女</button>
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">人</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link href="/groups" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
            이전: 그룹 목록
          </Link>
          <Link href="/groups/nature" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            다음: 자연과 방향
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
