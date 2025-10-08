import { JobApplicationForm } from '../components/JobApplicationForm'

export const E74TransferFormPage = () => {
  const additionalFields = `
    <div class="space-y-6">
      <div>
        <label for="current-contract" class="block text-sm font-semibold text-navy mb-2">
          현재 회사 계약서 (선택사항)
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="current-contract" 
            name="currentContract"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'contract-preview')"
          />
          <label for="current-contract" class="cursor-pointer">
            <i class="fas fa-file-contract text-2xl text-charcoal mb-2"></i>
            <p class="text-gray">현재 계약서 업로드</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
          </label>
        </div>
        <div id="contract-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="income-proof" class="block text-sm font-semibold text-navy mb-2">
          최근 2개년 소득금액증명원 (선택사항)
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="income-proof" 
            name="incomeProof"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'income-proof-preview')"
          />
          <label for="income-proof" class="cursor-pointer">
            <i class="fas fa-receipt text-2xl text-charcoal mb-2"></i>
            <p class="text-gray">소득증명원 업로드</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
          </label>
        </div>
        <div id="income-proof-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="eps-certificate-transfer" class="block text-sm font-semibold text-navy mb-2">
          EPS 경력증명서 (선택사항)
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="eps-certificate-transfer" 
            name="epsCertificateTransfer"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'eps-transfer-preview')"
          />
          <label for="eps-certificate-transfer" class="cursor-pointer">
            <i class="fas fa-file-alt text-2xl text-charcoal mb-2"></i>
            <p class="text-gray">EPS 경력증명서 업로드</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
          </label>
        </div>
        <div id="eps-transfer-preview" class="mt-2"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="current-company" class="block text-sm font-semibold text-navy mb-2">
            현재 회사명
          </label>
          <input 
            type="text" 
            id="current-company" 
            name="currentCompany"
            class="form-input"
            placeholder="예: OO제조(주)"
          />
        </div>
        
        <div>
          <label for="work-period" class="block text-sm font-semibold text-navy mb-2">
            현재 회사 근무 기간
          </label>
          <input 
            type="text" 
            id="work-period" 
            name="workPeriod"
            class="form-input"
            placeholder="예: 2년 3개월"
          />
        </div>
      </div>
      
      <div>
        <label for="transfer-reason" class="block text-sm font-semibold text-navy mb-2">
          이직 사유
        </label>
        <textarea 
          id="transfer-reason" 
          name="transferReason"
          class="form-textarea"
          rows="6"
          placeholder="이직을 희망하는 구체적인 사유를 작성해주세요"
        ></textarea>
        <p class="text-sm text-gray mt-1">구체적이고 정당한 사유를 작성해주세요</p>
      </div>
    </div>
  `
  
  const specialNote = "⚠️ E-7-4 사업장변경은 반드시 전문 상담이 필요합니다. 신청 후 행정사가 1:1 상담을 진행합니다."
  
  return (
    <JobApplicationForm 
      visaType="E-7-4"
      visaName="사업장변경"
      description="현재 E-7-4 비자 소지자의 사업장 변경을 위한 신청입니다."
      additionalFields={additionalFields}
      specialNote={specialNote}
    />
  )
}