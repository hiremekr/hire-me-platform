import { JobApplicationForm } from '../components/JobApplicationForm'

export const E71FormPage = () => {
  const additionalFields = `
    <div class="space-y-6">
      <div>
        <label for="degree-cert" class="block text-sm font-semibold text-navy mb-2">
          학위증명서 (학사 이상) ⭐ (중요 서류)
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="degree-cert" 
            name="degreeCert"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'degree-preview')"
          />
          <label for="degree-cert" class="cursor-pointer">
            <i class="fas fa-university text-2xl text-orange mb-2"></i>
            <p class="text-gray">학위증명서 업로드</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
          </label>
        </div>
        <div id="degree-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="career-cert" class="block text-sm font-semibold text-navy mb-2">
          관련 경력증명서 (권장)
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="career-cert" 
            name="careerCert"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'career-preview')"
          />
          <label for="career-cert" class="cursor-pointer">
            <i class="fas fa-briefcase text-2xl text-orange mb-2"></i>
            <p class="text-gray">경력증명서 업로드</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
          </label>
        </div>
        <div id="career-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="specialty-field" class="block text-sm font-semibold text-navy mb-2">
          전문 분야
        </label>
        <input 
          type="text" 
          id="specialty-field" 
          name="specialtyField"
          class="form-input"
          placeholder="예: IT개발, 디자인, 마케팅"
        />
        <p class="text-sm text-gray mt-1">구체적인 전문 분야를 입력해주세요</p>
      </div>
    </div>
  `
  
  return (
    <JobApplicationForm 
      visaType="E-7-1"
      visaName="특정활동"
      description="전문 인력을 위한 비자로, 학사 이상 학위가 필요합니다."
      additionalFields={additionalFields}
    />
  )
}