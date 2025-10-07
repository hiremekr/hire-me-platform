// HIRE ME 플랫폼 JavaScript

// 모바일 메뉴 토글
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuBtn = document.getElementById('mobile-menu-btn');
  
  if (mobileMenu) {
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
      menuBtn.innerHTML = '<i class="fas fa-times text-xl"></i>';
    } else {
      mobileMenu.classList.add('hidden');
      menuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
    }
  }
}

// 스크롤 시 헤더 스타일 변경
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('shadow-lg');
  } else {
    header.classList.remove('shadow-lg');
  }
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// 폼 검증 함수들
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^\d{3}-\d{4}-\d{4}$/;
  return re.test(phone);
}

function validateBusinessNumber(number) {
  const re = /^\d{3}-\d{2}-\d{5}$/;
  return re.test(number);
}

// 파일 업로드 미리보기
function handleFileUpload(input, previewId) {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const preview = document.getElementById(previewId);
      if (preview) {
        if (file.type.startsWith('image/')) {
          preview.innerHTML = `<img src="${e.target.result}" alt="미리보기" class="max-w-full max-h-48 rounded-lg">`;
        } else {
          preview.innerHTML = `<p class="text-green font-medium">📄 ${file.name} 업로드됨</p>`;
        }
      }
    };
    reader.readAsDataURL(file);
  }
}

// 체크박스 전체 선택/해제
function toggleAllCheckboxes(masterCheckbox, targetClass) {
  const checkboxes = document.querySelectorAll(`.${targetClass}`);
  checkboxes.forEach(checkbox => {
    checkbox.checked = masterCheckbox.checked;
  });
}

// 로딩 스피너 표시/숨김
function showLoading(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = '<div class="spinner"></div>';
  }
}

function hideLoading(elementId, content) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = content;
  }
}

// 알림 메시지 표시
function showAlert(message, type = 'success', duration = 5000) {
  const alert = document.createElement('div');
  alert.className = `alert alert-${type} fixed top-20 right-4 z-50 max-w-md fade-in`;
  alert.innerHTML = `
    <div class="flex items-center justify-between">
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-lg font-bold">×</button>
    </div>
  `;
  
  document.body.appendChild(alert);
  
  setTimeout(() => {
    if (alert.parentNode) {
      alert.remove();
    }
  }, duration);
}

// 폼 제출 처리
async function submitForm(formId, apiEndpoint) {
  const form = document.getElementById(formId);
  if (!form) return;
  
  const formData = new FormData(form);
  const data = {};
  
  // FormData를 일반 객체로 변환
  for (let [key, value] of formData.entries()) {
    if (data[key]) {
      // 배열 처리 (체크박스 등)
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
    } else {
      data[key] = value;
    }
  }
  
  try {
    showLoading('submit-btn');
    
    const response = await axios.post(apiEndpoint, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.status === 200) {
      showAlert('신청이 완료되었습니다! 곧 연락드리겠습니다.', 'success');
      form.reset();
    }
  } catch (error) {
    console.error('Error:', error);
    showAlert('신청 중 오류가 발생했습니다. 다시 시도해주세요.', 'error');
  } finally {
    hideLoading('submit-btn', '신청하기');
  }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
  // 애니메이션 트리거
  const animatedElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });
  
  animatedElements.forEach(el => observer.observe(el));
  
  // 외부 클릭 시 모바일 메뉴 닫기
  document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');
    
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
        mobileMenu.classList.add('hidden');
        menuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
      }
    }
  });
});

// 롤링 배너 관련 함수들
let currentSlide = 0;
let totalSlides = 0;
let autoSlideInterval;

function initCarousel() {
  const track = document.querySelector('.candidate-track');
  const cards = document.querySelectorAll('.candidate-card');
  
  if (!track || !cards.length) return;
  
  totalSlides = Math.ceil(cards.length / getVisibleCards());
  
  // 자동 슬라이드 시작
  startAutoSlide();
  
  // 마우스 오버 시 자동 슬라이드 일시정지
  track.addEventListener('mouseenter', stopAutoSlide);
  track.addEventListener('mouseleave', startAutoSlide);
}

function getVisibleCards() {
  if (window.innerWidth >= 1024) return 3; // Desktop
  if (window.innerWidth >= 768) return 2;  // Tablet
  return 1; // Mobile
}

function moveSlide(direction) {
  const track = document.querySelector('.candidate-track');
  if (!track) return;
  
  currentSlide += direction;
  
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  
  const cardWidth = 380 + 24; // 카드 너비 + 마진
  const translateX = -(currentSlide * cardWidth * getVisibleCards());
  
  track.style.transform = `translateX(${translateX}px)`;
}

function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(() => {
    moveSlide(1);
  }, 3000);
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
}

// 윈도우 리사이즈 시 캐러셀 재계산
window.addEventListener('resize', function() {
  if (document.querySelector('.candidate-track')) {
    totalSlides = Math.ceil(document.querySelectorAll('.candidate-card').length / getVisibleCards());
    currentSlide = 0;
    moveSlide(0);
  }
});

