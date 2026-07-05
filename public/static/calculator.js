// ============================================================
// 외국인 고용 가능 인원 계산기 — 2026.6 개정 반영본
// 변경 지점은 모두 ★[2026.6] 주석으로 표시했습니다.
//
// 이번 수정 요약
//   1) 농축어업 특례 신설 : 「고용허용 인원 특례」(50%) 대상에 농축어업 추가
//      (근거: 법무부 보도자료 2026.6.1, 6월 시행)
//   2) 4인 이하 정액 규칙 신설 : 특례(인구감소·농축어업·뿌리산업) 2명 / 일반 1명
//      → 20% 상한·기업추천서 쿼터보다 우선(무시)
//   3) 업종 특례를 지역과 분리 : 뿌리산업 체크박스 → 농축어업/뿌리산업 라디오
//      (일반지역 + 관심지역에서 노출, 인구감소지역은 이미 50%라 비활성)
//   4) 관심지역 K-POINT rate 정상화 : 일반업종 0.3 / 농축어업·뿌리 0.5
//   5) E-7-4R·K-POINT 각각 독립 표시(합산·연장 상한 문구 제거) + 카톡 상담 유도
//   6) 결격사유 6개 항목으로 통일
//
//   ※ 미변경: F-2-R, E-7-4R 자체 쿼터표(1~5명 3명 등), E-9
// ============================================================

// ★[2026.6] 상담 연결 — 대표번호 개통 후 이 상수만 교체하면 전체 반영됨
const CONSULT_KAKAO_URL = 'http://pf.kakao.com/_pPxnFxj/chat';

// ============================================================
// 시·군·구 데이터 (89 + 18 = 107)  — 변경 없음
// ============================================================
const REGIONS = {
  declining: [
    { sido: '부산광역시', short: '부산', name: '동구' },
    { sido: '부산광역시', short: '부산', name: '서구' },
    { sido: '부산광역시', short: '부산', name: '영도구' },
    { sido: '대구광역시', short: '대구', name: '남구' },
    { sido: '대구광역시', short: '대구', name: '서구' },
    { sido: '대구광역시', short: '대구', name: '군위군' },
    { sido: '인천광역시', short: '인천', name: '강화군' },
    { sido: '인천광역시', short: '인천', name: '옹진군' },
    { sido: '경기도', short: '경기', name: '가평군' },
    { sido: '경기도', short: '경기', name: '연천군' },
    { sido: '강원특별자치도', short: '강원', name: '고성군' },
    { sido: '강원특별자치도', short: '강원', name: '삼척시' },
    { sido: '강원특별자치도', short: '강원', name: '양구군' },
    { sido: '강원특별자치도', short: '강원', name: '양양군' },
    { sido: '강원특별자치도', short: '강원', name: '영월군' },
    { sido: '강원특별자치도', short: '강원', name: '정선군' },
    { sido: '강원특별자치도', short: '강원', name: '철원군' },
    { sido: '강원특별자치도', short: '강원', name: '태백시' },
    { sido: '강원특별자치도', short: '강원', name: '평창군' },
    { sido: '강원특별자치도', short: '강원', name: '홍천군' },
    { sido: '강원특별자치도', short: '강원', name: '화천군' },
    { sido: '강원특별자치도', short: '강원', name: '횡성군' },
    { sido: '충청북도', short: '충북', name: '괴산군' },
    { sido: '충청북도', short: '충북', name: '단양군' },
    { sido: '충청북도', short: '충북', name: '보은군' },
    { sido: '충청북도', short: '충북', name: '영동군' },
    { sido: '충청북도', short: '충북', name: '옥천군' },
    { sido: '충청북도', short: '충북', name: '제천시' },
    { sido: '충청남도', short: '충남', name: '공주시' },
    { sido: '충청남도', short: '충남', name: '금산군' },
    { sido: '충청남도', short: '충남', name: '논산시' },
    { sido: '충청남도', short: '충남', name: '보령시' },
    { sido: '충청남도', short: '충남', name: '부여군' },
    { sido: '충청남도', short: '충남', name: '서천군' },
    { sido: '충청남도', short: '충남', name: '예산군' },
    { sido: '충청남도', short: '충남', name: '청양군' },
    { sido: '충청남도', short: '충남', name: '태안군' },
    { sido: '전북특별자치도', short: '전북', name: '고창군' },
    { sido: '전북특별자치도', short: '전북', name: '김제시' },
    { sido: '전북특별자치도', short: '전북', name: '남원시' },
    { sido: '전북특별자치도', short: '전북', name: '무주군' },
    { sido: '전북특별자치도', short: '전북', name: '부안군' },
    { sido: '전북특별자치도', short: '전북', name: '순창군' },
    { sido: '전북특별자치도', short: '전북', name: '임실군' },
    { sido: '전북특별자치도', short: '전북', name: '장수군' },
    { sido: '전북특별자치도', short: '전북', name: '정읍시' },
    { sido: '전북특별자치도', short: '전북', name: '진안군' },
    { sido: '전라남도', short: '전남', name: '강진군' },
    { sido: '전라남도', short: '전남', name: '고흥군' },
    { sido: '전라남도', short: '전남', name: '곡성군' },
    { sido: '전라남도', short: '전남', name: '구례군' },
    { sido: '전라남도', short: '전남', name: '담양군' },
    { sido: '전라남도', short: '전남', name: '보성군' },
    { sido: '전라남도', short: '전남', name: '신안군' },
    { sido: '전라남도', short: '전남', name: '영광군' },
    { sido: '전라남도', short: '전남', name: '영암군' },
    { sido: '전라남도', short: '전남', name: '완도군' },
    { sido: '전라남도', short: '전남', name: '장성군' },
    { sido: '전라남도', short: '전남', name: '장흥군' },
    { sido: '전라남도', short: '전남', name: '진도군' },
    { sido: '전라남도', short: '전남', name: '함평군' },
    { sido: '전라남도', short: '전남', name: '해남군' },
    { sido: '전라남도', short: '전남', name: '화순군' },
    { sido: '경상북도', short: '경북', name: '고령군' },
    { sido: '경상북도', short: '경북', name: '문경시' },
    { sido: '경상북도', short: '경북', name: '봉화군' },
    { sido: '경상북도', short: '경북', name: '상주시' },
    { sido: '경상북도', short: '경북', name: '성주군' },
    { sido: '경상북도', short: '경북', name: '안동시' },
    { sido: '경상북도', short: '경북', name: '영덕군' },
    { sido: '경상북도', short: '경북', name: '영양군' },
    { sido: '경상북도', short: '경북', name: '영주시' },
    { sido: '경상북도', short: '경북', name: '영천시' },
    { sido: '경상북도', short: '경북', name: '울릉군' },
    { sido: '경상북도', short: '경북', name: '울진군' },
    { sido: '경상북도', short: '경북', name: '의성군' },
    { sido: '경상북도', short: '경북', name: '청도군' },
    { sido: '경상북도', short: '경북', name: '청송군' },
    { sido: '경상남도', short: '경남', name: '거창군' },
    { sido: '경상남도', short: '경남', name: '고성군' },
    { sido: '경상남도', short: '경남', name: '남해군' },
    { sido: '경상남도', short: '경남', name: '밀양시' },
    { sido: '경상남도', short: '경남', name: '산청군' },
    { sido: '경상남도', short: '경남', name: '의령군' },
    { sido: '경상남도', short: '경남', name: '창녕군' },
    { sido: '경상남도', short: '경남', name: '하동군' },
    { sido: '경상남도', short: '경남', name: '함안군' },
    { sido: '경상남도', short: '경남', name: '함양군' },
    { sido: '경상남도', short: '경남', name: '합천군' },
  ],
  attention: [
    { sido: '부산광역시', short: '부산', name: '금정구' },
    { sido: '부산광역시', short: '부산', name: '중구' },
    { sido: '인천광역시', short: '인천', name: '동구' },
    { sido: '광주광역시', short: '광주', name: '동구' },
    { sido: '대전광역시', short: '대전', name: '대덕구' },
    { sido: '대전광역시', short: '대전', name: '동구' },
    { sido: '대전광역시', short: '대전', name: '중구' },
    { sido: '경기도', short: '경기', name: '동두천시' },
    { sido: '경기도', short: '경기', name: '포천시' },
    { sido: '강원특별자치도', short: '강원', name: '강릉시' },
    { sido: '강원특별자치도', short: '강원', name: '동해시' },
    { sido: '강원특별자치도', short: '강원', name: '속초시' },
    { sido: '강원특별자치도', short: '강원', name: '인제군' },
    { sido: '전북특별자치도', short: '전북', name: '익산시' },
    { sido: '경상북도', short: '경북', name: '경주시' },
    { sido: '경상북도', short: '경북', name: '김천시' },
    { sido: '경상남도', short: '경남', name: '사천시' },
    { sido: '경상남도', short: '경남', name: '통영시' },
  ],
};

