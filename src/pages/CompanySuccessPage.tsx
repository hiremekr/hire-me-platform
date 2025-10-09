import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const CompanySuccessPage = () => {
  return (
    <div>
      <Header />
      
      <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-light-gray min-h-screen flex items-center justify-center">
        <div class="max-w-2xl mx-auto text-center">
          
          {/* 성공 아이콘 */}
          <div class="mb-8">
            <div class="w-24 h-24 bg-green rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="fas fa-check text-white text-4xl"></i>
            </div>
            <div class="text-6xl mb-4">🎉</div>
          </div>

          {/* 메인 메시지 */}
          <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h1 class="text-3xl font-bold text-navy mb-4">
              인재 정보 요청이 접수되었습니다!
            </h1>
            
            <p class="text-lg text-gray mb-6 leading-relaxed">
              귀하의 인재 정보 요청이 성공적으로 전송되었습니다.<br />
              담당자가 빠른 시일 내에 연락드리겠습니다.
            </p>
            
            <div class="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <div class="flex items-start space-x-3">
                <i class="fas fa-info-circle text-green text-xl mt-1"></i>
                <div class="text-left">
                  <h3 class="font-bold text-green mb-2">다음 단계 안내</h3>
                  <ul class="text-sm text-green space-y-2">
                    <li>• <strong>1-2일 내</strong> 담당자가 전화로 연락드립니다</li>
                    <li>• 요청하신 인재의 <strong>상세 정보</strong>를 제공해드립니다</li>
                    <li>• 채용 조건에 맞는 <strong>추가 인재 추천</strong>도 가능합니다</li>
                    <li>• <strong>면접 일정 조율</strong> 및 <strong>통역 지원</strong>을 도와드립니다</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 추가 서비스 안내 */}
          <div class="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <h3 class="text-xl font-bold text-navy mb-4">
              <i class="fas fa-handshake text-teal-blue mr-2"></i>
              추가로 이용 가능한 서비스
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="text-center p-4 bg-light-gray rounded-xl">
                <i class="fas fa-users text-teal-blue text-2xl mb-2"></i>
                <h4 class="font-bold text-navy mb-1">더 많은 인재 보기</h4>
                <p class="text-sm text-gray">40명의 검증된 인재풀 확인</p>
              </div>
              
              <div class="text-center p-4 bg-light-gray rounded-xl">
                <i class="fas fa-clipboard-list text-orange text-2xl mb-2"></i>
                <h4 class="font-bold text-navy mb-1">상세 채용 신청</h4>
                <p class="text-sm text-gray">구체적인 채용 요구사항 등록</p>
              </div>
            </div>
          </div>

          {/* 액션 버튼들 */}
          <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a 
              href="/company/talents" 
              class="btn-teal-gradient inline-block px-8 py-4 rounded-xl font-bold transition-all hover:no-underline"
            >
              <i class="fas fa-users mr-2"></i>
              다른 인재 보기
            </a>
            
            <a 
              href="/company/apply" 
              class="bg-white border-2 border-teal-blue text-teal-blue px-8 py-4 rounded-xl font-bold hover:bg-teal-blue hover:text-white transition-colors inline-block hover:no-underline"
            >
              <i class="fas fa-plus mr-2"></i>
              상세 신청하기
            </a>
          </div>

          {/* 연락처 정보 */}
          <div class="mt-12 text-center">
            <div class="bg-navy-teal-gradient rounded-2xl p-6 text-white">
              <h3 class="text-lg font-bold mb-4">
                <i class="fas fa-phone text-orange mr-2"></i>
                급하신 경우 직접 연락 가능
              </h3>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div class="font-bold mb-1">📞 전화 상담</div>
                  <div class="opacity-90">010-6326-5572</div>
                </div>
                <div>
                  <div class="font-bold mb-1">💬 카카오톡 상담</div>
                  <button 
                    onclick="openKakaoTalk()" 
                    class="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center text-sm"
                  >
                    <i class="fab fa-telegram mr-2"></i>
                    바로 상담하기
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 홈으로 돌아가기 */}
          <div class="mt-8">
            <a 
              href="/" 
              class="text-gray hover:text-navy transition-colors inline-flex items-center"
            >
              <i class="fas fa-home mr-2"></i>
              홈으로 돌아가기
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}