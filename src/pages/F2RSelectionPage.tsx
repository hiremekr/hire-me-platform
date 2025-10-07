import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const F2RSelectionPage = () => {
  return (
    <div>
      <Header />
      
      <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-light-gray min-h-screen">
        <div class="max-w-4xl mx-auto">
          
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              F-2-R 지역특화형 우수인재 비자
            </h1>
            <p class="text-xl text-gray">
              신청 유형을 선택해주세요
            </p>
          </div>

          <div class="space-y-8">
            
            {/* 유학생 요건 카드 */}
            <div class="bg-white rounded-3xl p-8 shadow-lg border-2 border-green card-hover">
              <div class="text-center mb-6">
                <div class="text-6xl mb-4">📚</div>
                <h3 class="text-2xl font-bold text-navy mb-4">유학생 요건</h3>
              </div>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <i class="fas fa-graduation-cap text-green mt-1 mr-4 text-xl"></i>
                  <div>
                    <h4 class="font-bold text-navy mb-1">한국 전문학사 이상 졸업</h4>
                    <p class="text-gray text-sm">전문대학, 대학교, 대학원 졸업자</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <i class="fas fa-language text-green mt-1 mr-4 text-xl"></i>
                  <div>
                    <h4 class="font-bold text-navy mb-1">TOPIK/KIIP 4급 이상</h4>
                    <p class="text-gray text-sm">한국어능력시험 4급 이상 또는 사회통합프로그램 4단계 이상</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <i class="fas fa-id-card text-green mt-1 mr-4 text-xl"></i>
                  <div>
                    <h4 class="font-bold text-navy mb-1">D-2/D-10 비자 소지자만 가능</h4>
                    <p class="text-gray text-sm">유학비자(D-2) 또는 구직비자(D-10) 보유자</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="/apply/f-2-r/student" 
                class="btn-orange-gradient block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all hover:no-underline"
              >
                유학생 요건으로 신청하기 →
              </a>
            </div>

            {/* 소득요건 카드 */}
            <div class="bg-white rounded-3xl p-8 shadow-lg border-2 border-teal-blue card-hover">
              <div class="text-center mb-6">
                <div class="text-6xl mb-4">💰</div>
                <h3 class="text-2xl font-bold text-navy mb-4">소득요건</h3>
              </div>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <i class="fas fa-won-sign text-teal-blue mt-1 mr-4 text-xl"></i>
                  <div>
                    <h4 class="font-bold text-navy mb-1">연소득 2,900~3,160만원</h4>
                    <p class="text-gray text-sm">(지역별로 상이, 정확한 기준은 상담 시 안내)</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <i class="fas fa-language text-teal-blue mt-1 mr-4 text-xl"></i>
                  <div>
                    <h4 class="font-bold text-navy mb-1">TOPIK/KIIP 4급 이상</h4>
                    <p class="text-gray text-sm">한국어능력시험 4급 이상 또는 사회통합프로그램 4단계 이상</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 mb-6">
                <div class="flex items-start">
                  <i class="fas fa-exclamation-triangle text-yellow-600 mt-1 mr-3"></i>
                  <div class="text-sm text-yellow-800">
                    <strong>⚠️ 중요 안내</strong><br />
                    취업비자별로 요건이 달라 자세한 상담을 위해 행정사의 유선 안내가 있을 수 있습니다.
                  </div>
                </div>
              </div>
              
              <a 
                href="/apply/f-2-r/income" 
                class="block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all bg-teal-blue text-white hover:bg-opacity-90 hover:no-underline"
              >
                소득요건으로 신청하기 →
              </a>
            </div>
          </div>

          <div class="text-center mt-12">
            <a 
              href="/apply" 
              class="inline-flex items-center text-gray hover:text-navy transition-colors font-medium"
            >
              <i class="fas fa-arrow-left mr-2"></i>
              이전으로 돌아가기
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}