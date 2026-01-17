import { HeaderEN } from '../components/HeaderEN'
import { FooterEN } from '../components/FooterEN'
import successCases from '../../data/success-cases.json'

export const HomePageEN = () => {
  return (
    <div>
      <HeaderEN />
      
      {/* Hero Section */}
      <section class="hero-bg flex items-center justify-center relative pt-16">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
          <h1 class="text-2xl text-teal-blue font-medium mb-4">
            💼 Foreign Employment Matching Platform
          </h1>
          
          <div class="mb-6">
            <h2 class="text-4xl md:text-6xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              Your Choice for<br />A Better Future
            </h2>
            <p class="text-3xl md:text-4xl font-semibold text-navy mb-8" style="font-family: 'Cardo', serif;">
              HIRE ME is with you
            </p>
          </div>
          
          <p class="text-xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            One-stop support from employment to visa services
          </p>
          
          {/* Scroll indicator */}
          <a href="#services" class="scroll-indicator block">
            <i class="fas fa-chevron-down text-3xl text-teal-blue"></i>
          </a>
        </div>
      </section>
      
      {/* Service CTA Cards */}
      <section id="services" class="py-32 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Job Seeker Card */}
            <div class="card-hover bg-white border-2 border-teal-blue rounded-3xl p-12 shadow-lg">
              <div class="text-center mb-8">
                <div class="text-6xl mb-6">👤</div>
                <h3 class="text-3xl font-bold text-navy mb-6">
                  Job Application<br />Service
                </h3>
              </div>
              
              <ul class="space-y-4 mb-12 text-lg text-gray leading-loose">
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-teal-blue mr-3"></i>
                  Free Job Application
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-teal-blue mr-3"></i>
                  Visa-specific Services
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-teal-blue mr-3"></i>
                  Interview Support
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-teal-blue mr-3"></i>
                  Visa Change Agency
                </li>
              </ul>
              
              <a href="/en/apply" class="btn-orange-gradient block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all hover:no-underline">
                Apply Now →
              </a>
            </div>
            
            {/* Company Card */}
            <div class="card-hover bg-white border-2 border-green rounded-3xl p-12 shadow-lg">
              <div class="text-center mb-8">
                <div class="text-6xl mb-6">🏢</div>
                <h3 class="text-3xl font-bold text-navy mb-6">
                  Foreign Talent<br />Pool
                </h3>
              </div>
              
              <ul class="space-y-4 mb-12 text-lg text-gray leading-loose">
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-green mr-3"></i>
                  Verified Foreign Talent
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-green mr-3"></i>
                  Free Talent Recommendation
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-green mr-3"></i>
                  Professional Visa Consulting
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-green mr-3"></i>
                  Post-hiring Visa Support
                </li>
              </ul>
              
              <a href="/company" class="block text-center py-4 px-8 rounded-xl text-lg font-bold transition-all bg-green text-white hover:bg-opacity-90 hover:no-underline">
                Find Talent →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Cases */}
      <section class="bg-light-gray py-32 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              Success Stories with HIRE ME
            </h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successCases.slice(0, 6).map((case_) => (
              <div class="bg-white rounded-2xl shadow-md card-hover">
                {/* Desktop Version */}
                <div class="hidden md:block p-8">
                  {/* Profile */}
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
                      {case_.nationality === '네팔' ? 'Nepal' :
                       case_.nationality === '방글라데시' ? 'Bangladesh' :
                       case_.nationality === '스리랑카' ? 'Sri Lanka' :
                       case_.nationality === '미얀마' ? 'Myanmar' :
                       case_.nationality === '파키스탄' ? 'Pakistan' :
                       case_.nationality === '베트남' ? 'Vietnam' :
                       case_.nationality === '우즈베키스탄' ? 'Uzbekistan' :
                       case_.nationality === '캄보디아' ? 'Cambodia' : case_.nationality} / {case_.name}
                    </h4>
                    <span class="inline-block bg-teal-blue text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
                      {case_.visa}
                    </span>
                  </div>
                  
                  {/* Review */}
                  <p class="text-gray text-center mb-4 leading-relaxed">
                    "{case_.review}"
                  </p>
                  
                  {/* Company */}
                  <div class="text-center mb-3">
                    <span class="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {case_.company === '제조업' ? 'Manufacturing' :
                       case_.company === '대기업' ? 'Large Company' : case_.company}
                    </span>
                  </div>
                  
                  {/* Stamp */}
                  <div class="text-center mb-4">
                    <span class="stamp">
                      {case_.location} Matched ✓
                    </span>
                  </div>
                  
                  {/* Date */}
                  <div class="text-center mb-3">
                    <span class="text-xs text-gray-500">
                      {new Date(case_.date).toLocaleDateString('en-US')}
                    </span>
                  </div>
                  
                  {/* Stars */}
                  <div class="text-center stars">
                    {Array(case_.rating).fill('★').join('')}
                  </div>
                </div>
                
                {/* Mobile Version */}
                <div class="block md:hidden p-4">
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
                      {case_.nationality === '네팔' ? 'Nepal' :
                       case_.nationality === '방글라데시' ? 'Bangladesh' :
                       case_.nationality === '스리랑카' ? 'Sri Lanka' :
                       case_.nationality === '미얀마' ? 'Myanmar' :
                       case_.nationality === '파키스탄' ? 'Pakistan' :
                       case_.nationality === '베트남' ? 'Vietnam' :
                       case_.nationality === '우즈베키스탄' ? 'Uzbekistan' :
                       case_.nationality === '캄보디아' ? 'Cambodia' : case_.nationality} / {case_.name}
                    </h4>
                    <span class="inline-block bg-teal-blue text-white px-2 py-1 rounded-full text-xs font-medium mt-1">
                      {case_.visa}
                    </span>
                  </div>
                  
                  <p class="text-gray text-center text-sm mb-2 leading-relaxed">
                    "{case_.review}"
                  </p>
                  
                  <div class="text-center">
                    <span class="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                      {case_.company === '제조업' ? 'Manufacturing' :
                       case_.company === '대기업' ? 'Large Company' : case_.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div class="text-center mt-16">
            <button class="bg-white border-2 border-navy text-navy px-8 py-4 rounded-xl font-bold hover:bg-navy hover:text-white transition-colors">
              View More Success Stories
            </button>
          </div>
        </div>
      </section>
      
      {/* Trust Indicators */}
      <section class="bg-light-gray py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white border border-teal-blue rounded-full px-6 py-4 text-center">
              <i class="fas fa-certificate text-green mr-2"></i>
              <span class="text-sm font-medium text-gray-700">
                Ministry of Justice Registered
              </span>
            </div>
            <div class="bg-white border border-teal-blue rounded-full px-6 py-4 text-center">
              <i class="fas fa-certificate text-green mr-2"></i>
              <span class="text-sm font-medium text-gray-700">
                Ministry of Employment Registered
              </span>
            </div>
            <div class="bg-white border border-teal-blue rounded-full px-6 py-4 text-center">
              <i class="fas fa-trophy text-green mr-2"></i>
              <span class="text-sm font-medium text-gray-700">
                Industry-leading Visa Success Rate
              </span>
            </div>
            <div class="bg-white border border-teal-blue rounded-full px-6 py-4 text-center">
              <i class="fas fa-users text-green mr-2"></i>
              <span class="text-sm font-medium text-gray-700">
                Top-tier Foreign Talent Pool
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <FooterEN />
    </div>
  )
}
