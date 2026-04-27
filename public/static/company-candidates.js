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

  function getFlag(n) {
    return FLAGS[n] || '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#94a3b8"/></svg>';
  }

  function getAvatar(g) { return g === '여' ? '👩🏽' : '👨🏽'; }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // 인재풀 페이지와 동일한 디자인
  function buildCard(c) {
    var gLabel = c.gender === '여' ? '여성' : '남성';
    var card = document.createElement('div');
    card.className = 'candidate-card';
    card.style.cssText = 'background:#fff;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 1px 3px rgba(0,0,0,0.04);transition:all 0.22s cubic-bezier(0.4,0,0.2,1);display:flex;flex-direction:column;width:100%;';

    card.addEventListener('mouseenter', function() {
      card.style.transform = 'translateY(-4px)';
      card.style.boxShadow = '0 14px 28px rgba(10,102,194,0.13)';
      card.style.borderColor = '#0a66c2';
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
      card.style.borderColor = '#e5e7eb';
    });

    var careerBadge = '';
    if (c.mainCareer && c.mainCareer.trim()) {
      careerBadge =
        '<div style="position:absolute;top:14px;right:14px;background:rgba(255,255,255,0.95);padding:5px 12px;border-radius:100px;font-size:11px;font-weight:800;color:#0a66c2;box-shadow:0 2px 6px rgba(0,0,0,0.12);letter-spacing:-0.2px;">' +
        '💼 ' + escapeHtml(c.mainCareer) +
        '</div>';
    }

    card.innerHTML =
      '<div style="height:72px;background:linear-gradient(90deg,#0a66c2,#0952a0,#0a66c2);position:relative;overflow:hidden;flex-shrink:0">' + careerBadge + '</div>' +
      '<div style="padding:0 20px 20px;margin-top:-36px;flex:1;display:flex;flex-direction:column">' +
        '<div style="position:relative;width:72px;height:72px">' +
          '<div style="width:100%;height:100%;border-radius:50%;background:#fff;padding:3px;box-shadow:0 4px 12px rgba(0,0,0,.1)">' +
            '<div style="width:100%;height:100%;border-radius:50%;background:linear-gradient(135deg,#fef3c7,#fde68a);display:flex;align-items:center;justify-content:center;font-size:34px">' +
              getAvatar(c.gender) +
            '</div>' +
          '</div>' +
          '<div style="position:absolute;bottom:0;right:-2px;width:26px;height:26px;border:2.5px solid #fff;border-radius:50%;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.2)">' +
            getFlag(c.nationality) +
          '</div>' +
        '</div>' +
        '<div style="font-size:17px;font-weight:800;color:#0f172a;margin-top:12px">' + escapeHtml(c.name) + '</div>' +
        '<div style="font-size:13px;color:#475569;margin-top:3px">' + escapeHtml(c.nationality) + ' · 경력 ' + c.career + '년</div>' +
        '<div style="font-size:12px;color:#64748b;margin-top:6px">' + escapeHtml(c.nationality) + ' · ' + gLabel + ' · ' + c.age + '세</div>' +
        '<div style="height:1px;background:#e5e7eb;margin:14px 0"></div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">' +
          '<div style="background:#f1f5f9;padding:10px 12px;border-radius:8px"><div style="font-size:10px;color:#64748b;font-weight:700">경력</div><div style="font-size:13px;font-weight:800;color:#0f172a;margin-top:3px">' + c.career + '년</div></div>' +
          '<div style="background:#f1f5f9;padding:10px 12px;border-radius:8px"><div style="font-size:10px;color:#64748b;font-weight:700">한국어</div><div style="font-size:13px;font-weight:800;color:#0f172a;margin-top:3px">' + escapeHtml(c.korean || '미정') + '</div></div>' +
        '</div>' +
        '<div style="background:linear-gradient(135deg,#fef3c7,#fde68a);padding:12px 14px;border-radius:8px;display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;border:1px solid #fcd34d">' +
          '<span style="font-size:11px;color:#92400e;font-weight:700">🎯 희망 비자</span>' +
          '<span style="font-size:15px;font-weight:900;color:#78350f">' + escapeHtml(c.visa) + '</span>' +
        '</div>' +
        '<a href="/company/request?talent_id=' + c.no + '&talent_name=' + encodeURIComponent(c.name) + '" ' +
          'style="display:block;width:100%;padding:10px;border-radius:9999px;border:2px solid #0a66c2;color:#0a66c2;background:#fff;font-weight:700;font-size:13px;text-align:center;text-decoration:none;transition:all 0.2s;margin-top:auto" ' +
          'onmouseover="this.style.background=\'#0a66c2\';this.style.color=\'#fff\'" ' +
          'onmouseout="this.style.background=\'#fff\';this.style.color=\'#0a66c2\'">' +
          '인재 정보 요청' +
        '</a>' +
      '</div>';

    return card;
  }

  fetch(API_URL)
    .then(function(r) { return r.json(); })
    .then(function(json) {
      var candidates = json.talent || [];

      if (candidates.length === 0) {
        var emptyMsg = '<div style="text-align:center;padding:40px;color:#94a3b8;width:100%">현재 등록된 인재가 없습니다.</div>';
        var dt = document.getElementById('candidate-track');
        var mg = document.getElementById('mobile-candidate-grid');
        if (dt) dt.innerHTML = emptyMsg;
        if (mg) mg.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:#94a3b8">현재 등록된 인재가 없습니다.</div>';
        return;
      }

      // 데스크톱 - 롤링 배너
      var track = document.getElementById('candidate-track');
      if (track) {
        track.innerHTML = '';
        candidates.forEach(function(c) {
          track.appendChild(buildCard(c));
        });
      }

      // 모바일 - 그리드 (최대 12명)
      var mobileGrid = document.getElementById('mobile-candidate-grid');
      if (mobileGrid) {
        mobileGrid.innerHTML = '';
        candidates.slice(0, 12).forEach(function(c) {
          mobileGrid.appendChild(buildCard(c));
        });
      }
    })
    .catch(function(err) {
      console.error('인재 데이터 로드 실패:', err);
      var errMsg = '<div style="text-align:center;padding:40px;color:#94a3b8;width:100%">데이터를 불러오지 못했습니다.</div>';
      var dt = document.getElementById('candidate-track');
      var mg = document.getElementById('mobile-candidate-grid');
      if (dt) dt.innerHTML = errMsg;
      if (mg) mg.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:#94a3b8">데이터를 불러오지 못했습니다.</div>';
    });
})();
