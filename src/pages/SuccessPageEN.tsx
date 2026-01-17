import { HeaderEN } from '../components/HeaderEN'
import { FooterEN } from '../components/FooterEN'

export const SuccessPageEN = () => {
  return (
    <div>
      <HeaderEN />
      
      <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div class="max-w-2xl mx-auto text-center">
          <div class="bg-white rounded-3xl shadow-2xl p-12">
            <div class="text-6xl mb-6">🎉</div>
            
            <h1 class="text-3xl md:text-4xl font-bold text-navy mb-4">
              Application Submitted Successfully!
            </h1>
            
            <p class="text-xl text-gray mb-8">
              Thank you for applying.<br />
              We will review your application and contact you soon.
            </p>
            
            <div class="bg-teal-blue bg-opacity-10 rounded-2xl p-6 mb-8">
              <h3 class="text-lg font-semibold text-navy mb-3">
                📱 What's Next?
              </h3>
              <ul class="text-left space-y-2 text-gray">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-teal-blue mt-1 mr-3"></i>
                  <span><strong>Step 1:</strong> Expert will review your documents (1-2 business days)</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-teal-blue mt-1 mr-3"></i>
                  <span><strong>Step 2:</strong> We will contact you via phone</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-teal-blue mt-1 mr-3"></i>
                  <span><strong>Step 3:</strong> Matched companies will be recommended</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-teal-blue mt-1 mr-3"></i>
                  <span><strong>Step 4:</strong> Proceed with interview support and visa processing</span>
                </li>
              </ul>
            </div>
            
            <div class="space-y-3">
              <button 
                onclick="openKakaoTalk()" 
                class="w-full bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <i class="fab fa-telegram mr-3 text-xl"></i>
                Quick KakaoTalk Consultation
              </button>
              
              <a 
                href="/en" 
                class="block w-full bg-white border-2 border-navy text-navy px-8 py-4 rounded-full text-lg font-bold hover:bg-navy hover:text-white transition-colors"
              >
                ← Back to Home
              </a>
            </div>
            
            <div class="mt-8 text-sm text-gray">
              <p>💌 Check your email (including spam folder)</p>
              <p>📞 Contact: 010-6326-5572</p>
              <p>📧 Email: hireme.kr@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      
      <FooterEN />
    </div>
  )
}
