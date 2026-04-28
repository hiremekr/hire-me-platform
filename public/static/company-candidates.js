(function() {
  var API_URL = 'https://script.google.com/macros/s/AKfycbwg14TmdT8_ieHiswYaoIQ78orlWyXysSj647VN2enwO2SUwnzrcgK6XaE1hl-Yi7Bn/exec';

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

  function getFlag(n) { return FLAGS[n] || '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#94a3b8"/></svg>'; }
  function getAvatar(g) { return g === '여' ? '👩🏽' : '👨🏽'; }
  function escapeHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  // 인재 정보 요청 페이지로 이동 URL 생성
  function buildRequestUrl(c) {
    return '/company/request?' +
      'talent_id=' + c.no +
      '&talent_name=' + encodeURIComponent(c.name) +
      '&talent_nation=' + encodeURIComponent(c.nationality) +
      '&talent_visa=' + encodeURIComponent(c.visa) +
      '&talent_career=' + c.career +
      '&talent_korean=' + encodeURIComponent(c.korean || '') +
      '&talent_gender=' + encodeURIComponent(c.gender) +
      '&talent_age=' + c.age +
      '&talent_main=' + encodeURIComponent(c.mainCareer || '');
  }

  // 카드 내용 HTML 생성 (공통)
  function buildCardHTML(c) {
    var gLabel = c.gender === '여' ? '여성' : '남성';
    var careerBadge = '';
    if (c.mainCareer && String(c.mainCareer).trim()) {
      careerBadge = '<div class="tcc-badge">💼 ' + escapeHtml(c.mainCareer) + '</div>';
    }

    return '<div class="tcc-header">' + careerBadge + '</div>' +
      '<div class="tcc-body">' +
        '<div class="tcc-avatar-wrap">' +
          '<div class="tcc-avatar-bg">' +
            '<div class="tcc-avatar">' + getAvatar(c.gender) + '</div>' +
          '</div>' +
          '<div class="tcc-flag">' + getFlag(c.nationality) + '</div>' +
        '</div>' +
        '<div class="tcc-name">' + escapeHtml(c.name) + '</div>' +
        '<div class="tcc-sub">' + escapeHtml(c.nationality) + ' · 경력 ' + c.career + '년</div>' +
        '<div class="tcc-meta">' + escapeHtml(c.nationality) + ' · ' + gLabel + ' · ' + c.age + '세</div>' +
        '<div class="tcc-divider"></div>' +
        '<div class="tcc-stats">' +
          '<div class="tcc-stat">' +
            '<div class="tcc-stat-label">경력</div>' +
            '<div class="tcc-stat-val">' + c.career + '년</div>' +
          '</div>' +
          '<div class="tcc-stat">' +
            '<div class="tcc-stat-label">한국어</div>' +
            '<div class="tcc-stat-val">' + escapeHtml(c.korean || '미정') + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="tcc-visa">' +
          '<span class="tcc-visa-label">🎯 희망 비자</span>' +
          '<span class="tcc-visa-type">' + escapeHtml(c.visa) + '</span>' +
        '</div>' +
        '<a href="' + buildRequestUrl(c) + '" class="tcc-btn">인재 정보 요청하기</a>' +
      '</div>';
  }

  // 데스크톱 카드 (carousel용 - candidate-card 클래스 유지)
  function buildDesktopCard(c) {
    var card = document.createElement('div');
    card.className = 'candidate-card talent-card-c';
    card.innerHTML = buildCardHTML(c);
    return card;
  }

  // 모바일 카드 (carousel과 무관 - candidate-card 클래스 없음)
  function buildMobileCard(c) {
    var card = document.createElement('div');
    card.className = 'talent-card-c';
    card.innerHTML = buildCardHTML(c);
    return card;
  }

  // 캐시 방지 + 강력 fetch
  fetch(API_URL + '?t=' + Date.now(), { cache: 'no-store' })
    .then(function(r) { return r.json(); })
    .then(function(json) {
      var candidates = json.talent || [];

      var emptyHtml = '<div style="text-align:center;padding:40px;color:#94a3b8;width:100%">현재 등록된 인재가 없습니다.</div>';

      if (candidates.length === 0) {
        var dt0 = document.getElementById('candidate-track');
        var mg0 = document.getElementById('mobile-candidate-grid');
        if (dt0) dt0.innerHTML = emptyHtml;
        if (mg0) mg0.innerHTML = '<div style="grid-column:1/-1">' + emptyHtml + '</div>';
        return;
      }

      // 데스크톱 - 롤링 배너
      var track = document.getElementById('candidate-track');
      if (track) {
        track.innerHTML = '';
        candidates.forEach(function(c) {
          track.appendChild(buildDesktopCard(c));
        });
      }

      // 모바일 - 그리드 (최대 12명)
      var mobileGrid = document.getElementById('mobile-candidate-grid');
      if (mobileGrid) {
        mobileGrid.innerHTML = '';
        candidates.slice(0, 12).forEach(function(c) {
          mobileGrid.appendChild(buildMobileCard(c));
        });
      }
    })
    .catch(function(err) {
      console.error('인재 데이터 로드 실패:', err);
      var errMsg = '<div style="text-align:center;padding:40px;color:#94a3b8;width:100%">데이터를 불러오지 못했습니다.</div>';
      var dt = document.getElementById('candidate-track');
      var mg = document.getElementById('mobile-candidate-grid');
      if (dt) dt.innerHTML = errMsg;
      if (mg) mg.innerHTML = '<div style="grid-column:1/-1">' + errMsg + '</div>';
    });
})();
