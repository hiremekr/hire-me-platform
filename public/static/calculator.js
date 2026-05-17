// ============================================================
// 시·군·구 데이터 (89 + 18 = 107)
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
const rootIndustryRow = document.getElementById('root-industry-row');
const rootIndustryCheck = document.getElementById('root-industry');

let selectedRegion = null; // { type: 'declining'|'attention'|'general', sido, name } 또는 null
let activeIdx = -1;

// 모든 시·군·구 통합 (declining, attention 표시 + 일반은 검색 시 그 외로 처리)
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
      // 일반지역 안내 항목
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
  
  // 추가로 일반지역 옵션 (마지막에)
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
    rootIndustryRow.classList.remove('disabled');
  } else if (region.type === 'declining') {
    regionInput.value = `${region.name} (${region.short})`;
    regionResult.className = 'region-result declining show';
    regionResult.innerHTML = `
      <strong>${escapeHtml(region.name)}</strong> · 인구감소지역 (89개)
      <span class="small">F-2-R · E-7-4R 신청 모두 가능 (신규 채용 + 자격변경)</span>
    `;
    rootIndustryRow.classList.add('disabled');
    rootIndustryCheck.checked = false;
  } else if (region.type === 'attention') {
    regionInput.value = `${region.name} (${region.short})`;
    regionResult.className = 'region-result attention show';
    regionResult.innerHTML = `
      <strong>${escapeHtml(region.name)}</strong> · 인구감소관심지역 (18개)
      <span class="small">E-7-4R은 자격변경만 가능 · F-2-R 신청은 불가</span>
    `;
    rootIndustryRow.classList.add('disabled');
    rootIndustryCheck.checked = false;
  }
  suggestionsEl.classList.remove('show');
}

