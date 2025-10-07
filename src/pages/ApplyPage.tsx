import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import reviews from '../../data/reviews.json'

export const ApplyPage = () => {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section class="hero-bg flex items-center justify-center relative pt-16">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
          <h1 class="text-4xl md:text-6xl font-bold text-navy mb-6" style="font-family: 'Cardo', serif;">
            더 나은 미래를 위한<br />당신의 선택
          </h1>
          <p class="text-xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            전문가와 함께 시작하는 안정적인 취업과 비자 취득의 여정
          </p>
          <a 
            href="#visa-selection" 
            class="btn-orange-gradient inline-block px-8 py-4 rounded-xl text-lg font-bold transition-all hover:no-underline"
          >
            지금 바로 시작하기 ↓
          </a>
        </div>
      </section>

      {/* 통계 카드 섹션 */}
      <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* TOP 인재 풀 */}
            <div class="text-center bg-light-gray rounded-2xl">
              {/* PC 버전 */}
              <div class="hidden md:block p-8">
                <div class="text-4xl text-teal-blue mb-4">
                  <i class="fas fa-trophy"></i>
                </div>
                <h3 class="text-xl font-bold text-navy mb-2">TOP 인재 풀</h3>
                <p class="text-gray leading-relaxed">
                  업계 탑 수준의<br />검증된 외국인재 보유
                </p>
              </div>
              
              {/* 모바일 버전 - 50% 축소 */}
              <div class="block md:hidden p-4">
                <div class="text-2xl text-teal-blue mb-2">
                  <i class="fas fa-trophy"></i>
                </div>
                <h3 class="text-lg font-bold text-navy mb-1">TOP 인재 풀</h3>
                <p class="text-sm text-gray leading-relaxed">
                  업계 탑 수준 검증된 인재 보유
                </p>
              </div>
            </div>

            {/* 최고 성공률 */}
            <div class="text-center bg-light-gray rounded-2xl">
              {/* PC 버전 */}
              <div class="hidden md:block p-8">
                <div class="text-4xl text-green mb-4">
                  <i class="fas fa-chart-line"></i>
                </div>
                <h3 class="text-xl font-bold text-navy mb-2">최고 성공률</h3>
                <p class="text-gray leading-relaxed">
                  업계 최고 수준의<br />비자 취득 성공률
                </p>
              </div>
              
              {/* 모바일 버전 - 50% 축소 */}
              <div class="block md:hidden p-4">
                <div class="text-2xl text-green mb-2">
                  <i class="fas fa-chart-line"></i>
                </div>
                <h3 class="text-lg font-bold text-navy mb-1">최고 성공률</h3>
                <p class="text-sm text-gray leading-relaxed">
                  업계 최고 비자 취득 성공률
                </p>
              </div>
            </div>

            {/* ONE-STOP 서비스 */}
            <div class="text-center bg-light-gray rounded-2xl">
              {/* PC 버전 */}
              <div class="hidden md:block p-8">
                <div class="text-4xl text-orange mb-4">
                  <i class="fas fa-concierge-bell"></i>
                </div>
                <h3 class="text-xl font-bold text-navy mb-2">ONE-STOP 서비스</h3>
                <p class="text-gray leading-relaxed">
                  전문가가 직접<br />맞춤형 서비스 제공
                </p>
              </div>
              
              {/* 모바일 버전 - 50% 축소 */}
              <div class="block md:hidden p-4">
                <div class="text-2xl text-orange mb-2">
                  <i class="fas fa-concierge-bell"></i>
                </div>
                <h3 class="text-lg font-bold text-navy mb-1">원스톱 서비스</h3>
                <p class="text-sm text-gray leading-relaxed">
                  전문가 맞춤형 서비스 제공
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7단계 프로세스 */}
      <section class="py-24 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              체계적인 7단계 프로세스
            </h2>
            <p class="text-xl text-gray">
              구직부터 비자 취득까지, 단계별 전문 관리
            </p>
          </div>

          {/* 더글로벌리크루팅 담당 단계 */}
          <div class="mb-16">
            <div class="text-center mb-8">
              <span class="inline-block bg-teal-blue text-white px-6 py-3 rounded-full font-bold text-lg">
                <i class="fas fa-building mr-2"></i>더글로벌리크루팅 담당
              </span>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div class="text-center bg-white rounded-xl shadow-md">
                {/* PC 버전 */}
                <div class="hidden md:block p-6">
                  <div class="text-4xl text-teal-blue mb-4">📄</div>
                  <h4 class="text-lg font-bold text-navy mb-2">STEP 1</h4>
                  <h5 class="font-semibold mb-2">구직 신청</h5>
                  <p class="text-sm text-gray">비자별 맞춤 신청서 작성</p>
                </div>
                {/* 모바일 버전 - 30% 축소 */}
                <div class="block md:hidden p-4">
                  <div class="text-2xl text-teal-blue mb-2">📄</div>
                  <h4 class="text-sm font-bold text-navy mb-1">STEP 1</h4>
                  <h5 class="text-sm font-semibold mb-1">구직 신청</h5>
                  <p class="text-xs text-gray">비자별 신청서 작성</p>
                </div>
              </div>
              
              <div class="text-center bg-white rounded-xl shadow-md">
                {/* PC 버전 */}
                <div class="hidden md:block p-6">
                  <div class="text-4xl text-teal-blue mb-4">📤</div>
                  <h4 class="text-lg font-bold text-navy mb-2">STEP 2</h4>
                  <h5 class="font-semibold mb-2">이력서 제작</h5>
                  <p class="text-sm text-gray">한국형 이력서 전문 작성</p>
                </div>
                {/* 모바일 버전 - 30% 축소 */}
                <div class="block md:hidden p-4">
                  <div class="text-2xl text-teal-blue mb-2">📤</div>
                  <h4 class="text-sm font-bold text-navy mb-1">STEP 2</h4>
                  <h5 class="text-sm font-semibold mb-1">이력서 제작</h5>
                  <p class="text-xs text-gray">한국형 이력서 작성</p>
                </div>
              </div>
              
              <div class="text-center bg-white rounded-xl shadow-md">
                {/* PC 버전 */}
                <div class="hidden md:block p-6">
                  <div class="text-4xl text-teal-blue mb-4">🤝</div>
                  <h4 class="text-lg font-bold text-navy mb-2">STEP 3</h4>
                  <h5 class="font-semibold mb-2">기업 매칭</h5>
                  <p class="text-sm text-gray">맞춤형 기업 추천 및 연결</p>
                </div>
                {/* 모바일 버전 - 30% 축소 */}
                <div class="block md:hidden p-4">
                  <div class="text-2xl text-teal-blue mb-2">🤝</div>
                  <h4 class="text-sm font-bold text-navy mb-1">STEP 3</h4>
                  <h5 class="text-sm font-semibold mb-1">기업 매칭</h5>
                  <p class="text-xs text-gray">맞춤형 기업 추천 연결</p>
                </div>
              </div>
            </div>
          </div>

          {/* 행정사사무소 늘좋은 담당 단계 */}
          <div>
            <div class="text-center mb-8">
              <span class="inline-block bg-orange text-white px-6 py-3 rounded-full font-bold text-lg">
                <i class="fas fa-gavel mr-2"></i>행정사사무소 늘좋은 담당
              </span>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div class="text-center bg-white rounded-xl shadow-md">
                {/* PC 버전 */}
                <div class="hidden md:block p-6">
                  <div class="text-4xl text-orange mb-4">📝</div>
                  <h4 class="text-lg font-bold text-navy mb-2">STEP 4</h4>
                  <h5 class="font-semibold mb-2">비자변경계약</h5>
                  <p class="text-sm text-gray">비자변경서비스 계약 체결</p>
                </div>
                {/* 모바일 버전 - 30% 축소 */}
                <div class="block md:hidden p-4">
                  <div class="text-2xl text-orange mb-2">📝</div>
                  <h4 class="text-sm font-bold text-navy mb-1">STEP 4</h4>
                  <h5 class="text-sm font-semibold mb-1">비자변경계약</h5>
                  <p class="text-xs text-gray">비자 서비스 계약</p>
                </div>
              </div>
              
              <div class="text-center bg-white rounded-xl shadow-md">
                {/* PC 버전 */}
                <div class="hidden md:block p-6">
                  <div class="text-4xl text-orange mb-4">✅</div>
                  <h4 class="text-lg font-bold text-navy mb-2">STEP 5</h4>
                  <h5 class="font-semibold mb-2">추천서 발급</h5>
                  <p class="text-sm text-gray">지자체 또는 정부 추천서 (필요시)</p>
                </div>
                {/* 모바일 버전 - 30% 축소 */}
                <div class="block md:hidden p-4">
                  <div class="text-2xl text-orange mb-2">✅</div>
                  <h4 class="text-sm font-bold text-navy mb-1">STEP 5</h4>
                  <h5 class="text-sm font-semibold mb-1">추천서 발급</h5>
                  <p class="text-xs text-gray">지자체/정부 추천서</p>
                </div>
              </div>
              
              <div class="text-center bg-white rounded-xl shadow-md">
                {/* PC 버전 */}
                <div class="hidden md:block p-6">
                  <div class="text-4xl text-orange mb-4">📮</div>
                  <h4 class="text-lg font-bold text-navy mb-2">STEP 6</h4>
                  <h5 class="font-semibold mb-2">비자 신청</h5>
                  <p class="text-sm text-gray">출입국 관리소 신청</p>
                </div>
                {/* 모바일 버전 - 30% 축소 */}
                <div class="block md:hidden p-4">
                  <div class="text-2xl text-orange mb-2">📮</div>
                  <h4 class="text-sm font-bold text-navy mb-1">STEP 6</h4>
                  <h5 class="text-sm font-semibold mb-1">비자 신청</h5>
                  <p class="text-xs text-gray">출입국 관리소 신청</p>
                </div>
              </div>
              
              <div class="text-center bg-white rounded-xl shadow-md">
                {/* PC 버전 */}
                <div class="hidden md:block p-6">
                  <div class="text-4xl text-green mb-4">🎉</div>
                  <h4 class="text-lg font-bold text-navy mb-2">STEP 7</h4>
                  <h5 class="font-semibold mb-2">비자 발급</h5>
                  <p class="text-sm text-gray">비자 취득 완료</p>
                </div>
                {/* 모바일 버전 - 30% 축소 */}
                <div class="block md:hidden p-4">
                  <div class="text-2xl text-green mb-2">🎉</div>
                  <h4 class="text-sm font-bold text-navy mb-1">STEP 7</h4>
                  <h5 class="text-sm font-semibold mb-1">비자 발급</h5>
                  <p class="text-xs text-gray">비자 취득 완료</p>
                </div>
              </div>
            </div>

            <div class="text-center">
              <p class="text-lg font-semibold text-navy">
                <i class="fas fa-clock text-teal-blue mr-2"></i>
                평균 2~3개월 소요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 이용자 후기 섹션 */}
      <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              실제 이용자 후기
            </h2>
            <p class="text-xl text-gray">
              HIRE ME와 함께한 분들의 생생한 경험담
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 6).map((review) => (
              <div class="bg-light-gray rounded-2xl card-hover">
                {/* PC 버전 */}
                <div class="hidden md:block p-8">
                  <div class="flex items-center mb-4">
                    <div class="w-16 h-16 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                         style={
                           review.nationality === '네팔' ? 'background: linear-gradient(135deg, #DC143C 0%, #003893 50%, #DC143C 100%); border: 3px solid #fff;' :
                           review.nationality === '방글라데시' ? 'background: linear-gradient(135deg, #006A4E 0%, #F42A41 100%); border: 3px solid #fff;' :
                           review.nationality === '스리랑카' ? 'background: linear-gradient(135deg, #FF9933 0%, #008000 50%, #000080 100%); border: 3px solid #fff;' :
                           review.nationality === '미얀마' ? 'background: linear-gradient(135deg, #FECB00 0%, #34B233 50%, #EA2839 100%); border: 3px solid #fff;' :
                           review.nationality === '파키스탄' ? 'background: linear-gradient(135deg, #01411C 0%, #ffffff 100%); border: 3px solid #01411C; color: #01411C;' :
                           review.nationality === '베트남' ? 'background: linear-gradient(135deg, #DA020E 0%, #FFFF00 100%); border: 3px solid #fff;' : 
                           'background: #6B7280; border: 3px solid #fff;'
                         }>
                      <span class="drop-shadow-md">
                        {review.nationality === '네팔' ? '🇳🇵' :
                         review.nationality === '방글라데시' ? '🇧🇩' :
                         review.nationality === '스리랑카' ? '🇱🇰' :
                         review.nationality === '미얀마' ? '🇲🇲' :
                         review.nationality === '파키스탄' ? '🇵🇰' :
                         review.nationality === '베트남' ? '🇻🇳' : '🌍'}
                      </span>
                    </div>
                    <div>
                      <h4 class="font-bold text-navy">{review.name}</h4>
                      <span class="text-sm text-gray">{review.nationality} · {review.visa}</span>
                    </div>
                  </div>
                  
                  <div class="stars mb-4 text-orange">
                    {Array(review.rating).fill('★').join('')}
                  </div>
                  
                  <p class="text-gray leading-relaxed mb-4 text-sm">
                    "{review.review}"
                  </p>
                  
                  <div class="flex justify-between items-center text-sm text-gray">
                    <span>{review.company}</span>
                    <span>{review.date}</span>
                  </div>
                </div>
                
                {/* 모바일 버전 - 30% 축소 */}
                <div class="block md:hidden p-5">
                  <div class="flex items-center mb-3">
                    <div class="w-10 h-10 rounded-full mr-3 flex items-center justify-center text-white font-bold text-sm shadow-lg"
                         style={
                           review.nationality === '네팔' ? 'background: linear-gradient(135deg, #DC143C 0%, #003893 50%, #DC143C 100%); border: 2px solid #fff;' :
                           review.nationality === '방글라데시' ? 'background: linear-gradient(135deg, #006A4E 0%, #F42A41 100%); border: 2px solid #fff;' :
                           review.nationality === '스리랑카' ? 'background: linear-gradient(135deg, #FF9933 0%, #008000 50%, #000080 100%); border: 2px solid #fff;' :
                           review.nationality === '미얀마' ? 'background: linear-gradient(135deg, #FECB00 0%, #34B233 50%, #EA2839 100%); border: 2px solid #fff;' :
                           review.nationality === '파키스탄' ? 'background: linear-gradient(135deg, #01411C 0%, #ffffff 100%); border: 2px solid #01411C; color: #01411C;' :
                           review.nationality === '베트남' ? 'background: linear-gradient(135deg, #DA020E 0%, #FFFF00 100%); border: 2px solid #fff;' : 
                           'background: #6B7280; border: 2px solid #fff;'
                         }>
                      <span class="drop-shadow-md text-xs">
                        {review.nationality === '네팔' ? '🇳🇵' :
                         review.nationality === '방글라데시' ? '🇧🇩' :
                         review.nationality === '스리랑카' ? '🇱🇰' :
                         review.nationality === '미얀마' ? '🇲🇲' :
                         review.nationality === '파키스탄' ? '🇵🇰' :
                         review.nationality === '베트남' ? '🇻🇳' : '🌍'}
                      </span>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-navy">{review.name}</h4>
                      <span class="text-xs text-gray">{review.nationality} · {review.visa}</span>
                    </div>
                  </div>
                  
                  <div class="stars mb-2 text-orange text-sm">
                    {Array(review.rating).fill('★').join('')}
                  </div>
                  
                  <p class="text-gray leading-relaxed mb-3 text-xs">
                    "{review.review}"
                  </p>
                  
                  <div class="flex justify-between items-center text-xs text-gray">
                    <span>{review.company}</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 비자별 구직의뢰 섹션 */}
      <section id="visa-selection" class="py-24 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              어떤 비자가 필요하신가요?
            </h2>
            <p class="text-xl text-gray">
              비자 유형을 선택하여 맞춤형 서비스를 받으세요
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* E-7-4R 카드 */}
            <div class="bg-white rounded-3xl p-8 shadow-lg card-hover border-2 border-teal-blue">
              <div class="text-center mb-6">
                <div class="text-5xl mb-4">🔧</div>
                <h3 class="text-2xl font-bold text-navy mb-2">E-7-4R</h3>
                <h4 class="text-lg font-semibold text-teal-blue mb-4">지역특화형 숙련기능인력</h4>
              </div>
              
              <ul class="space-y-3 mb-8 text-gray">
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-teal-blue mr-3"></i>
                  한국에서 2년 이상 체류 EPS 경력 증명서 필수
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-teal-blue mr-3"></i>
                  지자체 추천서 필수
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-teal-blue mr-3"></i>
                  한국어 레벨 2급 이상
                </li>
              </ul>
              
              <a 
                href="/apply/e-7-4r" 
                class="btn-orange-gradient block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all hover:no-underline"
              >
                E-7-4R 신청하기 →
              </a>
            </div>

            {/* F-2-R 카드 */}
            <div class="bg-white rounded-3xl p-8 shadow-lg card-hover border-2 border-green">
              <div class="text-center mb-6">
                <div class="text-5xl mb-4">🎓</div>
                <h3 class="text-2xl font-bold text-navy mb-2">F-2-R</h3>
                <h4 class="text-lg font-semibold text-green mb-4">지역특화형 우수인재</h4>
              </div>
              
              <ul class="space-y-3 mb-8 text-gray">
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-green mr-3"></i>
                  한국 전문학사 이상 졸업자
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-green mr-3"></i>
                  또는 소득요건 충족자
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-green mr-3"></i>
                  TOPIK/KIIP 4급 이상 필수
                </li>
              </ul>
              
              <a 
                href="/apply/f-2-r" 
                class="block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all bg-green text-white hover:bg-opacity-90 hover:no-underline"
              >
                F-2-R 신청하기 →
              </a>
            </div>

            {/* E-7-1 카드 */}
            <div class="bg-white rounded-3xl p-8 shadow-lg card-hover border-2 border-orange">
              <div class="text-center mb-6">
                <div class="text-5xl mb-4">💼</div>
                <h3 class="text-2xl font-bold text-navy mb-2">E-7-1</h3>
                <h4 class="text-lg font-semibold text-orange mb-4">특정활동</h4>
              </div>
              
              <ul class="space-y-3 mb-8 text-gray">
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-orange mr-3"></i>
                  학사 이상 학위 소지자
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-orange mr-3"></i>
                  전문 분야 관련 경력
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-orange mr-3"></i>
                  IT, 디자인, 마케팅 등
                </li>
              </ul>
              
              <a 
                href="/apply/e-7-1" 
                class="block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all bg-orange text-white hover:bg-opacity-90 hover:no-underline"
              >
                E-7-1 신청하기 →
              </a>
            </div>

            {/* E-7-4 사업장변경 카드 */}
            <div class="bg-white rounded-3xl p-8 shadow-lg card-hover border-2 border-gray">
              <div class="text-center mb-6">
                <div class="text-5xl mb-4">🔄</div>
                <h3 class="text-2xl font-bold text-navy mb-2">E-7-4</h3>
                <h4 class="text-lg font-semibold text-charcoal mb-4">사업장 변경</h4>
              </div>
              
              <ul class="space-y-3 mb-8 text-gray">
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-charcoal mr-3"></i>
                  현재 E-7-4 비자 소지자
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-charcoal mr-3"></i>
                  사업장 변경 희망자
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-charcoal mr-3"></i>
                  전문 상담 필수
                </li>
              </ul>
              
              <a 
                href="/apply/e-7-4-transfer" 
                class="block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all bg-charcoal text-white hover:bg-opacity-90 hover:no-underline"
              >
                사업장변경 신청 →
              </a>
            </div>
          </div>

          <div class="text-center">
            <div class="bg-white rounded-2xl p-8 shadow-lg inline-block">
              <h3 class="text-xl font-bold text-navy mb-4">
                🚀 지금 바로 신청하기
              </h3>
              <p class="text-gray mb-6">
                전문가 상담을 통해 가장 적합한 비자를 찾아보세요
              </p>
              <a 
                href="#visa-selection" 
                class="btn-orange-gradient inline-block px-8 py-3 rounded-xl font-bold transition-all hover:no-underline"
              >
                비자 선택하기 ↑
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 문의하기 섹션 */}
      <section class="bg-navy-teal-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-white mb-4" style="font-family: 'Cardo', serif;">
            궁금한 점이 있으신가요?
          </h2>
          <p class="text-xl text-white mb-12 opacity-90">
            비자 전문 행정사가 빠르게 답변해드립니다
          </p>
          
          <button 
            onclick="openKakaoTalk()" 
            class="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center"
          >
            <i class="fab fa-telegram mr-3 text-xl"></i>
            카카오톡 상담하기
          </button>
          

        </div>
      </section>

      <Footer />
    </div>
  )
}