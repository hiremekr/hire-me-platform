import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ApplyPage } from './pages/ApplyPage'
import { CompanyPage } from './pages/CompanyPage'
import { CompanyApplyPage } from './pages/CompanyApplyPage'
import { F2RSelectionPage } from './pages/F2RSelectionPage'
import { E74RFormPage } from './pages/E74RFormPage'
import { F2RStudentFormPage } from './pages/F2RStudentFormPage'
import { F2RIncomeFormPage } from './pages/F2RIncomeFormPage'
import { E71FormPage } from './pages/E71FormPage'
import { E74TransferFormPage } from './pages/E74TransferFormPage'
import { SuccessPage } from './pages/SuccessPage'
import { CompanySuccessPage } from './pages/CompanySuccessPage'
import { TalentPoolPage } from './pages/TalentPoolPage'
import { TalentRequestPage } from './pages/TalentRequestPage'
import successCases from '../data/success-cases.json'
import candidates from '../data/candidates.json'
import reviews from '../data/reviews.json'

const app = new Hono()

// CORS 설정
app.use('/api/*', cors())

// 정적 파일 서빙
app.use('/static/*', serveStatic({ root: './public' }))

// JSX 렌더러 적용
app.use(renderer)

// HOME 페이지
app.get('/', (c) => {
  return c.render(
    <div>
      <Header />
      
      {/* Hero Section */}
      <section class="hero-bg flex items-center justify-center relative pt-16">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
          <h1 class="text-2xl text-teal-blue font-medium mb-4">
            💼 외국인 취업 매칭 플랫폼
          </h1>
          
          <div class="mb-6">
            <h2 class="text-4xl md:text-6xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              더 나은 미래를 위한<br />당신의 선택
            </h2>
            <p class="text-3xl md:text-4xl font-semibold text-navy mb-8" style="font-family: 'Cardo', serif;">
              HIRE ME가 함께합니다
            </p>
          </div>
          
          <p class="text-xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            취업부터 비자까지, 전문가가 원스톱으로 지원합니다
          </p>
          
          {/* 스크롤 유도 아이콘 */}
          <div class="scroll-indicator">
            <i class="fas fa-chevron-down text-3xl text-teal-blue"></i>
          </div>
        </div>
      </section>
      
      {/* 서비스 소개 CTA Cards */}
      <section class="py-32 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 구직자용 카드 */}
            <div class="card-hover bg-white border-2 border-teal-blue rounded-3xl p-12 shadow-lg">
              <div class="text-center mb-8">
                <div class="text-6xl mb-6">👤</div>
                <h3 class="text-3xl font-bold text-navy mb-6">
                  구직자를 위한<br />구직의뢰 서비스
                </h3>
              </div>
              
              <ul class="space-y-4 mb-12 text-lg text-gray leading-loose">
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-teal-blue mr-3"></i>
                  무료 구직 신청
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-teal-blue mr-3"></i>
                  비자별 맞춤 서비스
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-teal-blue mr-3"></i>
                  면접 동행 지원
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-teal-blue mr-3"></i>
                  비자 변경 대행
                </li>
              </ul>
              
              <a href="/apply" class="btn-orange-gradient block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all hover:no-underline">
                구직 신청하기 →
              </a>
            </div>
            
            {/* 기업용 카드 */}
            <div class="card-hover bg-white border-2 border-green rounded-3xl p-12 shadow-lg">
              <div class="text-center mb-8">
                <div class="text-6xl mb-6">🏢</div>
                <h3 class="text-3xl font-bold text-navy mb-6">
                  기업을 위한<br />외국인재 풀
                </h3>
              </div>
              
              <ul class="space-y-4 mb-12 text-lg text-gray leading-loose">
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-green mr-3"></i>
                  검증된 외국인 인재
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-green mr-3"></i>
                  무료 인재 추천
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-green mr-3"></i>
                  전문 비자 컨설팅
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-green mr-3"></i>
                  채용 후 비자 지원
                </li>
              </ul>
              
              <a href="/company" class="block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all bg-green text-white hover:bg-opacity-90 hover:no-underline">
                인재 찾기 →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* 매칭 완료 성공 케이스 */}
      <section class="bg-light-gray py-32 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              HIRE ME와 함께한 성공 스토리
            </h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successCases.slice(0, 6).map((case_) => (
              <div class="bg-white rounded-2xl shadow-md card-hover">
                {/* PC 버전 */}
                <div class="hidden md:block p-8">
                  {/* 프로필 영역 */}
                  <div class="text-center mb-6">
                    <div class="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-4xl shadow-lg"
                         style={
                           case_.nationality === '네팔' ? 'background: linear-gradient(135deg, #DC143C 0%, #003893 50%, #DC143C 100%); border: 4px solid #fff;' :
                           case_.nationality === '방글라데시' ? 'background: linear-gradient(135deg, #006A4E 0%, #F42A41 100%); border: 4px solid #fff;' :
                           case_.nationality === '스리랑카' ? 'background: linear-gradient(135deg, #FF9933 0%, #008000 50%, #000080 100%); border: 4px solid #fff;' :
                           case_.nationality === '미얀마' ? 'background: linear-gradient(135deg, #FECB00 0%, #34B233 50%, #EA2839 100%); border: 4px solid #fff;' :
                           case_.nationality === '파키스탄' ? 'background: linear-gradient(135deg, #01411C 0%, #ffffff 100%); border: 4px solid #01411C;' :
                           case_.nationality === '베트남' ? 'background: linear-gradient(135deg, #DA020E 0%, #FFFF00 100%); border: 4px solid #fff;' :
                           case_.nationality === '우즈베키스탄' ? 'background: linear-gradient(135deg, #0099B5 0%, #1EB53A 100%); border: 4px solid #fff;' : 
                           'background: #6B7280; border: 4px solid #fff;'
                         }>
                      <span class="drop-shadow-md">
                        {case_.nationality === '네팔' ? '🇳🇵' :
                         case_.nationality === '방글라데시' ? '🇧🇩' :
                         case_.nationality === '스리랑카' ? '🇱🇰' :
                         case_.nationality === '미얀마' ? '🇲🇲' :
                         case_.nationality === '파키스탄' ? '🇵🇰' :
                         case_.nationality === '베트남' ? '🇻🇳' :
                         case_.nationality === '우즈베키스탄' ? '🇺🇿' : '🌍'}
                      </span>
                    </div>
                    <h4 class="text-lg font-bold text-navy">
                      {case_.nationality} / {case_.name}
                    </h4>
                    <span class="inline-block bg-teal-blue text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
                      {case_.visa}
                    </span>
                  </div>
                  
                  {/* 후기 텍스트 */}
                  <p class="text-gray text-center mb-4 leading-relaxed">
                    "{case_.review}"
                  </p>
                  
                  {/* 회사 업종 정보 */}
                  <div class="text-center mb-3">
                    <span class="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {case_.company}
                    </span>
                  </div>
                  
                  {/* 매칭 지역 도장 */}
                  <div class="text-center mb-4">
                    <span class="stamp">
                      {case_.location} 매칭완료 ✓
                    </span>
                  </div>
                  
                  {/* 날짜 정보 */}
                  <div class="text-center mb-3">
                    <span class="text-xs text-gray-500">
                      {new Date(case_.date).toLocaleDateString('ko-KR')}
                    </span>
                  </div>
                  
                  {/* 별점 */}
                  <div class="text-center stars">
                    {Array(case_.rating).fill('★').join('')}
                  </div>
                </div>
                
                {/* 모바일 버전 - 50% 높이 감소 */}
                <div class="block md:hidden p-4">
                  {/* 프로필 영역 - 압축 */}
                  <div class="text-center mb-3">
                    <div class="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl shadow-lg"
                         style={
                           case_.nationality === '네팔' ? 'background: linear-gradient(135deg, #DC143C 0%, #003893 50%, #DC143C 100%); border: 2px solid #fff;' :
                           case_.nationality === '방글라데시' ? 'background: linear-gradient(135deg, #006A4E 0%, #F42A41 100%); border: 2px solid #fff;' :
                           case_.nationality === '스리랑카' ? 'background: linear-gradient(135deg, #FF9933 0%, #008000 50%, #000080 100%); border: 2px solid #fff;' :
                           case_.nationality === '미얀마' ? 'background: linear-gradient(135deg, #FECB00 0%, #34B233 50%, #EA2839 100%); border: 2px solid #fff;' :
                           case_.nationality === '파키스탄' ? 'background: linear-gradient(135deg, #01411C 0%, #ffffff 100%); border: 2px solid #01411C;' :
                           case_.nationality === '베트남' ? 'background: linear-gradient(135deg, #DA020E 0%, #FFFF00 100%); border: 2px solid #fff;' :
                           case_.nationality === '우즈베키스탄' ? 'background: linear-gradient(135deg, #0099B5 0%, #1EB53A 100%); border: 2px solid #fff;' : 
                           'background: #6B7280; border: 2px solid #fff;'
                         }>
                      <span class="drop-shadow-md">
                        {case_.nationality === '네팔' ? '🇳🇵' :
                         case_.nationality === '방글라데시' ? '🇧🇩' :
                         case_.nationality === '스리랑카' ? '🇱🇰' :
                         case_.nationality === '미얀마' ? '🇲🇲' :
                         case_.nationality === '파키스탄' ? '🇵🇰' :
                         case_.nationality === '베트남' ? '🇻🇳' :
                         case_.nationality === '우즈베키스탄' ? '🇺🇿' : '🌍'}
                      </span>
                    </div>
                    <h4 class="text-sm font-bold text-navy">
                      {case_.nationality} / {case_.name}
                    </h4>
                    <span class="inline-block bg-teal-blue text-white px-2 py-1 rounded-full text-xs font-medium mt-1">
                      {case_.visa}
                    </span>
                  </div>
                  
                  {/* 후기 텍스트 - 압축 */}
                  <p class="text-gray text-center text-sm mb-2 leading-relaxed">
                    "{case_.review}"
                  </p>
                  
                  {/* 회사 업종 정보 - 압축 */}
                  <div class="text-center">
                    <span class="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                      {case_.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div class="text-center mt-16">
            <button class="bg-white border-2 border-navy text-navy px-8 py-4 rounded-xl font-bold hover:bg-navy hover:text-white transition-colors">
              더 많은 성공 사례 보기
            </button>
          </div>
        </div>
      </section>
      
      {/* 신뢰 지표 섹션 */}
      <section class="bg-light-gray py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white border border-teal-blue rounded-full px-6 py-4 text-center">
              <i class="fas fa-certificate text-green mr-2"></i>
              <span class="text-sm font-medium text-gray-700">
                법무부 등록 출입국민원대행기관
              </span>
            </div>
            <div class="bg-white border border-teal-blue rounded-full px-6 py-4 text-center">
              <i class="fas fa-certificate text-green mr-2"></i>
              <span class="text-sm font-medium text-gray-700">
                고용노동부 등록 유료직업소개소
              </span>
            </div>
            <div class="bg-white border border-teal-blue rounded-full px-6 py-4 text-center">
              <i class="fas fa-trophy text-green mr-2"></i>
              <span class="text-sm font-medium text-gray-700">
                비자 성공률 업계 최고 수준
              </span>
            </div>
            <div class="bg-white border border-teal-blue rounded-full px-6 py-4 text-center">
              <i class="fas fa-users text-green mr-2"></i>
              <span class="text-sm font-medium text-gray-700">
                외국인 구직자 풀 업계 탑 수준
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>,
    { title: 'HIRE ME - 외국인 취업 매칭 플랫폼' }
  )
})

// 구직의뢰 페이지
app.get('/apply', (c) => {
  return c.render(
    <ApplyPage />,
    { title: '구직의뢰 - HIRE ME' }
  )
})

// 기업채용 페이지
app.get('/company', (c) => {
  return c.render(
    <CompanyPage />,
    { title: '기업채용 - HIRE ME' }
  )
})

// 인재 풀 페이지
app.get('/company/talents', (c) => {
  return c.render(
    <TalentPoolPage />,
    { title: '인재 풀 - HIRE ME' }
  )
})

// 인재 정보 요청 페이지
app.get('/company/request', (c) => {
  return c.render(
    <TalentRequestPage />,
    { title: '인재 정보 요청 - HIRE ME' }
  )
})

// 기업 상세 신청 페이지
app.get('/company/apply', (c) => {
  return c.render(
    <CompanyApplyPage />,
    { title: '기업 채용 신청 - HIRE ME' }
  )
})

// F-2-R 선택 페이지
app.get('/apply/f-2-r', (c) => {
  return c.render(
    <F2RSelectionPage />,
    { title: 'F-2-R 비자 선택 - HIRE ME' }
  )
})

// 비자별 신청 폼 페이지들
app.get('/apply/e-7-4r', (c) => {
  return c.render(
    <E74RFormPage />,
    { title: 'E-7-4R 신청 - HIRE ME' }
  )
})

app.get('/apply/f-2-r/student', (c) => {
  return c.render(
    <F2RStudentFormPage />,
    { title: 'F-2-R 유학생 신청 - HIRE ME' }
  )
})

app.get('/apply/f-2-r/income', (c) => {
  return c.render(
    <F2RIncomeFormPage />,
    { title: 'F-2-R 소득요건 신청 - HIRE ME' }
  )
})

app.get('/apply/e-7-1', (c) => {
  return c.render(
    <E71FormPage />,
    { title: 'E-7-1 신청 - HIRE ME' }
  )
})

app.get('/apply/e-7-4-transfer', (c) => {
  return c.render(
    <E74TransferFormPage />,
    { title: 'E-7-4 사업장변경 신청 - HIRE ME' }
  )
})

// 신청 완료 페이지
app.get('/apply/success', (c) => {
  return c.render(
    <SuccessPage />,
    { title: '신청 완료 - HIRE ME' }
  )
})

// 기업 인재요청 완료 페이지
app.get('/company/success', (c) => {
  return c.render(
    <CompanySuccessPage />,
    { title: '인재 정보 요청 완료 - HIRE ME' }
  )
})

// API 라우트 - 성공 케이스 데이터
app.get('/api/success-cases', (c) => {
  return c.json(successCases)
})

// API 라우트 - 인재 데이터
app.get('/api/candidates', (c) => {
  return c.json(candidates)
})

// API 라우트 - 후기 데이터
app.get('/api/reviews', (c) => {
  return c.json(reviews)
})

// 백업 이메일 API 엔드포인트
app.post('/api/backup-email', async (c) => {
  try {
    const emailData = await c.req.json()
    
    // 실제 이메일 전송 로직 (Cloudflare Email API 또는 외부 서비스 사용)
    // 현재는 로깅만 수행하고 성공 응답 반환
    console.log('🚨 백업 이메일 전송 요청:', {
      to: emailData.to,
      subject: emailData.subject,
      timestamp: emailData.timestamp,
      content_preview: emailData.content?.substring(0, 100) + '...'
    })
    
    // 여기에 실제 이메일 전송 코드를 추가할 수 있습니다
    // 예: Resend, SendGrid, 또는 Cloudflare Email Workers 사용
    
    return c.json({ 
      success: true, 
      message: 'Backup email logged successfully',
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('백업 이메일 처리 오류:', error)
    return c.json({ 
      success: false, 
      error: 'Backup email processing failed' 
    }, 500)
  }
})

export default app
