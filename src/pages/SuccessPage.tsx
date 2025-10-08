import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const SuccessPage = () => {
  return (
    <div>
      <Header />
      
      <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-light-gray min-h-screen">
        <div class="max-w-4xl mx-auto text-center">
          
          <div class="bg-white rounded-3xl p-12 shadow-lg mb-8">
            <div class="text-6xl text-green mb-6">✅</div>
            
            <h1 class="text-4xl font-bold text-navy mb-6" style="font-family: 'Cardo', serif;">
              신청이 완료되었습니다!
            </h1>
            
            <p class="text-xl text-gray mb-8 leading-relaxed">
              구직 신청이 성공적으로 접수되었습니다.
            </p>

            <div class="bg-light-gray rounded-2xl p-6 mb-8">
              <h3 class="text-lg font-bold text-navy mb-4">
                <i class="fas fa-clock text-teal-blue mr-2"></i>
                다음 단계 안내
              </h3>
              
              <div class="space-y-4 text-left">
                <div class="flex items-start">
                  <div class="bg-teal-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 class="font-semibold text-navy">상담사 연락</h4>
                    <p class="text-sm text-gray">전문 상담사가 유선으로 연락하여 상세 정보를 확인합니다.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="bg-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 class="font-semibold text-navy">이력서 작성</h4>
                    <p class="text-sm text-gray">한국형 이력서를 전문적으로 작성하여 기업에 제출합니다.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="bg-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 class="font-semibold text-navy">기업 매칭</h4>
                    <p class="text-sm text-gray">조건에 맞는 기업을 찾아 매칭을 진행합니다.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="bg-navy text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                  <div>
                    <h4 class="font-semibold text-navy">면접 및 비자 진행</h4>
                    <p class="text-sm text-gray">면접 지원부터 비자 신청까지 전 과정을 도와드립니다.</p>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div class="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <a 
              href="/" 
              class="btn-orange-gradient inline-block px-8 py-4 rounded-xl text-lg font-bold transition-all hover:no-underline"
            >
              홈으로 돌아가기
            </a>
            
            <button 
              onclick="openKakaoTalk()" 
              class="bg-yellow-400 text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center"
            >
              <i class="fab fa-telegram mr-3 text-xl"></i>
              카카오톡 상담
            </button>
          </div>


        </div>
      </section>

      <Footer />
    </div>
  )
}