// ============================================================
// 자동완성 + 위치 판정
// ============================================================
const regionInput = document.getElementById('region-input');
const suggestionsEl = document.getElementById('suggestions');
const regionResult = document.getElementById('region-result');

// ★[2026.6] 뿌리산업 단일 체크박스 → 농축어업/뿌리산업 라디오 그룹으로 교체
//   HTML: <div id="industry-row"> 안에 <input type="radio" name="industry" value="none|agri|root">
const industryRow = document.getElementById('industry-row');

function getIndustry() {
  const el = document.querySelector('input[name="industry"]:checked');
  return el ? el.value : 'none'; // 'none' | 'agri'(농축어업) | 'root'(뿌리산업)
}
function resetIndustry() {
  const none = document.getElementById('industry-none');
  if (none) none.checked = true;
}
function setIndustryEnabled(enabled) {
  if (!industryRow) return;
  industryRow.classList.toggle('disabled', !enabled);
  document.querySelectorAll('input[name="industry"]').forEach(r => { r.disabled = !enabled; });
  if (!enabled) resetIndustry(); // 인구감소지역 선택 시 업종 특례는 무의미 → 초기화
}

let selectedRegion = null; // { type: 'declining'|'attention'|'general', sido, name } 또는 null
let activeIdx = -1;

const ALL_KNOWN = [
  ...REGIONS.declining.map(r => ({ ...r, type: 'declining' })),
  ...REGIONS.attention.map(r => ({ ...r, type: 'attention' })),
];

function findMatches(query) {
  const q = query.trim().replace(/\s+/g, '');
  if (!q) return [];
  const matches = [];
  for (const r of ALL_KNOWN) {
    if (r.name.startsWith(q) || r.name.includes(q) || (r.short + r.name).includes(q) || (r.sido + r.name).includes(q)) {
      matches.push(r);
    }
  }
  return matches.slice(0, 12);
}

