import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const API_URL = 'https://script.google.com/macros/s/AKfycbwg14TmdT8_ieHiswYaoIQ78orlWyXysSj647VN2enwO2SUwnzrcgK6XaE1hl-Yi7Bn/exec'
const FORMSPREE_URL = 'https://formspree.io/f/xjkaedgv'

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
              <select id="filterNation" class="w-full p-2 border border-gray-300 rounded-lg text-sm bg-gray-50" onchange="applyFilters()">
                <option value="">전체 국적</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-500 mb-1">📋 희망 비자</label>
              <select id="filterVisa" class="w-full p-2 border border-gray-300 rounded-lg text-sm bg-gray-50" onchange="applyFilters()">
                <option value="">전체 비자</option>
                <option value="E-7-4R">E-7-4R</option>
                <option value="F-2-R">F-2-R</option>
                <option value="E-7-1">E-7-1</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-500 mb-1">👥 성별</label>
              <select id="filterGender" class="w-full p-2 border border-gray-300 rounded-lg text-sm bg-gray-50" onchange="applyFilters()">
                <option value="">전체</option>
                <option value="남">남성</option>
                <option value="여">여성</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-500 mb-1">🗣 한국어</label>
              <select id="filterKorean" class="w-full p-2 border border-gray-300 rounded-lg text-sm bg-gray-50" onchange="applyFilters()">
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
            <button onclick="resetFilters()" class="text-sm text-blue-600 font-semibold">✕ 초기화</button>
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

      <div class="modal-overlay" id="modalOverlay" onclick="closeModalOutside(event)">
        <div class="modal-box">
          <button onclick="closeModal()" style="position:absolute;top:18px;right:20px;background:#f1f5f9;border:none;width:32px;height:32px;border-radius:50%;font-size:18px;cursor:pointer;color:#64748b">×</button>
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

      <script dangerouslySetInnerHTML={{__html: `
(function(){
var API_URL='${API_URL}';
var FORMSPREE_URL='${FORMSPREE_URL}';
var allTalent=[];
var FLAGS={
  '네팔':'<svg viewBox="0 0 60 72" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 60,26 0,52" fill="#DC143C"/><polygon points="0,0 50,22 0,44" fill="#DC143C" stroke="#003893" stroke-width="3"/><polygon points="0,44 50,22 0,72" fill="#003893"/></svg>',
  '미얀마':'<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="7" fill="#FECB00"/><rect y="7" width="30" height="6" fill="#34B233"/><rect y="13" width="30" height="7" fill="#EA2839"/></svg>',
  '방글라데시':'<svg viewBox="0 0 30 18" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="18" fill="#006A4E"/><circle cx="14" cy="9" r="5.5" fill="#F42A41"/></svg>',
  '베트남':'<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#DA251D"/><polygon points="15,5 17,11 23,11 18,14 20,20 15,16 10,20 12,14 7,11 13,11" fill="#FFFF00"/></svg>',
  '스리랑카':'<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#FFBE29"/><rect x="0" width="4" height="20" fill="#8D153A"/><rect x="4" width="4" height="20" fill="#00843D"/></svg>',
  '인도네시아':'<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="10" fill="#CE1126"/><rect y="10" width="30" height="10" fill="#FFF"/></svg>',
  '태국':'<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#A51931"/><rect y="4" width="30" height="12" fill="#F4F5F8"/><rect y="7" width="30" height="6" fill="#2D2A4A"/></svg>',
  '캄보디아':'<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="7" fill="#032EA1"/><rect y="7" width="30" height="6" fill="#E00025"/><rect y="13" width="30" height="7" fill="#032EA1"/></svg>',
  '필리핀':'<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="10" fill="#0038A8"/><rect y="10" width="30" height="10" fill="#CE1126"/><polygon points="0,0 12,10 0,20" fill="#FCD116"/></svg>',
  '몽골':'<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="20" fill="#C4272F"/><rect x="10" width="10" height="20" fill="#015197"/><rect x="20" width="10" height="20" fill="#C4272F"/></svg>',
};
function getFlag(n){return FLAGS[n]||'<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#94a3b8"/></svg>';}
function getAvatar(g){return g==='여'?'👩🏽':'👨🏽';}
function getKoreanNum(k){if(!k)return 0;var m=k.match(/(\\d+)/);return m?parseInt(m[1]):0;}
function buildCard(t,i){
  var gLabel=t.gender==='여'?'여성':'남성';
  var visaEsc=t.visa.replace(/'/g,"\\'");
  var nameEsc=t.name.replace(/'/g,"\\'");
  var nationEsc=t.nationality.replace(/'/g,"\\'");
  var genderEsc=t.gender.replace(/'/g,"\\'");
  return '<div class="talent-card card-anim bg-white rounded-2xl overflow-hidden flex flex-col" style="animation-delay:'+(i*0.04)+'s">'
    +'<div style="height:72px;background:linear-gradient(90deg,#0a66c2,#0952a0,#0a66c2);position:relative;overflow:hidden;flex-shrink:0"></div>'
    +'<div style="padding:0 20px 20px;margin-top:-36px;flex:1;display:flex;flex-direction:column">'
      +'<div style="position:relative;width:72px;height:72px">'
        +'<div style="width:100%;height:100%;border-radius:50%;background:#fff;padding:3px;box-shadow:0 4px 12px rgba(0,0,0,.1)">'
          +'<div style="width:100%;height:100%;border-radius:50%;background:linear-gradient(135deg,#fef3c7,#fde68a);display:flex;align-items:center;justify-content:center;font-size:34px">'+getAvatar(t.gender)+'</div>'
        +'</div>'
        +'<div style="position:absolute;bottom:0;right:-2px;width:26px;height:26px;border:2.5px solid #fff;border-radius:50%;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.2)">'+getFlag(t.nationality)+'</div>'
      +'</div>'
      +'<div style="font-size:17px;font-weight:800;color:#0f172a;margin-top:12px">'+t.name+'</div>'
      +'<div style="font-size:13px;color:#475569;margin-top:3px">'+t.nationality+' · 경력 '+t.career+'년</div>'
      +'<div style="font-size:12px;color:#64748b;margin-top:6px">'+t.nationality+' · '+gLabel+' · '+t.age+'세</div>'
      +'<div style="height:1px;background:#e5e7eb;margin:14px 0"></div>'
      +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">'
        +'<div style="background:#f1f5f9;padding:10px 12px;border-radius:8px"><div style="font-size:10px;color:#64748b;font-weight:700">경력</div><div style="font-size:13px;font-weight:800;color:#0f172a;margin-top:3px">'+t.career+'년</div></div>'
        +'<div style="background:#f1f5f9;padding:10px 12px;border-radius:8px"><div style="font-size:10px;color:#64748b;font-weight:700">한국어</div><div style="font-size:13px;font-weight:800;color:#0f172a;margin-top:3px">'+(t.korean||'미정')+'</div></div>'
      +'</div>'
      +'<div style="background:linear-gradient(135deg,#fef3c7,#fde68a);padding:12px 14px;border-radius:8px;display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;border:1px solid #fcd34d">'
        +'<span style="font-size:11px;color:#92400e;font-weight:700">🎯 희망 비자</span>'
        +'<span style="font-size:15px;font-weight:900;color:#78350f">'+t.visa+'</span>'
      +'</div>'
      +'<button class="card-btn" onclick="openModal(\''+nameEsc+'\',\''+nationEsc+'\',\''+visaEsc+'\','+t.career+',\''+genderEsc+'\','+t.age+')">인재 정보 요청하기</button>'
    +'</div>'
  +'</div>';
}
function renderCards(data){
  var g=document.getElementById('cardGrid');
  document.getElementById('resultCount').textContent=data.length;
  if(!data.length){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#94a3b8"><div style="font-size:48px;margin-bottom:12px">🔍</div><p>조건에 맞는 인재가 없습니다.</p></div>';return;}
  g.innerHTML=data.map(function(t,i){return buildCard(t,i);}).join('');
}
window.applyFilters=function(){
  var n=document.getElementById('filterNation').value;
  var v=document.getElementById('filterVisa').value;
  var g=document.getElementById('filterGender').value;
  var k=document.getElementById('filterKorean').value;
  renderCards(allTalent.filter(function(t){
    if(n&&t.nationality!==n)return false;
    if(v&&t.visa!==v)return false;
    if(g&&t.gender!==g)return false;
    if(k&&getKoreanNum(t.korean)!==parseInt(k))return false;
    return true;
  }));
};
window.resetFilters=function(){
  ['filterNation','filterVisa','filterGender','filterKorean'].forEach(function(id){document.getElementById(id).value='';});
  renderCards(allTalent);
};
window.openModal=function(name,nation,visa,career,gender,age){
  var gLabel=gender==='여'?'여성':'남성';
  document.getElementById('modalTalentInfo').textContent='👤 '+name+' | '+nation+' | '+gLabel+' | '+age+'세 | 경력 '+career+'년 | 희망 '+visa;
  document.getElementById('hiddenTalent').value=name+' ('+nation+', '+gLabel+', '+age+'세, 경력 '+career+'년, 희망 '+visa+')';
  document.getElementById('contactForm').reset();
  document.getElementById('hiddenTalent').value=name+' ('+nation+', '+gLabel+', '+age+'세, 경력 '+career+'년, 희망 '+visa+')';
  document.getElementById('submitBtn').disabled=false;
  document.getElementById('submitBtn').textContent='📨 문의 보내기';
  document.getElementById('contactForm').style.display='';
  var s=document.getElementById('modalContent').querySelector('.submit-success');
  if(s)s.remove();
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow='hidden';
};
window.closeModal=function(){document.getElementById('modalOverlay').classList.remove('active');document.body.style.overflow='';};
window.closeModalOutside=function(e){if(e.target===document.getElementById('modalOverlay'))window.closeModal();};
document.addEventListener('keydown',function(e){if(e.key==='Escape')window.closeModal();});
document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  var btn=document.getElementById('submitBtn');
  btn.disabled=true;btn.textContent='전송 중...';
  fetch(FORMSPREE_URL,{method:'POST',body:new FormData(this),headers:{'Accept':'application/json'}})
    .then(function(r){
      if(r.ok){
        document.getElementById('contactForm').style.display='none';
        var s=document.createElement('div');s.className='submit-success';
        s.style.cssText='text-align:center;padding:20px 0';
        s.innerHTML='<div style="font-size:52px;margin-bottom:12px">✅</div><h3 style="font-size:18px;font-weight:800;margin-bottom:8px">문의가 접수되었습니다!</h3><p style="font-size:14px;color:#64748b;line-height:1.6">담당 행정사가 확인 후<br>빠르게 연락드리겠습니다.<br><br><strong>행정사사무소 늘좋은</strong></p>';
        document.getElementById('modalContent').appendChild(s);
      }else{btn.disabled=false;btn.textContent='📨 문의 보내기';alert('전송에 실패했습니다.');}
    }).catch(function(){btn.disabled=false;btn.textContent='📨 문의 보내기';alert('네트워크 오류가 발생했습니다.');});
});
fetch(API_URL)
  .then(function(r){return r.json();})
  .then(function(json){
    allTalent=json.talent||[];
    document.getElementById('totalCount').textContent=allTalent.length;
    var nations=allTalent.map(function(t){return t.nationality;}).filter(function(v,i,a){return a.indexOf(v)===i;}).sort();
    var sel=document.getElementById('filterNation');
    nations.forEach(function(n){var o=document.createElement('option');o.value=n;o.textContent=n;sel.appendChild(o);});
    renderCards(allTalent);
    document.getElementById('ctaSection').style.display='';
  })
  .catch(function(){
    document.getElementById('cardGrid').innerHTML='<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#94a3b8"><div style="font-size:48px;margin-bottom:12px">⚠️</div><p>데이터를 불러오지 못했습니다.</p></div>';
  });
})();
`}} />
    </div>
  )
}