// 카카오톡 상담 연결
function openKakaoTalk() {
  // 실제 서비스에서는 카카오톡 채널 URL로 변경
  window.open('https://pf.kakao.com/_your_channel_id', '_blank');
}

// 빠른 매칭 신청 폼 처리
async function submitQuickApplication(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = {};
  
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  
  try {
    showLoading('quick-submit-btn');
    
    // 여기서는 데모용으로 지연 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    showAlert('매칭 신청이 완료되었습니다! 곧 연락드리겠습니다.<br />상세한 채용 정보는 "인재 상세보기"를 통해 제공해주세요.', 'success');
    event.target.reset();
    
  } catch (error) {
    console.error('Error:', error);
    showAlert('신청 중 오류가 발생했습니다. 다시 시도해주세요.', 'error');
  } finally {
    hideLoading('quick-submit-btn', '매칭 신청하기 →');
  }
}

// 기업 상세 신청 폼 처리
async function submitCompanyApplication(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = {};
  
  for (let [key, value] of formData.entries()) {
    if (data[key]) {
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
    } else {
      data[key] = value;
    }
  }
  
  // 필수 체크박스 검증
  const agreements = formData.getAll('agreements');
  if (agreements.length < 4) {
    showAlert('모든 필수 동의 항목을 체크해주세요.', 'error');
    return;
  }
  
  // 사업자등록번호 형식 검증
  const businessNumber = data.businessNumber;
  if (businessNumber && !validateBusinessNumber(businessNumber)) {
    showAlert('사업자등록번호 형식이 올바르지 않습니다. (000-00-00000)', 'error');
    return;
  }
  
  try {
    showLoading('company-submit-btn');
    
    // API 호출 (현재는 데모용)
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    showAlert('신청이 완료되었습니다!<br />담당자가 영업일 기준 1-2일 내에 연락드리겠습니다.', 'success');
    event.target.reset();
    
    // 성공 후 페이지 이동 또는 리셋
    setTimeout(() => {
      window.location.href = '/company';
    }, 3000);
    
  } catch (error) {
    console.error('Error:', error);
    showAlert('신청 중 오류가 발생했습니다. 다시 시도해주세요.', 'error');
  } finally {
    hideLoading('company-submit-btn', '신청 제출하기');
  }
}

// 채용 진행 중 라디오 버튼 처리
function toggleRecruitingFields(isRecruiting) {
  const recruitingFields = document.getElementById('recruiting-fields');
  if (recruitingFields) {
    if (isRecruiting) {
      recruitingFields.classList.remove('hidden');
    } else {
      recruitingFields.classList.add('hidden');
    }
  }
}

// 채용 분야별 옵션 표시
function showFieldSpecificOptions(field) {
  // 모든 특화 옵션 숨기기
  const manufacturingOptions = document.getElementById('manufacturing-options');
  
  if (manufacturingOptions) {
    manufacturingOptions.classList.add('hidden');
  }
  
  // 선택된 분야에 따라 옵션 표시
  if (field === 'manufacturing') {
    manufacturingOptions.classList.remove('hidden');
  }
}

// 구직 신청 폼 처리
async function submitJobApplication(event, visaType) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = { visaType };
  
  // FormData를 객체로 변환
  for (let [key, value] of formData.entries()) {
    if (data[key]) {
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
    } else {
      data[key] = value;
    }
  }
  
  // 필수 동의 항목 검증
  const agreements = formData.getAll('agreements');
  if (agreements.length < 4) {
    showAlert('모든 필수 동의 항목을 체크해주세요.', 'error');
    return;
  }
  
  // 이메일 형식 검증
  if (!validateEmail(data.email)) {
    showAlert('올바른 이메일 형식을 입력해주세요.', 'error');
    return;
  }
  
  // 전화번호 형식 검증
  if (!validatePhone(data.phone)) {
    showAlert('올바른 전화번호 형식을 입력해주세요. (010-1234-5678)', 'error');
    return;
  }
  
  try {
    showLoading('job-submit-btn');
    
    // API 호출 (현재는 데모용)
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    showAlert(`${visaType} 구직 신청이 완료되었습니다!<br />전문 상담사가 영업일 기준 1-2일 내에 연락드리겠습니다.`, 'success');
    
    // 성공 후 처리
    event.target.reset();
    setTimeout(() => {
      window.location.href = '/apply/success';
    }, 3000);
    
  } catch (error) {
    console.error('Error:', error);
    showAlert('신청 중 오류가 발생했습니다. 다시 시도해주세요.', 'error');
  } finally {
    hideLoading('job-submit-btn', '신청하기');
  }
}

// 경력 필드 토글
function toggleExperienceField(hasExperience) {
  const experienceDetail = document.getElementById('experience-detail');
  if (experienceDetail) {
    if (hasExperience) {
      experienceDetail.classList.remove('hidden');
    } else {
      experienceDetail.classList.add('hidden');
    }
  }
}

// 페이지 로드 시 캐러셀 초기화
document.addEventListener('DOMContentLoaded', function() {
  // 기존 코드...
  
  // 캐러셀 초기화 (회사 페이지에서만)
  if (window.location.pathname === '/company') {
    initCarousel();
  }
});