function renderSuggestions(matches, query) {
  if (!matches.length) {
    if (query.trim().length >= 1) {
      suggestionsEl.innerHTML = `
        <div class="suggestion" data-idx="-1" id="general-region-pick">
          <div class="place">"${escapeHtml(query)}" <span class="sido">— 일반지역으로 처리</span></div>
          <span class="tag-chip tag-general">일반지역</span>
        </div>
      `;
      suggestionsEl.classList.add('show');
    } else {
      suggestionsEl.classList.remove('show');
    }
    return;
  }

  let html = matches.map((m, i) => {
    const tagCls = m.type === 'declining' ? 'tag-declining' : 'tag-attention';
    const tagTxt = m.type === 'declining' ? '인구감소지역' : '인구감소관심지역';
    return `
      <div class="suggestion" data-idx="${i}">
        <div class="place">${escapeHtml(m.name)}<span class="sido">${escapeHtml(m.short)}</span></div>
        <span class="tag-chip ${tagCls}">${tagTxt}</span>
      </div>
    `;
  }).join('');

  if (query.trim().length >= 2) {
    html += `
      <div class="suggestion" data-idx="${matches.length}" data-general="1">
        <div class="place">위 목록에 없음 <span class="sido">— 일반지역으로 처리</span></div>
        <span class="tag-chip tag-general">일반지역</span>
      </div>
    `;
  }

  suggestionsEl.innerHTML = html;
  suggestionsEl.classList.add('show');
  activeIdx = -1;
}

function escapeHtml(str) {
  return str.replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[c]));
}

function selectRegion(region) {
  selectedRegion = region;
  if (region.type === 'general') {
    regionInput.value = region.name;
    regionResult.className = 'region-result general show';
    regionResult.innerHTML = `
      <strong>${escapeHtml(region.name)}</strong> · 일반지역으로 처리됩니다.
      <span class="small">F-2-R · E-7-4R 신청은 불가하며, E-7-4 K-POINT와 E-7-1만 검토 가능합니다.</span>
    `;
    setIndustryEnabled(true); // ★[2026.6] 일반지역: 농축어업/뿌리산업 특례 선택 가능
  } else if (region.type === 'declining') {
    regionInput.value = `${region.name} (${region.short})`;
    regionResult.className = 'region-result declining show';
    regionResult.innerHTML = `
      <strong>${escapeHtml(region.name)}</strong> · 인구감소지역 (89개)
      <span class="small">F-2-R · E-7-4R 신청 모두 가능 (신규 채용 + 자격변경)</span>
    `;
    setIndustryEnabled(false); // 인구감소지역은 이미 50% 특례 → 업종 특례 비활성
  } else if (region.type === 'attention') {
    regionInput.value = `${region.name} (${region.short})`;
    regionResult.className = 'region-result attention show';
    regionResult.innerHTML = `
      <strong>${escapeHtml(region.name)}</strong> · 인구감소관심지역 (18개)
      <span class="small">E-7-4R은 자격변경만 가능 · F-2-R 신청은 불가</span>
    `;
    setIndustryEnabled(true); // ★[2026.6] 관심지역도 농축어업/뿌리산업이면 K-POINT 50% → 선택 가능
  }
  suggestionsEl.classList.remove('show');
}

regionInput.addEventListener('input', () => {
  selectedRegion = null;
  regionResult.classList.remove('show');
  setIndustryEnabled(true); // 지역 재선택 전까지 기본 활성

  const matches = findMatches(regionInput.value);
  renderSuggestions(matches, regionInput.value);
});

regionInput.addEventListener('focus', () => {
  if (regionInput.value.trim()) {
    const matches = findMatches(regionInput.value);
    renderSuggestions(matches, regionInput.value);
  }
});

regionInput.addEventListener('keydown', (e) => {
  const items = suggestionsEl.querySelectorAll('.suggestion');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    activeIdx = Math.min(activeIdx + 1, items.length - 1);
    items.forEach((it, i) => it.classList.toggle('active', i === activeIdx));
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    activeIdx = Math.max(activeIdx - 1, 0);
    items.forEach((it, i) => it.classList.toggle('active', i === activeIdx));
  } else if (e.key === 'Enter') {
    if (activeIdx >= 0 && items[activeIdx]) {
      e.preventDefault();
      items[activeIdx].click();
    }
  } else if (e.key === 'Escape') {
    suggestionsEl.classList.remove('show');
  }
});

suggestionsEl.addEventListener('click', (e) => {
  const item = e.target.closest('.suggestion');
  if (!item) return;

  const isGeneral = item.dataset.general === '1' || item.id === 'general-region-pick';
  if (isGeneral) {
    const userInput = regionInput.value.trim() || '입력하신 지역';
    selectRegion({ type: 'general', name: userInput });
  } else {
    const idx = parseInt(item.dataset.idx);
    const matches = findMatches(regionInput.value);
    if (matches[idx]) {
      selectRegion({ ...matches[idx] });
    }
  }
});

document.addEventListener('click', (e) => {
  if (!regionInput.contains(e.target) && !suggestionsEl.contains(e.target)) {
    suggestionsEl.classList.remove('show');
  }
});

