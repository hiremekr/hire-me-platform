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
              🎯 외국인인재풀
            </h1>
            <p class="text-xl text-gray mb-2">우수한 외국인 인재 정보를 확인하세요</p>
            <p class="text-lg text-gray-600 whitespace-pre-line">
              총 <span class="font-bold text-teal-blue">{candidatesData.length}명</span>의 인재가
새로운 기회를 기다리고 있습니다
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

          {/* 인재 카드 그리드 - 반응형 (모바일 2x2, 태블릿 2열, PC 4열) */}
          <div id="talent-grid" class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
            {candidatesData.map((candidate) => (
              <div 
                class="talent-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer" 
                data-nationality={candidate.nationality} 
                data-visa={candidate.desiredVisa} 
                data-gender={candidate.gender}
                onclick={`requestTalentInfo(${candidate.id})`}
              >
                
                {/* PC 버전 - 롤링 배너 스타일 */}
                <div class="hidden md:block p-6">
                  <div class="text-center mb-6">
                    <div class="text-4xl mb-3">{candidate.flag}</div>
                    <h4 class="text-lg font-bold text-navy mb-4 whitespace-pre-line">
                      {candidate.nationality} {candidate.gender}/{candidate.age}세
{candidate.experience}
한국거주 {candidate.yearsInKorea}년
{candidate.koreanLevel}
{candidate.desiredVisa} 희망
                    </h4>
                  </div>
                  
                  <div class="space-y-3 mb-8 text-sm">
                    <div class="flex items-center">
                      <i class="fas fa-location-dot text-teal-blue mr-3 w-4"></i>
                      <span><strong>희망지역:</strong> {candidate.desiredLocation.join(', ')}</span>
                    </div>
                  </div>
                  
                  <button 
                    onclick="requestTalentInfo({candidate.id})"
                    class="block w-full text-center py-3 px-6 rounded-xl font-bold transition-all bg-teal-blue text-white hover:bg-opacity-90"
                  >
                    이 인재 정보 요청 →
                  </button>
                </div>

                {/* 모바일 버전 - 압축된 카드 (높이 1/3), 2x2 그리드 */}
                <div class="block md:hidden">
                  {/* 모바일 카드 헤더 - 높이 압축 */}
                  <div class="bg-gradient-to-r from-teal-blue to-green p-2">
                    <div class="flex items-center justify-center">
                      <span class="text-2xl mr-2">{candidate.flag}</span>
                      <div class="text-center">
                        <p class="text-white font-semibold text-sm">{candidate.nationality} {candidate.gender}/{candidate.age}세</p>
                      </div>
                    </div>
                  </div>

                  {/* 모바일 카드 내용 - 압축된 레이아웃 */}
                  <div class="p-3">
                    <div class="text-center text-xs mb-3 space-y-1 whitespace-pre-line">
                      <div class="font-medium text-navy">{candidate.experience}</div>
                      <div class="text-gray-600">한국거주 {candidate.yearsInKorea}년</div>
                      <div class="text-gray-600">{candidate.koreanLevel}</div>
                      <div class="text-teal-blue font-semibold">{candidate.desiredVisa} 희망</div>
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

          {/* CTA 섹션 */}
          <div class="text-center mt-16">
            <div class="bg-white rounded-xl p-8 shadow-md">
              <h3 class="text-2xl font-bold text-navy mb-4">
                <i class="fas fa-handshake text-teal-blue mr-2"></i>
                맞춤형 인재 추천 서비스
              </h3>
              <p class="text-gray mb-6">
                원하는 조건의 인재를 찾지 못하셨나요? <br/>
                상세한 채용 요구사항을 알려주시면 최적의 인재를 추천해드립니다.
              </p>
              
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