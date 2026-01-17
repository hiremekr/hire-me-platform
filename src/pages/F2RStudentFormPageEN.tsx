import { JobApplicationFormEN } from '../components/JobApplicationFormEN'

export const F2RStudentFormPageEN = () => {
  const additionalFields = `
    <div class="space-y-6">
      <div>
        <label for="graduation-cert" class="block text-sm font-semibold text-navy mb-2">
          Graduation Certificate (Associate Degree or Higher) ⭐ (Important Document)
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="graduation-cert" 
            name="graduationCert"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'graduation-preview')"
          />
          <label for="graduation-cert" class="cursor-pointer">
            <i class="fas fa-graduation-cap text-2xl text-green mb-2"></i>
            <p class="text-gray">Upload Graduation Certificate</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
          </label>
        </div>
        <div id="graduation-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="transcript" class="block text-sm font-semibold text-navy mb-2">
          Transcript (Recommended)
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="transcript" 
            name="transcript"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'transcript-preview')"
          />
          <label for="transcript" class="cursor-pointer">
            <i class="fas fa-chart-line text-2xl text-green mb-2"></i>
            <p class="text-gray">Upload Transcript</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
          </label>
        </div>
        <div id="transcript-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="topik-kiip-cert" class="block text-sm font-semibold text-navy mb-2">
          TOPIK/KIIP Level 4+ Certificate ⭐ (Important Document)
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="topik-kiip-cert" 
            name="topikKiipCert"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'topik-kiip-preview')"
          />
          <label for="topik-kiip-cert" class="cursor-pointer">
            <i class="fas fa-language text-2xl text-green mb-2"></i>
            <p class="text-gray">Upload Korean Language Certificate</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
          </label>
        </div>
        <div id="topik-kiip-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="visa-proof" class="block text-sm font-semibold text-navy mb-2">
          D-2 or D-10 Visa Proof ⭐ (Important Document)
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="visa-proof" 
            name="visaProof"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'visa-preview')"
          />
          <label for="visa-proof" class="cursor-pointer">
            <i class="fas fa-id-card text-2xl text-green mb-2"></i>
            <p class="text-gray">Upload Visa Proof</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
          </label>
        </div>
        <div id="visa-preview" class="mt-2"></div>
      </div>
    </div>
  `
  
  return (
    <JobApplicationFormEN 
      visaType="F-2-R"
      visaName="Regional Outstanding Talent (Student Requirements)"
      description="F-2-R visa application for Korean Associate Degree or higher graduates."
      additionalFields={additionalFields}
    />
  )
}