// 업종 특례 도움말 토글 (기존 뿌리산업 도움말 재사용)
const rootHelpToggle = document.getElementById('root-help-toggle');
const rootHelpContent = document.getElementById('root-help-content');
if (rootHelpToggle && rootHelpContent) {
  rootHelpToggle.addEventListener('click', () => {
    rootHelpContent.classList.toggle('show');
  });
}

// ============================================================
// 계산 로직
// ============================================================

// E-7-4R 자체 쿼터표 (지역특화 지침) — ★ 이번 개정과 무관, 변경 없음
function calcE74RTierQuota(k) {
  if (k <= 0) return 0;
  if (k <= 5) return 3;
  if (k <= 50) return Math.ceil(k * 0.5);
  if (k <= 100) return Math.min(Math.ceil(k * 0.5), 35);
  if (k <= 150) return 40;
  return 50; // 151명 이상
}

function calculate(input) {
  // ★[2026.6] regionType(지역)과 industry(업종)를 분리해서 받음
  //   regionType: 'declining' | 'attention' | 'general'
  //   industry  : 'none' | 'agri'(농축어업) | 'root'(뿌리산업)
  const { regionType, industry, koreans, foreigners, hasE9, hasE74KPoint } = input;
  const totalWorkers = koreans + foreigners;

  const result = { f2r: null, e74Combined: null, e74r: null, e74kpoint: null, e71: null };

  // ★[2026.6] 50% 특례 단일 판정 : 인구감소지역 OR 농축어업 OR 뿌리산업
  const isSpecialRate = (regionType === 'declining') || industry === 'agri' || industry === 'root';

  // ---------------------------------------------------------
  // F-2-R  — 변경 없음 (인구감소지역 전용)
  // ---------------------------------------------------------
  if (regionType === 'declining') {
    if (koreans === 0) {
      result.f2r = { available: false, reason: 'no-koreans' };
    } else {
      let q;
      if (koreans >= 1 && koreans <= 5) q = 3;
      else if (koreans <= 50) q = Math.ceil(koreans * 0.5);
      else if (koreans <= 100) q = Math.min(Math.ceil(koreans * 0.5), 35);
      else if (koreans <= 150) q = 40;
      else if (koreans >= 151) q = 50;
      else q = 0;
      result.f2r = { available: true, quota: q };
    }
  } else {
    result.f2r = { available: false, reason: 'region' };
  }

  // ---------------------------------------------------------
  // E-7-4R 쿼터 — ★ 자체표 유지. 0명 처리만 지역별로 정리
  //   내국인 1명 이상 : 자체표 (1~5명 3명 등)
  //   내국인 0명(+E-9): 인구감소지역 2명 / 관심지역 1명
  // ---------------------------------------------------------
  const e74rSpecial50 = (regionType === 'declining' && hasE74KPoint && koreans > 71); // 기존 규칙 보존
  let e74rQuota;
  if (koreans === 0) {
    e74rQuota = (regionType === 'declining') ? 2 : 1; // ★[2026.6] 인구감소 2 / 관심 1
  } else if (e74rSpecial50) {
    e74rQuota = Math.ceil(koreans * 0.5);
  } else {
    e74rQuota = calcE74RTierQuota(koreans);
  }

  if (regionType === 'declining') {
    if (!hasE9) result.e74r = { available: false, reason: 'no-e9' };
    else result.e74r = { available: true, quota: e74rQuota, mode: 'full', special50: e74rSpecial50 };
  } else if (regionType === 'attention') {
    if (!hasE9) result.e74r = { available: false, reason: 'no-e9' };
    else result.e74r = { available: true, quota: e74rQuota, mode: 'change-only', special50: false };
  } else {
    result.e74r = { available: false, reason: 'region' };
  }

  // ---------------------------------------------------------
  // E-7-4 K-POINT 쿼터 — ★[2026.6] 핵심 수정부
  //   rate : 특례(인구감소·농축어업·뿌리산업) 0.5 / 그 외 0.3
  //   4인 이하 : 특례 2명 / 일반 1명  (20% 상한·추천서 쿼터보다 우선 = 무시)
  //   5명 이상 : min( ceil(국민 × rate), ceil(상시근로자 × 20%) )
  // ---------------------------------------------------------
  const combinedRate = isSpecialRate ? 0.5 : 0.3;

  if (!hasE9) {
    result.e74kpoint = { available: false, reason: 'no-e9' };
  } else {
    let kQ;
    let isSmallSpecial = false;
    if (koreans <= 4) {
      kQ = isSpecialRate ? 2 : 1;   // 4인 이하 정액
      isSmallSpecial = true;
    } else {
      const byRate = Math.ceil(koreans * combinedRate);
      const cap20 = Math.ceil(totalWorkers * 0.2);
      kQ = Math.min(byRate, cap20);
    }
    result.e74kpoint = { available: true, quota: kQ, isSmallSpecial };
  }

  result.e74Combined = { rate: combinedRate, available: hasE9 };

  // ---------------------------------------------------------
  // E-7-1  — 변경 없음
  // ---------------------------------------------------------
  if (koreans === 0) {
    result.e71 = { available: true, special: true };
  } else {
    const calcMax = Math.max(1, Math.ceil(koreans * 0.2));
    result.e71 = { available: true, calcMax: calcMax };
  }

  return result;
}

