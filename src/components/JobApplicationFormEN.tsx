import { HeaderEN } from './HeaderEN'
import { FooterEN } from './FooterEN'

interface JobApplicationFormENProps {
  visaType: string
  visaName: string
  mobileVisaName?: string
  description: string
  additionalFields?: any
  specialNote?: string
  formspreeUrl?: string
}

export const JobApplicationFormEN = (props: JobApplicationFormENProps) => {
  const { visaType, visaName, mobileVisaName, description, additionalFields, specialNote, formspreeUrl } = props
  
  // Visa type Formspree URL mapping (currently all forms use the same URL)
  const getFormspreeUrl = () => {
    if (formspreeUrl) return formspreeUrl
    
    // Use job application dedicated endpoint (visa type is distinguished by hidden field)
    return 'https://formspree.io/f/xanpdpdz'
  }
  
  return (
    <div>
      <HeaderEN />
      
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
            >
              
              {/* Hidden fields: Visa type identification */}
              <input type="hidden" name="visa-type" value={visaType} />
              <input type="hidden" name="visa-name" value={visaName} />
              <input type="hidden" name="_subject" value={`New Job Application - ${visaType}`} />
              <script dangerouslySetInnerHTML={{
                __html: `
                  document.addEventListener('DOMContentLoaded', function() {
                    const nextInput = document.querySelector('input[name="_next"]');
                    if (nextInput) {
                      nextInput.value = window.location.origin + '/en/apply/success';
                    }
                  });
                `
              }}></script>
              <input type="hidden" name="_next" value="/en/apply/success" />
              
              {/* Section 1: Basic Information */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-user text-teal-blue mr-3"></i>
                  Section 1: Basic Information
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="full-name" class="block text-sm font-semibold text-navy mb-2">
                      Full Name / 이름 *
                    </label>
                    <input 
                      type="text" 
                      id="full-name" 
                      name="fullName"
                      class="form-input"
                      placeholder="John Doe / 홍길동"
                      required
                    />
                  </div>
                  
                  <div>
                    <label for="phone" class="block text-sm font-semibold text-navy mb-2">
                      Phone Number / 전화번호 *
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
                      Nationality / 국적 *
                    </label>
                    <select 
                      id="nationality" 
                      name="nationality"
                      class="form-input"
                      required
                      onchange="toggleOtherNationalityInput(this.value)"
                    >
                      <option value="">Please Select</option>
                      <option value="vietnam">🇻🇳 Vietnam / 베트남</option>
                      <option value="nepal">🇳🇵 Nepal / 네팔</option>
                      <option value="philippines">🇵🇭 Philippines / 필리핀</option>
                      <option value="uzbekistan">🇺🇿 Uzbekistan / 우즈베키스탄</option>
                      <option value="cambodia">🇰🇭 Cambodia / 캄보디아</option>
                      <option value="bangladesh">🇧🇩 Bangladesh / 방글라데시</option>
                      <option value="srilanka">🇱🇰 Sri Lanka / 스리랑카</option>
                      <option value="myanmar">🇲🇲 Myanmar / 미얀마</option>
                      <option value="pakistan">🇵🇰 Pakistan / 파키스탄</option>
                      <option value="indonesia">🇮🇩 Indonesia / 인도네시아</option>
                      <option value="mongolia">🇲🇳 Mongolia / 몽골</option>
                      <option value="other">Other / 기타</option>
                    </select>
                    {/* Other nationality input */}
                    <input 
                      type="text" 
                      id="other-nationality" 
                      name="otherNationality"
                      class="form-input mt-2 hidden"
                      placeholder="Please enter directly"
                    />
                  </div>
                  
                  <div>
                    <label for="email" class="block text-sm font-semibold text-navy mb-2">
                      Email / 이메일
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
                      Date of Birth / 생년월일
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

              {/* Section 2: Document Upload */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-file-upload text-green mr-3"></i>
                  Section 2: Document Upload
                </h3>
                <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p class="text-sm text-green-700">
                    📎 File upload is available. Attaching documents enables faster job matching.<br/>
                    📎 파일 업로드가 가능합니다. 서류를 첨부하시면 더 빠른 매칭이 가능합니다.
                  </p>
                </div>
                
                <div class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="alien-card-front" class="block text-sm font-semibold text-navy mb-2">
                        Alien Registration Card Front (Recommended)
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
                          <p class="text-gray">Click or drag file</p>
                          <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
                        </label>
                      </div>
                      <div id="front-preview" class="mt-2"></div>
                    </div>
                    
                    <div>
                      <label for="alien-card-back" class="block text-sm font-semibold text-navy mb-2">
                        Alien Registration Card Back (Recommended)
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
                          <p class="text-gray">Click or drag file</p>
                          <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
                        </label>
                      </div>
                      <div id="back-preview" class="mt-2"></div>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="photo" class="block text-sm font-semibold text-navy mb-2">
                        Photo (3.5cm x 4.5cm) - Recommended
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
                          <p class="text-gray">Upload Photo</p>
                          <p class="text-sm text-gray">JPG, PNG (Max 5MB)</p>
                        </label>
                      </div>
                      <div id="photo-preview" class="mt-2"></div>
                    </div>
                    
                    <div>
                      <label for="korean-cert" class="block text-sm font-semibold text-navy mb-2">
                        KIIP/TOPIK Certificate (Helpful if available)
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
                          <p class="text-gray">Helpful if available</p>
                          <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
                        </label>
                      </div>
                      <div id="korean-preview" class="mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional fields rendering */}
              {additionalFields && (
                <div class="form-section">
                  <h3 class="text-xl font-bold text-navy mb-6">
                    <i class="fas fa-plus-circle text-orange mr-3"></i>
                    {visaType} Additional Documents
                  </h3>
                  <div dangerouslySetInnerHTML={{ __html: additionalFields }}></div>
                </div>
              )}

              {/* Section 3: Korean Language Skills */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-language text-teal-blue mr-3"></i>
                  Section 3: Korean Language Skills
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label class="block text-sm font-semibold text-navy mb-3">
                      KIIP Level
                    </label>
                    <div class="space-y-2">
                      {['None', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Completed'].map((level, index) => (
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
                      TOPIK Level
                    </label>
                    <div class="space-y-2">
                      {['None', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6'].map((level, index) => (
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

              {/* Section 4: Work Experience */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-briefcase text-green mr-3"></i>
                  Section 4: Work Experience
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="korea-years" class="block text-sm font-semibold text-navy mb-2">
                      Years in Korea
                    </label>
                    <input 
                      type="number" 
                      id="korea-years" 
                      name="koreaYears"
                      class="form-input"
                      placeholder="e.g., 5 years"
                      min="0"
                    />
                  </div>
                </div>
                
                {visaType !== 'E-7-4' && (
                  <div class="mt-6">
                    <label class="block text-sm font-semibold text-navy mb-3">
                      Work Experience
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
                        <span>Yes</span>
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
                        <span>No</span>
                      </label>
                    </div>
                    
                    <div id="experience-detail" class="hidden">
                      <label for="experience" class="block text-sm font-semibold text-navy mb-2">
                        Experience Details
                      </label>
                      <textarea 
                        id="experience" 
                        name="experience"
                        class="form-textarea"
                        rows="5"
                        placeholder="e.g., Chemical mixing 4 years, worked at XX factory"
                      ></textarea>
                    </div>
                  </div>
                )}
              </div>

              {/* Section 5: Preferences */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-heart text-orange mr-3"></i>
                  Section 5: Preferences
                </h3>
                
                <div class="space-y-6">
                  {/* E-7-4R, E-7-4: Expected salary and shift work only */}
                  {(visaType === 'E-7-4R' || visaType === 'E-7-4') && (
                    <>
                      <div>
                        <label for="expected-salary" class="block text-sm font-semibold text-navy mb-2">
                          Expected Salary
                        </label>
                        <input 
                          type="text" 
                          id="expected-salary" 
                          name="expectedSalary"
                          class="form-input"
                          placeholder="e.g., 2.5-3 million KRW per month"
                        />
                      </div>
                      
                      <div>
                        <label class="block text-sm font-semibold text-navy mb-3">
                          Shift Work Availability
                        </label>
                        <div class="space-y-2">
                          <label class="flex items-center">
                            <input type="checkbox" name="shiftWork" value="day" class="mr-2" />
                            <span class="text-sm">Day shift only</span>
                          </label>
                          <label class="flex items-center">
                            <input type="checkbox" name="shiftWork" value="night" class="mr-2" />
                            <span class="text-sm">Night shift only</span>
                          </label>
                          <label class="flex items-center">
                            <input type="checkbox" name="shiftWork" value="rotating" class="mr-2" />
                            <span class="text-sm">Day/Night shift available</span>
                          </label>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* F-2-R: Preferred location */}
                  {(visaType === 'F-2-R' || visaType.includes('F-2-R')) && (
                    <div>
                      <label class="block text-sm font-semibold text-navy mb-3">
                        Preferred Location (Multiple selections allowed)
                      </label>
                      <p class="text-sm text-red-600 mb-3">F-2-R visa excludes Seoul and Jeju.</p>
                      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['Gyeonggi', 'Gangwon', 'North Chungcheong', 'South Chungcheong', 'North Gyeongsang', 'South Gyeongsang', 'North Jeolla', 'South Jeolla'].map(region => (
                          <label class="flex items-center">
                            <input type="checkbox" name="preferredLocation" value={region} class="mr-2" />
                            <span class="text-sm">{region}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Other visa types: Basic preferred location */}
                  {!visaType.includes('E-7-4R') && !visaType.includes('F-2-R') && (
                    <div>
                      <label class="block text-sm font-semibold text-navy mb-3">
                        Preferred Location (Multiple selections allowed)
                      </label>
                      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['Seoul', 'Gyeonggi', 'Incheon', 'Chungcheong', 'Jeolla', 'Gyeongsang', 'Gangwon', 'Jeju'].map(region => (
                          <label class="flex items-center">
                            <input type="checkbox" name="preferredLocation" value={region} class="mr-2" />
                            <span class="text-sm">{region}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* F-2-R, E-7-1, E-7-4: Direct input for preferred job type */}
                  {(visaType.includes('F-2-R') || visaType === 'E-7-1' || visaType === 'E-7-4') && (
                    <div>
                      <label for="preferred-job-text" class="block text-sm font-semibold text-navy mb-2">
                        Preferred Job Type
                      </label>
                      <input 
                        type="text" 
                        id="preferred-job-text" 
                        name="preferredJobText"
                        class="form-input"
                        placeholder="e.g., Manufacturing, Service, IT Development"
                      />
                    </div>
                  )}
                  
                  {/* Basic preferred job type (selection) - Exclude E-7-4R */}
                  {!visaType.includes('E-7-4R') && !visaType.includes('F-2-R') && visaType !== 'E-7-1' && visaType !== 'E-7-4' && (
                    <div>
                      <label class="block text-sm font-semibold text-navy mb-3">
                        Preferred Job Type (Multiple selections allowed)
                      </label>
                      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {['Manufacturing', 'Construction', 'Service', 'Agriculture', 'IT', 'Other'].map(job => (
                          <label class="flex items-center">
                            <input type="checkbox" name="preferredJob" value={job} class="mr-2" />
                            <span class="text-sm">{job}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Expected salary - Other visa types except E-7-4R, E-7-4 */}
                  {!visaType.includes('E-7-4R') && visaType !== 'E-7-4' && (
                    <div>
                      <label for="expected-salary" class="block text-sm font-semibold text-navy mb-2">
                        Expected Salary
                      </label>
                      <input 
                        type="text" 
                        id="expected-salary" 
                        name="expectedSalary"
                        class="form-input"
                        placeholder="e.g., 2.5-3 million KRW per month"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Section 6: Agreements */}
              <div class="form-section">
                <h3 class="text-xl font-bold text-navy mb-6">
                  <i class="fas fa-clipboard-check text-red-500 mr-3"></i>
                  Section 6: Agreements
                </h3>
                
                <div class="space-y-4">
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="privacy" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-blue-600">I agree to the collection and use of personal information *</strong><br />
                      <strong class="text-navy">개인정보 수집 및 이용에 동의합니다 *</strong><br />
                      <span class="text-gray">I agree to the collection and use of personal information for job placement services.<br />
                      구직 서비스 제공을 위한 개인정보 수집 및 이용에 동의합니다.</span>
                    </span>
                  </label>
                  
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="resume-sharing" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-blue-600">I agree to provide my resume to hiring companies *</strong><br />
                      <strong class="text-navy">구인 기업에 이력서 제공을 동의합니다 *</strong><br />
                      <span class="text-gray">I agree to provide my resume and related information to matched companies.<br />
                      매칭되는 기업에 이력서 및 관련 정보 제공에 동의합니다.</span>
                    </span>
                  </label>
                  
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="consultation" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-blue-600">I agree to phone consultation with immigration specialists *</strong><br />
                      <strong class="text-navy">전문 행정사의 유선 상담을 동의합니다 *</strong><br />
                      <span class="text-gray">I agree to phone contact for professional visa-related consultation.<br />
                      비자 관련 전문 상담을 위한 전화 연락에 동의합니다.</span>
                    </span>
                  </label>
                  
                  <label class="flex items-start">
                    <input type="checkbox" name="agreements" value="notifications" class="mt-1 mr-3" required />
                    <span class="text-sm">
                      <strong class="text-blue-600">I agree to receive job recommendations *</strong><br />
                      <strong class="text-navy">추천 회사 알림을 수신하겠습니다 *</strong><br />
                      <span class="text-gray">I agree to receive email/SMS notifications when suitable job opportunities are found.<br />
                      적합한 구인처 발굴 시 이메일/SMS 알림 수신에 동의합니다.</span>
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
                  ← Back
                </button>
                
                <button 
                  type="submit" 
                  id="job-submit-btn"
                  class="flex-1 btn-orange-gradient py-4 px-8 rounded-xl font-bold transition-all"
                >
                  Submit Application
                </button>
              </div>
              
              {/* Requirements notice */}
              <div class="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
                <h4 class="text-red-800 font-semibold mb-2">
                  <i class="fas fa-exclamation-triangle mr-2"></i>
                  Requirements Check
                </h4>
                <ul class="text-sm text-red-700 space-y-1">
                  <li>✓ <strong>Name, Phone, Nationality</strong> must be filled</li>
                  <li>✓ <strong>All 4 agreements</strong> must be checked</li>
                  <li>✓ Click submit button</li>
                </ul>
                <p class="text-xs text-red-600 mt-2">
                  💡 If the button doesn't work, please check the above items again.<br/>
                  💡 버튼이 작동하지 않으면 위 사항들을 다시 확인해주세요.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <FooterEN />
    </div>
  )
}
