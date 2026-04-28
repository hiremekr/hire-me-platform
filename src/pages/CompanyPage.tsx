import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const CompanyPage = () => {
  return (
    <div>
      <Header />

      <style>{`
        /* 인재풀 페이지와 동일한 카드 디자인 */
        .talent-card-c {
          background:#fff;
          border-radius:14px;
          overflow:hidden;
          border:1px solid #e5e7eb;
          box-shadow:0 1px 3px rgba(0,0,0,0.04);
          transition:all 0.22s cubic-bezier(0.4,0,0.2,1);
          display:flex;
          flex-direction:column;
          width:100%;
        }
        .talent-card-c:hover {
          transform:translateY(-4px);
          box-shadow:0 14px 28px rgba(10,102,194,0.13);
          border-color:#0a66c2;
        }
        .tcc-header {
          height:72px;
          background:linear-gradient(90deg,#0a66c2,#0952a0,#0a66c2);
          position:relative;
          flex-shrink:0;
        }
        .tcc-badge {
          position:absolute;
          top:14px;
          right:14px;
          background:rgba(255,255,255,0.95);
          padding:5px 12px;
          border-radius:100px;
          font-size:11px;
          font-weight:800;
          color:#0a66c2;
          box-shadow:0 2px 6px rgba(0,0,0,0.12);
          letter-spacing:-0.2px;
          white-space:nowrap;
          max-width:calc(100% - 28px);
          overflow:hidden;
          text-overflow:ellipsis;
        }
        .tcc-body { padding:0 18px 18px; margin-top:-36px; flex:1; display:flex; flex-direction:column; }
        .tcc-avatar-wrap { position:relative; width:72px; height:72px; }
        .tcc-avatar-bg { width:100%; height:100%; border-radius:50%; background:#fff; padding:3px; box-shadow:0 4px 12px rgba(0,0,0,0.1); }
        .tcc-avatar { width:100%; height:100%; border-radius:50%; background:linear-gradient(135deg,#fef3c7,#fde68a); display:flex; align-items:center; justify-content:center; font-size:34px; }
        .tcc-flag { position:absolute; bottom:0; right:-2px; width:26px; height:26px; border:2.5px solid #fff; border-radius:50%; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,0.2); }
        .tcc-name { font-size:17px; font-weight:800; color:#0f172a; margin-top:12px; }
        .tcc-sub { font-size:13px; color:#475569; margin-top:3px; }
        .tcc-meta { font-size:12px; color:#64748b; margin-top:6px; }
        .tcc-divider { height:1px; background:#e5e7eb; margin:12px 0; }
        .tcc-stats { display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:10px; }
        .tcc-stat { background:#f1f5f9; padding:8px 10px; border-radius:8px; text-align:center; }
        .tcc-stat-label { font-size:10px; color:#64748b; font-weight:700; }
        .tcc-stat-val { font-size:13px; font-weight:800; color:#0f172a; margin-top:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .tcc-visa { background:linear-gradient(135deg,#fef3c7,#fde68a); padding:10px 12px; border-radius:8px; display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; border:1px solid #fcd34d; gap:6px; }
        .tcc-visa-label { font-size:11px; color:#92400e; font-weight:700; white-space:nowrap; }
        .tcc-visa-type { font-size:14px; font-weight:900; color:#78350f; white-space:nowrap; }
        .tcc-btn { display:block; width:100%; padding:10px; border-radius:9999px; border:2px solid #0a66c2; color:#0a66c2; background:#fff; font-weight:700; font-size:13px; cursor:pointer; transition:all 0.2s; margin-top:auto; font-family:inherit; text-align:center; text-decoration:none; }
        .tcc-btn:hover { background:#0a66c2; color:#fff; text-decoration:none; }

        /* 모바일 (480px 이하) */
        @media (max-width: 480px) {
          .tcc-body { padding:0 12px 12px; }
          .tcc-avatar-wrap { width:60px; height:60px; }
          .tcc-avatar { font-size:28px; }
          .tcc-flag { width:22px; height:22px; }
          .tcc-name { font-size:15px; }
          .tcc-sub { font-size:12px; }
          .tcc-meta { font-size:11px; }
          .tcc-divider { margin:10px 0; }
          .tcc-stats { grid-template-columns:1fr; gap:6px; }
          .tcc-stat { padding:6px 10px; display:flex; justify-content:space-between; align-items:center; text-align:left; }
          .tcc-stat-label { font-size:11px; }
          .tcc-stat-val { font-size:12px; margin-top:0; }
          .tcc-visa { flex-direction:column; align-items:center; text-align:center; gap:2px; padding:8px 10px; }
          .tcc-visa-label { font-size:10px; }
          .tcc-visa-type { font-size:14px; }
          .tcc-btn { padding:9px; font-size:12px; }
          .tcc-badge { font-size:10px; padding:4px 10px; top:10px; right:10px; }
        }
      `}</style>
      
      {/* Hero Section */}
      <section class="hero-bg flex items-center justify-center relative pt-16">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
          <h1 class="text-4xl md:text-6xl font-bold text-navy mb-6" style="font-family: 'Cardo', serif;">
            검증된 외국인 인재를<br />만나보세요
          </h1>
          <p class="hidden md:block text-xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            엄선된 인재 풀에서 귀사에 맞는 인재를 찾으세요
          </p>
          <p class="block md:hidden text-xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            엄선된 인재풀에서
귀사에 맞는 인재를 찾으세요
          </p>
          <a 
            href="#talent-pool" 
            class="btn-orange-gradient inline-block px-8 py-4 rounded-xl text-lg font-bold transition-all hover:no-underline"
          >
            인재 매칭 시작하기 ↓
          </a>
        </div>
      </section>

      {/* 외국인재 풀 현황 */}
      <section id="talent-pool" class="py-24 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              현재 구직중인 인재들
            </h2>
            <p class="text-xl text-gray mb-4">
              실시간으로 업데이트되는 우수한 외국인재 풀
            </p>
            <a href="/company/talents" class="text-teal-blue hover:text-green font-semibold transition-colors">
              전체 인재 풀 보기 →
            </a>
          </div>

          {/* 데스크톱 - 롤링 배너 */}
          <div class="hidden md:block relative">
            <div class="candidate-carousel">
              <div class="candidate-track" id="candidate-track">
                <div style="text-align:center;padding:40px;color:#94a3b8;width:100%">
                  인재 정보를 불러오는 중입니다...
                </div>
              </div>
            </div>
            <button class="carousel-nav prev" onclick="moveSlide(-1)" aria-label="이전 인재">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="carousel-nav next" onclick="moveSlide(1)" aria-label="다음 인재">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* 모바일 - 그리드 카드 */}
          <div class="md:hidden">
            <h3 class="text-2xl font-bold text-navy mb-6 text-center">외국인인재풀</h3>
            <div class="grid grid-cols-2 gap-4" id="mobile-candidate-grid">
              <div style="grid-column:1/-1;text-align:center;padding:40px;color:#94a3b8">
                인재 정보를 불러오는 중입니다...
              </div>
            </div>
            <div class="text-center mt-6">
              <a href="/company/talents" class="bg-white border-2 border-teal-blue text-teal-blue px-6 py-3 rounded-xl font-bold hover:no-underline">
                전체 인재 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 빠른 매칭 신청 */}
      <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              빠른 매칭 신청
            </h2>
            <p class="text-xl text-gray">
              기본 정보만 입력하시면 맞춤 인재를 추천해드립니다
            </p>
          </div>

          <div class="bg-light-gray rounded-2xl p-8 max-w-2xl mx-auto">
            <form 
              id="quick-application-form" 
              action="https://formspree.io/f/xjkaedgv"
              method="POST"
              enctype="multipart/form-data"
            >
              <input type="hidden" name="form-type" value="quick-matching-request" />
              <input type="hidden" name="_subject" value="빠른 매칭 신청" />
              <script dangerouslySetInnerHTML={{
                __html: `
                  document.addEventListener('DOMContentLoaded', function() {
                    const nextInput = document.querySelector('#quick-application-form input[name="_next"]');
                    if (nextInput) {
                      nextInput.value = window.location.origin + '/company/success';
                    }
                  });
                `
              }}></script>
              <input type="hidden" name="_next" value="/company/success" />
              
              <div class="space-y-6">
                <div>
                  <label for="company-name" class="block text-sm font-semibold text-navy mb-2">회사명 *</label>
                  <input type="text" id="company-name" name="companyName" class="form-input" placeholder="예: OO제조(주)" required />
                </div>
                <div>
                  <label for="manager-name" class="block text-sm font-semibold text-navy mb-2">담당자명 *</label>
                  <input type="text" id="manager-name" name="managerName" class="form-input" placeholder="예: 홍길동" required />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-semibold text-navy mb-2">전화번호 *</label>
                  <input type="tel" id="phone" name="phone" class="form-input" placeholder="예: 010-1234-5678" required />
                </div>
                <div>
                  <label for="email" class="block text-sm font-semibold text-navy mb-2">이메일 *</label>
                  <input type="email" id="email" name="email" class="form-input" placeholder="예: hr@company.com" required />
                </div>
                <div>
                  <label for="job-posting-link" class="block text-sm font-semibold text-navy mb-2">채용공고 링크</label>
                  <input type="url" id="job-posting-link" name="jobPostingLink" class="form-input" placeholder="https://www.company.com/careers 또는 사람인/잡코리아 링크" />
                </div>
                <button type="submit" id="quick-submit-btn" class="btn-orange-gradient w-full py-4 px-8 rounded-xl text-lg font-bold transition-all">
                  매칭 신청하기 →
                </button>
              </div>
            </form>
            <div class="mt-6 text-center text-sm text-gray">
              <p><i class="fas fa-info-circle mr-2"></i>※ 상세한 채용 정보는 <a href="/company/apply" class="text-teal-blue hover:underline">상세 신청하기</a>를 통해 제공해주세요</p>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 특장점 */}
      <section class="py-24 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="hidden md:block text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              HIRE ME 기업 서비스 특장점
            </h2>
            <h2 class="block md:hidden text-3xl font-bold text-navy mb-4 whitespace-pre-line" style="font-family: 'Cardo', serif;">
              HIRE ME