// ============================================================
// 결과 렌더링
// ============================================================
function renderResults(result, input) {
  const { regionType, industry } = input;
  const cards = document.getElementById('result-cards');
  let html = '';

  // 카톡 상담 유도 버튼 (공통) — ★[2026.6] 정확한 판단은 사무실로 유도
  const consultCTA = `
    <a href="${CONSULT_KAKAO_URL}" target="_blank" rel="noopener"
       style="display:flex; align-items:center; justify-content:center; gap:8px; text-decoration:none;
              background:#FEE500; color:#3A1D1D; font-weight:700; font-size:13.5px;
              border-radius:10px; padding:14px 16px; margin-top:12px;">
      💬 정확한 허용 인원·연장 가능 여부는 행정사사무소 늘좋은에 문의하세요
    </a>`;

  // ---------- F-2-R ----------
  if (result.f2r.available) {
    html += `
      <div class="visa-card">
        <div class="visa-head">
          <div class="visa-name">F-2-R <span class="mode-badge mode-full">신규고용 · 자격변경 모두 가능</span></div>
          <div class="visa-quota">최대 <span class="num">${result.f2r.quota}</span>명</div>
        </div>
        <div class="visa-desc">지역특화 우수인재 비자. 인구감소지역 89개에서만 신청 가능하며, 신규 채용과 자격변경 모두 가능합니다.</div>
      </div>
    `;
  } else {
    let f2rDesc;
    if (result.f2r.reason === 'no-koreans') {
      f2rDesc = '한국인 직원이 0명인 경우 F-2-R 신청은 일반적으로 어렵습니다. 정확한 가능 여부는 행정사 상담을 통해 확인해 보세요.';
    } else {
      f2rDesc = 'F-2-R은 인구감소지역 89개에서만 신청 가능합니다.';
    }
    html += `
      <div class="visa-card unavailable">
        <div class="visa-head">
          <div class="visa-name">F-2-R</div>
          <div class="visa-na-text">신청 불가</div>
        </div>
        <div class="visa-desc">${f2rDesc}</div>
      </div>
    `;
  }

  // ---------- E-7-4 (R + K-POINT 각각 독립 표시) ----------
  // ★[2026.6] 합산/연장 상한 문구 전부 제거. 두 트랙을 계산값 그대로 각각 표시.
  if (result.e74Combined.available) {
    // 업종 특례 배지 (인구감소지역은 이미 지역특례라 배지 없음)
    let specialBadge = '';
    if (regionType !== 'declining' && industry === 'agri') {
      specialBadge = ` <span class="mode-badge mode-special50">농축어업 특례 · 50%</span>`;
    } else if (regionType !== 'declining' && industry === 'root') {
      specialBadge = ` <span class="mode-badge mode-special50">뿌리산업 특례 · 50%</span>`;
    }

    // E-7-4R 줄
    let rLine;
    if (result.e74r.available) {
      const modeBadge = result.e74r.mode === 'full'
        ? '<span class="mode-badge mode-full">신규채용 · 자격변경 모두 가능</span>'
        : '<span class="mode-badge mode-change-only">재직자 자격변경만 가능</span>';
      const rDetail = result.e74r.mode === 'full'
        ? '인구감소지역 지역특화 비자. E-7-4R 자체 쿼터표로 산정된 보유 가능 인원입니다.'
        : '인구감소관심지역 — 재직 중인 근로자의 자격변경만 가능합니다. E-7-4R 자체 쿼터표 기준입니다.';
      rLine = `
        <div class="visa-sub-item">
          <div class="label-area">
            <div class="label-name">E-7-4R ${modeBadge}</div>
            <div class="label-detail">${rDetail}</div>
          </div>
          <div class="quota-num">${result.e74r.quota}명</div>
        </div>
      `;
    } else {
      rLine = `
        <div class="visa-sub-item unavailable">
          <div class="label-area">
            <div class="label-name">E-7-4R <span class="mode-badge mode-na">해당 없음</span></div>
            <div class="label-detail">인구감소지역 · 인구감소관심지역에서만 신청 가능합니다.</div>
          </div>
          <div class="quota-num">—</div>
        </div>
      `;
    }

    // E-7-4 K-POINT 줄
    const kLine = `
      <div class="visa-sub-item">
        <div class="label-area">
          <div class="label-name">E-7-4 K-POINT${specialBadge}</div>
          <div class="label-detail">E-9 등에서 E-7-4 K-POINT로 자격변경할 때 보유 가능한 인원입니다.</div>
        </div>
        <div class="quota-num">${result.e74kpoint.quota}명</div>
      </div>
    `;

    // 각주 (필요한 경우만)
    let notes = [];
    if (regionType === 'declining' && result.e74kpoint.isSmallSpecial) {
      notes.push('내국인 4인 이하 특례(K-POINT 2명)는 기업추천서 쿼터에 <b>우선하는 것으로 산정</b>했습니다. 실제 적용은 관할 출입국에서 최종 확인하세요.');
    }
    if (industry === 'agri') {
      notes.push('농축어업 50% 특례는 <b>2026.6 시행</b>(법무부 보도자료 2026.6.1)에 따른 것으로, 농축어업 해당 여부는 <b>사업주가 판단</b>합니다.');
    }
    if (regionType === 'attention' && industry === 'none' && input.koreans === 0) {
      notes.push('내국인이 없는 경우 K-POINT 인원이 제한적입니다. 이럴 때는 <b>E-7-4R(자격변경)로 우회</b>하는 방안 검토를 권장합니다.');
    }
    const notesHtml = notes.length
      ? `<div class="visa-sub-note">${notes.map(n => `<p>※ ${n}</p>`).join('')}</div>`
      : '';

    html += `
      <div class="visa-card">
        <div class="visa-head">
          <div class="visa-name">E-7-4 (R · K-POINT)</div>
          <div class="visa-quota"></div>
        </div>
        <div class="visa-desc">E-7-4R과 K-POINT는 서로 다른 트랙입니다. 아래는 각 트랙별로 산정한 보유 가능 인원입니다.</div>
        <div class="visa-sub">
          ${rLine}
          ${kLine}
          ${notesHtml}
        </div>
        <div style="background: var(--warn-bg); border: 1.5px solid var(--warn-border); border-radius: 8px; padding: 14px 16px; margin-top: 12px; font-size: 12.5px; line-height: 1.65; color: #78350F;">
          <strong style="color: var(--warn); display: block; margin-bottom: 5px; font-size: 13px;">⚠️ E-7-4는 매우 예민한 비자입니다</strong>
          위 숫자는 <strong>참고용 수치</strong>이며, 현재 재직 중인 E-7-4(R·K-POINT) 인원·기업추천서 쿼터·연장 시점 등에 따라 실제 가능 인원은 달라집니다. 특히 <strong>구직 중인 외국인 채용</strong>이나 <strong>연장</strong>을 준비 중이라면 반드시 사전에 확인하시기 바랍니다.
        </div>
        ${consultCTA}
      </div>
    `;
  } else {
    html += `
      <div class="visa-card unavailable">
        <div class="visa-head">
          <div class="visa-name">E-7-4 (R · K-POINT)</div>
          <div class="visa-na-text">신청 불가</div>
        </div>
        <div class="visa-desc">E-7-4 계열은 현재 E-9 비자 외국인이 1명 이상 재직 중이어야 신청 가능합니다.</div>
        ${consultCTA}
      </div>
    `;
  }

  // ---------- E-7-1 ----------
  if (result.e71.special) {
    html += `
      <div class="visa-card">
        <div class="visa-head">
          <div class="visa-name">E-7-1 <span class="visa-name-sub">(전문인력 · 단순노무 금지)</span></div>
          <div class="visa-quota">최대 <span class="num">1~2</span>명</div>
        </div>
        <div class="visa-desc">전문인력 비자. 한국인 직원이 0명인 경우 직종 코드별로 별도 검토가 필요하며, 동일 직종 코드로 일반적으로 1~2명까지 가능합니다.</div>
      </div>
    `;
  } else {
    const calcMax = result.e71.calcMax;
    const desc = calcMax > 2
      ? `전문인력 비자. 일반 직종은 내국인의 20% (계산값 ${calcMax}명) 권장이며, 내국인 보호 직종은 20% 강제 + 정밀 심사 대상입니다. 다만 <strong>실무상 동일 직종 코드로 1~2명</strong> 정도가 일반적이며, 그 이상은 상당한 사유가 필요합니다.`
      : `전문인력 비자. 일반 직종은 내국인의 20% 권장, 내국인 보호 직종은 20% 강제 + 정밀 심사 대상입니다. 동일 직종 코드로 일반적으로 1~2명까지 가능합니다.`;
    html += `
      <div class="visa-card">
        <div class="visa-head">
          <div class="visa-name">E-7-1 <span class="visa-name-sub">(전문인력 · 단순노무 금지)</span></div>
          <div class="visa-quota">최대 <span class="num">1~2</span>명</div>
        </div>
        <div class="visa-desc">${desc}</div>
      </div>
    `;
  }

  // ---------- 배우자 비자 안내 ----------
  if (regionType === 'declining') {
    html += `
      <div class="spouse-info">
        <h4>배우자 비자도 채용 인원에 활용할 수 있습니다</h4>
        <p>인구감소지역에서는 <span class="visa-code">F-3-1R</span> (F-2-R 배우자), <span class="visa-code">F-3-3R</span> (E-7-4R 배우자) 비자 소지자도 출입국의 사전 허가를 받으면 자유롭게 취업이 가능합니다.</p>
        <p><strong>쿼터 제한 없음</strong>. 위에 나온 비자별 쿼터와 별개로 활용할 수 있습니다.</p>
        <div class="small-note">
          ※ 청소년 출입금지 사업장(유흥업소 등)은 제외됩니다.<br>
          ※ 배우자 비자 활용에 대한 정확한 안내는 행정사 상담을 통해 확인하세요.
        </div>
      </div>
    `;
  } else if (regionType === 'attention') {
    html += `
      <div class="spouse-info">
        <h4>배우자 비자도 채용 인원에 활용할 수 있습니다</h4>
        <p>인구감소관심지역에서는 <span class="visa-code">F-3-3R</span> (E-7-4R 배우자) 비자 소지자도 출입국의 사전 허가를 받으면 자유롭게 취업이 가능합니다.</p>
        <p><strong>쿼터 제한 없음</strong>. 위에 나온 비자별 쿼터와 별개로 활용할 수 있습니다.</p>
        <div class="small-note">
          ※ 청소년 출입금지 사업장(유흥업소 등)은 제외됩니다.<br>
          ※ F-3-1R(F-2-R 배우자)은 인구감소지역에서만 가능합니다.<br>
          ※ 배우자 비자 활용에 대한 정확한 안내는 행정사 상담을 통해 확인하세요.
        </div>
      </div>
    `;
  }

  cards.innerHTML = html;
  const subtitle = document.getElementById('result-subtitle');
  let regionLabel;
  if (regionType === 'declining') regionLabel = '인구감소지역';
  else if (regionType === 'attention') regionLabel = '인구감소관심지역';
  else regionLabel = '일반지역';
  if (industry === 'agri') regionLabel += ' · 농축어업';
  else if (industry === 'root') regionLabel += ' · 뿌리산업';
  subtitle.textContent = `${regionLabel} · 참고용 수치 · 정확한 판단은 행정사 상담`;
}

