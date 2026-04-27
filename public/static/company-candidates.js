(function() {
  var API_URL = 'https://script.google.com/macros/s/AKfycbwg14TmdT8_ieHiswYaoIQ78orlWyXysSj647VN2enwO2SUwnzrcgK6XaE1hl-Yi7Bn/exec';

  // 국가 → 국기 이모지 매핑
  var FLAG_EMOJI = {
    '네팔': '🇳🇵',
    '베트남': '🇻🇳',
    '미얀마': '🇲🇲',
    '방글라데시': '🇧🇩',
    '스리랑카': '🇱🇰',
    '인도네시아': '🇮🇩',
    '캄보디아': '🇰🇭',
    '우즈베키스탄': '🇺🇿',
    '몽골': '🇲🇳',
    '태국': '🇹🇭',
    '필리핀': '🇵🇭',
    '파키스탄': '🇵🇰',
    '인도': '🇮🇳',
    '중국': '🇨🇳',
    '라오스': '🇱🇦',
    '말레이시아': '🇲🇾',
    '이집트': '🇪🇬'
  };

  function getFlag(nationality) {
    return FLAG_EMOJI[nationality] || '🌏';
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // 데스크톱용 카드 (롤링 배너)
  function buildDesktopCard(c) {
    var gLabel = c.gender === '여' ? '여성' : '남성';
    var card = document.createElement('div');
    card.className = 'candidate-card';

    card.innerHTML =
      '<div class="text-center mb-6">' +
        '<div class="text-4xl mb-3">' + getFlag(c.nationality) + '</div>' +
      '</div>' +
      '<div class="space-y-2 mb-6 text-sm">' +
        '<div class="text-center font-bold text-navy text-base">' +
          escapeHtml(c.nationality) + ' / ' + gLabel + ' / ' + c.age + '세' +
        '</div>' +
        '<div>이름: ' + escapeHtml(c.name) + '</div>' +
        '<div>경력: ' + c.career + '년</div>' +
        '<div>한국어: ' + escapeHtml(c.korean || '미정') + '</div>' +
        '<div>희망비자: ' + escapeHtml(c.visa) + '</div>' +
      '</div>' +
      '<a href="/company/request?talent_id=' + c.no + '&talent_name=' + encodeURIComponent(c.name) + '" ' +
        'class="block text-center py-3 px-6 rounded-xl font-bold transition-all bg-teal-blue text-white hover:bg-opacity-90 hover:no-underline">' +
        '인재 정보 요청' +
      '</a>';

    return card;
  }

  // 모바일용 카드 (그리드)
  function buildMobileCard(c) {
    var gLabel = c.gender === '여' ? '여성' : '남성';
    var card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-md overflow-hidden';

    card.innerHTML =
      '<div class="bg-gradient-to-r from-teal-blue to-green p-3">' +
        '<div class="flex items-center justify-center">' +
          '<span class="text-3xl">' + getFlag(c.nationality) + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="p-3">' +
        '<div class="text-xs space-y-1 mb-3">' +
          '<div class="font-bold text-center text-navy mb-2">' +
            escapeHtml(c.nationality) + ' / ' + gLabel + ' / ' + c.age + '세' +
          '</div>' +
          '<div>이름: ' + escapeHtml(c.name) + '</div>' +
          '<div>경력: ' + c.career + '년</div>' +
          '<div>한국어: ' + escapeHtml(c.korean || '미정') + '</div>' +
          '<div>희망비자: ' + escapeHtml(c.visa) + '</div>' +
        '</div>' +
        '<a href="/company/request?talent_id=' + c.no + '&talent_name=' + encodeURIComponent(c.name) + '" ' +
          'class="block w-full bg-teal-blue text-white py-2 rounded text-sm text-center hover:bg-opacity-90 hover:no-underline">' +
          '인재 정보 요청' +
        '</a>' +
      '</div>';

    return card;
  }

  // 데이터 로드
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

      // 데스크톱 - 롤링 배너 (전체 인재)
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

      // 롤링 캐러셀이 카드 로드 후 작동하도록 트리거
      // (기존 carousel 스크립트가 DOM 로드 시점에 초기화 안 됐을 수 있어서)
      if (typeof window.initCarousel === 'function') {
        window.initCarousel();
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
