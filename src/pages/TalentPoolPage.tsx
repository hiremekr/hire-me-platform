import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import candidatesData from '../../data/candidates.json'

export const TalentPoolPage = () => {
  return (
    <div>
      <Header />
      
      <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-light-gray min-h-screen">
        <div class="max-w-7xl mx-auto">
          
          {/* 페이지 헤더 */}
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-navy mb-4">
              🎯 현재 구직 중인 인재 풀
            </h1>
            <p class="text-xl text-gray mb-2">검증된 외국인 인재들을 만나보세요</p>
            <p class="text-lg text-gray-600">
              총 <span class="font-bold text-teal-blue">{candidatesData.length}명</span>의 인재가 새로운 기회를 기다리고 있습니다
            </p>
            <p class="text-sm text-gray-500 mt-2">
              <i class="fas fa-sync-alt mr-1"></i>
              인재 정보는 실시간으로 업데이트됩니다
            </p>
          </div>

          {/* 필터 옵션 - 단순화 */}
          <div class="bg-white rounded-xl p-6 mb-8 shadow-md">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label class="block text-sm font-semibold text-navy mb-2">
                  <i class="fas fa-globe text-teal-blue mr-2"></i>
                  국적
                </label>
                <select id="nationality-filter" class="w-full p-3 border border-gray-300 rounded-lg focus:border-teal-blue focus:outline-none" onchange="filterTalents()">
                  <option value="">전체 국적</option>
                  <option value="네팔">🇳🇵 네팔</option>
                  <option value="방글라데시">🇧🇩 방글라데시</option>
                  <option value="스리랑카">🇱🇰 스리랑카</option>
                  <option value="미얀마">🇲🇲 미얀마</option>
                  <option value="베트남">🇻🇳 베트남</option>
                  <option value="파키스탄">🇵🇰 파키스탄</option>
                  <option value="인도네시아">🇮🇩 인도네시아</option>
                  <option value="캄보디아">🇰🇭 캄보디아</option>
                  <option value="우즈베키스탄">🇺🇿 우즈베키스탄</option>
                  <option value="몽골">🇲🇳 몽골</option>
                  <option value="태국">🇹🇭 태국</option>
                  <option value="필리핀">🇵🇭 필리핀</option>
                  <option value="라오스">🇱🇦 라오스</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold text-navy mb-2">
                  <i class="fas fa-id-card text-green mr-2"></i>
                  희망 비자
                </label>
                <select id="visa-filter" class="w-full p-3 border border-gray-300 rounded-lg focus:border-teal-blue focus:outline-none" onchange="filterTalents()">
                  <option value="">전체 비자</option>
                  <option value="E-7-4R">E-7-4R (지역특화)</option>
                  <option value="F-2-R">F-2-R (거주)</option>
                  <option value="E-7-1">E-7-1 (전문직)</option>
                  <option value="E-7-4">E-7-4 (특정활동)</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold text-navy mb-2">
                  <i class="fas fa-venus-mars text-orange mr-2"></i>
                  성별
                </label>
                <select id="gender-filter" class="w-full p-3 border border-gray-300 rounded-lg focus:border-teal-blue focus:outline-none" onchange="filterTalents()">
                  <option value="">전체</option>
                  <option value="남성">👨 남성</option>
                  <option value="여성">👩 여성</option>
                </select>
              </div>
            </div>
            
            {/* 필터 결과 표시 */}
            <div class="mt-4 flex items-center justify-between">
              <div class="text-sm text-gray-600">
                <span id="filter-count">{candidatesData.length}</span>명의 인재가 검색되었습니다
              </div>
              <button onclick="clearFilters()" class="text-sm text-teal-blue hover:text-navy transition-colors">
                <i class="fas fa-times mr-1"></i>
                필터 초기화
              </button>
            </div>
          </div>

          {/* 인재 카드 그리드 - 반응형 (모바일 최적화 + PC 롤링 배너 스타일) */}
          <div id="talent-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {candidatesData.map((candidate) => (
              <div class="talent-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden" data-nationality={candidate.nationality} data-visa={candidate.desiredVisa} data-gender={candidate.gender}>
                
                {/* PC 버전 - 롤링 배너 스타일 */}
                <div class="hidden md:block p-6">
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
                  </div>
                  
                  <button 
                    onclick="requestTalentInfo({candidate.id})"
                    class="block w-full text-center py-3 px-6 rounded-xl font-bold transition-all bg-teal-blue text-white hover:bg-opacity-90"
                  >
                    이 인재 정보 요청 →
                  </button>
                </div>

                {/* 모바일 버전 - 압축된 카드 (높이 1/3) */}
                <div class="block md:hidden">
                  {/* 모바일 카드 헤더 - 높이 압축 */}
                  <div class="bg-gradient-to-r from-teal-blue to-green p-2">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center">
                        <span class="text-xl mr-2">{candidate.flag}</span>
                        <div>
                          <p class="text-white font-semibold text-sm">{candidate.nationality}</p>
                          <p class="text-white/80 text-xs">{candidate.gender} · {candidate.age}세</p>
                        </div>
                      </div>
                      <div class="bg-white/20 rounded-full px-2 py-1">
                        <span class="text-white text-xs font-medium">{candidate.desiredVisa}</span>
                      </div>
                    </div>
                  </div>

                  {/* 모바일 카드 내용 - 압축된 레이아웃 */}
                  <div class="p-3">
                    <div class="grid grid-cols-2 gap-2 text-xs mb-3">
                      <div class="flex items-center">
                        <i class="fas fa-briefcase text-teal-blue mr-1"></i>
                        <span class="truncate">{candidate.experience}</span>
                      </div>
                      <div class="flex items-center">
                        <i class="fas fa-calendar text-orange mr-1"></i>
                        <span>{candidate.yearsInKorea}년</span>
                      </div>
                      <div class="flex items-center">
                        <i class="fas fa-language text-purple-500 mr-1"></i>
                        <span class="truncate">{candidate.koreanLevel}</span>
                      </div>
                      <div class="flex items-center">
                        <i class="fas fa-id-card text-green mr-1"></i>
                        <span class="text-green font-semibold">{candidate.desiredVisa}</span>
                      </div>
                    </div>
                    
                    {/* 모바일 액션 버튼 - 압축 */}
                    <button 
                      onclick="requestTalentInfo({candidate.id})"
                      class="w-full bg-gradient-to-r from-teal-blue to-green text-white py-2 px-3 rounded-lg text-sm font-semibold hover:from-green hover:to-teal-blue transition-all"
                    >
                      <i class="fas fa-envelope mr-1"></i>
                      정보 요청
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 검색 결과가 없을 때 */}
          <div id="no-results" class="hidden text-center py-16">
            <div class="bg-white rounded-xl p-8 shadow-md">
              <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
              <h3 class="text-2xl font-bold text-gray-500 mb-2">검색 결과가 없습니다</h3>
              <p class="text-gray-400 mb-6">다른 조건으로 다시 검색해보세요</p>
              <button onclick="clearFilters()" class="btn-orange-gradient py-3 px-6 rounded-xl font-bold">
                전체 인재 보기
              </button>
            </div>
          </div>

          {/* 더 많은 인재 정보 및 관리 안내 */}
          <div class="text-center mt-16">
            <div class="bg-white rounded-xl p-8 shadow-md">
              <h3 class="text-2xl font-bold text-navy mb-4">
                <i class="fas fa-users text-teal-blue mr-2"></i>
                더 많은 인재가 필요하신가요?
              </h3>
              <p class="text-gray mb-6">
                매월 새로운 인재들이 자동으로 추가됩니다. <br/>
                현재 <strong class="text-teal-blue">{candidatesData.length}명</strong>의 검증된 인재가 등록되어 있으며, 
                관리자가 인재를 추가하면 실시간으로 이 페이지에 반영됩니다.
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="bg-light-gray rounded-lg p-4">
                  <i class="fas fa-plus-circle text-green text-2xl mb-2"></i>
                  <h4 class="font-bold text-navy mb-1">인재 자동 추가</h4>
                  <p class="text-sm text-gray">새로운 인재가 등록되면 자동으로 표시됩니다</p>
                </div>
                <div class="bg-light-gray rounded-lg p-4">
                  <i class="fas fa-edit text-orange text-2xl mb-2"></i>
                  <h4 class="font-bold text-navy mb-1">정보 수정 가능</h4>
                  <p class="text-sm text-gray">인재 정보는 언제든지 수정 및 업데이트 가능합니다</p>
                </div>
              </div>
              
              <a href="/company/apply" class="btn-orange-gradient py-4 px-8 rounded-xl font-bold transition-all hover:no-underline">
                맞춤형 인재 추천 신청하기 →
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

// 인재 정보 요청 함수
function requestTalentInfo(talentId) {
  // 모달 또는 폼 페이지로 이동
  window.location.href = `/company/request?talent_id=${talentId}`;
}

// 필터링 함수
function filterTalents() {
  const nationalityFilter = document.getElementById('nationality-filter').value;
  const visaFilter = document.getElementById('visa-filter').value;
  const genderFilter = document.getElementById('gender-filter').value;
  
  const cards = document.querySelectorAll('.talent-card');
  let visibleCount = 0;
  
  cards.forEach(card => {
    const nationality = card.getAttribute('data-nationality');
    const visa = card.getAttribute('data-visa');
    const gender = card.getAttribute('data-gender');
    
    const nationalityMatch = !nationalityFilter || nationality === nationalityFilter;
    const visaMatch = !visaFilter || visa === visaFilter;
    const genderMatch = !genderFilter || gender === genderFilter;
    
    if (nationalityMatch && visaMatch && genderMatch) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });
  
  // 결과 카운트 업데이트
  document.getElementById('filter-count').textContent = visibleCount;
  
  // 검색 결과가 없을 때 메시지 표시
  const noResults = document.getElementById('no-results');
  const talentGrid = document.getElementById('talent-grid');
  
  if (visibleCount === 0) {
    noResults.classList.remove('hidden');
    talentGrid.style.display = 'none';
  } else {
    noResults.classList.add('hidden');
    talentGrid.style.display = 'grid';
  }
}

// 필터 초기화 함수
function clearFilters() {
  document.getElementById('nationality-filter').value = '';
  document.getElementById('visa-filter').value = '';
  document.getElementById('gender-filter').value = '';
  
  // 모든 카드 표시
  const cards = document.querySelectorAll('.talent-card');
  cards.forEach(card => {
    card.style.display = 'block';
  });
  
  // 전체 카운트로 복원 (이 값은 JSX에서 설정된 값으로 자동 복원됨)
  const totalCards = document.querySelectorAll('.talent-card').length;
  document.getElementById('filter-count').textContent = totalCards;
  
  // 검색 결과 메시지 숨기기
  document.getElementById('no-results').classList.add('hidden');
  document.getElementById('talent-grid').style.display = 'grid';
}