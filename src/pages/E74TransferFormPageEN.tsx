import { JobApplicationFormEN } from '../components/JobApplicationFormEN'

export const E74TransferFormPageEN = () => {
  const additionalFields = `
    <div class="space-y-6">
      <div>
        <label for="current-contract" class="block text-sm font-semibold text-navy mb-2">
          Current Company Contract ⭐ (Important Document)
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
            <p class="text-gray">Upload Current Contract</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
          </label>
        </div>
        <div id="contract-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="income-proof" class="block text-sm font-semibold text-navy mb-2">
          Recent 2-Year Income Certificate ⭐ (Important Document)
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
            <p class="text-gray">Upload Income Certificate</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
          </label>
        </div>
        <div id="income-proof-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="eps-certificate-transfer" class="block text-sm font-semibold text-navy mb-2">
          EPS Employment Certificate (Recommended)
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
            <p class="text-gray">Upload EPS Certificate</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
          </label>
        </div>
        <div id="eps-transfer-preview" class="mt-2"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="current-company" class="block text-sm font-semibold text-navy mb-2">
            Current Company Name
          </label>
          <input 
            type="text" 
            id="current-company" 
            name="currentCompany"
            class="form-input"
            placeholder="e.g., ABC Manufacturing Co., Ltd."
          />
        </div>
        
        <div>
          <label for="work-period" class="block text-sm font-semibold text-navy mb-2">
            Current Employment Period
          </label>
          <input 
            type="text" 
            id="work-period" 
            name="workPeriod"
            class="form-input"
            placeholder="e.g., 2 years 3 months"
          />
        </div>
      </div>
      
      <div>
        <label for="transfer-reason" class="block text-sm font-semibold text-navy mb-2">
          Reason for Transfer
        </label>
        <textarea 
          id="transfer-reason" 
          name="transferReason"
          class="form-textarea"
          rows="6"
          placeholder="Please describe specific reasons for workplace transfer"
        ></textarea>
        <p class="text-sm text-gray mt-1">Please provide specific and legitimate reasons</p>
      </div>
    </div>
  `
  
  const specialNote = "⚠️ E-7-4 workplace transfer requires professional consultation. Immigration specialists will conduct 1:1 consultation after application."
  
  return (
    <JobApplicationFormEN 
      visaType="E-7-4"
      visaName="Workplace Transfer"
      description="Application for workplace transfer for current E-7-4 visa holders."
      additionalFields={additionalFields}
      specialNote={specialNote}
    />
  )
}