// ============================================================
// 폼 제출
// ============================================================
const form = document.getElementById('calc-form');
const submitBtn = document.getElementById('submit-btn');
const resultSection = document.getElementById('result-section');
const warningBanner = document.getElementById('warning-banner');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!selectedRegion) {
    alert('회사 소재지를 선택해주세요.');
    regionInput.focus();
    return;
  }

  const koreans = parseInt(document.getElementById('koreans').value);
  const foreigners = parseInt(document.getElementById('foreigners').value);

  if (isNaN(koreans) || koreans < 0) {
    alert('내국인 고용보험 가입자 수를 입력해주세요.');
    document.getElementById('koreans').focus();
    return;
  }
  if (isNaN(foreigners) || foreigners < 0) {
    alert('외국인 직원 수를 입력해주세요. 없으면 0을 입력해주세요.');
    document.getElementById('foreigners').focus();
    return;
  }

  const e9Yes = document.getElementById('has-e9-yes').checked;
  const e9No = document.getElementById('has-e9-no').checked;
  if (!e9Yes && !e9No) {
    alert('E-9 비자 외국인 보유 여부를 선택해주세요.');
    return;
  }
  const hasE9 = e9Yes;

  const e74kYesEl = document.getElementById('has-e74k-yes');
  const e74kNoEl = document.getElementById('has-e74k-no');
  let hasE74KPoint = false;
  if (e74kYesEl && e74kNoEl) {
    if (!e74kYesEl.checked && !e74kNoEl.checked) {
      alert('현재 회사에 E-7-4 K-POINT 외국인 보유 여부를 선택해주세요.');
      return;
    }
    hasE74KPoint = e74kYesEl.checked;
  }

  // ★[2026.6] regionType(지역)과 industry(업종) 분리 수집
  let regionType;
  if (selectedRegion.type === 'declining') regionType = 'declining';
  else if (selectedRegion.type === 'attention') regionType = 'attention';
  else regionType = 'general';

  // 인구감소지역은 이미 50%라 업종 특례 무의미 → 'none' 고정
  const industry = (regionType === 'declining') ? 'none' : getIndustry();

  if (koreans === 0 && foreigners === 0) {
    alert('회사에 직원이 1명 이상 있어야 합니다.');
    return;
  }

  const disqualifiers = document.querySelectorAll('.disq:checked');
  const hasDisq = disqualifiers.length > 0;

  const input = { regionType, industry, koreans, foreigners, hasE9, hasE74KPoint };
  const result = calculate(input);

  // ★[방안 A] 결과를 바로 공개 (벽 없음). 명단 수집은 결과 안의 '안내받기' 버튼으로 선택.
  pendingResult = { result, input, hasDisq };
  showResult();
});

