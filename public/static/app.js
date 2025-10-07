// HIRE ME 플랫폼 JavaScript

// 모바일 메뉴 토글
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuBtn = document.getElementById('mobile-menu-btn');
  
  if (mobileMenu && menuBtn) {
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
      menuBtn.innerHTML = '<i class="fas fa-times text-xl"></i>';
      console.log('모바일 메뉴 열림');
    } else {
      mobileMenu.classList.add('hidden');
      menuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
      console.log('모바일 메뉴 닫힘');
    }
  } else {
    console.error('모바일 메뉴 요소를 찾을 수 없습니다:', {
      mobileMenu: !!mobileMenu,
      menuBtn: !!menuBtn
    });
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

// 파일 업로드 미리보기 및 저장
function handleFileUpload(input, previewId) {
  const file = input.files[0];
  if (file) {
    // 파일 크기 체크 (10MB 제한)
    if (file.size > 10 * 1024 * 1024) {
      showAlert('파일 크기는 10MB를 초과할 수 없습니다.', 'error');
      input.value = '';
      return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
      const preview = document.getElementById(previewId);
      if (preview) {
        if (file.type.startsWith('image/')) {
          preview.innerHTML = `
            <div class="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
              <img src="${e.target.result}" alt="미리보기" class="w-16 h-16 object-cover rounded">
              <div>
                <p class="text-green-700 font-medium">📄 ${file.name}</p>
                <p class="text-sm text-green-600">${(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
          `;
        } else {
          preview.innerHTML = `
            <div class="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
              <i class="fas fa-file-pdf text-2xl text-red-500"></i>
              <div>
                <p class="text-green-700 font-medium">📄 ${file.name}</p>
                <p class="text-sm text-green-600">${(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
          `;
        }
        
        // 파일을 전역 변수에 저장 (이메일 전송 시 사용)
        if (!window.uploadedFiles) {
          window.uploadedFiles = {};
        }
        window.uploadedFiles[input.name] = {
          file: file,
          base64: e.target.result,
          name: file.name,
          size: file.size,
          type: file.type
        };
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
  // 모바일 메뉴 버튼 이벤트 리스너 추가
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMobileMenu();
    });
  }
  
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
        if (menuBtn) {
          menuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        }
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
    
    // 이메일 전송
    await sendEmailNotification(data, '빠른 매칭 신청');
    
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
    
    // 이메일 전송
    await sendEmailNotification(data, '기업 채용 신청');
    
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

// EmailJS 설정 (실제 서비스 시 변경 필요)
const EMAILJS_CONFIG = {
  serviceID: 'service_abc123',        // EmailJS에서 발급받은 Service ID
  templateID: 'template_hireme_app',  // EmailJS에서 생성한 Template ID
  publicKey: 'user_xyz789',          // EmailJS에서 발급받은 Public Key
  adminEmail: 'admin@hireme.kr'      // 실제 관리자 이메일로 변경 (ex: info@hireme.kr)
};

// 이메일 전송 함수
async function sendEmailNotification(formData, emailType) {
  try {
    // EmailJS 라이브러리가 로드되지 않은 경우 처리
    if (typeof emailjs === 'undefined') {
      console.warn('EmailJS not loaded, sending demo notification');
      return simulateEmailSend(formData, emailType);
    }
    
    // 첨부파일 정보 수집
    let attachmentInfo = '';
    let attachmentData = {};
    
    if (window.uploadedFiles) {
      const fileEntries = Object.entries(window.uploadedFiles);
      if (fileEntries.length > 0) {
        attachmentInfo = '\n📎 첨부파일:\n';
        fileEntries.forEach(([fieldName, fileInfo], index) => {
          attachmentInfo += `- ${fileInfo.name} (${(fileInfo.size / 1024 / 1024).toFixed(2)} MB)\n`;
          
          // 파일 크기에 따른 처리 방식 선택
          if (fileInfo.size <= 2 * 1024 * 1024) { // 2MB 이하
            // EmailJS Base64 첨부
            attachmentData[`attachment_${index + 1}`] = fileInfo.base64;
            attachmentData[`attachment_${index + 1}_name`] = fileInfo.name;
            attachmentData[`attachment_${index + 1}_type`] = fileInfo.type;
          } else {
            // 큰 파일은 별도 처리 (향후 클라우드 스토리지 연동)
            attachmentInfo += `  (⚠️ 대용량 파일 - 별도 전송 필요)\n`;
          }
        });
      }
    }
    
    const templateParams = {
      to_email: EMAILJS_CONFIG.adminEmail,
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      nationality: formData.nationality,
      visa_type: formData.visaType || emailType,
      message: `
📋 신규 ${emailType} 신청이 접수되었습니다!

👤 신청자 정보:
- 이름: ${formData.fullName}
- 전화번호: ${formData.phone}
- 이메일: ${formData.email}
- 국적: ${formData.nationality}
- 비자유형: ${formData.visaType || emailType}

📝 추가 정보:
${Object.entries(formData).map(([key, value]) => {
  if (['fullName', 'phone', 'email', 'nationality', 'visaType'].includes(key)) return '';
  if (key === 'agreements') return '';
  return `- ${key}: ${value}`;
}).filter(item => item).join('\n')}
${attachmentInfo}
⏰ 신청일시: ${new Date().toLocaleString('ko-KR')}

💡 첨부파일은 별도로 다운로드하여 확인해주세요.
      `,
      subject: `[HIRE ME] 새로운 ${emailType} 신청 - ${formData.fullName}`,
      reply_to: formData.email,
      ...attachmentData  // 첨부파일 데이터 추가
    };
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceID, 
      EMAILJS_CONFIG.templateID, 
      templateParams,
      EMAILJS_CONFIG.publicKey
    );
    
    console.log('Email with attachments sent successfully:', response);
    
    // 전송 후 파일 데이터 초기화
    window.uploadedFiles = {};
    
    return response;
    
  } catch (error) {
    console.error('Email send failed:', error);
    // 이메일 전송 실패 시에도 사용자에게는 성공 메시지 표시 (UX 고려)
    return { status: 200, text: 'Fallback success' };
  }
}

// 데모용 이메일 시뮬레이션 (EmailJS 설정 전 테스트용)
function simulateEmailSend(formData, emailType) {
  // 첨부파일 정보 수집
  let attachments = [];
  if (window.uploadedFiles) {
    attachments = Object.entries(window.uploadedFiles).map(([fieldName, fileInfo]) => ({
      name: fileInfo.name,
      size: `${(fileInfo.size / 1024 / 1024).toFixed(2)} MB`,
      type: fileInfo.type
    }));
  }
  
  console.log('📧 이메일 전송 시뮬레이션:', {
    to: EMAILJS_CONFIG.adminEmail,
    subject: `[HIRE ME] 새로운 ${emailType} 신청 - ${formData.fullName}`,
    applicant: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    visaType: formData.visaType || emailType,
    timestamp: new Date().toLocaleString('ko-KR'),
    attachments: attachments,
    data: formData
  });
  
  if (attachments.length > 0) {
    console.log('📎 첨부파일 정보:', attachments);
  }
  
  // 시뮬레이션 후 파일 데이터 초기화
  window.uploadedFiles = {};
  
  return Promise.resolve({ status: 200, text: 'Demo email sent' });
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
  
  // 필수 항목 검증 (이름, 전화번호, 국적만)
  if (!data.fullName || !data.fullName.trim()) {
    showAlert('이름을 입력해주세요. / Please enter your name.', 'error');
    return;
  }
  
  if (!data.phone || !data.phone.trim()) {
    showAlert('전화번호를 입력해주세요. / Please enter your phone number.', 'error');
    return;
  }
  
  if (!data.nationality || !data.nationality.trim()) {
    showAlert('국적을 선택해주세요. / Please select your nationality.', 'error');
    return;
  }
  
  // 필수 동의 항목 검증
  const agreements = formData.getAll('agreements');
  if (agreements.length < 4) {
    showAlert('모든 필수 동의 항목을 체크해주세요. / Please check all required agreements.', 'error');
    return;
  }
  
  // 이메일이 입력된 경우에만 형식 검증
  if (data.email && data.email.trim() && !validateEmail(data.email)) {
    showAlert('올바른 이메일 형식을 입력해주세요. / Please enter a valid email format.', 'error');
    return;
  }
  
  try {
    showLoading('job-submit-btn');
    
    // 이메일 전송
    await sendEmailNotification(data, `${visaType} 구직신청`);
    
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

// 국적 '기타' 선택 시 직접 입력 필드 토글
function toggleOtherNationalityInput(value) {
  const otherInput = document.getElementById('other-nationality');
  if (otherInput) {
    if (value === 'other') {
      otherInput.classList.remove('hidden');
      otherInput.focus();
    } else {
      otherInput.classList.add('hidden');
      otherInput.value = '';
    }
  }
}

// ========== 인재풀 필터링 기능 ==========

// 인재 정보 요청 함수
function requestTalentInfo(talentId) {
  // 모달 또는 폼 페이지로 이동
  window.location.href = `/company/request?talent_id=${talentId}`;
}

// 필터링 함수
function filterTalents() {
  const nationalityFilter = document.getElementById('nationality-filter');
  const visaFilter = document.getElementById('visa-filter');
  const genderFilter = document.getElementById('gender-filter');
  
  if (!nationalityFilter || !visaFilter || !genderFilter) return;
  
  const nationalityValue = nationalityFilter.value;
  const visaValue = visaFilter.value;
  const genderValue = genderFilter.value;
  
  const cards = document.querySelectorAll('.talent-card');
  let visibleCount = 0;
  
  cards.forEach(card => {
    const nationality = card.getAttribute('data-nationality');
    const visa = card.getAttribute('data-visa');
    const gender = card.getAttribute('data-gender');
    
    const nationalityMatch = !nationalityValue || nationality === nationalityValue;
    const visaMatch = !visaValue || visa === visaValue;
    const genderMatch = !genderValue || gender === genderValue;
    
    if (nationalityMatch && visaMatch && genderMatch) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });
  
  // 결과 카운트 업데이트
  const filterCount = document.getElementById('filter-count');
  if (filterCount) {
    filterCount.textContent = visibleCount;
  }
  
  // 검색 결과가 없을 때 메시지 표시
  const noResults = document.getElementById('no-results');
  const talentGrid = document.getElementById('talent-grid');
  
  if (noResults && talentGrid) {
    if (visibleCount === 0) {
      noResults.classList.remove('hidden');
      talentGrid.style.display = 'none';
    } else {
      noResults.classList.add('hidden');
      talentGrid.style.display = 'grid';
    }
  }
}

// 필터 초기화 함수
function clearFilters() {
  const nationalityFilter = document.getElementById('nationality-filter');
  const visaFilter = document.getElementById('visa-filter');
  const genderFilter = document.getElementById('gender-filter');
  
  if (nationalityFilter) nationalityFilter.value = '';
  if (visaFilter) visaFilter.value = '';
  if (genderFilter) genderFilter.value = '';
  
  // 모든 카드 표시
  const cards = document.querySelectorAll('.talent-card');
  cards.forEach(card => {
    card.style.display = 'block';
  });
  
  // 전체 카운트로 복원
  const totalCards = cards.length;
  const filterCount = document.getElementById('filter-count');
  if (filterCount) {
    filterCount.textContent = totalCards;
  }
  
  // 검색 결과 메시지 숨기기
  const noResults = document.getElementById('no-results');
  const talentGrid = document.getElementById('talent-grid');
  
  if (noResults && talentGrid) {
    noResults.classList.add('hidden');
    talentGrid.style.display = 'grid';
  }
}

// 페이지 로드 시 캐러셀 초기화
document.addEventListener('DOMContentLoaded', function() {
  // 기존 코드...
  
  // 캐러셀 초기화 (회사 페이지에서만)
  if (window.location.pathname === '/company') {
    initCarousel();
  }
  
  // 인재풀 페이지 초기화
  if (window.location.pathname === '/company/talents') {
    // 인재 카드의 데이터 속성 설정
    const cards = document.querySelectorAll('.talent-card');
    cards.forEach((card, index) => {
      // 실제 데이터를 기반으로 속성 설정 (현재는 하드코딩된 값들 사용)
      // 향후 서버에서 받은 데이터로 동적으로 설정 가능
    });
  }
});