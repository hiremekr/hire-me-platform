(function() {
  var API_URL = 'https://script.google.com/macros/s/AKfycbwg14TmdT8_ieHiswYaoIQ78orlWyXysSj647VN2enwO2SUwnzrcgK6XaE1hl-Yi7Bn/exec';
  var FORMSPREE_URL = 'https://formspree.io/f/xjkaedgv';
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

  function buildCard(t, idx) {
    var gLabel = t.gender === '여' ? '여성' : '남성';
    var card = document.createElement('div');
    card.className = 'talent-card card-anim bg-white rounded-2xl overflow-hidden flex flex-col';
    card.style.animationDelay = (idx * 0.04) + 's';

    // 주요 업무 배지 (있을 때만)
    var careerBadge = '';
    if (t.mainCareer && t.mainCareer.trim()) {
      careerBadge =
        '<div style="position:absolute;top:14px;right:14px;background:rgba(255,255,255,0.95);padding:5px 12px;border-radius:100px;font-size:11px;font-weight:800;color:#0a66c2;box-shadow:0 2px 6px rgba(0,0,0,0.12);letter-spacing:-0.2px;">' +
        '💼 ' + escapeHtml(t.mainCareer) +
        '</div>';
    }

    card.innerHTML =
      '<div style="height:72px;background:linear-gradient(90deg,#0a66c2,#0952a0,#0a66c2);position:relative;overflow:hidden;flex-shrink:0">' + careerBadge + '</div>' +
      '<div style="padding:0 20px 20px;margin-top:-36px;flex:1;display:flex;flex-direction:column">' +
        '<div style="position:relative;width:72px;height:72px">' +
          '<div style="width:100%;height:100%;border-radius:50%;background:#fff;padding:3px;box-shadow:0 4px 12px rgba(0,0,0,.1)">' +
            '<div style="width:100%;height:100%;border-radius:50%;background:linear-gradient(135deg,#fef3c7,#fde68a);display:flex;align-items:center;justify-content:center;font-size:34px">' +
              getAvatar(t.gender) +
            '</div>' +
          '</div>' +
          '<div style="position:absolute;bottom:0;right:-2px;width:26px;height:26px;border:2.5px solid #fff;border-radius:50%;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.2)">' +
            getFlag(t.nationality) +
          '</div>' +
        '</div>' +
        '<div style="font-size:17px;font-weight:800;color:#0f172a;margin-top:12px">' + escapeHtml(t.name) + '</div>' +
        '<div style="font-size:13px;color:#475569;margin-top:3px">' + escapeHtml(t.nationality) + ' · 경력 ' + t.career + '년</div>' +
        '<div style="font-size:12px;color:#64748b;margin-top:6px">' + escapeHtml(t.nationality) + ' · ' + gLabel + ' · ' + t.age + '세</div>' +
        '<div style="height:1px;background:#e5e7eb;margin:14px 0"></div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">' +
          '<div style="background:#f1f5f9;padding:10px 12px;border-radius:8px"><div style="font-size:10px;color:#64748b;font-weight:700">경력</div><div style="font-size:13px;font-weight:800;color:#0f172a;margin-top:3px">' + t.career + '년</div></div>' +
          '<div style="background:#f1f5f9;padding:10px 12px;border-radius:8px"><div style="font-size:10px;color:#64748b;font-weight:700">한국어</div><div style="font-size:13px;font-weight:800;color:#0f172a;margin-top:3px">' + escapeHtml(t.korean || '미정') + '</div></div>' +
        '</div>' +
        '<div style="background:linear-gradient(135deg,#fef3c7,#fde68a);padding:12px 14px;border-radius:8px;display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;border:1px solid #fcd34d">' +
          '<span style="font-size:11px;color:#92400e;font-weight:700">🎯 희망 비자</span>' +
          '<span style="font-size:15px;font-weight:900;color:#78350f">' + escapeHtml(t.visa) + '</span>' +
        '</div>' +
        '<button class="card-btn">인재 정보 요청하기</button>' +
      '</div>';

    var btn = card.querySelector('.card-btn');
    btn.addEventListener('click', function() { openModal(t); });

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

    data.forEach(function(t, i) {
      grid.appendChild(buildCard(t, i));
    });
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

  function openModal(t) {
    var gLabel = t.gender === '여' ? '여성' : '남성';
    var careerInfo = t.mainCareer ? (' · ' + t.mainCareer) : '';
    var info = '👤 ' + t.name + ' | ' + t.nationality + ' | ' + gLabel + ' | ' + t.age + '세 | 경력 ' + t.career + '년' + careerInfo + ' | 희망 ' + t.visa;
    var hidden = t.name + ' (' + t.nationality + ', ' + gLabel + ', ' + t.age + '세, 경력 ' + t.career + '년' + careerInfo + ', 희망 ' + t.visa + ')';

    document.getElementById('modalTalentInfo').textContent = info;
    document.getElementById('contactForm').reset();
    document.getElementById('hiddenTalent').value = hidden;
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('submitBtn').textContent = '📨 문의 보내기';
    document.getElementById('contactForm').style.display = '';

    var s = document.getElementById('modalContent').querySelector('.submit-success');
    if (s) s.parentNode.removeChild(s);

    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  ['filterNation', 'filterVisa', 'filterGender', 'filterKorean'].forEach(function(id) {
    document.getElementById(id).addEventListener('change', applyFilters);
  });

  document.getElementById('resetFiltersBtn').addEventListener('click', resetFilters);
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);

  document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.textContent = '전송 중...';

    fetch(FORMSPREE_URL, {
      method: 'POST',
      body: new FormData(this),
      headers: { 'Accept': 'application/json' }
    }).then(function(r) {
      if (r.ok) {
        document.getElementById('contactForm').style.display = 'none';
        var s = document.createElement('div');
        s.className = 'submit-success';
        s.style.cssText = 'text-align:center;padding:20px 0';
        s.innerHTML = '<div style="font-size:52px;margin-bottom:12px">✅</div>' +
          '<h3 style="font-size:18px;font-weight:800;margin-bottom:8px">문의가 접수되었습니다!</h3>' +
          '<p style="font-size:14px;color:#64748b;line-height:1.6">담당 행정사가 확인 후<br>빠르게 연락드리겠습니다.<br><br><strong>행정사사무소 늘좋은</strong></p>';
        document.getElementById('modalContent').appendChild(s);
      } else {
        btn.disabled = false;
        btn.textContent = '📨 문의 보내기';
        alert('전송에 실패했습니다.');
      }
    }).catch(function() {
      btn.disabled = false;
      btn.textContent = '📨 문의 보내기';
      alert('네트워크 오류가 발생했습니다.');
    });
  });

  fetch(API_URL)
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
        o.value = n;
        o.textContent = n;
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
