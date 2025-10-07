export const Footer = () => {
  return (
    <footer class="bg-navy text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div class="lg:col-span-2">
            <div class="flex items-center mb-6">
              <h2 class="text-3xl font-bold text-white">HIRE ME</h2>
            </div>
            <p class="text-gray-300 mb-4 leading-relaxed">
              외국인 구직자와 기업을 연결하는 전문 취업 매칭 플랫폼입니다.<br />
              취업부터 비자까지, 전문가가 원스톱으로 지원합니다.
            </p>
            <div class="mb-4">
              <h4 class="text-white font-semibold mb-3">🏢 운영 기관 및 역할 분담</h4>
              <div class="space-y-2 text-sm text-gray-300 pl-2">
                <div class="flex items-start">
                  <span class="text-teal-blue mr-2">•</span>
                  <span><strong class="text-white">채용 프로세스</strong>: 더글로벌리크루팅</span>
                </div>
                <div class="flex items-start">
                  <span class="text-green mr-2">•</span>
                  <span><strong class="text-white">비자 업무</strong>: 행정사사무소 늘좋은</span>
                </div>
              </div>
            </div>
            <div class="space-y-2 text-sm text-gray-400">
              <div class="flex items-center">
                <i class="fas fa-certificate text-green mr-2"></i>
                <span>법무부 등록 출입국민원대행기관</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-certificate text-green mr-2"></i>
                <span>고용노동부 등록 유료직업소개소</span>
              </div>
            </div>
          </div>
          
          {/* 서비스 링크 */}
          <div>
            <h3 class="text-lg font-semibold mb-4">서비스</h3>
            <ul class="space-y-2 text-gray-300">
              <li>
                <a href="/apply" class="hover:text-white transition-colors">
                  <i class="fas fa-user mr-2"></i>구직의뢰
                </a>
              </li>
              <li>
                <a href="/company" class="hover:text-white transition-colors">
                  <i class="fas fa-building mr-2"></i>기업채용
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">
                  <i class="fas fa-file-alt mr-2"></i>비자 상담
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">
                  <i class="fas fa-handshake mr-2"></i>면접 지원
                </a>
              </li>
            </ul>
          </div>
          
          {/* 연락처 */}
          <div>
            <h3 class="text-lg font-semibold mb-4">연락처</h3>
            <div class="space-y-3 text-gray-300 text-sm">
              <div class="flex items-start">
                <i class="fas fa-map-marker-alt mt-1 mr-3 text-teal-blue"></i>
                <div>
                  <p class="font-medium">본사</p>
                  <p>서울특별시 중구 장충단로 263</p>
                  <p>밀리오레 빌딩 1802호</p>
                </div>
              </div>
              <div class="flex items-center">
                <i class="fas fa-phone mr-3 text-teal-blue"></i>
                <span>010-6326-5572</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-envelope mr-3 text-teal-blue"></i>
                <span>contact@hireme.co.kr</span>
              </div>
              <div class="flex items-center">
                <i class="fab fa-telegram mr-3 text-yellow-400"></i>
                <a href="tel:010-6326-5572" class="hover:text-white transition-colors">
                  카카오톡 상담
                </a>
              </div>
              <div class="text-xs text-gray-400 mt-2 pl-6">
                <p>문의가 많아 메시지 남겨주시면</p>
                <p>순차적으로 확인 후 개별적으로 연락드립니다.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 구분선 */}
        <div class="border-t border-gray-600 mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div class="text-sm text-gray-400">
              <p>&copy; 2024 HIRE ME. All rights reserved.</p>
              <div class="mt-2 space-y-1">
                <p><strong class="text-gray-300">더글로벌리크루팅</strong></p>
                <p>사업자등록번호: 000-00-00000 | 유료직업소개소 등록번호: 2024-3010243-14-5-00001호</p>
                <p class="mt-1"><strong class="text-gray-300">행정사사무소 늘좋은</strong></p>
                <p>사업자등록번호: 000-00-00000 | 출입국민원대행기관 등록번호: 제0000호</p>
                <p class="mt-1">공동 대표자: 홍길동</p>
              </div>
            </div>
            <div class="flex space-x-6 text-sm text-gray-400">
              <a href="#" class="hover:text-white transition-colors">이용약관</a>
              <a href="#" class="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" class="hover:text-white transition-colors">사업자정보</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}