기업 서비스 특장점
            </h2>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center p-6 bg-white rounded-2xl shadow-md">
              <div class="text-4xl text-teal-blue mb-4"><i class="fas fa-shield-check"></i></div>
              <h4 class="text-lg font-bold text-navy mb-3">검증된 인재</h4>
              <p class="text-gray text-sm leading-relaxed">사전 검증된 우수 인재풀 제공</p>
            </div>
            <div class="text-center p-6 bg-white rounded-2xl shadow-md">
              <div class="text-4xl text-green mb-4"><i class="fas fa-handshake"></i></div>
              <h4 class="text-lg font-bold text-navy mb-3">완전 무료</h4>
              <p class="text-gray text-sm leading-relaxed">인재 매칭 및 추천 서비스 완전 무료 제공</p>
            </div>
            <div class="text-center p-6 bg-white rounded-2xl shadow-md">
              <div class="text-4xl text-orange mb-4"><i class="fas fa-gavel"></i></div>
              <h4 class="text-lg font-bold text-navy mb-3">비자 지원</h4>
              <p class="text-gray text-sm leading-relaxed">전문 행정사의 비자 취득 및 갱신 지원</p>
            </div>
            <div class="text-center p-6 bg-white rounded-2xl shadow-md">
              <div class="text-4xl text-navy mb-4"><i class="fas fa-headset"></i></div>
              <h4 class="text-lg font-bold text-navy mb-3">채용 후 지원</h4>
              <p class="text-gray text-sm leading-relaxed">입사 후 적응과정 및 정착 지원 서비스 제공</p>
            </div>
          </div>
        </div>
      </section>

      {/* 프로세스 안내 */}
      <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-navy mb-4" style="font-family: 'Cardo', serif;">
              기업 서비스 프로세스
            </h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="bg-teal-blue text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h4 class="text-lg font-bold text-navy mb-3">채용 정보 등록</h4>
              <p class="text-gray text-sm leading-relaxed">채용조건 및 근무환경 정보 등록</p>
            </div>
            <div class="text-center">
              <div class="bg-green text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h4 class="text-lg font-bold text-navy mb-3">인재 추천</h4>
              <p class="text-gray text-sm leading-relaxed">최적 조건 매칭 인재 3-5명 추천</p>
            </div>
            <div class="text-center">
              <div class="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h4 class="text-lg font-bold text-navy mb-3">면접 지원</h4>
              <p class="text-gray text-sm leading-relaxed">통역지원을 통한 원활한 면접 진행</p>
            </div>
            <div class="text-center">
              <div class="bg-navy text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h4 class="text-lg font-bold text-navy mb-3">사후 관리</h4>
              <p class="text-gray text-sm leading-relaxed">비자취득 및 업무적응 사후관리</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section class="bg-navy-teal-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-white mb-4" style="font-family: 'Cardo', serif;">
            지금 바로 시작해보세요
          </h2>
          <p class="text-xl text-white mb-12 opacity-90">
            검증된 외국인 인재와의 만남이 여기서 시작됩니다
          </p>
          <div class="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <a href="/company/apply" class="btn-orange-gradient inline-block px-8 py-4 rounded-xl text-lg font-bold transition-all hover:no-underline">
              상세 신청하기
            </a>
            <button onclick="openKakaoTalk()" class="bg-yellow-400 text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center">
              <i class="fab fa-telegram mr-3 text-xl"></i>
              카카오톡 상담
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <script src="/static/company-candidates.js" defer></script>
    </div>
  )
}
