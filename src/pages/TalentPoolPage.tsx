import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const TalentPoolPage = () => {
  return (
    <div>
      <Header />

      <style>{`
        .talent-card { transition:all 0.22s cubic-bezier(0.4,0,0.2,1); border:1px solid #e5e7eb; }
        .talent-card:hover { transform:translateY(-4px); box-shadow:0 14px 28px rgba(10,102,194,0.13); border-color:#0a66c2; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .card-anim { animation:fadeUp 0.4s ease both; }
        .spinner { width:40px;height:40px;border:3px solid #e2e8f0;border-top-color:#0a66c2;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto 16px; }
        @keyframes spin { to{transform:rotate(360deg)} }
        .card-btn { width:100%;padding:10px;border-radius:9999px;border:2px solid #0a66c2;color:#0a66c2;background:#fff;font-weight:700;font-size:13px;cursor:pointer;transition:all 0.2s; }
        .card-btn:hover { background:#0a66c2;color:#fff; }
        .modal-overlay { position:fixed;inset:0;background:rgba(15,23,42,0.55);backdrop-filter:blur(4px);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;pointer-events:none;transition:opacity 0.2s; }
        .modal-overlay.active { opacity:1;pointer-events:auto; }
        .modal-box { background:#fff;border-radius:20px;padding:36px;max-width:480px;width:100%;box-shadow:0 24px 60px rgba(0,0,0,0.18);transform:translateY(16px) scale(0.97);transition:transform 0.25s cubic-bezier(0.4,0,0.2,1);position:relative;max-height:90vh;overflow-y:auto; }
        .modal-overlay.active .modal-box { transform:translateY(0) scale(1); }
        .form-input { width:100%;padding:10px 14px;border:1px solid #d1d5db;border-radius:8px;font-size:14px;background:#f9fafb;outline:none;transition:border-color 0.15s;font-family:inherit;box-sizing:border-box; }
        .form-input:focus { border-color:#0a66c2;background:#fff; }
        .submit-btn { width:100%;padding:14px;background:#0a66c2;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;transition:background 0.2s; }
        .submit-btn:hover { background:#0952a0; }
        .submit-btn:disabled { background:#94a3b8;cursor:not-allowed; }
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

      <div class="modal-overlay" id="modalOverlay">
        <div class="modal-box">
          <button id="modalCloseBtn" style="position:absolute;top:18px;right:20px;background:#f1f5f9;border:none;width:32px;height:32px;border-radius:50%;font-size:18px;cursor:pointer;color:#64748b">×</button>
          <div id="modalContent">
            <div class="text-xl font-black text-gray-900 mb-1">인재 정보 요청</div>
            <p class="text-sm text-gray-500 mb-4" style="line-height:1.6">아래 정보를 입력하시면 담당자가 확인 후 연락드립니다.<br/>채용 수수료 없이 무료로 진행됩니다.</p>
            <div id="modalTalentInfo" class="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 mb-4 text-sm text-blue-800 font-semibold"></div>
            <form id="contactForm">
              <input type="hidden" name="관심_인재" id="hiddenTalent"/>
              <div class="mb-3">
                <label class="block text-sm font-bold text-gray-700 mb-1">회사명 *</label>
                <input class="form-input" type="text" name="회사명" placeholder="주식회사 예시" required/>
              </div>
              <div class="mb-3">
                <label class="block text-sm font-bold text-gray-700 mb-1">담당자 이름 *</label>
                <input class="form-input" type="text" name="담당자명" placeholder="홍길동" required/>
              </div>
              <div class="mb-3">
                <label class="block text-sm font-bold text-gray-700 mb-1">연락처 *</label>
                <input class="form-input" type="tel" name="연락처" placeholder="010-1234-5678" required/>
              </div>
              <div class="mb-3">
                <label class="block text-sm font-bold text-gray-700 mb-1">이메일</label>
                <input class="form-input" type="email" name="이메일" placeholder="example@company.com"/>
              </div>
              <div class="mb-3">
                <label class="block text-sm font-bold text-gray-700 mb-1">업종 / 채용 직무</label>
                <input class="form-input" type="text" name="업종직무" placeholder="제조업 / 용접"/>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold text-gray-700 mb-1">문의 내용</label>
                <textarea class="form-input" name="문의내용" rows={3} placeholder="채용 조건이나 궁금한 점을 자유롭게 작성해주세요."></textarea>
              </div>
              <button type="submit" class="submit-btn" id="submitBtn">📨 문의 보내기</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />

      <script src="/static/talent-pool.js" defer></script>
    </div>
  )
}
