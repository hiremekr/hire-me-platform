import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import candidates from '../../data/candidates.json'

export const CompanyPage = () => {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section class="hero-bg flex items-center justify-center relative pt-16">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
          <h1 class="text-4xl md:text-6xl font-bold text-navy mb-6" style="font-family: 'Cardo', serif;">
            검증된 외국인 인재를<br />만나보세요
          </h1>
          {/* Desktop version */}
          <p class="hidden md:block text-xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            엄선된 인재 풀에서 귀사에 맞는 인재를 찾으세요
          </p>
          {/* Mobile version */}
          <p class="block md:hidden text-xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            엄선된 인재풀에서
귀사에 맞는 인재를 찾으세요
          </p>
          <a 
            href="#talent-pool" 
            class="btn-orange-gradient inline-block px-8 py-4 rounded-xl text-lg font-bold transition-all hover:no-underline"
          >
            인재 매칭 시작하기 ↓
          </a>
        </div>
      </section>

      {/* 외국인재 풀 현황 (롤링 배너) */}
      <section id="talent-pool" class="py-24 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              현재 구직중인 인재들
            </h2>
            <p class="text-xl text-gray mb-4">
              실시간으로 업데이트되는 우수한 외국인재 풀
            </p>
            <a href="/company/talents" class="text-teal-blue hover:text-green font-semibold transition-colors">
              전체 인재 풀 보기 →
            </a>
          </div>

          {/* 데스크톱 버전 - 롤링 배너 */}
          <div class="hidden md:block relative">
            <div class="candidate-carousel">
              <div class="candidate-track" id="candidate-track">
                {candidates.map((candidate) => (
                  <div class="candidate-card">
                    <div class="text-center mb-6">
                      <div class="text-4xl mb-3">{candidate.flag}</div>
                      <h4 class="text-xl font-bold text-navy">
                        {candidate.nationality} / {candidate.gender} / {candidate.age}세
                      </h4>
                    </div>
                    
                    <div class="space-y-3 mb-8 text-sm">
                      <div class="flex items-center">
                        <i class="fas fa-map-marker-alt text-teal-blue mr-3 w-4"></i>
                        <span><strong>한국 거주:</strong> {candidate.yearsInKorea}년</span>
                      </div>
                      <div class="flex items-center">
                        <i class="fas fa-briefcase text-teal-blue mr-3 w-4"></i>
                        <span><strong>경력:</strong> {candidate.experience}</span>
                      </div>
                      <div class="flex items-center">
                        <i class="fas fa-comment text-teal-blue mr-3 w-4"></i>
                        <span><strong>한국어:</strong> {candidate.koreanLevel}</span>
                      </div>
                      <div class="flex items-center">
                        <i class="fas fa-id-card text-teal-blue mr-3 w-4"></i>
                        <span><strong>희망비자:</strong> {candidate.desiredVisa}</span>
                      </div>
                      <div class="flex items-center">
                        <i class="fas fa-location-dot text-teal-blue mr-3 w-4"></i>
                        <span><strong>희망지역:</strong> {candidate.desiredLocation.join(', ')}</span>
                      </div>
                    </div>
                    
                    <a 
                      href={`/company/request?talent_id=${candidate.id}`}
                      class="block text-center py-3 px-6 rounded-xl font-bold transition-all bg-teal-blue text-white hover:bg-opacity-90 hover:no-underline"
                    >
                      이 인재 정보 요청 →
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 네비게이션 버튼 */}
            <button 
              class="carousel-nav prev" 
              onclick="moveSlide(-1)"
              aria-label="이전 인재"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <button 
              class="carousel-nav next" 
              onclick="moveSlide(1)"
              aria-label="다음 인재"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* 모바일 버전 - 그리드 카드 */}
          <div class="md:hidden">
            <h3 class="text-2xl font-bold text-navy mb-6 text-center">외국인인재풀</h3>
            <div class="grid grid-cols-2 gap-4">
              {candidates.slice(0, 12).map((candidate) => (
                <div class="bg-white rounded-xl shadow-md overflow-hidden">
                  <div class="bg-gradient-to-r from-teal-blue to-green p-3">
                    <div class="flex items-center justify-center">
                      <span class="text-3xl">{candidate.flag}</span>
                    </div>
                  </div>
                  <div class="p-3">
                    <div class="text-xs space-y-1 mb-3">
                      <div class="font-bold text-center text-navy mb-2">{candidate.nationality}/{candidate.gender}/{candidate.age}세</div>
                      <div>한국거주: {candidate.yearsInKorea}년</div>
                      <div>경력: {candidate.experience}</div>
                      <div>한국어: {candidate.koreanLevel}</div>
                      <div>희망비자: {candidate.desiredVisa}</div>
                    </div>
                    <a 
                      href={`/company/request?talent_id=${candidate.id}`}
                      class="block w-full bg-teal-blue text-white py-2 rounded text-sm text-center hover:bg-opacity-90 hover:no-underline"
                    >
                      정보 요청
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div class="text-center mt-6">
              <a href="/company/talents" class="bg-white border-2 border-teal-blue text-teal-blue px-6 py-3 rounded-xl font-bold hover:no-underline">
                전체 인재 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 인재 매칭 신청 (간략 폼) */}
      <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              빠른 매칭 신청
            </h2>
            <p class="text-xl text-gray">
              기본 정보만 입력하시면 맞춤 인재를 추천해드립니다
            </p>
          </div>

          <div class="bg-light-gray rounded-2xl p-8 max-w-2xl mx-auto">
            <form id="quick-application-form" onsubmit="submitQuickApplication(event)">
              <div class="space-y-6">
                
                <div>
                  <label for="company-name" class="block text-sm font-semibold text-navy mb-2">
                    회사명 *
                  </label>
                  <input 
                    type="text" 
                    id="company-name" 
                    name="companyName"
                    class="form-input"
                    placeholder="예: OO제조(주)"
                    required
                  />
                </div>

                <div>
                  <label for="manager-name" class="block text-sm font-semibold text-navy mb-2">
                    담당자명 *
                  </label>
                  <input 
                    type="text" 
                    id="manager-name" 
                    name="managerName"
                    class="form-input"
                    placeholder="예: 홍길동"
                    required
                  />
                </div>

                <div>
                  <label for="phone" class="block text-sm font-semibold text-navy mb-2">
                    전화번호 *
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    class="form-input"
                    placeholder="예: 010-1234-5678"
                    required
                  />
                </div>

                <div>
                  <label for="email" class="block text-sm font-semibold text-navy mb-2">
                    이메일 *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    class="form-input"
                    placeholder="예: hr@company.com"
                    required
                  />
                </div>

                <div>
                  <label for="job-posting-link" class="block text-sm font-semibold text-navy mb-2">
                    채용공고 링크
                  </label>
                  <input 
                    type="url" 
                    id="job-posting-link" 
                    name="jobPostingLink"
                    class="form-input"
                    placeholder="https://www.company.com/careers 또는 사람인/잡코리아 링크"
                  />
                </div>

                <button 
                  type="submit" 
                  id="quick-submit-btn"
                  class="btn-orange-gradient w-full py-4 px-8 rounded-xl text-lg font-bold transition-all"
                >
                  매칭 신청하기 →
                </button>
                
              </div>
            </form>
            
            <div class="mt-6 text-center text-sm text-gray">
              <p>
                <i class="fas fa-info-circle mr-2"></i>
                ※ 상세한 채용 정보는 <a href="/company/apply" class="text-teal-blue hover:underline">상세 신청하기</a>를 통해 제공해주세요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 특장점 */}
      <section class="py-24 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            {/* Desktop version */}
            <h2 class="hidden md:block text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              HIRE ME 기업 서비스 특장점
            </h2>
            {/* Mobile version */}
            <h2 class="block md:hidden text-3xl font-bold text-navy mb-4 whitespace-pre-line" style="font-family: 'Cardo', serif;">
              HIRE ME
기업 서비스 특장점
            </h2>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div class="text-center p-6 bg-white rounded-2xl shadow-md">
              <div class="text-4xl text-teal-blue mb-4">
                <i class="fas fa-shield-check"></i>
              </div>
              <h4 class="text-lg font-bold text-navy mb-3">검증된 인재</h4>
              <p class="text-gray text-sm leading-relaxed">
                사전 검증된 우수 인재풀 제공
              </p>
            </div>

            <div class="text-center p-6 bg-white rounded-2xl shadow-md">
              <div class="text-4xl text-green mb-4">
                <i class="fas fa-handshake"></i>
              </div>
              <h4 class="text-lg font-bold text-navy mb-3">완전 무료</h4>
              <p class="text-gray text-sm leading-relaxed">
                인재 매칭 및 추천 서비스 완전 무료 제공
              </p>
            </div>

            <div class="text-center p-6 bg-white rounded-2xl shadow-md">
              <div class="text-4xl text-orange mb-4">
                <i class="fas fa-gavel"></i>
              </div>
              <h4 class="text-lg font-bold text-navy mb-3">비자 지원</h4>
              <p class="text-gray text-sm leading-relaxed">
                전문 행정사의 비자 취득 및 갱신 지원
              </p>
            </div>

            <div class="text-center p-6 bg-white rounded-2xl shadow-md">
              <div class="text-4xl text-navy mb-4">
                <i class="fas fa-headset"></i>
              </div>
              <h4 class="text-lg font-bold text-navy mb-3">채용 후 지원</h4>
              <p class="text-gray text-sm leading-relaxed">
                입사 후 적응과정 및 정착 지원 서비스 제공
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 프로세스 안내 */}
      <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              기업 서비스 프로세스
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div class="text-center">
              <div class="bg-teal-blue text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 class="text-lg font-bold text-navy mb-3">채용 정보 등록</h4>
              <p class="text-gray text-sm leading-relaxed">
                채용조건 및 근무환경 정보 등록
              </p>
            </div>

            <div class="text-center">
              <div class="bg-green text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 class="text-lg font-bold text-navy mb-3">인재 추천</h4>
              <p class="text-gray text-sm leading-relaxed">
                최적 조건 매칭 인재 3-5명 추천
              </p>
            </div>

            <div class="text-center">
              <div class="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 class="text-lg font-bold text-navy mb-3">면접 지원</h4>
              <p class="text-gray text-sm leading-relaxed">
                통역지원을 통한 원활한 면접 진행
              </p>
            </div>

            <div class="text-center">
              <div class="bg-navy text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 class="text-lg font-bold text-navy mb-3">사후 관리</h4>
              <p class="text-gray text-sm leading-relaxed">
                비자취득 및 업무적응 사후관리
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section class="bg-navy-teal-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-white mb-4" style="font-family: 'Cardo', serif;">
            지금 바로 시작해보세요
          </h2>
          <p class="text-xl text-white mb-12 opacity-90">
            검증된 외국인 인재와의 만남이 여기서 시작됩니다
          </p>
          
          <div class="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <a 
              href="/company/apply" 
              class="btn-orange-gradient inline-block px-8 py-4 rounded-xl text-lg font-bold transition-all hover:no-underline"
            >
              상세 신청하기
            </a>
            <button 
              onclick="openKakaoTalk()" 
              class="bg-yellow-400 text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center"
            >
              <i class="fab fa-telegram mr-3 text-xl"></i>
              카카오톡 상담
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}