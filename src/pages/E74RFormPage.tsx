import { JobApplicationForm } from '../components/JobApplicationForm'

export const E74RFormPage = () => {
  const additionalFields = `
    <div>
      <label for="eps-certificate" class="block text-sm font-semibold text-navy mb-2">
        EPS 경력증명서 ⭐ (중요 서류)
      </label>
      <div class="file-upload">
        <input 
          type="file" 
          id="eps-certificate" 
          name="epsCertificate"
          accept="image/*,.pdf"
          class="hidden"
          onchange="handleFileUpload(this, 'eps-preview')"
        />
        <label for="eps-certificate" class="cursor-pointer">
          <i class="fas fa-file-alt text-2xl text-orange mb-2"></i>
          <p class="text-gray">EPS 경력증명서 업로드</p>
          <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
        </label>
      </div>
      <div id="eps-preview" class="mt-2"></div>
    </div>
  `
  
  return (
    <JobApplicationForm 
      visaType="E-7-4R"
      visaName="지역특화형 숙련기능인력 신청"
      mobileVisaName={`E-7-4R
지역특화형
숙련기능인력 신청`}
      description={`인구감소지역 지자체 추천 필수
한국어2급 이상 (2026년까지 유예)
구직신고필증필수 (구직자로 신청시)`}
      additionalFields={additionalFields}
    />
  )
}