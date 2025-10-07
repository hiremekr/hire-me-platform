import { JobApplicationForm } from '../components/JobApplicationForm'

export const F2RIncomeFormPage = () => {
  const additionalFields = `
    <div class="space-y-6">
      <div>
        <label for="income-cert" class="block text-sm font-semibold text-navy mb-2">
          최근 1개년 소득금액증명원 *
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="income-cert" 
            name="incomeCert"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'income-preview')"
            required
          />
          <label for="income-cert" class="cursor-pointer">
            <i class="fas fa-won-sign text-2xl text-teal-blue mb-2"></i>
            <p class="text-gray">소득금액증명원 업로드</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
          </label>
        </div>
        <div id="income-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="korean-test-cert" class="block text-sm font-semibold text-navy mb-2">
          한국어 성적표 (TOPIK/KIIP 4급 이상) *
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="korean-test-cert" 
            name="koreanTestCert"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'korean-test-preview')"
            required
          />
          <label for="korean-test-cert" class="cursor-pointer">
            <i class="fas fa-language text-2xl text-teal-blue mb-2"></i>
            <p class="text-gray">한국어 능력 증명서 업로드</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
          </label>
        </div>
        <div id="korean-test-preview" class="mt-2"></div>
      </div>
    </div>
  `
  
  const specialNote = "⚠️ 소득요건 선택 시: 취업비자별로 요건이 달라 자세한 상담을 위해 행정사의 유선 안내가 있을 수 있습니다."
  
  return (
    <JobApplicationForm 
      visaType="F-2-R"
      visaName="지역특화형 우수인재 (소득 요건)"
      description="연소득 요건을 충족하는 분을 위한 F-2-R 비자 신청입니다."
      additionalFields={additionalFields}
      specialNote={specialNote}
    />
  )
}