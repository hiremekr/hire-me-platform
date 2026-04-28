(function() {
  var API_URL = 'https://script.google.com/macros/s/AKfycbwg14TmdT8_ieHiswYaoIQ78orlWyXysSj647VN2enwO2SUwnzrcgK6XaE1hl-Yi7Bn/exec';
  var allTalent = [];

  var FLAGS = {
    '네팔': '<svg viewBox="0 0 60 72" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 60,26 0,52" fill="#DC143C"/><polygon points="0,0 50,22 0,44" fill="#DC143C" stroke="#003893" stroke-width="3"/><polygon points="0,44 50,22 0,72" fill="#003893"/></svg>',
    '미얀마': '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="7" fill="#FECB00"/><rect y="7" width="30" height="6" fill="#34B233"/><rect y="13" width="30" height="7" fill="#EA2839"/></svg>',
    '방글라데시': '<svg viewBox="0 0 30 18" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="18" fill="#006A4E"/><circle cx="14" cy="9" r="5.5" fill="#F42A41"/></svg>',
    '베트남': '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#DA251D"/><polygon points="15,5 17,11 23,11 18,14 20,20 15,16 10,20 12,14 7,11 13,11" fill="#FFFF00"/></svg>',
    '스리랑카': '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#FFBE29"/><rect x="0" width="4" height="20" fill="#8D153A"/><rect x="4" width="4" height="20" fill="#00843D"/></svg>',
    '인도네시아': '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="10" fill="#CE1126"/><rect y="10" width="30" height="10" fill="#FFF"/></svg>',
    '태국': '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#A51931"/><rect y="4" width="30" height="12" fill="#F4F5F8"/><rect y="7" width="30" height="6" fill="#2D2A4A"/></svg>',
    '캄보디아': '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="7" fill="#032EA1"/><rect y="7" width="30" height="6" fill="#E00025"/><rect y="13" width="30" height="7" fill="#032EA1"/></svg>',
    '필리핀': '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="10" fill="#0038A8"/><rect y="10" width="30" height="10" fill="#CE1126"/><polygon points="0,0 12,10 0,20" fill="#FCD116"/></svg>',
    '몽골': '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="20" fill="#C4272F"/><rect x="10" width="10" height="20" fill="#015197"/><rect x="20" width="10" height="20" fill="#C4272F"/></svg>',
    '우즈베키스탄': '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="7" fill="#1EB53A"/><rect y="7" width="30" height="6" fill="#fff"/><rect y="13" width="30" height="7" fill="#CE1126"/></svg>',
    '파키스탄': '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="7" height="20" fill="#fff"/><rect x="7" width="23" height="20" fill="#01411C"/></svg>'
  };

  function getFlag(n) {
    return FLAGS[n] || '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#94a3b8"/></svg>';
  }

  function getAvatar(g) { return g === '여' ? '👩🏽' : '👨🏽'; }

  function getKoreanNum(k) {
    if (!k) return 0;
    var m = String(k).match(/(\d+)/);
    return m ? parseInt(m[1]) : 0;
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // 인재 정보 요청 페이지로 이동 (모든 정보 URL 파라미터로 전달)
  function gotoRequestPage(t) {
    var url = '/company/request?' +
      'talent_id=' + t.no +
      '&talent_name=' + encodeURIComponent(t.name) +
      '&talent_nation=' + encodeURIComponent(t.nationality) +
      '&talent_visa=' + encodeURIComponent(t.visa) +
      '&talent_career=' + t.career +
      '&talent_korean=' + encodeURIComponent(t.korean || '') +
      '&talent_gender=' + encodeURIComponent(t.gender) +
      '&talent_age=' + t.age +
      '&talent_main=' + encodeURIComponent(t.mainCareer || '');
    window.location.href = url;
  }

  function buildCard(t, idx) {
    var gLabel = t.gender === '여' ? '여성' : '남성';
    var card = document.createElement('div');
    card.className = 'talent-card card-anim';
    card.style.animationDelay = (idx * 0.04) + 's';

    var careerBadge = '';
    if (t.mainCareer && String(t.mainCareer).trim()) {
      careerBadge = '<div class="tc-badge">💼 ' + escapeHtml(t.mainCareer) + '</div>';
    }

    card.innerHTML =
      '<div class="tc-header">' + careerBadge + '</div>' +
      '<div class="tc-body">' +
        '<div class="tc-avatar-wrap">' +
          '<div class="tc-avatar-bg">' +
            '<div class="tc-avatar">' + getAvatar(t.gender) + '</div>' +
          '</div>' +
          '<div class="tc-flag">' + getFlag(t.nationality) + '</div>' +
        '</div>' +
        '<div class="tc-name">' + escapeHtml(t.name) + '</div>' +
        '<div class="tc-sub">' + escapeHtml(t.nationality) + ' · 경력 ' + t.career + '년</div>' +
        '<div class="tc-meta">' + escapeHtml(t.nationality) + ' · ' + gLabel + ' · ' + t.age + '세</div>' +
        '<div class="tc-divider"></div>' +
        '<div class="tc-stats">' +
          '<div class="tc-stat">' +
            '<div class="tc-stat-label">경력</div>' +
            '<div class="tc-stat-val">' + t.career + '년</div>' +
          '</div>' +
          '<div class="tc-stat">' +
            '<div class="tc-stat-label">한국어</div>' +
            '<div class="tc-stat-val">' + escapeHtml(t.korean || '미정') + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="tc-visa">' +
          '<span class="tc-visa-label">🎯 희망 비자</span>' +
          '<span class="tc-visa-type">' + escapeHtml(t.visa) + '</span>' +
        '</div>' +
        '<button class="tc-btn">인재 정보 요청하기</button>' +
      '</div>';

    var btn = card.querySelector('.tc-btn');
    btn.addEventListener('click', function() { gotoRequestPage(t); });

    return card;
  }

  function renderCards(data) {
    var grid = document.getElementById('cardGrid');
    document.getElementById('resultCount').textContent = data.length;

    while (grid.firstChild) grid.removeChild(grid.firstChild);

    if (data.length === 0) {
      var empty = document.createElement('div');
      empty.style.cssText = 'grid-column:1/-1;text-align:center;padding:60px 20px;color:#94a3b8';
      empty.innerHTML = '<div style="font-size:48px;margin-bottom:12px">🔍</div><p>조건에 맞는 인재가 없습니다.</p>';
      grid.appendChild(empty);
      return;
    }

    data.forEach(function(t, i) { grid.appendChild(buildCard(t, i)); });
  }

  function applyFilters() {
    var n = document.getElementById('filterNation').value;
    var v = document.getElementById('filterVisa').value;
    var g = document.getElementById('filterGender').value;
    var k = document.getElementById('filterKorean').value;
    renderCards(allTalent.filter(function(t) {
      if (n && t.nationality !== n) return false;
      if (v && t.visa !== v) return false;
      if (g && t.gender !== g) return false;
      if (k && getKoreanNum(t.korean) !== parseInt(k)) return false;
      return true;
    }));
  }

  function resetFilters() {
    ['filterNation', 'filterVisa', 'filterGender', 'filterKorean'].forEach(function(id) {
      document.getElementById(id).value = '';
    });
    renderCards(allTalent);
  }

  ['filterNation', 'filterVisa', 'filterGender', 'filterKorean'].forEach(function(id) {
    document.getElementById(id).addEventListener('change', applyFilters);
  });
  document.getElementById('resetFiltersBtn').addEventListener('click', resetFilters);

  // 캐시 방지를 위해 timestamp 추가
  fetch(API_URL + '?t=' + Date.now(), { cache: 'no-store' })
    .then(function(r) { return r.json(); })
    .then(function(json) {
      allTalent = json.talent || [];
      document.getElementById('totalCount').textContent = allTalent.length;

      var nations = allTalent.map(function(t) { return t.nationality; })
        .filter(function(v, i, a) { return a.indexOf(v) === i; })
        .sort();
      var sel = document.getElementById('filterNation');
      nations.forEach(function(n) {
        var o = document.createElement('option');
        o.value = n; o.textContent = n;
        sel.appendChild(o);
      });

      renderCards(allTalent);
      document.getElementById('ctaSection').style.display = '';
    })
    .catch(function(err) {
      console.error('데이터 로드 실패:', err);
      var grid = document.getElementById('cardGrid');
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#94a3b8"><div style="font-size:48px;margin-bottom:12px">⚠️</div><p>데이터를 불러오지 못했습니다.</p></div>';
    });
})();
