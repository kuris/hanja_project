import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-blue-800">한자 이야기</h1>
          <p className="text-gray-600">재미있는 이야기로 배우는 한자 공부</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">이야기로 배우는 한자의 세계</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            한자는 단순한 글자가 아닌 수천 년의 역사와 문화가 담긴 이야기입니다.
            재미있는 스토리를 통해 한자의 의미와 형태를 자연스럽게 배워보세요.
          </p>
          <div className="mt-10">
            <Link 
              href="/groups" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              학습 시작하기
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">스토리텔링 학습</h3>
            <p className="text-gray-600">
              단순 암기가 아닌 재미있는 이야기를 통해 한자의 의미와 형태를 자연스럽게 기억할 수 있습니다.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">체계적인 학습</h3>
            <p className="text-gray-600">
              8급 한자 50자부터 시작하여 단계별로 한자를 배울 수 있습니다.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">인터랙티브 학습</h3>
            <p className="text-gray-600">
              퀴즈와 게임을 통해 배운 한자를 재미있게 복습하고 기억할 수 있습니다.
            </p>
          </div>
        </section>

        <section className="bg-blue-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">한자 그룹 학습</h2>
          <p className="text-gray-600 mb-6">
            한자를 의미별로 그룹화하여 연관성 있게 학습합니다. 각 그룹은 재미있는 이야기로 구성되어 있습니다.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/groups/family" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-blue-800">가족과 사람</h3>
              <p className="text-gray-600">父, 母, 女, 人, 兄, 弟</p>
            </Link>
            <Link href="/groups/nature" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-blue-800">자연과 방향</h3>
              <p className="text-gray-600">山, 水, 木, 火, 土, 東, 西, 南, 北</p>
            </Link>
            <Link href="/groups/numbers" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-blue-800">숫자와 기본 개념</h3>
              <p className="text-gray-600">一, 二, 三, 四, 五, 七, 八, 九, 十, 大, 小, 中, 長</p>
            </Link>
            <Link href="/groups/school" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-blue-800">학교와 배움</h3>
              <p className="text-gray-600">校, 敎, 學, 生, 先, 門, 室</p>
            </Link>
            <Link href="/groups/country" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-blue-800">국가와 사회</h3>
              <p className="text-gray-600">國, 民, 王, 金, 白, 靑, 韓</p>
            </Link>
            <Link href="/groups/time" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-blue-800">시간과 자연 현상</h3>
              <p className="text-gray-600">日, 月, 年, 外, 寸, 兄, 車, 萬</p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2025 한자 이야기. 모든 권리 보유.</p>
        </div>
      </footer>
    </div>
  );
}
