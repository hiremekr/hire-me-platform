import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const CompanyApplyPage = () => {
  return (
    <div>
      <Header />
      
      {/* 서비스 안내 섹션 */}
      <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div class="max-w-6xl mx-auto">
          
          {/* 서비스 프로세스 */}
          <div class="mb-16">
            <h1 class="text-4xl font-bold text-navy text-center mb-4" style="font-family: 'Cardo', serif;">
              HIRE ME 기업 서비스 안내
            </h1>
            
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-navy mb-6 text-center">
                <i class="fas fa-clipboard-list text-teal-blue mr-3"></i>
                서비스 프로세스
              </h3>
              
              <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div class="p-3">
                  <div class="text-2xl text-teal-blue mb-2">1️⃣</div>
                  <h4 class="font-bold text-navy mb-1">채용정보 등록</h4>
                  <p class="text-xs text-gray">채용조건 입력</p>
                </div>
                
                <div class="p-3">
                  <div class="text-2xl text-green mb-2">2️⃣</div>
                  <h4 class="font-bold text-navy mb-1">인재 추천</h4>
                  <p class="text-xs text-gray">최적 인재 3-5명</p>
                </div>
                
                <div class="p-3">
                  <div class="text-2xl text-orange mb-2">3️⃣</div>
                  <h4 class="font-bold text-navy mb-1">면접 지원</h4>
                  <p class="text-xs text-gray">통역지원 면접</p>
                </div>
                
                <div class="p-3">
                  <div class="text-2xl text-navy mb-2">4️⃣</div>
                  <h4 class="font-bold text-navy mb-1">사후 관리</h4>
                  <p class="text-xs text-gray">비자취득 지원</p>
                </div>
              </div>
            </div>
          </div>

          {/* 개인정보 보호 정책 */}
          <div class="mb-16">
            <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange">
              <h3 class="text-2xl font-bold text-navy mb-6 text-center">
                <i class="fas fa-shield-check text-orange mr-3"></i>
                개인정보 보호 정책 안내
              </h3>
              
              <div class="space-y-2 text-gray text-sm">
                <div class="flex items-start">
                  <i class="fas fa-shield-check text-orange mt-1 mr-2"></i>
                  <p><strong class="text-navy">개인정보 철저 보호</strong> - 법정 절차에 따른 안전 관리</p>
                </div>
                
                <div class="flex items-start">
                  <i class="fas fa-user-check text-orange mt-1 mr-2"></i>
                  <p><strong class="text-navy">인사담당자 신원확인</strong> - 명함 등을 통한 신원 검증 후 서비스 제공</p>
                </div>
                
                <div class="flex items-start">
                  <i class="fas fa-gavel text-red-500 mt-1 mr-2"></i>
                  <p><strong class="text-red-600">부정사용 방지</strong> - 허위신청 시 법적 조치 예고</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기업 정보 수집 폼 */}
      <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-4xl mx-auto">
          <div class="form-container">
            <h2 class="text-3xl font-bold text-navy text-center mb-8">
              기업 채용 정보 신청
            </h2>
            
            <form 
              id="company-application-form" 
              action="https://formspree.io/f/xjkaedgv"
              method="POST"
              enctype="multipart/form-data"

            >
              
              {/* 숨겨진 필드: 폼 타입 구분 */}
              <input type="hidden" name="form-type" value="company-application" />
              <input type="hidden" name="_subject" value="새로운 기업 채용 신청" />
              <script dangerouslySetInnerHTML={{
                __html: `
                  document.addEventListener('DOMContentLoaded', function() {
                    const nextInput = document.querySelector('input[name="_next"][value*="company"]');
                    if (nextInput) {
                      nextInput.value = window.location.origin + '/company/success';
                    }
                  });
                `
              }}></script>
              <input type="hidden" name="_next" value="/company/success" />
              
              {/* 섹션 1: 기업 기본 정보 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-building text-teal-blue mr-3"></i>
                  섹션 1: 기업 기본 정보
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="company-name" class="block text-sm font-semibold text-navy mb-2">
                      회사명
                    </label>
                    <input 
                      type="text" 
                      id="company-name" 
                      name="companyName"
                      class="form-input"
                      placeholder="예: OO제조(주)"
                    />
                  </div>
                  
                  <div>
                    <label for="business-number" class="block text-sm font-semibold text-navy mb-2">
                      사업자등록번호 *
                    </label>
                    <input 
                      type="text" 
                      id="business-number" 
                      name="businessNumber"
                      class="form-input"
                      placeholder="000-00-00000"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{5}"
                      required
                    />
                  </div>
                  
                  <div>
                    <label for="ceo-name" class="block text-sm font-semibold text-navy mb-2">
                      대표자명
                    </label>
                    <input 
                      type="text" 
                      id="ceo-name" 
                      name="ceoName"
                      class="form-input"
                      placeholder="홍길동"
                    />
                  </div>
                  
                  <div>
                    <label for="company-phone" class="block text-sm font-semibold text-navy mb-2">
                      회사 전화번호
                    </label>
                    <input 
                      type="tel" 
                      id="company-phone" 
                      name="companyPhone"
                      class="form-input"
                      placeholder="02-1234-5678"
                    />
                  </div>
                </div>
                
                <div class="mt-6">
                  <label for="company-address" class="block text-sm font-semibold text-navy mb-2">
                    회사 주소
                  </label>
                  <input 
                    type="text" 
                    id="company-address" 
                    name="companyAddress"
                    class="form-input"
                    placeholder="서울특별시 강남구 테헤란로 123"
                  />
                </div>
                
                <div class="mt-6">
                  <label for="company-website" class="block text-sm font-semibold text-navy mb-2">
                    회사 홈페이지
                  </label>
                  <input 
                    type="url" 
                    id="company-website" 
                    name="companyWebsite"
                    class="form-input"
                    placeholder="https://www.company.com"
                  />
                </div>
              </div>

              {/* 섹션 2: 담당자 정보 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-user-tie text-green mr-3"></i>
                  섹션 2: 담당자 정보
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="manager-name" class="block text-sm font-semibold text-navy mb-2">
                      담당자명 *
                    </label>
                    <input 
                      type="text" 
                      id="manager-name" 
                      name="managerName"
                      class="form-input"
                      placeholder="김인사"
                      required
                    />
                  </div>
                  
                  <div>
                    <label for="manager-position" class="block text-sm font-semibold text-navy mb-2">
                      담당자 직책
                    </label>
                    <input 
                      type="text" 
                      id="manager-position" 
                      name="managerPosition"
                      class="form-input"
                      placeholder="인사팀장"
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
                      담당자 이메일 *
                    </label>
                    <input 
                      type="email" 
                      id="manager-email" 
                      name="managerEmail"
                      class="form-input"
                      placeholder="hr@company.com"
                      required
                    />
                  </div>
                </div>
                
                <div class="mt-6">
                  <label for="business-card" class="block text-sm font-semibold text-navy mb-2">
                    명함 파일 업로드 * <span class="text-sm text-gray">(담당자 신원 확인용)</span>
                  </label>
                  <div class="file-upload">
                    <input 
                      type="file" 
                      id="business-card" 
                      name="businessCard"
                      accept="image/*,.pdf"
                      class="hidden"
                      onchange="handleFileUpload(this, 'card-preview')"
                      required
                    />
                    <label for="business-card" class="cursor-pointer">
                      <i class="fas fa-cloud-upload-alt text-2xl text-teal-blue mb-2"></i>
                      <p class="text-gray">클릭하거나 파일을 드래그하세요</p>
                      <p class="text-sm text-gray">JPG, PNG, PDF (최대 5MB)</p>
                    </label>
                  </div>
                  <div id="card-preview" class="mt-2"></div>
                </div>
              </div>

              {/* 섹션 3: 채용 정보 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-briefcase text-orange mr-3"></i>
                  섹션 3: 채용 정보
                </h3>
                
                <div class="mb-6">
                  <label class="block text-sm font-semibold text-navy mb-3">
                    현재 채용 진행 중
                  </label>
                  <div class="flex space-x-6">
                    <label class="flex items-center">
                      <input 
                        type="radio" 
                        name="isRecruiting" 
                        value="yes" 
                        class="mr-2"
                        onchange="toggleRecruitingFields(true)"
                      />
                      <span>예</span>
                    </label>
                    <label class="flex items-center">
                      <input 
                        type="radio" 
                        name="isRecruiting" 
                        value="no" 
                        class="mr-2"
                        onchange="toggleRecruitingFields(false)"
                      />
                      <span>아니오</span>
                    </label>
                  </div>
                </div>

                <div id="recruiting-fields" class="hidden">
                  <div class="mb-6">
                    <label for="job-posting-url" class="block text-sm font-semibold text-navy mb-2">
                      구인 사이트 공고 링크
                    </label>
                    <input 
                      type="url" 
                      id="job-posting-url" 
                      name="jobPostingUrl"
                      class="form-input"
                      placeholder="https://www.work.go.kr/jobposting/123456"
                    />
                    <p class="text-sm text-gray mt-1">고용24, 사람인, 잡코리아 등의 구인 공고 링크</p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="job-field" class="block text-sm font-semibold text-navy mb-2">
                      채용 분야
                    </label>
                    <select 
                      id="job-field" 
                      name="jobField"
                      class="form-input"
                      onchange="showFieldSpecificOptions(this.value)"
                    >
                      <option value="">선택하세요</option>
                      <option value="manufacturing">제조/생산직</option>
                      <option value="construction">건설</option>
                      <option value="service">서비스</option>
                      <option value="agriculture">농축산</option>
                      <option value="it">IT/개발</option>
                      <option value="professional">전문직/사무직</option>
                      <option value="other">기타</option>
                    </select>
                  </div>
                  
                  <div>
                    <label for="required-people" class="block text-sm font-semibold text-navy mb-2">
                      필요 인원
                    </label>
                    <input 
                      type="number" 
                      id="required-people" 
                      name="requiredPeople"
                      class="form-input"
                      placeholder="예: 3"
                      min="1"
                    />
                  </div>
                </div>

                <div id="manufacturing-options" class="hidden mt-6">
                  <label class="block text-sm font-semibold text-navy mb-3">
                    근무 형태
                  </label>
                  <div class="grid grid-cols-3 gap-4">
                    <label class="flex items-center">
                      <input type="checkbox" name="workType" value="day" class="mr-2" />
                      <span>주간 근무</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="workType" value="night" class="mr-2" />
                      <span>야간 근무</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="workType" value="shift" class="mr-2" />
                      <span>주/야간 교대</span>
                    </label>
                  </div>
                </div>

                <div class="mt-6">
                  <label for="job-description" class="block text-sm font-semibold text-navy mb-2">
                    업무 내용
                  </label>
                  <textarea 
                    id="job-description" 
                    name="jobDescription"
                    class="form-textarea"
                    rows="5"
                    placeholder="구체적인 업무 내용을 작성해주세요. 예: 화학물질 배합, 포장, 검수 등의 업무를 담당하며..."
                  ></textarea>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label for="salary-level" class="block text-sm font-semibold text-navy mb-2">
                      급여 수준
                    </label>
                    <input 
                      type="text" 
                      id="salary-level" 
                      name="salaryLevel"
                      class="form-input"
                      placeholder="예: 월 250-300만원"
                    />
                  </div>
                  
                  <div>
                    <label for="work-location" class="block text-sm font-semibold text-navy mb-2">
                      근무지
                    </label>
                    <input 
                      type="text" 
                      id="work-location" 
                      name="workLocation"
                      class="form-input"
                      placeholder="경기도 화성시 OO산업단지"
                    />
                  </div>
                </div>

                <div class="mt-6">
                  <label class="block text-sm font-semibold text-navy mb-3">
                    선호 국적 (복수 선택 가능)
                  </label>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="nepal" class="mr-2" />
                      <span>🇳🇵 네팔</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="bangladesh" class="mr-2" />
                      <span>🇧🇩 방글라데시</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="sri-lanka" class="mr-2" />
                      <span>🇱🇰 스리랑카</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="myanmar" class="mr-2" />
                      <span>🇲🇲 미얀마</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="vietnam" class="mr-2" />
                      <span>🇻🇳 베트남</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="pakistan" class="mr-2" />
                      <span>🇵🇰 파키스탄</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="indonesia" class="mr-2" />
                      <span>🇮🇩 인도네시아</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="cambodia" class="mr-2" />
                      <span>🇰🇭 캄보디아</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="uzbekistan" class="mr-2" />
                      <span>🇺🇿 우즈베키스탄</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="mongolia" class="mr-2" />
                      <span>🇲🇳 몽골</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="thailand" class="mr-2" />
                      <span>🇹🇭 태국</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="philippines" class="mr-2" />
                      <span>🇵🇭 필리핀</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="laos" class="mr-2" />
                      <span>🇱🇦 라오스</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="india" class="mr-2" />
                      <span>🇮🇳 인도</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="malaysia" class="mr-2" />
                      <span>🇲🇾 말레이지아</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="egypt" class="mr-2" />
                      <span>🇪🇬 이집트</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="china" class="mr-2" />
                      <span>🇨🇳 중국</span>
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" name="preferredNationality" value="any" class="mr-2" />
                      <span>🌍 무관</span>
                    </label>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label class="block text-sm font-semibold text-navy mb-3">
                      숙소 제공
                    </label>
                    <div class="flex space-x-6">
                      <label class="flex items-center">
                        <input type="radio" name="accommodation" value="provided" class="mr-2" />
                        <span>제공</span>
                      </label>
                      <label class="flex items-center">
                        <input type="radio" name="accommodation" value="not-provided" class="mr-2" />
                        <span>미제공</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mt-6">
                  <label for="additional-requirements" class="block text-sm font-semibold text-navy mb-2">
                    추가 요구사항
                  </label>
                  <textarea 
                    id="additional-requirements" 
                    name="additionalRequirements"
                    class="form-textarea"
                    rows="4"
                    placeholder="선호 경력, 자격증, 특별 요구사항 등을 작성해주세요"
                  ></textarea>
                </div>
              </div>

              {/* 섹션 4: 동의 사항 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-clipboard-check text-red-500 mr-3"></i>
                  섹션 4: 동의 사항
                </h3>
                
                <div class="space-y-4">
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="privacy" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-navy">개인정보 수집 및 이용에 동의합니다 *</strong><br />
                      <span class="text-gray">채용 서비스 제공을 위한 개인정보 수집 및 이용에 동의합니다.</span>
                    </span>
                  </label>
                  
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="talent-sharing" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-navy">추천 인재 알림 수신에 동의합니다 *</strong><br />
                      <span class="text-gray">적합한 인재 발굴 시 이메일/SMS 알림 수신에 동의합니다.</span>
                    </span>
                  </label>
                  
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="genuine-intent" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-navy">실제 구인 목적임을 확인합니다 *</strong><br />
                      <span class="text-gray">허위 구인이 아닌 실제 채용 의도로 신청함을 확인합니다.</span>
                    </span>
                  </label>
                  
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="legal-responsibility" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-red-600">부정 사용 시 법적 책임을 인지합니다 *</strong><br />
                      <span class="text-gray">허위 정보 제공이나 부정한 목적 사용 시 관련 법령에 따른 법적 조치에 동의합니다.</span>
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
                  id="company-submit-btn"
                  class="flex-1 btn-orange-gradient py-4 px-8 rounded-xl font-bold transition-all"
                >
                  신청 제출하기
                </button>
              </div>
              
              {/* 카카오톡 상담 버튼 */}
              <div class="text-center mt-6">
                <button 
                  type="button"
                  onclick="openKakaoTalk()" 
                  class="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors inline-flex items-center"
                >
                  <i class="fab fa-telegram mr-2 text-lg"></i>
                  카카오톡 상담하기
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