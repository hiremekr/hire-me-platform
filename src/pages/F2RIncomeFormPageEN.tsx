import { JobApplicationFormEN } from '../components/JobApplicationFormEN'

export const F2RIncomeFormPageEN = () => {
  const additionalFields = `
    <div class="space-y-6">
      <div>
        <label for="income-cert" class="block text-sm font-semibold text-navy mb-2">
          Recent 1-Year Income Certificate ⭐ (Important Document)
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="income-cert" 
            name="incomeCert"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'income-preview')"
          />
          <label for="income-cert" class="cursor-pointer">
            <i class="fas fa-won-sign text-2xl text-teal-blue mb-2"></i>
            <p class="text-gray">Upload Income Certificate</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
          </label>
        </div>
        <div id="income-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="korean-test-cert" class="block text-sm font-semibold text-navy mb-2">
          Korean Language Certificate (TOPIK/KIIP Level 4+) ⭐ (Important Document)
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="korean-test-cert" 
            name="koreanTestCert"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'korean-test-preview')"
          />
          <label for="korean-test-cert" class="cursor-pointer">
            <i class="fas fa-language text-2xl text-teal-blue mb-2"></i>
            <p class="text-gray">Upload Korean Language Certificate</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
          </label>
        </div>
        <div id="korean-test-preview" class="mt-2"></div>
      </div>
    </div>
  `
  
  const specialNote = "⚠️ Income Requirements: Requirements vary by employment visa type. Immigration specialists may contact you for detailed consultation."
  
  return (
    <JobApplicationFormEN 
      visaType="F-2-R"
      visaName="Regional Outstanding Talent (Income Requirements)"
      description="F-2-R visa application for those who meet annual income requirements."
      additionalFields={additionalFields}
      specialNote={specialNote}
    />
  )
}
