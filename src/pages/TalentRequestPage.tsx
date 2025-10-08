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
            <form id="talent-request-form" onsubmit="submitTalentRequest(event)">
              
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
            </form>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* 인재 정보 표시 및 폼 처리 스크립트 */}
      <script>{`
        // URL 파라미터에서 talent_id 읽기
        function getTalentIdFromURL() {
          const urlParams = new URLSearchParams(window.location.search);
          return urlParams.get('talent_id');
        }

        // 선택된 인재 정보 표시
        function displaySelectedTalent() {
          const talentId = getTalentIdFromURL();
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
            '한국거주 ' + selectedTalent.yearsInKorea + '년';
          document.getElementById('talent-visa').textContent = 
            '희망비자 ' + selectedTalent.desiredVisa;
          document.getElementById('talent-experience').textContent = selectedTalent.experience;
          document.getElementById('talent-korean').textContent = selectedTalent.koreanLevel;
          document.getElementById('talent-location').textContent = 
            selectedTalent.desiredLocation.join(', ');

          // 인재 정보 섹션 표시
          document.getElementById('selected-talent-info').style.display = 'block';
          
          // 숨겨진 input 필드에 talent_id 저장 (폼 제출시 사용)
          let hiddenInput = document.createElement('input');
          hiddenInput.type = 'hidden';
          hiddenInput.name = 'talentId';
          hiddenInput.value = talentId;
          document.getElementById('talent-request-form').appendChild(hiddenInput);
        }

        // 인재 정보 요청 폼 제출
        function submitTalentRequest(event) {
          event.preventDefault();
          
          const formData = new FormData(event.target);
          const data = Object.fromEntries(formData.entries());
          
          // 선택된 인재 정보 추가
          const talentId = getTalentIdFromURL();
          if (talentId) {
            const candidates = ${JSON.stringify(candidates)};
            const selectedTalent = candidates.find(c => c.id == talentId);
            if (selectedTalent) {
              data.selectedTalentInfo = {
                id: selectedTalent.id,
                nationality: selectedTalent.nationality,
                gender: selectedTalent.gender,
                age: selectedTalent.age,
                experience: selectedTalent.experience,
                koreanLevel: selectedTalent.koreanLevel,
                desiredVisa: selectedTalent.desiredVisa,
                yearsInKorea: selectedTalent.yearsInKorea,
                desiredLocation: selectedTalent.desiredLocation.join(', ')
              };
            }
          }

          // 버튼 비활성화
          const submitBtn = document.getElementById('talent-request-btn');
          const originalText = submitBtn.textContent;
          submitBtn.disabled = true;
          submitBtn.textContent = '요청 중...';

          console.log('인재 정보 요청 데이터:', data);

          // EmailJS로 이메일 전송 (실제 구현시 사용)
          /*
          emailjs.send('service_id', 'template_id', {
            company_name: data.companyName,
            manager_name: data.managerName,
            manager_phone: data.managerPhone,
            manager_email: data.managerEmail,
            job_title: data.jobTitle,
            salary: data.salary,
            job_description: data.jobDescription,
            job_posting_link: data.jobPostingLink,
            additional_request: data.additionalRequest,
            talent_info: JSON.stringify(data.selectedTalentInfo, null, 2),
            request_date: new Date().toLocaleString('ko-KR')
          }).then(() => {
            alert('인재 정보 요청이 성공적으로 전송되었습니다! 담당자가 빠르게 연락드리겠습니다.');
            window.location.href = '/apply/success';
          }).catch((error) => {
            console.error('전송 실패:', error);
            alert('요청 전송에 실패했습니다. 다시 시도해주세요.');
          }).finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          });
          */
          
          // 임시: 성공 메시지 표시 (실제 환경에서는 위의 EmailJS 코드 사용)
          setTimeout(() => {
            alert('인재 정보 요청이 접수되었습니다! 담당자가 빠르게 연락드리겠습니다.');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            // window.location.href = '/apply/success'; // 성공 페이지로 이동
          }, 1000);
        }

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