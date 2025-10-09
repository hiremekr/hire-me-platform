import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import candidates from '../../data/candidates.json'

export const TalentRequestPage = () => {
  return (
    <div>
      <Header />
      
      <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-light-gray min-h-screen">
        <div class="max-w-4xl mx-auto">
          
          <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-navy mb-2">
              인재 정보 요청
            </h1>
            <p class="text-gray">선택하신 인재의 상세 정보를 요청해주세요. 담당자가 빠르게 연락드리겠습니다.</p>
          </div>

          {/* 선택된 인재 정보 표시 */}
          <div id="selected-talent-info" class="mb-8 p-6 bg-white rounded-xl shadow-md border-l-4 border-teal-blue" style="display: none;">
            <h3 class="text-lg font-bold text-navy mb-4">
              <i class="fas fa-user text-teal-blue mr-2"></i>
              요청하신 인재 정보
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex items-center">
                <span id="talent-flag" class="text-3xl mr-3"></span>
                <div>
                  <div class="font-bold text-navy" id="talent-basic-info"></div>
                  <div class="text-sm text-gray mt-1">
                    <span id="talent-residence"></span> | <span id="talent-visa"></span>
                  </div>
                </div>
              </div>
              <div class="text-sm text-gray">
                <div><strong>경력:</strong> <span id="talent-experience"></span></div>
                <div><strong>한국어:</strong> <span id="talent-korean"></span></div>
                <div><strong>희망지역:</strong> <span id="talent-location"></span></div>
              </div>
            </div>
          </div>

          <div class="form-container">
            <form 
              id="talent-request-form" 
              action="https://formspree.io/f/xjkaedgv"
              method="POST"
            >
              
              {/* 인재 정보 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-user text-green mr-3"></i>
                  관심 인재 정보
                </h3>
                
                <div>
                  <label for="interested-talent" class="block text-sm font-semibold text-navy mb-2">
                    관심 인재명 *
                  </label>
                  <input 
                    type="text" 
                    id="interested-talent" 
                    name="interestedTalent"
                    class="form-input"
                    placeholder="선택하신 인재의 이름이 자동으로 입력됩니다"
                    required
                    readonly
                  />
                  <p class="text-sm text-gray-500 mt-1">
                    인재풀에서 선택하신 인재의 정보입니다
                  </p>
                </div>
              </div>

              {/* 기업 기본 정보 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-building text-teal-blue mr-3"></i>
                  기업 기본 정보
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="company-name" class="block text-sm font-semibold text-navy mb-2">
                      회사명 *
                    </label>
                    <input 
                      type="text" 
                      id="company-name" 
                      name="companyName"
                      class="form-input"
                      placeholder="(주) 회사명"
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
                      placeholder="홍길동"
                      required
                    />
                  </div>
                  
                  <div>
                    <label for="manager-phone" class="block text-sm font-semibold text-navy mb-2">
                      담당자 전화번호 *
                    </label>
                    <input 
                      type="tel" 
                      id="manager-phone" 
                      name="managerPhone"
                      class="form-input"
                      placeholder="010-1234-5678"
                      required
                    />
                  </div>
                  
                  <div>
                    <label for="manager-email" class="block text-sm font-semibold text-navy mb-2">
                      담당자 이메일
                    </label>
                    <input 
                      type="email" 
                      id="manager-email" 
                      name="managerEmail"
                      class="form-input"
                      placeholder="manager@company.com"
                    />
                  </div>
                </div>
              </div>

              {/* 채용 정보 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-users text-green mr-3"></i>
                  채용 정보
                </h3>
                
                <div class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="job-title" class="block text-sm font-semibold text-navy mb-2">
                        채용 포지션
                      </label>
                      <input 
                        type="text" 
                        id="job-title" 
                        name="jobTitle"
                        class="form-input"
                        placeholder="예: 생산직, 기계조작원, 품질검사원"
                      />
                    </div>
                    
                    <div>
                      <label for="salary" class="block text-sm font-semibold text-navy mb-2">
                        급여 조건
                      </label>
                      <input 
                        type="text" 
                        id="salary" 
                        name="salary"
                        class="form-input"
                        placeholder="예: 월 250만원 이상"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label for="job-description" class="block text-sm font-semibold text-navy mb-2">
                      업무 내용
                    </label>
                    <textarea 
                      id="job-description" 
                      name="jobDescription"
                      class="mobile-fixed-textarea"
                      rows="4"
                      placeholder="채용하려는 포지션의 주요 업무 내용을 간략히 설명해주세요"
                    ></textarea>
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
                    <p class="text-sm text-gray-500 mt-1">
                      채용공고가 있는 경우 링크를 입력해주세요 (선택사항)
                    </p>
                  </div>
                </div>
              </div>

              {/* 요청 사항 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-comment-alt text-orange mr-3"></i>
                  추가 요청사항
                </h3>
                
                <div>
                  <label for="additional-request" class="block text-sm font-semibold text-navy mb-2">
                    기타 요청사항
                  </label>
                  <textarea 
                    id="additional-request" 
                    name="additionalRequest"
                    class="mobile-fixed-textarea"
                    rows="4"
                    placeholder="선택하신 인재에 대한 궁금한 점이나 추가로 알고 싶은 정보가 있으시면 자유롭게 작성해주세요"
                  ></textarea>
                </div>
              </div>

              {/* 동의 사항 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-clipboard-check text-red-500 mr-3"></i>
                  동의 사항
                </h3>
                
                <div class="space-y-4">
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="privacy" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-navy">개인정보 수집 및 이용에 동의합니다 *</strong><br />
                      <span class="text-gray">인재 매칭 서비스 제공을 위한 개인정보 수집 및 이용에 동의합니다.</span>
                    </span>
                  </label>
                  
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="talent-info" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-navy">인재 정보 제공 서비스 이용에 동의합니다 *</strong><br />
                      <span class="text-gray">요청하신 인재의 상세 정보 제공에 동의합니다.</span>
                    </span>
                  </label>
                  
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="consultation" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-navy">전문 상담사의 유선 상담을 동의합니다 *</strong><br />
                      <span class="text-gray">채용 관련 전문 상담을 위한 전화 연락에 동의합니다.</span>
                    </span>
                  </label>
                </div>
              </div>

              <div class="flex space-x-4 mt-8">
                <button 
                  type="button" 
                  onclick="history.back()"
                  class="flex-1 bg-white border-2 border-gray text-gray py-4 px-8 rounded-xl font-bold hover:bg-gray hover:text-white transition-colors"
                >
                  ← 이전으로
                </button>
                
                <button 
                  type="submit" 
                  id="talent-request-btn"
                  class="flex-1 btn-orange-gradient py-4 px-8 rounded-xl font-bold transition-all"
                >
                  인재 정보 요청하기
                </button>
              </div>
              
              {/* Formspree 리다이렉트 설정 */}
              <input type="hidden" name="_next" value="https://hire-me-platform1.pages.dev/apply/success" />
              <input type="hidden" name="_subject" value="[HIRE ME] 기업 인재정보 요청" />
            </form>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* 인재 정보 표시 및 폼 처리 스크립트 */}
      <script>{`
        // URL 파라미터에서 talent_id와 talent_name 읽기
        function getParamsFromURL() {
          const urlParams = new URLSearchParams(window.location.search);
          return {
            talentId: urlParams.get('talent_id'),
            talentName: urlParams.get('talent_name')
          };
        }

        // 선택된 인재 정보 표시
        function displaySelectedTalent() {
          const params = getParamsFromURL();
          const { talentId, talentName } = params;
          
          if (!talentId) return;

          // 후보자 데이터 (서버에서 렌더링시 포함됨)
          const candidates = ${JSON.stringify(candidates)};
          
          const selectedTalent = candidates.find(c => c.id == talentId);
          if (!selectedTalent) return;

          // UI 요소에 정보 표시
          document.getElementById('talent-flag').textContent = selectedTalent.flag;
          document.getElementById('talent-basic-info').textContent = 
            selectedTalent.nationality + ' / ' + selectedTalent.gender + ' / ' + selectedTalent.age + '세';
          document.getElementById('talent-residence').textContent = 
            '한국거주 약 ' + selectedTalent.yearsInKorea + '년';
          document.getElementById('talent-visa').textContent = 
            '희망비자 ' + selectedTalent.desiredVisa;
          document.getElementById('talent-experience').textContent = selectedTalent.experience;
          document.getElementById('talent-korean').textContent = selectedTalent.koreanLevel;
          document.getElementById('talent-location').textContent = 
            selectedTalent.desiredLocation.join(', ');

          // 인재 정보 섹션 표시
          document.getElementById('selected-talent-info').style.display = 'block';
          
          // 관심 인재명 필드에 이름 입력 (URL에서 받은 이름 또는 JSON에서 찾은 이름)
          const displayName = talentName || selectedTalent.name;
          if (displayName) {
            document.getElementById('interested-talent').value = decodeURIComponent(displayName);
          }
          
          // 숨겨진 input 필드에 talent_id 저장 (폼 제출시 사용)
          let hiddenInput = document.createElement('input');
          hiddenInput.type = 'hidden';
          hiddenInput.name = 'talentId';
          hiddenInput.value = talentId;
          document.getElementById('talent-request-form').appendChild(hiddenInput);
        }

        // Formspree 폼 제출 처리 (기본 동작 사용)
        // Formspree가 폼 제출을 처리하고 _next 파라미터로 지정된 페이지로 자동 리다이렉트

        // 페이지 로드시 실행
        document.addEventListener('DOMContentLoaded', function() {
          displaySelectedTalent();
          
          // 모바일에서 텍스트 영역 크기 강제 조정
          function adjustMobileTextareas() {
            if (window.innerWidth <= 768) {
              const jobDesc = document.getElementById('job-description');
              const additionalReq = document.getElementById('additional-request');
              const jobTitle = document.getElementById('job-title');
              
              if (jobDesc && additionalReq && jobTitle) {
                // 채용 포지션 입력 필드의 실제 크기를 가져와서 적용
                const computedStyle = window.getComputedStyle(jobTitle);
                const targetWidth = computedStyle.width;
                
                jobDesc.style.setProperty('width', targetWidth, 'important');
                jobDesc.style.setProperty('max-width', targetWidth, 'important');
                
                additionalReq.style.setProperty('width', targetWidth, 'important');
                additionalReq.style.setProperty('max-width', targetWidth, 'important');
              }
            }
          }
          
          // 초기 실행 및 화면 크기 변경시 재실행
          adjustMobileTextareas();
          window.addEventListener('resize', adjustMobileTextareas);
        });
      `}</script>
    </div>
  )
}