regionInput.addEventListener('input', () => {
  // 입력이 변경되면 선택 해제
  selectedRegion = null;
  regionResult.classList.remove('show');
  rootIndustryRow.classList.remove('disabled');
  
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

// 외부 클릭 시 자동완성 닫기
document.addEventListener('click', (e) => {
  if (!regionInput.contains(e.target) && !suggestionsEl.contains(e.target)) {
    suggestionsEl.classList.remove('show');
  }
});

// 뿌리산업 도움말 토글
const rootHelpToggle = document.getElementById('root-help-toggle');
const rootHelpContent = document.getElementById('root-help-content');
rootHelpToggle.addEventListener('click', () => {
  rootHelpContent.classList.toggle('show');
});

// ============================================================
// 계산 로직 (검증 완료된 함수)
// ============================================================

// E-7-4R 구간별 쿼터 (지침 표 기준)
function calcE74RTierQuota(k) {
  if (k <= 0) return 0;
  if (k <= 5) return 3;
  if (k <= 50) return Math.ceil(k * 0.5);
  if (k <= 100) return Math.min(Math.ceil(k * 0.5), 35);
  if (k <= 150) return 40;
  return 50; // 151명 이상
}

function calculate(input) {
  const { regionType, koreans, foreigners, hasE9, hasE74KPoint } = input;
  const totalWorkers = koreans + foreigners;
  
  const result = { f2r: null, e74Combined: null, e74r: null, e74kpoint: null, e71: null };
  
  // F-2-R
  if (regionType === 'declining') {
    if (koreans === 0) {
      // 한국인 0명 시 F-2-R 신청은 일반적으로 어려움 — 행정사 상담 유도
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
  
  // 한국인 0명 특례 (E-9 보유 시)
  const isKZeroSpecial = (koreans === 0 && hasE9);
  
  // ====================================================
  // E-7-4R 쿼터 계산
  //   기본: 구간별 (지침 표)
  //   특례: 인구감소지역 AND K-POINT 동시 고용 AND 내국인 71명 초과 → 50%
  // ====================================================
  const e74rSpecial50 = (regionType === 'declining' && hasE74KPoint && koreans > 71);
  
  let e74rQuota;
  if (isKZeroSpecial) {
    // 한국인 0명 근속자 특례
    if (regionType === 'declining' || regionType === 'rootIndustry') e74rQuota = 2;
    else if (regionType === 'attention') e74rQuota = 1; // 관심지역 1명 (뿌리산업이면 2명이나, attention에서는 별도 처리 필요시 분기)
    else e74rQuota = 1;
  } else if (e74rSpecial50) {
    e74rQuota = Math.ceil(koreans * 0.5); // 50% 특례
  } else {
    e74rQuota = calcE74RTierQuota(koreans); // 구간별 (기본)
  }
  
  // E-7-4R 신청 가능 여부
  if (regionType === 'declining') {
    if (!hasE9) result.e74r = { available: false, reason: 'no-e9' };
    else result.e74r = { 
      available: true, 
      quota: e74rQuota, 
      mode: 'full',
      special50: e74rSpecial50
    };
  } else if (regionType === 'attention') {
    if (!hasE9) result.e74r = { available: false, reason: 'no-e9' };
    else result.e74r = { 
      available: true, 
      quota: e74rQuota, 
      mode: 'change-only',
      special50: false // 관심지역은 50% 특례 불가
    };
  } else {
    result.e74r = { available: false, reason: 'region' };
  }
  
  // ====================================================
  // E-7-4 K-POINT 쿼터 (기존 로직 유지)
  //   비율: 인구감소지역/관심지역/뿌리산업 = 50%, 그 외 = 30%
  //   추가: 상시근로자(내국인+외국인)의 20% 상한
  // ====================================================
  let combinedRate;
  if (regionType === 'declining' || regionType === 'attention' || regionType === 'rootIndustry') combinedRate = 0.5;
  else combinedRate = 0.3;
  
  const combinedQuotaBase = isKZeroSpecial
    ? ((regionType === 'declining' || regionType === 'rootIndustry' || regionType === 'attention') ? 2 : 1)
    : Math.ceil(koreans * combinedRate);
  
  if (!hasE9) {
    result.e74kpoint = { available: false, reason: 'no-e9' };
  } else {
    let kQ;
    if (isKZeroSpecial) {
      kQ = combinedQuotaBase;
    } else {
      const totalRule = Math.ceil(totalWorkers * 0.2);
      kQ = Math.min(combinedQuotaBase, totalRule);
    }
    result.e74kpoint = { available: true, quota: kQ };
  }
  
  // 통합 쿼터 정보 (표시용)
  result.e74Combined = {
    quota: combinedQuotaBase,
    rate: combinedRate,
    isSpecial: isKZeroSpecial,
    available: hasE9,
  };
  
  // E-7-1
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
  const { regionType } = input;
  const cards = document.getElementById('result-cards');
  let html = '';
  
  // F-2-R
  if (result.f2r.available) {
    html += `
      <div class="visa-card">
        <div class="visa-head">
          <div class="visa-name">F-2-R <span class="mode-badge mode-full">신규+자격변경</span></div>
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
  
  // E-7-4 통합 쿼터 (R + K-POINT)
  if (result.e74Combined.available) {
    const topDesc = result.e74Combined.isSpecial
      ? '한국인 0명 특례가 적용됩니다 (E-9 1명 이상 보유 시).'
      : 'E-7-4R과 K-POINT는 같은 쿼터를 공유합니다. 두 비자를 합산해서 보유할 수 있는 인원과, K-POINT만 단독으로 자격변경할 때 가능한 인원이 아래와 같이 나뉩니다.';
    
    // R 정보 — "E-7-4R + K-POINT 합산 최대" 의미
    let rLine;
    if (result.e74r.available) {
      const modeBadge = result.e74r.mode === 'full' 
        ? '<span class="mode-badge mode-full">신규+자격변경</span>'
        : '<span class="mode-badge mode-change-only">자격변경만</span>';
      const special50Badge = result.e74r.special50
        ? ' <span class="mode-badge mode-special50">50% 특례 적용</span>'
        : '';
      let rDetail;
      if (result.e74r.special50) {
        rDetail = 'E-7-4R + K-POINT 합산하여 보유할 수 있는 최대 인원입니다 (인구감소지역 50% 특례 적용 중)';
      } else if (result.e74r.mode === 'full') {
        rDetail = 'E-7-4R + K-POINT 합산하여 보유할 수 있는 최대 인원입니다 (인구감소지역 — 신규 채용 + 자격변경 모두 가능)';
      } else {
        rDetail = 'E-7-4R + K-POINT 합산하여 보유할 수 있는 최대 인원입니다 (인구감소관심지역 — 재직자 자격변경만 가능)';
      }
      rLine = `
        <div class="visa-sub-item">
          <div class="label-area">
            <div class="label-name">E-7-4R ${modeBadge}${special50Badge}</div>
            <div class="label-detail">${rDetail}</div>
          </div>
          <div class="quota-num">${result.e74r.quota}명</div>
        </div>
      `;
    } else {
      rLine = `
        <div class="visa-sub-item unavailable">
          <div class="label-area">
            <div class="label-name">E-7-4R <span class="mode-badge mode-na">신청 불가</span></div>
            <div class="label-detail">인구감소지역 또는 인구감소관심지역에서만 신청 가능</div>
          </div>
          <div class="quota-num">—</div>
        </div>
      `;
    }
    
    // K-POINT 정보 — "E-7-4R 없이 K-POINT 단독 자격변경 시" 의미
    let kLine = `
      <div class="visa-sub-item">
        <div class="label-area">
          <div class="label-name">E-7-4 K-POINT</div>
          <div class="label-detail">E-7-4R 없이 K-POINT만 자격변경할 때 가능한 인원입니다 (E-7-4 사업장변경자 채용 시에도 같은 쿼터에서 차감)</div>
        </div>
        <div class="quota-num">${result.e74kpoint.quota}명</div>
      </div>
    `;
    
    // 추가 안내 (사용자가 알아야 할 정보만 남김)
    let notes = [];
    if (result.e74r.special50) {
      notes.push('인구감소지역 + K-POINT 동시 고용 + 내국인 72명 이상 조건을 충족하여 50% 특례가 적용되었습니다.');
    }
    
    const notesHtml = notes.length > 0
      ? `<div class="visa-sub-note">${notes.map(n => `<p>※ ${n}</p>`).join('')}</div>`
      : '';
    
    html += `
      <div class="visa-card">
        <div class="visa-head">
          <div class="visa-name">E-7-4 (R + K-POINT)</div>
          <div class="visa-quota"></div>
        </div>
        <div class="visa-desc">${topDesc}</div>
        <div class="visa-sub">
          ${rLine}
          ${kLine}
          ${notesHtml}
        </div>
        <div style="background: var(--warn-bg); border: 1.5px solid var(--warn-border); border-radius: 8px; padding: 14px 16px; margin-top: 14px; font-size: 12.5px; line-height: 1.65; color: #78350F;">
          <strong style="color: var(--warn); display: block; margin-bottom: 5px; font-size: 13px;">⚠️ E-7-4는 매우 예민한 비자입니다</strong>
          본 계산기 결과는 <strong>참고용 수치</strong>이며, 실제 가능 인원은 직종, 임금, 회사 이력 등에 따라 달라질 수 있습니다. 특히 <strong>구직중인 외국인을 채용</strong>하시려는 경우, 반드시 <strong>관할 지자체 · 출입국관리사무소 · 담당 행정사</strong>와 사전에 상의하신 후 진행하시기 바랍니다.
        </div>
      </div>
    `;
  } else {
    // E-9 미보유
    html += `
      <div class="visa-card unavailable">
        <div class="visa-head">
          <div class="visa-name">E-7-4 (R + K-POINT)</div>
          <div class="visa-na-text">신청 불가</div>
        </div>
        <div class="visa-desc">E-7-4 계열은 현재 E-9 비자 외국인이 1명 이상 재직 중이어야 신청 가능합니다.</div>
      </div>
    `;
  }
  
  // E-7-1
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
  
  // ===== 배우자 비자 안내 (인구감소지역 / 관심지역에서만) =====
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
  
  // 헤더 서브타이틀 업데이트
  const subtitle = document.getElementById('result-subtitle');
  let regionLabel;
  if (regionType === 'declining') regionLabel = '인구감소지역';
  else if (regionType === 'attention') regionLabel = '인구감소관심지역';
  else if (regionType === 'rootIndustry') regionLabel = '뿌리산업 (일반지역)';
  else regionLabel = '일반지역';
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
  
  // 검증
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
  
  // E-7-4 K-POINT 보유 여부 (신규)
  const e74kYesEl = document.getElementById('has-e74k-yes');
  const e74kNoEl = document.getElementById('has-e74k-no');
  let hasE74KPoint = false;
  if (e74kYesEl && e74kNoEl) {
    // HTML에 해당 라디오가 있을 때만 검증
    if (!e74kYesEl.checked && !e74kNoEl.checked) {
      alert('현재 회사에 E-7-4 K-POINT 외국인 보유 여부를 선택해주세요.');
      return;
    }
    hasE74KPoint = e74kYesEl.checked;
  }
  
  // regionType 결정
  let regionType;
  if (selectedRegion.type === 'declining') regionType = 'declining';
  else if (selectedRegion.type === 'attention') regionType = 'attention';
  else if (selectedRegion.type === 'general') {
    regionType = rootIndustryCheck.checked ? 'rootIndustry' : 'general';
  }
  
  // 한국인 0명인데 외국인도 0명인 경우 안내
  if (koreans === 0 && foreigners === 0) {
    alert('회사에 직원이 1명 이상 있어야 합니다.');
    return;
  }
  
  // 결격사유 체크
  const disqualifiers = document.querySelectorAll('.disq:checked');
  const hasDisq = disqualifiers.length > 0;
  
  // 계산
  const input = { regionType, koreans, foreigners, hasE9, hasE74KPoint };
  const result = calculate(input);
  
  // 렌더링
  renderResults(result, input);
  
  if (hasDisq) {
    warningBanner.style.display = 'flex';
  } else {
    warningBanner.style.display = 'none';
  }
  
  resultSection.classList.add('show');
  
  // 결과 영역으로 스크롤
  setTimeout(() => {
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
});

// 다시 계산
document.getElementById('reset-btn').addEventListener('click', () => {
  resultSection.classList.remove('show');
  form.reset();
  selectedRegion = null;
  regionResult.classList.remove('show');
  rootIndustryRow.classList.remove('disabled');
  rootHelpContent.classList.remove('show');
  disqToggle.classList.remove('expanded');
  disqChecklist.classList.remove('show');
  disqToggleText.textContent = '결격사유 5개 항목 펼치기';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// 결격사유 섹션 토글 (선택사항 — 펼치기/접기)
// ============================================================
const disqToggle = document.getElementById('disq-toggle');
const disqChecklist = document.getElementById('disq-checklist');
const disqToggleText = disqToggle.querySelector('.disq-toggle-text');

disqToggle.addEventListener('click', () => {
  const isExpanded = disqToggle.classList.toggle('expanded');
  disqChecklist.classList.toggle('show', isExpanded);
  disqToggleText.textContent = isExpanded
    ? '결격사유 항목 접기'
    : '결격사유 5개 항목 펼치기';
});
