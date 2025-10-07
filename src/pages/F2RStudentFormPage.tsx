import { JobApplicationForm } from '../components/JobApplicationForm'

export const F2RStudentFormPage = () => {
  const additionalFields = `
    <div class="space-y-6">
      <div>
        <label for="graduation-cert" class="block text-sm font-semibold text-navy mb-2">
          졸업증명서 (전문학사 이상) *
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="graduation-cert" 
            name="graduationCert"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'graduation-preview')"
            required
          />
          <label for="graduation-cert" class="cursor-pointer">
            <i class="fas fa-graduation-cap text-2xl text-green mb-2"></i>
            <p class="text-gray">졸업증명서 업로드</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
          </label>
        </div>
        <div id="graduation-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="transcript" class="block text-sm font-semibold text-navy mb-2">
          성적증명서 *
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="transcript" 
            name="transcript"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'transcript-preview')"
            required
          />
          <label for="transcript" class="cursor-pointer">
            <i class="fas fa-chart-line text-2xl text-green mb-2"></i>
            <p class="text-gray">성적증명서 업로드</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
          </label>
        </div>
        <div id="transcript-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="topik-kiip-cert" class="block text-sm font-semibold text-navy mb-2">
          TOPIK/KIIP 4급 이상 증명서 *
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="topik-kiip-cert" 
            name="topikKiipCert"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'topik-kiip-preview')"
            required
          />
          <label for="topik-kiip-cert" class="cursor-pointer">
            <i class="fas fa-language text-2xl text-green mb-2"></i>
            <p class="text-gray">한국어 능력 증명서 업로드</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
          </label>
        </div>
        <div id="topik-kiip-preview" class="mt-2"></div>
      </div>
      
      <div>
        <label for="visa-proof" class="block text-sm font-semibold text-navy mb-2">
          D-2 또는 D-10 비자 증명 *
        </label>
        <div class="file-upload">
          <input 
            type="file" 
            id="visa-proof" 
            name="visaProof"
            accept="image/*,.pdf"
            class="hidden"
            onchange="handleFileUpload(this, 'visa-preview')"
            required
          />
          <label for="visa-proof" class="cursor-pointer">
            <i class="fas fa-id-card text-2xl text-green mb-2"></i>
            <p class="text-gray">비자 증명 업로드</p>
            <p class="text-sm text-gray">JPG, PNG, PDF (최대 10MB)</p>
          </label>
        </div>
        <div id="visa-preview" class="mt-2"></div>
      </div>
    </div>
  `
  
  return (
    <JobApplicationForm 
      visaType="F-2-R"
      visaName="지역특화형 우수인재 (유학생 요건)"
      description="한국 전문학사 이상 졸업자를 위한 F-2-R 비자 신청입니다."
      additionalFields={additionalFields}
    />
  )
}