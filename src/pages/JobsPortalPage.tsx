import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const JobsPortalPage = () => {
  // 상단 6개 카드 (일반 크기)
  const mainJobCategories = [
    {
      id: 'f2r',
      title: 'F-2-R JOBS',
      subtitle: '지역특화형 우수인재',
      description: 'F-2-R 비자 소지자 및 취득 예정자를 위한 채용정보',
      count: '준비중',
      bgColor: 'bg-gradient-to-br from-green-50 to-teal-50',
      borderColor: 'border-green-300',
      icon: '🎓',
      illustration: `
        <svg viewBox="0 0 200 150" class="w-full h-32">
          <circle cx="100" cy="60" r="30" fill="#10B981" opacity="0.2"/>
          <rect x="70" y="90" width="60" height="50" rx="5" fill="#10B981" opacity="0.3"/>
          <circle cx="85" cy="50" r="15" fill="#059669"/>
          <circle cx="115" cy="50" r="15" fill="#059669"/>
        </svg>
      `
    },
    {
      id: 'e74r',
      title: 'E-7-4R JOBS',
      subtitle: '지역특화형 숙련기능인력',
      description: 'E-7-4R 비자 소지자를 위한 지역 특화 일자리',
      count: '준비중',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-300',
      icon: '⚙️',
      illustration: `
        <svg viewBox="0 0 200 150" class="w-full h-32">
          <circle cx="100" cy="60" r="30" fill="#F59E0B" opacity="0.2"/>
          <rect x="75" y="85" width="50" height="55" rx="5" fill="#F59E0B" opacity="0.3"/>
          <circle cx="90" cy="45" r="12" fill="#D97706"/>
          <circle cx="110" cy="45" r="12" fill="#D97706"/>
        </svg>
      `
    },
    {
      id: 'e74',
      title: 'E-7-4 JOBS',
      subtitle: '사업장변경 및 신규채용',
      description: 'E-7-4 비자 소지자를 위한 전문 일자리',
      count: '준비중',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      borderColor: 'border-blue-300',
      icon: '🔧',
      illustration: `
        <svg viewBox="0 0 200 150" class="w-full h-32">
          <circle cx="100" cy="60" r="30" fill="#3B82F6" opacity="0.2"/>
          <rect x="70" y="88" width="60" height="52" rx="5" fill="#3B82F6" opacity="0.3"/>
          <circle cx="88" cy="48" r="13" fill="#2563EB"/>
          <circle cx="112" cy="48" r="13" fill="#2563EB"/>
        </svg>
      `
    },
    {
      id: 'e71',
      title: 'E-7-1 JOBS',
      subtitle: '특정활동',
      description: 'E-7-1 비자 소지자를 위한 특정 활동 일자리',
      count: '준비중',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      borderColor: 'border-purple-300',
      icon: '💼',
      illustration: `
        <svg viewBox="0 0 200 150" class="w-full h-32">
          <circle cx="100" cy="60" r="30" fill="#A855F7" opacity="0.2"/>
          <rect x="75" y="90" width="50" height="48" rx="5" fill="#A855F7" opacity="0.3"/>
          <circle cx="92" cy="50" r="12" fill="#9333EA"/>
          <circle cx="108" cy="50" r="12" fill="#9333EA"/>
        </svg>
      `
    },
    {
      id: 'e7m',
      title: 'E-7-M JOBS',
      subtitle: '기계제조업 특화',
      description: 'E-7-M 비자 소지자를 위한 기계제조업 일자리',
      count: '준비중',
      bgColor: 'bg-gradient-to-br from-red-50 to-orange-50',
      borderColor: 'border-red-300',
      icon: '🏭',
      illustration: `
        <svg viewBox="0 0 200 150" class="w-full h-32">
          <circle cx="100" cy="60" r="30" fill="#EF4444" opacity="0.2"/>
          <rect x="72" y="87" width="56" height="53" rx="5" fill="#EF4444" opacity="0.3"/>
          <circle cx="87" cy="47" r="13" fill="#DC2626"/>
          <circle cx="113" cy="47" r="13" fill="#DC2626"/>
        </svg>
      `
    },
    {
      id: 'd10',
      title: 'D-10 INTERNSHIP',
      subtitle: '구직 인턴십',
      description: 'D-10 비자 소지자를 위한 인턴십 프로그램',
      count: '준비중',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-300',
      icon: '🎯',
      illustration: `
        <svg viewBox="0 0 200 150" class="w-full h-32">
          <circle cx="100" cy="60" r="30" fill="#06B6D4" opacity="0.2"/>
          <rect x="73" y="89" width="54" height="51" rx="5" fill="#06B6D4" opacity="0.3"/>
          <circle cx="89" cy="49" r="12" fill="#0891B2"/>
          <circle cx="111" cy="49" r="12" fill="#0891B2"/>
        </svg>
      `
    }
  ]

  // D-2 PART TIME 카드 (하단 가로 길게)
  const partTimeCategory = {
    id: 'd2',
    title: 'D-2 PART TIME',
    subtitle: '유학생 아르바이트',
    description: 'D-2 유학생을 위한 합법적 아르바이트 정보',
    count: '준비중',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-green-50',
    borderColor: 'border-emerald-300',
    icon: '📚',
    illustration: `
      <svg viewBox="0 0 200 150" class="w-full h-32">
        <circle cx="100" cy="60" r="30" fill="#10B981" opacity="0.2"/>
        <rect x="74" y="88" width="52" height="52" rx="5" fill="#10B981" opacity="0.3"/>
        <circle cx="90" cy="48" r="12" fill="#059669"/>
        <circle cx="110" cy="48" r="12" fill="#059669"/>
      </svg>
    `
  }

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section class="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              전문채용관
            </h1>
            <p class="text-xl text-gray-600 mb-2">
              비자 유형별 맞춤 채용 정보
            </p>
            <p class="text-base text-gray-500">
              각 비자에 특화된 기업 채용 정보를 한눈에 확인하세요
            </p>
          </div>

          {/* Category Tabs */}
          <div class="flex justify-center mb-12">
            {/* 모바일: 전체(상단) + 3개(하단), 데스크탑: 가로 배치 */}
            <div class="flex flex-col sm:flex-row gap-2 sm:bg-white sm:rounded-full sm:shadow-md sm:p-1 sm:space-x-1 sm:gap-0">
              {/* 전체 버튼 - 모바일에서 전체 너비 */}
              <button class="w-full sm:w-auto px-4 py-2 sm:px-6 rounded-full bg-navy text-white font-medium text-sm sm:text-base transition-all shadow-md sm:shadow-none">
                전체
              </button>
              
              {/* 나머지 3개 버튼 - 모바일에서 가로 3등분 */}
              <div class="grid grid-cols-3 gap-2 sm:contents">
                <button class="px-3 py-2 sm:px-6 rounded-full text-gray-600 hover:bg-gray-100 font-medium text-sm sm:text-base transition-all bg-white shadow-sm sm:shadow-none">
                  취업비자
                </button>
                <button class="px-3 py-2 sm:px-6 rounded-full text-gray-600 hover:bg-gray-100 font-medium text-sm sm:text-base transition-all bg-white shadow-sm sm:shadow-none">
                  인턴십
                </button>
                <button class="px-3 py-2 sm:px-6 rounded-full text-gray-600 hover:bg-gray-100 font-medium text-sm sm:text-base transition-all bg-white shadow-sm sm:shadow-none">
                  아르바이트
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories Grid */}
      <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-7xl mx-auto">
          {/* 상단 6개 카드 (3열 그리드) */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {mainJobCategories.map((category) => (
              <div 
                key={category.id}
                class={`${category.bgColor} ${category.borderColor} border-2 rounded-3xl p-8 card-hover cursor-pointer transition-all duration-300 hover:shadow-2xl relative overflow-hidden`}
              >
                {/* Count Badge */}
                <div class="absolute top-4 right-4 bg-navy text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  {category.count}
                </div>

                {/* Icon */}
                <div class="text-5xl mb-4 text-center">
                  {category.icon}
                </div>

                {/* Illustration */}
                <div class="mb-4" innerHTML={category.illustration}></div>

                {/* Content */}
                <div class="text-center">
                  <h3 class="text-2xl font-bold text-navy mb-2">
                    {category.title}
                  </h3>
                  <p class="text-sm font-medium text-gray-600 mb-3">
                    {category.subtitle}
                  </p>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Coming Soon Badge */}
                <div class="mt-6 text-center">
                  <span class="inline-block bg-white bg-opacity-70 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300">
                    🔜 곧 오픈 예정
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* D-2 PART TIME 카드 (가로 길게) */}
          <div class="w-full">
            <div 
              class={`${partTimeCategory.bgColor} ${partTimeCategory.borderColor} border-2 rounded-3xl p-8 card-hover cursor-pointer transition-all duration-300 hover:shadow-2xl relative overflow-hidden`}
            >
              {/* Count Badge */}
              <div class="absolute top-4 right-4 bg-navy text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                {partTimeCategory.count}
              </div>

              {/* 전체 가운데 정렬 */}
              <div class="flex flex-col items-center justify-center text-center">
                {/* Icon */}
                <div class="text-5xl mb-3">
                  {partTimeCategory.icon}
                </div>

                {/* Illustration - 더 작게 조정 */}
                <div class="w-32 mb-3" innerHTML={partTimeCategory.illustration}></div>

                {/* Content */}
                <div class="max-w-3xl">
                  <h3 class="text-2xl font-bold text-navy mb-2">
                    {partTimeCategory.title}
                  </h3>
                  <p class="text-sm font-medium text-gray-600 mb-2">
                    {partTimeCategory.subtitle}
                  </p>
                  <p class="text-sm text-gray-600 leading-relaxed mb-4">
                    {partTimeCategory.description}
                  </p>
                  <span class="inline-block bg-white bg-opacity-70 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-300">
                    🔜 곧 오픈 예정
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section class="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div class="max-w-4xl mx-auto text-center">
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <div class="text-5xl mb-4">💡</div>
            <h3 class="text-2xl font-bold text-navy mb-4">
              채용전문관 안내
            </h3>
            <div class="space-y-4 text-left text-gray-600 leading-relaxed">
              <p class="flex items-start">
                <i class="fas fa-check-circle text-teal-blue mr-3 mt-1"></i>
                <span>각 비자 유형에 특화된 기업 채용 정보를 제공합니다</span>
              </p>
              <p class="flex items-start">
                <i class="fas fa-check-circle text-teal-blue mr-3 mt-1"></i>
                <span>비자 요건을 충족하는 검증된 채용 정보만 등록됩니다</span>
              </p>
              <p class="flex items-start">
                <i class="fas fa-check-circle text-teal-blue mr-3 mt-1"></i>
                <span>곧 오픈 예정이며, 다양한 기업의 채용 정보가 추가될 예정입니다</span>
              </p>
              <p class="flex items-start">
                <i class="fas fa-check-circle text-teal-blue mr-3 mt-1"></i>
                <span>채용 정보 등록을 원하시는 기업은 <a href="/company" class="text-teal-blue font-medium hover:underline">기업채용 페이지</a>를 참고해주세요</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-blue to-navy text-white">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6" style="font-family: 'Cardo', serif;">
            나에게 맞는 일자리를 찾고 계신가요?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            전문 상담을 통해 최적의 채용 정보를 찾아드립니다
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/apply" 
              class="btn-orange-gradient inline-block px-8 py-4 rounded-xl text-lg font-bold hover:no-underline"
            >
              구직 신청하기 →
            </a>
            <a 
              href="/company" 
              class="bg-white text-navy inline-block px-8 py-4 rounded-xl text-lg font-bold hover:bg-opacity-90 hover:no-underline transition-all"
            >
              채용 정보 등록하기
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
