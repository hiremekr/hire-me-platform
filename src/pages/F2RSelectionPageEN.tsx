import { HeaderEN } from '../components/HeaderEN'
import { FooterEN } from '../components/FooterEN'

export const F2RSelectionPageEN = () => {
  return (
    <div>
      <HeaderEN />
      
      <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-light-gray min-h-screen">
        <div class="max-w-4xl mx-auto">
          
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              F-2-R Regional Outstanding Talent Visa
            </h1>
            <p class="text-xl text-gray">
              Please select your application type
            </p>
          </div>

          <div class="space-y-8">
            
            {/* Student Requirements Card */}
            <div class="bg-white rounded-3xl p-8 shadow-lg border-2 border-green card-hover">
              <div class="text-center mb-6">
                <div class="text-6xl mb-4">📚</div>
                <h3 class="text-2xl font-bold text-navy mb-4">Student Requirements</h3>
              </div>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <i class="fas fa-graduation-cap text-green mt-1 mr-4 text-xl"></i>
                  <div>
                    <h4 class="font-bold text-navy mb-1">Korean Associate Degree or Higher</h4>
                    <p class="text-gray text-sm">College, University, or Graduate School graduates</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <i class="fas fa-language text-green mt-1 mr-4 text-xl"></i>
                  <div>
                    <h4 class="font-bold text-navy mb-1">TOPIK/KIIP Level 4 or Higher</h4>
                    <p class="text-gray text-sm">Korean Language Proficiency Test Level 4+ or Social Integration Program Level 4+</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <i class="fas fa-id-card text-green mt-1 mr-4 text-xl"></i>
                  <div>
                    <h4 class="font-bold text-navy mb-1">D-2/D-10 Visa Holders Only</h4>
                    <p class="text-gray text-sm">Student visa (D-2) or Job-seeking visa (D-10) holders</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="/en/apply/f-2-r/student" 
                class="btn-orange-gradient block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all hover:no-underline"
              >
                Apply with Student Requirements →
              </a>
            </div>

            {/* Income Requirements Card */}
            <div class="bg-white rounded-3xl p-8 shadow-lg border-2 border-teal-blue card-hover">
              <div class="text-center mb-6">
                <div class="text-6xl mb-4">💰</div>
                <h3 class="text-2xl font-bold text-navy mb-4">Income Requirements</h3>
              </div>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <i class="fas fa-won-sign text-teal-blue mt-1 mr-4 text-xl"></i>
                  <div>
                    <h4 class="font-bold text-navy mb-1">Annual Income 29-31.6 Million KRW</h4>
                    <p class="text-gray text-sm">(Varies by region, exact criteria provided during consultation)</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <i class="fas fa-language text-teal-blue mt-1 mr-4 text-xl"></i>
                  <div>
                    <h4 class="font-bold text-navy mb-1">TOPIK/KIIP Level 4 or Higher</h4>
                    <p class="text-gray text-sm">Korean Language Proficiency Test Level 4+ or Social Integration Program Level 4+</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 mb-6">
                <div class="flex items-start">
                  <i class="fas fa-exclamation-triangle text-yellow-600 mt-1 mr-3"></i>
                  <div class="text-sm text-yellow-800">
                    <strong>⚠️ Important Notice</strong><br />
                    Requirements vary by employment visa type. Immigration specialists may contact you for detailed consultation.
                  </div>
                </div>
              </div>
              
              <a 
                href="/en/apply/f-2-r/income" 
                class="block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all bg-teal-blue text-white hover:bg-opacity-90 hover:no-underline"
              >
                Apply with Income Requirements →
              </a>
            </div>
          </div>

          <div class="text-center mt-12">
            <a 
              href="/en/apply" 
              class="inline-flex items-center text-gray hover:text-navy transition-colors font-medium"
            >
              <i class="fas fa-arrow-left mr-2"></i>
              Go Back
            </a>
          </div>
        </div>
      </section>

      <FooterEN />
    </div>
  )
}
