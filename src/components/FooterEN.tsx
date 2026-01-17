export const FooterEN = () => {
  return (
    <footer class="bg-navy text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div class="lg:col-span-2">
            <div class="flex items-center mb-6">
              <div class="hireme-logo-navy">
                <span>H</span><span class="exclaim">!</span><span>RE</span>
                <span class="space"></span>
                <span>ME</span>
                <svg class="globe-svg" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="3.5"/>
                  <ellipse cx="50" cy="50" rx="20" ry="40" fill="none" stroke="currentColor" stroke-width="3" opacity="0.7"/>
                  <ellipse cx="50" cy="50" rx="40" ry="20" fill="none" stroke="currentColor" stroke-width="3" opacity="0.7"/>
                  <path d="M 65 24 L 68 32 L 76 32 L 70 38 L 72 46 L 65 41 L 58 46 L 60 38 L 54 32 L 62 32 Z" fill="#FF7A5C"/>
                </svg>
              </div>
            </div>
            <p class="text-gray-300 mb-4 leading-relaxed">
              A professional employment matching platform connecting foreign job seekers with companies.<br />
              One-stop support from employment to visa services.
            </p>
            <div class="mb-4">
              <h4 class="text-white font-semibold mb-3">🏢 Operating Organizations</h4>
              <div class="space-y-2 text-sm text-gray-300 pl-2">
                <div class="flex items-start">
                  <span class="text-teal-blue mr-2">•</span>
                  <span><strong class="text-white">Recruitment Process</strong>: The Global Recruiting</span>
                </div>
                <div class="flex items-start">
                  <span class="text-green mr-2">•</span>
                  <span><strong class="text-white">Visa Services</strong>: Neuljoheun Administrative Office</span>
                </div>
              </div>
            </div>
            <div class="space-y-2 text-sm text-gray-400">
              <div class="flex items-center">
                <i class="fas fa-certificate text-green mr-2"></i>
                <span>Ministry of Justice Registered Immigration Agency</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-certificate text-green mr-2"></i>
                <span>Ministry of Employment Registered Employment Agency</span>
              </div>
            </div>
          </div>
          
          {/* Service Links */}
          <div>
            <h3 class="text-lg font-semibold mb-4">Services</h3>
            <ul class="space-y-2 text-gray-300">
              <li>
                <a href="/en/apply" class="hover:text-white transition-colors">
                  <i class="fas fa-user mr-2"></i>Job Application
                </a>
              </li>
              <li>
                <a href="/en/company" class="hover:text-white transition-colors">
                  <i class="fas fa-building mr-2"></i>For Companies
                </a>
              </li>
              <li>
                <a href="tel:010-6326-5572" class="hover:text-white transition-colors">
                  <i class="fas fa-file-alt mr-2"></i>Visa Consultation
                </a>
              </li>
              <li>
                <a href="tel:010-6326-5572" class="hover:text-white transition-colors">
                  <i class="fas fa-handshake mr-2"></i>Interview Support
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact</h3>
            <div class="space-y-3 text-gray-300 text-sm">
              <div class="flex items-start">
                <i class="fas fa-map-marker-alt mt-1 mr-3 text-teal-blue"></i>
                <div>
                  <p class="font-medium">Head Office</p>
                  <p>263 Jangchungdan-ro, Jung-gu</p>
                  <p>Migliore Building #1802, Seoul</p>
                </div>
              </div>
              <div class="flex items-center">
                <i class="fas fa-phone mr-3 text-teal-blue"></i>
                <span>010-6326-5572</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-envelope mr-3 text-teal-blue"></i>
                <span>hireme.kr@gmail.com</span>
              </div>
              <div class="flex items-center">
                <i class="fab fa-telegram mr-3 text-yellow-400"></i>
                <a href="http://pf.kakao.com/_pPxnFxj/chat" target="_blank" class="hover:text-white transition-colors">
                  KakaoTalk Consultation
                </a>
              </div>
              <div class="text-xs text-gray-400 mt-2 pl-6">
                <p>Due to high volume, please leave a message.</p>
                <p>We will contact you individually.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div class="border-t border-gray-600 mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div class="text-sm text-gray-400">
              <p>&copy; 2025 HIRE ME. All rights reserved.</p>
              <div class="mt-2 space-y-1">
                <p><strong class="text-gray-300">The Global Recruiting</strong></p>
                <p>Business No: 509-09-74093 | Employment Agency No: 2024-3010243-14-5-00001</p>
                <p class="mt-1"><strong class="text-gray-300">Neuljoheun Administrative Office</strong></p>
                <p>Business No: 830-05-02501 | Immigration Agency</p>
                <p class="mt-1">CEO: Lim Jung-gu</p>
              </div>
            </div>
            <div class="flex space-x-6 text-sm text-gray-400">
              <a href="tel:010-6326-5572" class="hover:text-white transition-colors">Terms of Service</a>
              <a href="tel:010-6326-5572" class="hover:text-white transition-colors">Privacy Policy</a>
              <a href="tel:010-6326-5572" class="hover:text-white transition-colors">Business Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