// ============================================================
// ★[방안 A] 선택적 명단 수집 모달 — 결과는 이미 공개됨.
//   결과 하단 "법령 변경 안내받기" 버튼을 누른 사람만 이 모달로 정보 입력.
//   설계: 회사명·이메일 필수 / 전화 선택 / 동의 2종 분리(개인정보 필수·광고 선택)
// ============================================================
let pendingResult = null; // 마지막 계산 결과 (신청 시 계산결과 함께 기록용)

const optinCard = document.getElementById('optin-card');
const consentCompany = document.getElementById('consent-company');
const consentEmail = document.getElementById('consent-email');
const consentPhone = document.getElementById('consent-phone');
const consentPrivacy = document.getElementById('consent-privacy'); // 필수
const consentMarketing = document.getElementById('consent-marketing'); // 선택
const consentSubmitBtn = document.getElementById('consent-submit');

// 실제 결과 표시 (동의 완료 후에만 호출)
function showResult() {
  if (!pendingResult) return;
  const { result, input, hasDisq } = pendingResult;
  renderResults(result, input);
  warningBanner.style.display = hasDisq ? 'flex' : 'none';
  resultSection.classList.add('show');
  setTimeout(() => {
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// 이메일 형식 간단 검증
function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

// 계산 결과를 사람이 읽을 수 있는 한 줄로 (Airtable '계산결과' 칼럼용)
function buildResultSummary(result, input) {
  const parts = [];
  if (result.f2r && result.f2r.available) parts.push(`F-2-R ${result.f2r.quota}명`);
  if (result.e74r && result.e74r.available) parts.push(`E-7-4R ${result.e74r.quota}명`);
  if (result.e74kpoint && result.e74kpoint.available) parts.push(`K-POINT ${result.e74kpoint.quota}명`);
  const regionLabel = input.regionType === 'declining' ? '인구감소지역'
    : input.regionType === 'attention' ? '관심지역' : '일반지역';
  return `[${regionLabel}] 내국인 ${input.koreans}·외국인 ${input.foreigners} / ` + (parts.join(', ') || '해당 없음');
}

// Airtable(company 테이블)로 전송 — ★ 토큰은 Cloudflare 프록시가 처리, 여기엔 없음
//   hireme 자체 프록시(/api/company)가 company 테이블에 바로 저장.
async function saveToAirtable(payload) {
  const PROXY_URL = '/api/company'; // hireme functions/api/company.js

  // 지역/업종 코드를 사람이 읽는 한글로 변환 (Airtable 저장용)
  const regionLabel = payload.region === 'declining' ? '인구감소지역'
    : payload.region === 'attention' ? '인구감소관심지역'
    : payload.region === 'general' ? '일반지역' : '';
  const industryLabel = payload.industry === 'agri' ? '농축어업'
    : payload.industry === 'root' ? '뿌리산업'
    : payload.industry === 'none' ? '해당없음' : '';

  // ★ 필드 이름을 company 테이블의 실제 열 이름과 정확히 일치시킴
  const body = {
    fields: {
      'Company Name': payload.company,
      'Email': payload.email,
      'Phone (optional)': payload.phone || '',
      '소재지': regionLabel,
      '내국인수': (payload.koreans === '' ? null : Number(payload.koreans)),
      '외국인수': (payload.foreigners === '' ? null : Number(payload.foreigners)),
      '계산결과': payload.resultSummary || '',
      '업종': industryLabel,
      '개인정보동의': !!payload.privacyConsent,
      '광고수신동의': !!payload.marketingConsent,
      '유입경로': payload.source || 'calculator',
      // '동의일시'는 Airtable가 자동 기록 (Created time)
    },
  };

  try {
    const res = await fetch(PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) console.error('저장 실패 (서버 응답):', res.status);
    return { ok: res.ok };
  } catch (e) {
    console.error('저장 실패:', e);
    return { ok: false };
  }
}

// "안내 신청하기" 클릭 (결과는 이미 화면에 있음)
if (consentSubmitBtn) {
  consentSubmitBtn.addEventListener('click', async () => {
    const company = (consentCompany.value || '').trim();
    const email = (consentEmail.value || '').trim();
    const phone = (consentPhone.value || '').trim();

    // 검증: 회사명·이메일 필수, 개인정보 동의 필수
    if (!company) { alert('회사명을 입력해주세요.'); consentCompany.focus(); return; }
    if (!email || !isValidEmail(email)) { alert('이메일을 정확히 입력해주세요.'); consentEmail.focus(); return; }
    if (!consentPrivacy.checked) { alert('개인정보 수집·이용 동의가 필요합니다.'); return; }

    // 저장 페이로드 구성 (마지막 계산 결과 포함)
    const { result, input } = pendingResult || { result: null, input: {} };
    const payload = {
      company,
      email,
      phone,                                   // 선택 (없으면 빈 값)
      region: input.regionType || '',
      koreans: input.koreans ?? '',
      foreigners: input.foreigners ?? '',
      industry: input.industry || '',
      resultSummary: (result && input.regionType) ? buildResultSummary(result, input) : '',
      privacyConsent: true,                    // 필수라 항상 true
      marketingConsent: !!consentMarketing.checked, // 선택
      source: 'calculator',                    // 유입경로
    };

    consentSubmitBtn.disabled = true;
    consentSubmitBtn.textContent = '처리 중...';
    const saveRes = await saveToAirtable(payload);

    if (saveRes && saveRes.ok) {
      // 폼을 완료 메시지로 교체 (인라인이라 모달처럼 닫지 않음)
      if (optinCard) {
        optinCard.classList.add('done');
        optinCard.innerHTML = `
          <div style="text-align:center; padding:8px 0;">
            <div style="font-size:34px; margin-bottom:10px;">✅</div>
            <h3 style="font-size:17px; font-weight:800; color:#fff; margin-bottom:8px;">신청이 완료되었습니다</h3>
            <p style="font-size:12.5px; color:#CBD5E1; line-height:1.65;">비자·고용 관계법령이 바뀌면 <b style="color:#fff;">${company}</b> 님께 가장 먼저 안내해 드리겠습니다.<br />감사합니다.</p>
          </div>`;
      }
    } else {
      consentSubmitBtn.disabled = false;
      consentSubmitBtn.textContent = '📮 최신 정보 신청하기';
      alert('일시적으로 신청 처리에 실패했습니다. 잠시 후 다시 시도해 주세요.');
    }
  });
}

// 다시 계산
document.getElementById('reset-btn').addEventListener('click', () => {
  resultSection.classList.remove('show');
  form.reset();
  selectedRegion = null;
  regionResult.classList.remove('show');
  setIndustryEnabled(true);      // ★[2026.6] 업종 라디오 활성 + 초기화
  resetIndustry();
  if (rootHelpContent) rootHelpContent.classList.remove('show');
  disqToggle.classList.remove('expanded');
  disqChecklist.classList.remove('show');
  disqToggleText.textContent = '결격사유 6개 항목 펼치기'; // ★[2026.6] 5개→6개 통일
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// 결격사유 섹션 토글
// ============================================================
const disqToggle = document.getElementById('disq-toggle');
const disqChecklist = document.getElementById('disq-checklist');
const disqToggleText = disqToggle.querySelector('.disq-toggle-text');

disqToggle.addEventListener('click', () => {
  const isExpanded = disqToggle.classList.toggle('expanded');
  disqChecklist.classList.toggle('show', isExpanded);
  disqToggleText.textContent = isExpanded
    ? '결격사유 항목 접기'
    : '결격사유 6개 항목 펼치기'; // ★[2026.6] 5개→6개 통일
});
