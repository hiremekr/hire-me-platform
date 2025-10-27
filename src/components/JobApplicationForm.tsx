import { Header } from './Header'
import { Footer } from './Footer'

interface JobApplicationFormProps {
  visaType: string
  visaName: string
  mobileVisaName?: string
  description: string
  additionalFields?: any
  specialNote?: string
  formspreeUrl?: string
}

export const JobApplicationForm = (props: JobApplicationFormProps) => {
  const { visaType, visaName, mobileVisaName, description, additionalFields, specialNote, formspreeUrl } = props
  
  // 비자 타입별 Formspree URL 매핑 (현재는 모든 폼이 같은 URL 사용)
  const getFormspreeUrl = () => {
    if (formspreeUrl) return formspreeUrl
    
    // 모든 폼에서 동일한 엔드포인트 사용 (비자 타입은 hidden field로 구분)
    return 'https://formspree.io/f/xjkaedgv'
  }
  
  return (
    <div>
      <Header />
      
      <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-light-gray min-h-screen">
        <div class="max-w-4xl mx-auto">
          
          <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-navy mb-2">
              <span class="hidden md:inline">{visaType} {visaName}</span>
              <span class="md:hidden whitespace-pre-line">{mobileVisaName || visaName}</span>
            </h1>
            <p class="text-gray whitespace-pre-line">{description}</p>
            {specialNote && (
              <div class="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 mt-4 text-left">
                <div class="flex items-start">
                  <i class="fas fa-info-circle text-yellow-600 mt-1 mr-3"></i>
                  <p class="text-sm text-yellow-800">{specialNote}</p>
                </div>
              </div>
            )}
          </div>

          <div class="form-container">
            <form 
              action={getFormspreeUrl()} 
              method="POST" 
              enctype="multipart/form-data"
              id="job-application-form"
              onsubmit="submitJobApplication(event)"
            >
              
              {/* 숨겨진 필드: 비자 타입 구분 */}
              <input type="hidden" name="visa-type" value={visaType} />
              <input type="hidden" name="visa-name" value={visaName} />
              <input type="hidden" name="_subject" value={`새로운 구직 신청 - ${visaType}`} />
              <input type="hidden" name="_next" value="https://hireme.kr/apply/success" />
              
              {/* 섹션 1: 개인 정보 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-user text-teal-blue mr-3"></i>
                  섹션 1: 기본정보 (Basic Information)
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="full-name" class="block text-sm font-semibold text-navy mb-2">
                      이름 / NAME *
                    </label>
                    <input 
                      type="text" 
                      id="full-name" 
                      name="fullName"
                      class="form-input"
                      placeholder="홍길동 / Hong Gildong"
                      required
                    />
                  </div>
                  
                  <div>
                    <label for="phone" class="block text-sm font-semibold text-navy mb-2">
                      전화번호 / CELL PHONE NUMBER *
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      class="form-input"
                      placeholder="010-1234-5678"
                      required
                    />
                  </div>
                  
                  <div>
                    <label for="nationality" class="block text-sm font-semibold text-navy mb-2">
                      국적 / NATIONALITY *
                    </label>
                    <select 
                      id="nationality" 
                      name="nationality"
                      class="form-input"
                      required
                      onchange="toggleOtherNationalityInput(this.value)"
                    >
                      <option value="">선택하세요 / Select</option>
                      <option value="vietnam">🇻🇳 베트남 / Vietnam</option>
                      <option value="nepal">🇳🇵 네팔 / Nepal</option>
                      <option value="philippines">🇵🇭 필리핀 / Philippines</option>
                      <option value="uzbekistan">🇺🇿 우즈베키스탄 / Uzbekistan</option>
                      <option value="cambodia">🇰🇭 캄보디아 / Cambodia</option>
                      <option value="bangladesh">🇧🇩 방글라데시 / Bangladesh</option>
                      <option value="srilanka">🇱🇰 스리랑카 / Sri Lanka</option>
                      <option value="myanmar">🇲🇲 미얀마 / Myanmar</option>
                      <option value="pakistan">🇵🇰 파키스탄 / Pakistan</option>
                      <option value="indonesia">🇮🇩 인도네시아 / Indonesia</option>
                      <option value="mongolia">🇲🇳 몽골 / Mongolia</option>
                      <option value="other">기타 / Other</option>
                    </select>
                    {/* 기타 선택 시 직접 기입 가능한 칸 */}
                    <input 
                      type="text" 
                      id="other-nationality" 
                      name="otherNationality"
                      class="form-input mt-2 hidden"
                      placeholder="직접 기입하세요 / Please enter directly"
                    />
                  </div>
                  
                  <div>
                    <label for="email" class="block text-sm font-semibold text-navy mb-2">
                      이메일 / EMAIL
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      class="form-input"
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label for="birth-date" class="block text-sm font-semibold text-navy mb-2">
                      생년월일 / BIRTHDAY
                    </label>
                    <input 
                      type="date" 
                      id="birth-date" 
                      name="birthDate"
                      class="form-input"
                    />
                  </div>
                </div>
              </div>

              {/* 섹션 2: 서류 업로드 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-file-upload text-green mr-3"></i>
                  섹션 2: 서류 업로드 (Document Upload)
                </h3>
                <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p class="text-sm text-green-700">
                    📎 파일 업로드가 가능합니다. 서류를 첨부하시면 더 빠른 매칭이 가능합니다.<br/>
                    📎 File upload is available. Attaching documents enables faster job matching.
                  </p>
                </div>
                
                <div class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="alien-card-front" class="block text-sm font-semibold text-navy mb-2">
                        외국인등록증 앞면 / ID CARD Front (권장)
                      </label>
                      <div class="file-upload">
                        <input 
                          type="file" 
                          id="alien-card-front" 
                          name="alienCardFront"
                          accept="image/*,.pdf"
                          class="hidden"
                          onchange="handleFileUpload(this, 'front-preview')"
                        />
                        <label for="alien-card-front" class="cursor-pointer">
                          <i class="fas fa-cloud-upload-alt text-2xl text-teal-blue mb-2"></i>
                          <p class="text-gray">클릭하거나 파일을 드래그하세요</p>
                          <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
                        </label>
                      </div>
                      <div id="front-preview" class="mt-2"></div>
                    </div>
                    
                    <div>
                      <label for="alien-card-back" class="block text-sm font-semibold text-navy mb-2">
                        외국인등록증 뒷면 / ID CARD Back (권장)
                      </label>
                      <div class="file-upload">
                        <input 
                          type="file" 
                          id="alien-card-back" 
                          name="alienCardBack"
                          accept="image/*,.pdf"
                          class="hidden"
                          onchange="handleFileUpload(this, 'back-preview')"
                        />
                        <label for="alien-card-back" class="cursor-pointer">
                          <i class="fas fa-cloud-upload-alt text-2xl text-teal-blue mb-2"></i>
                          <p class="text-gray">클릭하거나 파일을 드래그하세요</p>
                          <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
                        </label>
                      </div>
                      <div id="back-preview" class="mt-2"></div>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="photo" class="block text-sm font-semibold text-navy mb-2">
                        증명사진 / PHOTO (3.5cm x 4.5cm) - 권장
                      </label>
                      <div class="file-upload">
                        <input 
                          type="file" 
                          id="photo" 
                          name="photo"
                          accept="image/*"
                          class="hidden"
                          onchange="handleFileUpload(this, 'photo-preview')"
                        />
                        <label for="photo" class="cursor-pointer">
                          <i class="fas fa-camera text-2xl text-teal-blue mb-2"></i>
                          <p class="text-gray">증명사진 업로드 / Upload Photo</p>
                          <p class="text-sm text-gray">JPG, PNG (최대 5MB)</p>
                        </label>
                      </div>
                      <div id="photo-preview" class="mt-2"></div>
                    </div>
                    
                    <div>
                      <label for="korean-cert" class="block text-sm font-semibold text-navy mb-2">
                        KIIP/TOPIK 증명서 / Korean Certificate (있으면 유리)
                      </label>
                      <div class="file-upload">
                        <input 
                          type="file" 
                          id="korean-cert" 
                          name="koreanCert"
                          accept="image/*,.pdf"
                          class="hidden"
                          onchange="handleFileUpload(this, 'korean-preview')"
                        />
                        <label for="korean-cert" class="cursor-pointer">
                          <i class="fas fa-certificate text-2xl text-teal-blue mb-2"></i>
                          <p class="text-gray">있으면 유리 / Helpful if available</p>
                          <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
                        </label>
                      </div>
                      <div id="korean-preview" class="mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 추가 필드 렌더링 */}
              {additionalFields && (
                <div class="form-section">
                  <h3 class="text-xl font-bold text-navy mb-6">
                    <i class="fas fa-plus-circle text-orange mr-3"></i>
                    {visaType} 추가 서류
                  </h3>
                  <div dangerouslySetInnerHTML={{ __html: additionalFields }}></div>
                </div>
              )}

              {/* 섹션 3: 한국어 능력 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-language text-teal-blue mr-3"></i>
                  섹션 3: 한국어 능력 (Korean Language Skills)
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label class="block text-sm font-semibold text-navy mb-3">
                      KIIP 단계 / KIIP Level
                    </label>
                    <div class="space-y-2">
                      {['없음', '1단계', '2단계', '3단계', '4단계', '5단계', '수료'].map((level, index) => (
                        <label class="flex items-center">
                          <input 
                            type="radio" 
                            name="kiipLevel" 
                            value={level}
                            class="mr-3" 
                            checked={index === 0}
                          />
                          <span>{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label class="block text-sm font-semibold text-navy mb-3">
                      TOPIK 급수 / TOPIK Level
                    </label>
                    <div class="space-y-2">
                      {['없음', '1급', '2급', '3급', '4급', '5급', '6급'].map((level, index) => (
                        <label class="flex items-center">
                          <input 
                            type="radio" 
                            name="topikLevel" 
                            value={level}
                            class="mr-3" 
                            checked={index === 0}
                          />
                          <span>{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 섹션 4: 경력 사항 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-briefcase text-green mr-3"></i>
                  섹션 4: 경력 사항 (Work Experience)
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="korea-years" class="block text-sm font-semibold text-navy mb-2">
                      한국 거주 기간 / YEARS IN KOREA
                    </label>
                    <input 
                      type="number" 
                      id="korea-years" 
                      name="koreaYears"
                      class="form-input"
                      placeholder="예: 5년"
                      min="0"
                    />
                  </div>
                  

                </div>
                
                {visaType !== 'E-7-4' && (
                  <div class="mt-6">
                    <label class="block text-sm font-semibold text-navy mb-3">
                      경력 여부 / WORK EXPERIENCE
                    </label>
                    <div class="flex space-x-6 mb-4">
                      <label class="flex items-center">
                        <input 
                          type="radio" 
                          name="hasExperience" 
                          value="yes" 
                          class="mr-2"
                          onchange="toggleExperienceField(true)"
                        />
                        <span>있음</span>
                      </label>
                      <label class="flex items-center">
                        <input 
                          type="radio" 
                          name="hasExperience" 
                          value="no" 
                          class="mr-2"
                          onchange="toggleExperienceField(false)"
                          checked
                        />
                        <span>없음</span>
                      </label>
                    </div>
                    
                    <div id="experience-detail" class="hidden">
                      <label for="experience" class="block text-sm font-semibold text-navy mb-2">
                        경력 상세 / EXPERIENCE DETAILS
                      </label>
                      <textarea 
                        id="experience" 
                        name="experience"
                        class="form-textarea"
                        rows="5"
                        placeholder="예: 화학물질 배합 4년, OO공장 근무"
                      ></textarea>
                    </div>
                  </div>
                )}
              </div>

              {/* 섹션 5: 희망 사항 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-heart text-orange mr-3"></i>
                  섹션 5: 희망 사항 (Preferences)
                </h3>
                
                <div class="space-y-6">
                  {/* E-7-4R, E-7-4 전용: 희망 급여와 교대 가능 여부만 */}
                  {(visaType === 'E-7-4R' || visaType === 'E-7-4') && (
                    <>
                      <div>
                        <label for="expected-salary" class="block text-sm font-semibold text-navy mb-2">
                          희망 급여 / EXPECTED SALARY
                        </label>
                        <input 
                          type="text" 
                          id="expected-salary" 
                          name="expectedSalary"
                          class="form-input"
                          placeholder="예: 월 250-300만원"
                        />
                      </div>
                      
                      <div>
                        <label class="block text-sm font-semibold text-navy mb-3">
                          주간/야간/교대 가능한지 여부 / SHIFT WORK AVAILABILITY
                        </label>
                        <div class="space-y-2">
                          <label class="flex items-center">
                            <input type="checkbox" name="shiftWork" value="day" class="mr-2" />
                            <span class="text-sm">주간만 근무가능 / Day shift only</span>
                          </label>
                          <label class="flex items-center">
                            <input type="checkbox" name="shiftWork" value="night" class="mr-2" />
                            <span class="text-sm">야간만 근무가능 / Night shift only</span>
                          </label>
                          <label class="flex items-center">
                            <input type="checkbox" name="shiftWork" value="rotating" class="mr-2" />
                            <span class="text-sm">주야 교대 가능 / Day/Night shift available</span>
                          </label>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* 다른 비자 유형: F-2-R 전용 희망근무지 */}
                  {(visaType === 'F-2-R' || visaType.includes('F-2-R')) && (
                    <div>
                      <label class="block text-sm font-semibold text-navy mb-3">
                        희망 근무지 / PREFERRED LOCATION (복수 선택 가능 / Multiple selections allowed)
                      </label>
                      <p class="text-sm text-red-600 mb-3">F-2-R 비자는 서울, 제주는 제외됩니다.</p>
                      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['경기도', '강원도', '충청북도', '충청남도', '경상북도', '경상남도', '전라북도', '전라남도'].map(region => (
                          <label class="flex items-center">
                            <input type="checkbox" name="preferredLocation" value={region} class="mr-2" />
                            <span class="text-sm">{region}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* 다른 비자 유형: 기본 희망근무지 */}
                  {!visaType.includes('E-7-4R') && !visaType.includes('F-2-R') && (
                    <div>
                      <label class="block text-sm font-semibold text-navy mb-3">
                        희망 근무지 / PREFERRED LOCATION (복수 선택 가능 / Multiple selections allowed)
                      </label>
                      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['서울', '경기', '인천', '충청', '전라', '경상', '강원', '제주'].map(region => (
                          <label class="flex items-center">
                            <input type="checkbox" name="preferredLocation" value={region} class="mr-2" />
                            <span class="text-sm">{region}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* F-2-R, E-7-1, E-7-4 전용: 희망 직종 직접 기입 */}
                  {(visaType.includes('F-2-R') || visaType === 'E-7-1' || visaType === 'E-7-4') && (
                    <div>
                      <label for="preferred-job-text" class="block text-sm font-semibold text-navy mb-2">
                        희망 직종 / PREFERRED JOB TYPE
                      </label>
                      <input 
                        type="text" 
                        id="preferred-job-text" 
                        name="preferredJobText"
                        class="form-input"
                        placeholder="예: 제조업, 서비스업, IT 개발 등"
                      />
                    </div>
                  )}
                  
                  {/* 기본 희망 직종 (선택형) - E-7-4R 제외 */}
                  {!visaType.includes('E-7-4R') && !visaType.includes('F-2-R') && visaType !== 'E-7-1' && visaType !== 'E-7-4' && (
                    <div>
                      <label class="block text-sm font-semibold text-navy mb-3">
                        희망 직종 / PREFERRED JOB TYPE (복수 선택 가능 / Multiple selections allowed)
                      </label>
                      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {['제조', '건설', '서비스', '농축산', 'IT', '기타'].map(job => (
                          <label class="flex items-center">
                            <input type="checkbox" name="preferredJob" value={job} class="mr-2" />
                            <span class="text-sm">{job}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* 희망 급여 - E-7-4R 외 다른 비자 유형 */}
                  {!visaType.includes('E-7-4R') && (
                    <div>
                      <label for="expected-salary" class="block text-sm font-semibold text-navy mb-2">
                        희망 급여 / EXPECTED SALARY
                      </label>
                      <input 
                        type="text" 
                        id="expected-salary" 
                        name="expectedSalary"
                        class="form-input"
                        placeholder="예: 월 250-300만원"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* 섹션 6: 동의 사항 */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-clipboard-check text-red-500 mr-3"></i>
                  섹션 6: 동의 사항 (Agreements)
                </h3>
                
                <div class="space-y-4">
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="privacy" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-navy">개인정보 수집 및 이용에 동의합니다 *</strong><br />
                      <strong class="text-blue-600">I agree to the collection and use of personal information *</strong><br />
                      <span class="text-gray">구직 서비스 제공을 위한 개인정보 수집 및 이용에 동의합니다.<br />
                      I agree to the collection and use of personal information for job placement services.</span>
                    </span>
                  </label>
                  
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="resume-sharing" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-navy">구인 기업에 이력서 제공을 동의합니다 *</strong><br />
                      <strong class="text-blue-600">I agree to provide my resume to hiring companies *</strong><br />
                      <span class="text-gray">매칭되는 기업에 이력서 및 관련 정보 제공에 동의합니다.<br />
                      I agree to provide my resume and related information to matched companies.</span>
                    </span>
                  </label>
                  
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="consultation" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-navy">전문 행정사의 유선 상담을 동의합니다 *</strong><br />
                      <strong class="text-blue-600">I agree to phone consultation with immigration specialists *</strong><br />
                      <span class="text-gray">비자 관련 전문 상담을 위한 전화 연락에 동의합니다.<br />
                      I agree to phone contact for professional visa-related consultation.</span>
                    </span>
                  </label>
                  
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="notifications" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-navy">추천 회사 알림을 수신하겠습니다 *</strong><br />
                      <strong class="text-blue-600">I agree to receive job recommendations *</strong><br />
                      <span class="text-gray">적합한 구인처 발굴 시 이메일/SMS 알림 수신에 동의합니다.<br />
                      I agree to receive email/SMS notifications when suitable job opportunities are found.</span>
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
                  id="job-submit-btn"
                  class="flex-1 btn-orange-gradient py-4 px-8 rounded-xl font-bold transition-all"
                >
                  신청하기
                </button>
              </div>
              
              {/* 필수 사항 안내 */}
              <div class="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
                <h4 class="text-red-800 font-semibold mb-2">
                  <i class="fas fa-exclamation-triangle mr-2"></i>
                  신청 전 확인사항 / Requirements Check
                </h4>
                <ul class="text-sm text-red-700 space-y-1">
                  <li>✓ <strong>이름, 전화번호, 국적</strong>을 모두 입력하세요 / Enter name, phone, nationality</li>
                  <li>✓ <strong>4개 동의사항</strong>을 모두 체크하세요 / Check all 4 agreements</li>
                  <li>✓ 신청하기 버튼을 눌러주세요 / Click submit button</li>
                </ul>
                <p class="text-xs text-red-600 mt-2">
                  💡 버튼이 작동하지 않으면 위 사항들을 다시 확인해주세요.<br/>
                  💡 If the button doesn't work, please check the above items again.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}