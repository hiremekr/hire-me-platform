import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const TalentPoolPage = () => {
  return (
    <div>
      <Header />

      <style>{`
        /* ─────────────────────────────────────────────
           외국인 고용 계산기 진입 배너 (옵션 B)
           ───────────────────────────────────────────── */
        .calc-banner {
          background: linear-gradient(135deg, #0F1F4D 0%, #081538 100%);
          border-radius: 18px;
          padding: 36px 44px;
          color: #fff;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 32px;
          box-shadow: 0 12px 32px rgba(15, 31, 77, 0.18);
        }
        .calc-banner::before {
          content: "";
          position: absolute;
          top: -80px;
          right: -80px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(247, 111, 76, 0.22) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .calc-banner-left { position: relative; z-index: 1; }
        .calc-eyebrow {
          display: inline-block;
          background: rgba(247, 111, 76, 0.18);
          color: #FFB89E;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          padding: 5px 12px;
          border-radius: 6px;
          margin-bottom: 14px;
          text-transform: uppercase;
        }
        .calc-banner h2 {
          font-size: 28px;
          font-weight: 800;
          line-height: 1.32;
          letter-spacing: -0.6px;
          color: #fff;
          margin-bottom: 12px;
        }
        .calc-banner h2 .accent {
          color: #F76F4C;
        }
        .calc-banner-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #CBD5E1;
          max-width: 540px;
          margin-bottom: 18px;
        }
        .calc-visa-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 22px;
        }
        .calc-visa-tag {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(247, 111, 76, 0.35);
          color: #FFE9E1;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 100px;
          white-space: nowrap;
        }
        .calc-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #F76F4C;
          color: #fff;
          padding: 13px 28px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 12px rgba(247, 111, 76, 0.35);
        }
        .calc-cta:hover {
          background: #E55A37;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(247, 111, 76, 0.45);
        }
        .calc-banner-right {
          position: relative;
          z-index: 1;
          text-align: center;
          padding-left: 32px;
          border-left: 1px solid rgba(255,255,255,0.12);
        }
        .calc-big-num {
          font-size: 76px;
          font-weight: 900;
          color: #F76F4C;
          line-height: 1;
          letter-spacing: -2px;
        }
        .calc-big-num span {
          font-size: 32px;
          margin-left: 2px;
        }
        .calc-big-sub {
          font-size: 13px;
          color: #CBD5E1;
          font-weight: 600;
          margin-top: 8px;
        }
        .calc-big-note {
          font-size: 11px;
          color: #94A3B8;
          margin-top: 4px;
        }

        /* 모바일 (640px 이하) */
        @media (max-width: 640px) {
          .calc-banner {
            grid-template-columns: 1fr;
            padding: 28px 22px;
            gap: 22px;
            border-radius: 14px;
          }
          .calc-banner h2 { font-size: 22px; }
          .calc-banner-desc { font-size: 13px; }
          .calc-banner-right {
            padding-left: 0;
            border-left: none;
            border-top: 1px solid rgba(255,255,255,0.12);
            padding-top: 18px;
            display: flex;
            justify-content: center;
            align-items: baseline;
            gap: 12px;
          }
          .calc-big-num { font-size: 56px; }
          .calc-big-sub { margin-top: 0; }
          .calc-big-note { display: none; }
          .calc-cta { width: 100%; justify-content: center; }
        }

        /* ─────────────────────────────────────────────
           기존 인재풀 카드 스타일
           ───────────────────────────────────────────── */
        .talent-card {
          background:#fff;
          border-radius:14px;
          overflow:hidden;
          border:1px solid #e5e7eb;
          box-shadow:0 1px 3px rgba(0,0,0,0.04);
          transition:all 0.22s cubic-bezier(0.4,0,0.2,1);
          display:flex;
          flex-direction:column;
        }
        .talent-card:hover {
          transform:translateY(-4px);
          box-shadow:0 14px 28px rgba(10,102,194,0.13);
          border-color:#0a66c2;
        }
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .card-anim { animation:fadeUp 0.4s ease both; }
        .spinner { width:40px;height:40px;border:3px solid #e2e8f0;border-top-color:#0a66c2;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto 16px; }
        @keyframes spin { to{transform:rotate(360deg)} }

        .tc-header {
          height:72px;
          background:linear-gradient(90deg,#0a66c2,#0952a0,#0a66c2);
          position:relative;
          flex-shrink:0;
        }
        .tc-badge {
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
        .tc-body {
          padding:0 18px 18px;
          margin-top:-36px;
          flex:1;
          display:flex;
          flex-direction:column;
        }
        .tc-avatar-wrap { position:relative; width:72px; height:72px; }
        .tc-avatar-bg {
          width:100%; height:100%;
          border-radius:50%;
          background:#fff;
          padding:3px;
          box-shadow:0 4px 12px rgba(0,0,0,0.1);
        }
        .tc-avatar {
          width:100%; height:100%;
          border-radius:50%;
          background:linear-gradient(135deg,#fef3c7,#fde68a);
          display:flex; align-items:center; justify-content:center;
          font-size:34px;
        }
        .tc-flag {
          position:absolute;
          bottom:0; right:-2px;
          width:26px; height:26px;
          border:2.5px solid #fff;
          border-radius:50%;
          overflow:hidden;
          box-shadow:0 2px 6px rgba(0,0,0,0.2);
        }
        .tc-name { font-size:17px; font-weight:800; color:#0f172a; margin-top:12px; }
        .tc-sub { font-size:13px; color:#475569; margin-top:3px; }
        .tc-meta { font-size:12px; color:#64748b; margin-top:6px; }
        .tc-divider { height:1px; background:#e5e7eb; margin:12px 0; }

        .tc-stats {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:8px;
          margin-bottom:10px;
        }
        .tc-stat {
          background:#f1f5f9;
          padding:8px 10px;
          border-radius:8px;
          text-align:center;
        }
        .tc-stat-label {
          font-size:10px;
          color:#64748b;
          font-weight:700;
        }
        .tc-stat-val {
          font-size:13px;
          font-weight:800;
          color:#0f172a;
          margin-top:2px;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        }

        .tc-visa {
          background:linear-gradient(135deg,#fef3c7,#fde68a);
          padding:10px 12px;
          border-radius:8px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-bottom:12px;
          border:1px solid #fcd34d;
          gap:6px;
        }
        .tc-visa-label {
          font-size:11px;
          color:#92400e;
          font-weight:700;
          white-space:nowrap;
        }
        .tc-visa-type {
          font-size:14px;
          font-weight:900;
          color:#78350f;
          white-space:nowrap;
        }

        .tc-btn {
          width:100%;
          padding:10px;
          border-radius:9999px;
          border:2px solid #0a66c2;
          color:#0a66c2;
          background:#fff;
          font-weight:700;
          font-size:13px;
          cursor:pointer;
          transition:all 0.2s;
          margin-top:auto;
          font-family:inherit;
        }
        .tc-btn:hover { background:#0a66c2; color:#fff; }

        /* ─── 모바일 최적화 (480px 이하) ─── */
        @media (max-width: 480px) {
          .tc-body { padding:0 12px 12px; }
          .tc-avatar-wrap { width:60px; height:60px; }
          .tc-avatar { font-size:28px; }
          .tc-flag { width:22px; height:22px; }
          .tc-name { font-size:15px; }
          .tc-sub { font-size:12px; }
          .tc-meta { font-size:11px; }
          .tc-divider { margin:10px 0; }

          /* stat을 위아래로 (1열) */
          .tc-stats { grid-template-columns:1fr; gap:6px; }
          .tc-stat {
            padding:6px 10px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            text-align:left;
          }
          .tc-stat-label { font-size:11px; }
          .tc-stat-val { font-size:12px; margin-top:0; }

          /* 비자 박스 column으로 */
          .tc-visa {
            flex-direction:column;
            align-items:center;
            text-align:center;
            gap:2px;
            padding:8px 10px;
          }
          .tc-visa-label { font-size:10px; }
          .tc-visa-type { font-size:14px; }

          .tc-btn { padding:9px; font-size:12px; }
          .tc-badge { font-size:10px; padding:4px 10px; top:10px; right:10px; }
        }
      `}</style>

      <section class="text-center py-12 px-5" style="background:linear-gradient(180deg,#fff 0%,#f3f5f8 100%)">
        <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold mb-4">
          🎯 외국인 인재풀
        </div>
        <h1 class="text-4xl font-black text-gray-900 mb-3" style="letter-spacing:-0.8px">
          우수한 외국인 인재를 만나보세요
        </h1>
        <p class="text-gray-500 text-base mb-5">한국에서 바로 근무 가능한 검증된 외국인 인재를 찾아보세요</p>
        <div class="inline-flex items-center gap-6 bg-white border border-gray-200 rounded-full px-8 py-3 text-sm shadow-sm">
          <div><span class="font-black text-blue-600 text-xl mr-1" id="totalCount">-</span>명의 인재 등록</div>
          <div style="width:1px;height:20px;background:#e5e7eb"></div>
          <div><span class="font-black text-blue-600 text-xl mr-1">실시간</span> 업데이트</div>
        </div>
      </section>

      <div class="max-w-7xl mx-auto px-5 pb-20">

        {/* ─────────────────────────────────────────────
            외국인 고용 가능 인원 계산기 진입 배너 (옵션 B)
            인재풀에서 매칭 신청하기 전, 자가 진단 유도
            ───────────────────────────────────────────── */}
        <div class="calc-banner mb-6">
          <div class="calc-banner-left">
            <span class="calc-eyebrow">CALCULATOR</span>
            <h2>
              우리 회사 외국인<br/>
              <span class="accent">몇 명까지</span> 채용 가능할까?
            </h2>
            <p class="calc-banner-desc">
              인재풀에서 매칭 신청하기 전에, 비자별로 우리 회사가 보유 가능한 인원을 먼저 확인해보세요.
              회사 정보 4가지만 입력하면 됩니다.
            </p>
            <div class="calc-visa-tags">
              <span class="calc-visa-tag">✓ F-2-R</span>
              <span class="calc-visa-tag">✓ E-7-4 (R + K-POINT)</span>
              <span class="calc-visa-tag">✓ E-7-1</span>
              <span class="calc-visa-tag">✓ 배우자 비자 안내</span>
            </div>
            <a href="/calculator" class="calc-cta">
              계산기 시작하기 →
            </a>
          </div>
          <div class="calc-banner-right">
            <div class="calc-big-num">30<span>초</span></div>
            <div class="calc-big-sub">한 번에 확인</div>
            <div class="calc-big-note">참고용 수치</div>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 mb-5">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <label class="block text-xs font-bold text-gray-500 mb-1">🌏 국적</label>
              <select id="filterNation" class="w-full p-2 border border-gray-300 rounded-lg text-sm bg-gray-50">
                <option value="">전체 국적</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-500 mb-1">📋 희망 비자</label>
              <select id="filterVisa" class="w-full p-2 border border-gray-300 rounded-lg text-sm bg-gray-50">
                <option value="">전체 비자</option>
                <option value="E-7-4R">E-7-4R</option>
                <option value="F-2-R">F-2-R</option>
                <option value="E-7-1">E-7-1</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-500 mb-1">👥 성별</label>
              <select id="filterGender" class="w-full p-2 border border-gray-300 rounded-lg text-sm bg-gray-50">
                <option value="">전체</option>
                <option value="남">남성</option>
                <option value="여">여성</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-500 mb-1">🗣 한국어</label>
              <select id="filterKorean" class="w-full p-2 border border-gray-300 rounded-lg text-sm bg-gray-50">
                <option value="">전체</option>
                <option value="1">1단계</option>
                <option value="2">2단계</option>
                <option value="3">3단계</option>
                <option value="4">4단계</option>
                <option value="5">5단계</option>
              </select>
            </div>
          </div>
          <div class="mt-3 flex justify-between items-center">
            <div class="text-sm text-gray-500"><strong class="text-blue-600 font-black" id="resultCount">-</strong>명 검색됨</div>
            <button id="resetFiltersBtn" class="text-sm text-blue-600 font-semibold">✕ 초기화</button>
          </div>
        </div>

        <div id="cardGrid" class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div style="grid-column:1/-1" class="text-center py-20 text-gray-400">
            <div class="spinner"></div>
            <p>인재 정보를 불러오는 중입니다...</p>
          </div>
        </div>

        <div id="ctaSection" class="text-center mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200" style="display:none">
          <h3 class="text-2xl font-black text-gray-900 mb-3">🤝 맞춤형 인재 추천 서비스</h3>
          <p class="text-gray-500 mb-6">원하는 조건의 인재를 찾지 못하셨나요?<br/>상세한 채용 요구사항을 알려주시면 최적의 인재를 추천해드립니다.</p>
          <a href="/company/apply" class="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold no-underline">맞춤형 인재 추천 신청하기 →</a>
        </div>
      </div>

      <Footer />

      <script src="/static/talent-pool.js" defer></script>
    </div>
  )
}
