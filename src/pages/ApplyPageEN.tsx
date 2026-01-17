import { HeaderEN } from '../components/HeaderEN'
import { FooterEN } from '../components/FooterEN'
import reviews from '../../data/reviews.json'

export const ApplyPageEN = () => {
  return (
    <div>
      <HeaderEN />
      
      {/* Hero Section */}
      <section class="hero-bg flex items-center justify-center relative pt-16">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
          <h1 class="text-4xl md:text-6xl font-bold text-navy mb-6" style="font-family: 'Cardo', serif;">
            Your Choice for<br />A Better Future
          </h1>
          <p class="text-xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            Start your journey to stable employment and visa acquisition with experts
          </p>
          <a 
            href="#visa-selection" 
            class="btn-orange-gradient inline-block px-8 py-4 rounded-xl text-lg font-bold transition-all hover:no-underline"
          >
            Get Started Now ↓
          </a>
        </div>
      </section>

      {/* Statistics Cards */}
      <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* TOP Talent Pool */}
            <div class="text-center bg-light-gray rounded-2xl">
              {/* Desktop */}
              <div class="hidden md:block p-8">
                <div class="text-4xl text-teal-blue mb-4">
                  <i class="fas fa-trophy"></i>
                </div>
                <h3 class="text-xl font-bold text-navy mb-2">TOP Talent Pool</h3>
                <p class="text-gray leading-relaxed">
                  Industry-leading<br />verified foreign talent
                </p>
              </div>
              
              {/* Mobile */}
              <div class="block md:hidden p-4">
                <div class="text-2xl text-teal-blue mb-2">
                  <i class="fas fa-trophy"></i>
                </div>
                <h3 class="text-lg font-bold text-navy mb-1">TOP Talent Pool</h3>
                <p class="text-sm text-gray leading-relaxed">
                  Industry-leading verified talent
                </p>
              </div>
            </div>

            {/* Highest Success Rate */}
            <div class="text-center bg-light-gray rounded-2xl">
              {/* Desktop */}
              <div class="hidden md:block p-8">
                <div class="text-4xl text-green mb-4">
                  <i class="fas fa-chart-line"></i>
                </div>
                <h3 class="text-xl font-bold text-navy mb-2">Highest Success Rate</h3>
                <p class="text-gray leading-relaxed">
                  Industry-leading<br />visa success rate
                </p>
              </div>
              
              {/* Mobile */}
              <div class="block md:hidden p-4">
                <div class="text-2xl text-green mb-2">
                  <i class="fas fa-chart-line"></i>
                </div>
                <h3 class="text-lg font-bold text-navy mb-1">Highest Success Rate</h3>
                <p class="text-sm text-gray leading-relaxed">
                  Industry-leading visa success rate
                </p>
              </div>
            </div>

            {/* ONE-STOP Service */}
            <div class="text-center bg-light-gray rounded-2xl">
              {/* Desktop */}
              <div class="hidden md:block p-8">
                <div class="text-4xl text-orange mb-4">
                  <i class="fas fa-concierge-bell"></i>
                </div>
                <h3 class="text-xl font-bold text-navy mb-2">ONE-STOP Service</h3>
                <p class="text-gray leading-relaxed">
                  Expert-provided<br />customized services
                </p>
              </div>
              
              {/* Mobile */}
              <div class="block md:hidden p-4">
                <div class="text-2xl text-orange mb-2">
                  <i class="fas fa-concierge-bell"></i>
                </div>
                <h3 class="text-lg font-bold text-navy mb-1">One-Stop Service</h3>
                <p class="text-sm text-gray leading-relaxed">
                  Expert customized services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section class="py-24 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              Systematic 6-Step Process
            </h2>
            <p class="text-xl text-gray">
              Professional management from job search to visa acquisition
            </p>
          </div>

          {/* The Global Recruiting Steps */}
          <div class="mb-16">
            <div class="text-center mb-8">
              <span class="inline-block bg-teal-blue text-white px-6 py-3 rounded-full font-bold text-lg">
                <i class="fas fa-building mr-2"></i>The Global Recruiting
              </span>
            </div>
            
            <div class="grid grid-cols-3 gap-2 md:gap-8 mb-12">
              <div class="text-center bg-white rounded-xl shadow-md">
                <div class="p-3 md:p-6">
                  <div class="text-2xl md:text-4xl text-teal-blue mb-2 md:mb-4">📄</div>
                  <h4 class="text-sm md:text-lg font-bold text-navy mb-1 md:mb-2">STEP 1</h4>
                  <h5 class="text-xs md:text-base font-semibold mb-1 md:mb-2">Job Application</h5>
                  <p class="text-xs md:text-sm text-gray">Visa-specific application form</p>
                </div>
              </div>
              
              <div class="text-center bg-white rounded-xl shadow-md">
                <div class="p-3 md:p-6">
                  <div class="text-2xl md:text-4xl text-teal-blue mb-2 md:mb-4">📤</div>
                  <h4 class="text-sm md:text-lg font-bold text-navy mb-1 md:mb-2">STEP 2</h4>
                  <h5 class="text-xs md:text-base font-semibold mb-1 md:mb-2">Resume Creation</h5>
                  <p class="text-xs md:text-sm text-gray">Professional Korean-style resume</p>
                </div>
              </div>
              
              <div class="text-center bg-white rounded-xl shadow-md">
                <div class="p-3 md:p-6">
                  <div class="text-2xl md:text-4xl text-teal-blue mb-2 md:mb-4">🤝</div>
                  <h4 class="text-sm md:text-lg font-bold text-navy mb-1 md:mb-2">STEP 3</h4>
                  <h5 class="text-xs md:text-base font-semibold mb-1 md:mb-2">Company Matching</h5>
                  <p class="text-xs md:text-sm text-gray">Tailored company recommendation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Neuljoheun Administrative Office Steps */}
          <div>
            <div class="text-center mb-8">
              <span class="inline-block bg-orange text-white px-6 py-3 rounded-full font-bold text-lg">
                <i class="fas fa-gavel mr-2"></i>Neuljoheun Administrative Office
              </span>
            </div>
            
            <div class="grid grid-cols-3 gap-2 md:gap-8 mb-8">
              <div class="text-center bg-white rounded-xl shadow-md">
                <div class="p-3 md:p-6">
                  <div class="text-2xl md:text-4xl text-orange mb-2 md:mb-4">📝</div>
                  <h4 class="text-sm md:text-lg font-bold text-navy mb-1 md:mb-2">STEP 4</h4>
                  <h5 class="text-xs md:text-base font-semibold mb-1 md:mb-2">Visa Contract</h5>
                  <p class="text-xs md:text-sm text-gray">Visa change service contract</p>
                </div>
              </div>
              
              <div class="text-center bg-white rounded-xl shadow-md">
                <div class="p-3 md:p-6">
                  <div class="text-2xl md:text-4xl text-orange mb-2 md:mb-4">✅</div>
                  <h4 class="text-sm md:text-lg font-bold text-navy mb-1 md:mb-2">STEP 5</h4>
                  <h5 class="text-xs md:text-base font-semibold mb-1 md:mb-2">Recommendation Letter</h5>
                  <p class="text-xs md:text-sm text-gray">Local government recommendation (if needed)</p>
                </div>
              </div>
              
              <div class="text-center bg-white rounded-xl shadow-md">
                <div class="p-3 md:p-6">
                  <div class="text-2xl md:text-4xl text-green mb-2 md:mb-4">🎉</div>
                  <h4 class="text-sm md:text-lg font-bold text-navy mb-1 md:mb-2">STEP 6</h4>
                  <h5 class="text-xs md:text-base font-semibold mb-1 md:mb-2">Visa Application & Issuance</h5>
                  <p class="text-xs md:text-sm text-gray">Immigration office application → Visa acquired</p>
                </div>
              </div>
            </div>

            <div class="text-center">
              <p class="text-lg font-semibold text-navy">
                <i class="fas fa-clock text-teal-blue mr-2"></i>
                Average 2-3 months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              Real User Reviews
            </h2>
            <p class="text-xl text-gray">
              Genuine experiences from those who worked with HIRE ME
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 6).map((review) => (
              <div class="bg-light-gray rounded-2xl card-hover">
                {/* Desktop */}
                <div class="hidden md:block p-8">
                  <div class="flex items-center mb-4">
                    <div class="w-16 h-16 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                         style={
                           review.nationality === '네팔' ? 'background: linear-gradient(135deg, #DC143C 0%, #003893 50%, #DC143C 100%); border: 3px solid #fff;' :
                           review.nationality === '방글라데시' ? 'background: linear-gradient(135deg, #006A4E 0%, #F42A41 100%); border: 3px solid #fff;' :
                           review.nationality === '스리랑카' ? 'background: linear-gradient(135deg, #FF9933 0%, #008000 50%, #000080 100%); border: 3px solid #fff;' :
                           review.nationality === '미얀마' ? 'background: linear-gradient(135deg, #FECB00 0%, #34B233 50%, #EA2839 100%); border: 3px solid #fff;' :
                           review.nationality === '파키스탄' ? 'background: linear-gradient(135deg, #01411C 0%, #ffffff 100%); border: 3px solid #01411C; color: #01411C;' :
                           review.nationality === '베트남' ? 'background: linear-gradient(135deg, #DA020E 0%, #FFFF00 100%); border: 3px solid #fff;' : 
                           'background: #6B7280; border: 3px solid #fff;'
                         }>
                      <span class="drop-shadow-md">
                        {review.nationality === '네팔' ? '🇳🇵' :
                         review.nationality === '방글라데시' ? '🇧🇩' :
                         review.nationality === '스리랑카' ? '🇱🇰' :
                         review.nationality === '미얀마' ? '🇲🇲' :
                         review.nationality === '파키스탄' ? '🇵🇰' :
                         review.nationality === '베트남' ? '🇻🇳' : '🌍'}
                      </span>
                    </div>
                    <div>
                      <h4 class="font-bold text-navy">{review.name}</h4>
                      <span class="text-sm text-gray">
                        {review.nationality === '네팔' ? 'Nepal' :
                         review.nationality === '방글라데시' ? 'Bangladesh' :
                         review.nationality === '스리랑카' ? 'Sri Lanka' :
                         review.nationality === '미얀마' ? 'Myanmar' :
                         review.nationality === '파키스탄' ? 'Pakistan' :
                         review.nationality === '베트남' ? 'Vietnam' : review.nationality} · {review.visa}
                      </span>
                    </div>
                  </div>
                  
                  <div class="stars mb-4 text-orange">
                    {Array(review.rating).fill('★').join('')}
                  </div>
                  
                  <p class="text-gray leading-relaxed mb-4 text-sm">
                    "{review.review}"
                  </p>
                  
                  <div class="flex justify-between items-center text-sm text-gray">
                    <span>
                      {review.company === '제조업' ? 'Manufacturing' :
                       review.company === '대기업' ? 'Large Company' : review.company}
                    </span>
                    <span>{review.date}</span>
                  </div>
                </div>
                
                {/* Mobile */}
                <div class="block md:hidden p-5">
                  <div class="flex items-center mb-3">
                    <div class="w-10 h-10 rounded-full mr-3 flex items-center justify-center text-white font-bold text-sm shadow-lg"
                         style={
                           review.nationality === '네팔' ? 'background: linear-gradient(135deg, #DC143C 0%, #003893 50%, #DC143C 100%); border: 2px solid #fff;' :
                           review.nationality === '방글라데시' ? 'background: linear-gradient(135deg, #006A4E 0%, #F42A41 100%); border: 2px solid #fff;' :
                           review.nationality === '스리랑카' ? 'background: linear-gradient(135deg, #FF9933 0%, #008000 50%, #000080 100%); border: 2px solid #fff;' :
                           review.nationality === '미얀마' ? 'background: linear-gradient(135deg, #FECB00 0%, #34B233 50%, #EA2839 100%); border: 2px solid #fff;' :
                           review.nationality === '파키스탄' ? 'background: linear-gradient(135deg, #01411C 0%, #ffffff 100%); border: 2px solid #01411C; color: #01411C;' :
                           review.nationality === '베트남' ? 'background: linear-gradient(135deg, #DA020E 0%, #FFFF00 100%); border: 2px solid #fff;' : 
                           'background: #6B7280; border: 2px solid #fff;'
                         }>
                      <span class="drop-shadow-md text-xs">
                        {review.nationality === '네팔' ? '🇳🇵' :
                         review.nationality === '방글라데시' ? '🇧🇩' :
                         review.nationality === '스리랑카' ? '🇱🇰' :
                         review.nationality === '미얀마' ? '🇲🇲' :
                         review.nationality === '파키스탄' ? '🇵🇰' :
                         review.nationality === '베트남' ? '🇻🇳' : '🌍'}
                      </span>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-navy">{review.name}</h4>
                      <span class="text-xs text-gray">
                        {review.nationality === '네팔' ? 'Nepal' :
                         review.nationality === '방글라데시' ? 'Bangladesh' :
                         review.nationality === '스리랑카' ? 'Sri Lanka' :
                         review.nationality === '미얀마' ? 'Myanmar' :
                         review.nationality === '파키스탄' ? 'Pakistan' :
                         review.nationality === '베트남' ? 'Vietnam' : review.nationality} · {review.visa}
                      </span>
                    </div>
                  </div>
                  
                  <div class="stars mb-2 text-orange text-sm">
                    {Array(review.rating).fill('★').join('')}
                  </div>
                  
                  <p class="text-gray leading-relaxed mb-3 text-xs">
                    "{review.review}"
                  </p>
                  
                  <div class="flex justify-between items-center text-xs text-gray">
                    <span>
                      {review.company === '제조업' ? 'Manufacturing' :
                       review.company === '대기업' ? 'Large Company' : review.company}
                    </span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Selection Section */}
      <section id="visa-selection" class="py-24 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              Which visa do you need?
            </h2>
            <p class="text-xl text-gray">
              Select your visa type to receive customized services
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* E-7-4R Card */}
            <div class="bg-white rounded-3xl p-8 shadow-lg card-hover border-2 border-teal-blue">
              <div class="text-center mb-6">
                <div class="text-5xl mb-4">🔧</div>
                <h3 class="text-2xl font-bold text-navy mb-2">E-7-4R</h3>
                <h4 class="text-lg font-semibold text-teal-blue mb-4">Regional Skilled Worker</h4>
              </div>
              
              <ul class="space-y-3 mb-8 text-gray">
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-teal-blue mr-3"></i>
                  2+ years in Korea
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-teal-blue mr-3"></i>
                  Local government recommendation required
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-teal-blue mr-3"></i>
                  Korean Level 2 or higher
                </li>
              </ul>
              
              <a 
                href="/en/apply/e-7-4r" 
                class="btn-orange-gradient block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all hover:no-underline"
              >
                Apply for E-7-4R →
              </a>
            </div>

            {/* F-2-R Card */}
            <div class="bg-white rounded-3xl p-8 shadow-lg card-hover border-2 border-green">
              <div class="text-center mb-6">
                <div class="text-5xl mb-4">🎓</div>
                <h3 class="text-2xl font-bold text-navy mb-2">F-2-R</h3>
                <h4 class="text-lg font-semibold text-green mb-4">Regional Outstanding Talent</h4>
              </div>
              
              <ul class="space-y-3 mb-8 text-gray">
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-green mr-3"></i>
                  Korean college degree or higher
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-green mr-3"></i>
                  Or income requirements met
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-green mr-3"></i>
                  TOPIK/KIIP Level 4 or higher required
                </li>
              </ul>
              
              <a 
                href="/en/apply/f-2-r" 
                class="block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all bg-green text-white hover:bg-opacity-90 hover:no-underline"
              >
                Apply for F-2-R →
              </a>
            </div>

            {/* E-7-1 Card */}
            <div class="bg-white rounded-3xl p-8 shadow-lg card-hover border-2 border-orange">
              <div class="text-center mb-6">
                <div class="text-5xl mb-4">💼</div>
                <h3 class="text-2xl font-bold text-navy mb-2">E-7-1</h3>
                <h4 class="text-lg font-semibold text-orange mb-4">Specific Activities</h4>
              </div>
              
              <ul class="space-y-3 mb-8 text-gray">
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-orange mr-3"></i>
                  Bachelor's degree or higher
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-orange mr-3"></i>
                  Related field experience
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-orange mr-3"></i>
                  IT, Design, Marketing, etc.
                </li>
              </ul>
              
              <a 
                href="/en/apply/e-7-1" 
                class="block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all bg-orange text-white hover:bg-opacity-90 hover:no-underline"
              >
                Apply for E-7-1 →
              </a>
            </div>

            {/* E-7-4 Transfer Card */}
            <div class="bg-white rounded-3xl p-8 shadow-lg card-hover border-2 border-gray">
              <div class="text-center mb-6">
                <div class="text-5xl mb-4">🔄</div>
                <h3 class="text-2xl font-bold text-navy mb-2">E-7-4</h3>
                <h4 class="text-lg font-semibold text-charcoal mb-4">Workplace Transfer</h4>
              </div>
              
              <ul class="space-y-3 mb-8 text-gray">
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-charcoal mr-3"></i>
                  Current E-7-4 visa holder
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-charcoal mr-3"></i>
                  Seeking workplace change
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-charcoal mr-3"></i>
                  Professional consultation required
                </li>
              </ul>
              
              <a 
                href="/en/apply/e-7-4-transfer" 
                class="block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all bg-charcoal text-white hover:bg-opacity-90 hover:no-underline"
              >
                Apply for Transfer →
              </a>
            </div>
          </div>

          <div class="text-center">
            <div class="bg-white rounded-2xl p-8 shadow-lg inline-block">
              <h3 class="text-xl font-bold text-navy mb-4">
                🚀 Apply Now
              </h3>
              <p class="text-gray mb-6">
                Find the most suitable visa through expert consultation
              </p>
              <a 
                href="#visa-selection" 
                class="btn-orange-gradient inline-block px-8 py-3 rounded-xl font-bold transition-all hover:no-underline"
              >
                Select Visa ↑
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section class="bg-navy-teal-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-white mb-4" style="font-family: 'Cardo', serif;">
            Have any questions?
          </h2>
          <p class="text-xl text-white mb-12 opacity-90">
            Visa specialist will respond quickly
          </p>
          
          <button 
            onclick="openKakaoTalk()" 
            class="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center"
          >
            <i class="fab fa-telegram mr-3 text-xl"></i>
            KakaoTalk Consultation
          </button>
        </div>
      </section>

      <FooterEN />
    </div>
  )
}
