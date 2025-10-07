import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

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
                      class="form-textarea"
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
                    class="form-textarea"
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
    </div>
  )
}