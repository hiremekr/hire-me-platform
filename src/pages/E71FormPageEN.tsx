import { JobApplicationFormEN } from '../components/JobApplicationFormEN'

export const E71FormPageEN = () => {
  const additionalFields = `
    <div class="space-y-6">
      <div>
        <label for="degree-cert" class="block text-sm font-semibold text-navy mb-2">
          Degree Certificate (Bachelor's or Higher) ⭐ (Important Document)
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
            <p class="text-gray">Upload Degree Certificate</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
          </label>
        </div>
        <div id="degree-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="career-cert" class="block text-sm font-semibold text-navy mb-2">
          Related Career Certificate (Recommended)
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
            <p class="text-gray">Upload Career Certificate</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (Max 10MB)</p>
          </label>
        </div>
        <div id="career-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="specialty-field" class="block text-sm font-semibold text-navy mb-2">
          Specialty Field
        </label>
        <input 
          type="text" 
          id="specialty-field" 
          name="specialtyField"
          class="form-input"
          placeholder="e.g., IT Development, Design, Marketing"
        />
        <p class="text-sm text-gray mt-1">Please enter your specific specialty field</p>
      </div>
    </div>
  `
  
  return (
    <JobApplicationFormEN 
      visaType="E-7-1"
      visaName="Specific Activities"
      description="Visa for professional personnel, requires a bachelor's degree or higher."
      additionalFields={additionalFields}
    />
  )
}
