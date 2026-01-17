import { JobApplicationFormEN } from '../components/JobApplicationFormEN'

export const E74RFormPageEN = () => {
  const additionalFields = `
    <div>
      <label for="eps-certificate" class="block text-sm font-semibold text-navy mb-2">
        EPS Employment Certificate ⭐ (Important Document)
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
          <p class="text-gray">Upload EPS Employment Certificate</p>
          <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
        </label>
      </div>
      <div id="eps-preview" class="mt-2"></div>
    </div>
  `
  
  return (
    <JobApplicationFormEN 
      visaType="E-7-4R"
      visaName="Regional Skilled Worker Application"
      mobileVisaName={`E-7-4R
Regional Skilled
Worker Application`}
      description={`Local government recommendation required
Korean Level 2+ (grace period until 2026)
Job search report required (for job seekers)`}
      additionalFields={additionalFields}
    />
  )
}
