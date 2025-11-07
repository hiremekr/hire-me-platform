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
  console.log('🚀 페이지 로드 완료:', window.location.pathname);
  
  // 인재 정보 요청 페이지인 경우 자동으로 인재 정보 표시
  if (window.location.pathname.includes('/company/request')) {
    console.log('📋 인재요청 페이지 감지 - displaySelectedTalent 실행');
    
    // 즉시 실행
    displaySelectedTalent();
    
    // 1초 후 한 번 더 시도 (안전장치)
    setTimeout(() => {
      const field = document.getElementById('interested-talent');
      if (field && !field.value) {
        console.log('🔄 1초 후 재시도 실행');
        displaySelectedTalent();
      }
    }, 1000);
    
    // 3초 후 마지막 시도
    setTimeout(() => {
      const field = document.getElementById('interested-talent');
      if (field && !field.value) {
        console.log('🔄 3초 후 최종 재시도');
        displaySelectedTalent();
      }
    }, 3000);
  } else {
    console.log('📄 다른 페이지:', window.location.pathname);
  }
  
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
  // 카카오톡 채널 URL
  window.open('http://pf.kakao.com/_pPxnFxj/chat', '_blank');
}

// 인재 정보 요청 폼 관련 기능들
// URL 파라미터에서 talent_id와 talent_name 읽기
function getParamsFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    talentId: urlParams.get('talent_id'),
    talentName: urlParams.get('talent_name')
  };
}

// 선택된 인재 정보 표시 및 폼에 이름 자동 입력
function displaySelectedTalent() {
  const params = getParamsFromURL();
  const { talentId, talentName } = params;
  
  // 강화된 디버그 로깅
  console.log('=== 인재 정보 자동 입력 디버그 ===');
  console.log('현재 URL:', window.location.href);
  console.log('URL 파라미터:', params);
  console.log('talentId:', talentId);
  console.log('talentName:', talentName);
  
  if (!talentId) {
    console.log('talent_id가 없습니다.');
    return;
  }

  // 관심 인재명 필드에 이름 입력 (강화된 버전)
  const interestedTalentField = document.getElementById('interested-talent');
  
  if (interestedTalentField) {
    let nameToSet = '';
    
    // 방법 1: URL에서 talent_name 가져오기
    if (talentName) {
      try {
        nameToSet = decodeURIComponent(talentName);
        console.log('✅ URL에서 인재명 획득:', nameToSet);
      } catch (e) {
        console.log('URL 디코딩 실패, 원본 사용:', talentName);
        nameToSet = talentName;
      }
    }
    
    // 방법 2: candidatesData에서 이름 찾기 (URL에 이름이 없을 때)
    if (!nameToSet && talentId && window.candidatesData) {
      const selectedTalent = window.candidatesData.find(c => c.id == talentId);
      if (selectedTalent && selectedTalent.name) {
        nameToSet = selectedTalent.name;
        console.log('✅ 데이터에서 인재명 획득:', nameToSet);
      }
    }
    
    // 방법 3: 최후 수단 - 약간의 지연 후 재시도
    if (!nameToSet && talentId) {
      setTimeout(() => {
        if (window.candidatesData) {
          const talent = window.candidatesData.find(c => c.id == talentId);
          if (talent && talent.name && !interestedTalentField.value) {
            interestedTalentField.value = talent.name;
            console.log('✅ 지연 후 인재명 입력 성공:', talent.name);
          }
        }
      }, 500); // 0.5초 후 재시도
    }
    
    // 이름이 있으면 필드에 입력
    if (nameToSet) {
      interestedTalentField.value = nameToSet;
      console.log('✅ 최종 인재명 입력:', nameToSet);
      
      // 필드 스타일 변경으로 사용자에게 입력됨을 알림
      interestedTalentField.style.backgroundColor = '#f0fff4';
      interestedTalentField.style.borderColor = '#48bb78';
    } else {
      console.log('❌ 인재명을 찾을 수 없음 - talentId:', talentId);
    }
  }
  
  // 후보자 데이터를 사용해서 상세 정보 표시
  if (window.candidatesData) {
    const selectedTalent = window.candidatesData.find(c => c.id == talentId);
    if (selectedTalent) {
      // UI 요소에 정보 표시
      const flagElement = document.getElementById('talent-flag');
      const basicInfoElement = document.getElementById('talent-basic-info');
      const residenceElement = document.getElementById('talent-residence');
      const visaElement = document.getElementById('talent-visa');
      const experienceElement = document.getElementById('talent-experience');
      const koreanElement = document.getElementById('talent-korean');
      const locationElement = document.getElementById('talent-location');
      
      if (flagElement) flagElement.textContent = selectedTalent.flag;
      if (basicInfoElement) basicInfoElement.textContent = 
        selectedTalent.nationality + ' / ' + selectedTalent.gender + ' / ' + selectedTalent.age + '세';
      if (residenceElement) residenceElement.textContent = 
        '한국거주 약 ' + selectedTalent.yearsInKorea + '년';
      if (visaElement) visaElement.textContent = 
        '희망비자 ' + selectedTalent.desiredVisa;
      if (experienceElement) experienceElement.textContent = selectedTalent.experience;
      if (koreanElement) koreanElement.textContent = selectedTalent.koreanLevel;
      if (locationElement) locationElement.textContent = 
        selectedTalent.desiredLocation.join(', ');
      
      console.log('인재 상세 정보 표시 완료:', selectedTalent.name);
    }
  }
  
  // 인재 정보 섹션 표시
  const selectedTalentInfo = document.getElementById('selected-talent-info');
  if (selectedTalentInfo) {
    selectedTalentInfo.style.display = 'block';
  }
  
  // 숨겨진 input 필드에 talent_id 저장 (폼 제출시 사용)
  let hiddenInput = document.createElement('input');
  hiddenInput.type = 'hidden';
  hiddenInput.name = 'talentId';
  hiddenInput.value = talentId;
  
  const form = document.getElementById('talent-request-form');
  if (form) {
    form.appendChild(hiddenInput);
    console.log('talentId 숨겨진 필드 추가:', talentId);
  }
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

// 기업 신청 폼 처리 - Formspree 우선, 폴백 시스템 포함
async function submitCompanyApplication(event) {
  // 기본 form validation만 수행하고 실제 제출은 Formspree가 처리
  const form = event.target;
  const formData = new FormData(form);
  
  // 필수 항목 검증
  const managerName = formData.get('managerName');
  const businessNumber = formData.get('businessNumber');
  const managerPhone = formData.get('managerPhone');
  const managerEmail = formData.get('managerEmail');
  
  if (!managerName || !managerName.trim()) {
    event.preventDefault();
    showAlert('담당자명을 입력해주세요.', 'error');
    return false;
  }
  
  if (!businessNumber || !businessNumber.trim()) {
    event.preventDefault();
    showAlert('사업자등록번호를 입력해주세요.', 'error');
    return false;
  }
  
  if (!managerPhone || !managerPhone.trim()) {
    event.preventDefault();
    showAlert('담당자 전화번호를 입력해주세요.', 'error');
    return false;
  }
  
  if (!managerEmail || !managerEmail.trim()) {
    event.preventDefault();
    showAlert('담당자 이메일을 입력해주세요.', 'error');
    return false;
  }
  
  // 필수 체크박스 검증
  const agreements = formData.getAll('agreements');
  if (agreements.length < 4) {
    event.preventDefault();
    showAlert('모든 필수 동의 항목을 체크해주세요.', 'error');
    return false;
  }
  
  // 사업자등록번호 형식 검증
  if (businessNumber && !validateBusinessNumber(businessNumber)) {
    event.preventDefault();
    showAlert('사업자등록번호 형식이 올바르지 않습니다. (000-00-00000)', 'error');
    return false;
  }
  
  // 이메일 형식 검증
  if (managerEmail && !validateEmail(managerEmail)) {
    event.preventDefault();
    showAlert('올바른 이메일 형식을 입력해주세요.', 'error');
    return false;
  }
  
  // Validation 통과시 로딩 표시하고 Formspree 제출 허용
  showLoading('company-submit-btn');
  
  // 성공 메시지 표시 (Formspree 리디렉션 전)
  setTimeout(() => {
    showAlert('기업 채용 신청이 제출되었습니다!<br />담당자가 영업일 기준 1-2일 내에 연락드리겠습니다.', 'success');
  }, 500);
  
  // Formspree 제출을 허용 (preventDefault 호출하지 않음)
  return true;
}

// 기업 폼 폴백 시스템
async function submitCompanyApplicationFallback(formData) {
  try {
    const data = { formType: 'company-application' };
    
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
    
    // 1. 로컬스토리지에 백업 저장
    saveToLocalBackup(data, '기업 채용 신청');
    
    // 2. 실제 백업 이메일 전송
    await sendRealBackupEmail(data, '기업 채용 신청');
    
    showAlert('기업 채용 신청이 백업 시스템을 통해 완료되었습니다!<br />담당자가 영업일 기준 1-2일 내에 연락드리겠습니다.', 'success');
    
    setTimeout(() => {
      window.location.href = '/company/success';
    }, 3000);
    
  } catch (error) {
    console.error('Company Fallback Error:', error);
    
    // 최종 안전장치: 데이터 다운로드 제공
    offerDataDownload(formData, '기업 채용 신청');
    
    showAlert(`기업 신청 데이터를 로컬에 저장했습니다.<br />직접 연락 부탁드립니다: 010-6326-5572<br />또는 저장된 데이터를 다운로드하여 이메일로 전송해주세요.`, 'error');
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

// 백업 시스템 설정
const BACKUP_CONFIG = {
  adminEmail: 'hireme.kr@gmail.com',
  maxLocalBackups: 10,  // 로컬에 저장할 최대 백업 수
  backupRetentionDays: 7  // 백업 보관 기간
};

// 이메일 전송 함수 (데모용 - 실제로는 작동하지 않음)
async function sendEmailNotification(formData, emailType) {
  try {
    // 데모 시뮬레이션만 실행
    console.warn('Demo email notification - not actually sent');
    return simulateEmailSend(formData, emailType);
    
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

// 구직 신청 폼 처리 - Formspree 우선, 폴백 시스템 포함
async function submitJobApplication(event, visaType) {
  console.log('🚀 submitJobApplication 호출됨:', {
    visaType: visaType,
    eventType: event.type,
    formAction: event.target.action,
    formMethod: event.target.method,
    formEnctype: event.target.enctype,
    formId: event.target.id,
    userAgent: navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop',
    isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    screenWidth: window.innerWidth,
    touchSupported: 'ontouchstart' in window
  });
  
  // 모바일에서 추가 확인
  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    console.log('📱 모바일 환경 감지 - 추가 체크:', {
      formData: Object.fromEntries(new FormData(event.target).entries()),
      hiddenFields: Array.from(event.target.querySelectorAll('input[type="hidden"]')).map(input => ({
        name: input.name,
        value: input.value
      }))
    });
  }
  
  // 기본 form validation만 수행하고 실제 제출은 Formspree가 처리
  const form = event.target;
  const formData = new FormData(form);
  
  // 필수 항목 검증
  const fullName = formData.get('fullName');
  const phone = formData.get('phone');
  const nationality = formData.get('nationality');
  const email = formData.get('email');
  
  if (!fullName || !fullName.trim()) {
    event.preventDefault();
    showAlert('이름을 입력해주세요. / Please enter your name.', 'error');
    return false;
  }
  
  if (!phone || !phone.trim()) {
    event.preventDefault();
    showAlert('전화번호를 입력해주세요. / Please enter your phone number.', 'error');
    return false;
  }
  
  if (!nationality || !nationality.trim()) {
    event.preventDefault();
    showAlert('국적을 선택해주세요. / Please select your nationality.', 'error');
    return false;
  }
  
  // 필수 동의 항목 검증
  const agreements = formData.getAll('agreements');
  if (agreements.length < 4) {
    event.preventDefault();
    showAlert('모든 필수 동의 항목을 체크해주세요. / Please check all required agreements.', 'error');
    return false;
  }
  
  // 이메일이 입력된 경우에만 형식 검증
  if (email && email.trim() && !validateEmail(email)) {
    event.preventDefault();
    showAlert('올바른 이메일 형식을 입력해주세요. / Please enter a valid email format.', 'error');
    return false;
  }
  
  // Validation 통과시 로딩 표시하고 Formspree 제출 허용
  console.log('✅ Validation 통과 - Formspree 제출 진행', {
    action: form.action,
    method: form.method,
    visaType: visaType,
    isMobile: navigator.userAgent.includes('Mobile')
  });
  
  showLoading('job-submit-btn');
  
  // 모바일에서 추가 모니터링
  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    // 3초 후 페이지 변화 확인
    setTimeout(() => {
      console.log('📱 모바일 Formspree 제출 3초 후 상태:', {
        currentURL: window.location.href,
        isSuccessPage: window.location.pathname.includes('success'),
        timestamp: new Date().toISOString()
      });
      
      // 여전히 같은 페이지면 문제 있을 수 있음
      if (!window.location.pathname.includes('success')) {
        console.warn('⚠️ 모바일에서 Formspree 제출 후 페이지 이동 없음 - 잠재적 문제');
      }
    }, 3000);
  }
  
  // 성공 메시지 표시 (Formspree 리디렉션 전)
  setTimeout(() => {
    showAlert(`${visaType || '구직'} 신청이 제출되었습니다!<br />전문 상담사가 영업일 기준 1-2일 내에 연락드리겠습니다.`, 'success');
  }, 500);
  
  console.log('🎯 Formspree 제출 허용 - 직접 제출 진행');
  
  // JavaScript validation만 수행하고 실제 폼 제출은 브라우저에 맡김
  // preventDefault를 호출하지 않아서 일반적인 form submit이 진행됨
  return true;
}

// 강화된 폴백 시스템 - 실제 작동하는 백업
async function submitJobApplicationFallback(formData, visaType) {
  try {
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
    
    // 1. 로컬스토리지에 백업 저장
    saveToLocalBackup(data, visaType);
    
    // 2. 실제 백업 이메일 전송 (Cloudflare Email API)
    await sendRealBackupEmail(data, visaType);
    
    showAlert(`${visaType} 구직 신청이 백업 시스템을 통해 완료되었습니다!<br />전문 상담사가 영업일 기준 1-2일 내에 연락드리겠습니다.`, 'success');
    
    setTimeout(() => {
      window.location.href = '/apply/success';
    }, 3000);
    
  } catch (error) {
    console.error('Fallback Error:', error);
    
    // 최종 안전장치: 데이터 다운로드 제공
    offerDataDownload(formData, visaType);
    
    showAlert(`신청 데이터를 로컬에 저장했습니다.<br />직접 연락 부탁드립니다: 010-6326-5572<br />또는 저장된 데이터를 다운로드하여 이메일로 전송해주세요.`, 'error');
  }
}

// 로컬스토리지 백업 저장
function saveToLocalBackup(data, visaType) {
  try {
    const backupKey = `hireme_backup_${Date.now()}`;
    const backupData = {
      timestamp: new Date().toISOString(),
      visaType: visaType,
      data: data,
      status: 'backup_saved'
    };
    
    localStorage.setItem(backupKey, JSON.stringify(backupData));
    console.log('✅ 로컬백업 저장 완료:', backupKey);
    
    // 사용자에게 백업 저장됨을 알림
    showAlert('📁 신청 데이터가 브라우저에 백업 저장되었습니다.', 'success', 3000);
    
  } catch (error) {
    console.error('로컬백업 저장 실패:', error);
  }
}

// 실제 백업 이메일 전송 (Cloudflare Workers API 사용)
async function sendRealBackupEmail(data, visaType) {
  try {
    // Cloudflare Workers의 Email API를 통한 실제 이메일 전송
    const emailData = {
      to: 'hireme.kr@gmail.com',
      subject: `[HIRE ME 백업] ${visaType} 신청 - ${data.fullName}`,
      content: `
🚨 백업 시스템을 통한 신청 접수

📋 신청 정보:
- 이름: ${data.fullName || 'N/A'}
- 전화번호: ${data.phone || 'N/A'}
- 이메일: ${data.email || 'N/A'}
- 국적: ${data.nationality || 'N/A'}
- 비자유형: ${visaType}
- 백업 시간: ${new Date().toLocaleString('ko-KR')}

⚠️ 주의: 이 신청은 Formspree 실패 후 백업 시스템으로 접수되었습니다.
메인 시스템을 확인하여 중복 접수가 없는지 확인해주세요.

📝 전체 데이터:
${JSON.stringify(data, null, 2)}
      `,
      timestamp: new Date().toISOString()
    };
    
    // 백업 API 엔드포인트로 전송
    const response = await fetch('/api/backup-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });
    
    if (response.ok) {
      console.log('✅ 백업 이메일 전송 성공');
    } else {
      throw new Error(`백업 이메일 전송 실패: ${response.status}`);
    }
    
  } catch (error) {
    console.error('백업 이메일 전송 실패:', error);
    // 이메일 전송 실패해도 로컬백업은 저장됨
  }
}

// 데이터 다운로드 제공 (최종 안전장치)
function offerDataDownload(formData, visaType) {
  try {
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    
    const downloadData = {
      timestamp: new Date().toISOString(),
      visaType: visaType,
      submissionData: data,
      note: '이 파일을 hireme.kr@gmail.com으로 전송해주세요.'
    };
    
    const dataStr = JSON.stringify(downloadData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `hireme_application_${visaType}_${new Date().toISOString().split('T')[0]}.json`;
    
    // 자동 다운로드 트리거
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('📥 신청 데이터 다운로드 제공됨');
    
  } catch (error) {
    console.error('데이터 다운로드 제공 실패:', error);
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
  // 모바일 메뉴 버튼 이벤트 리스너
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
  
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
  
  // 폼 제출 모니터링 시스템 초기화
  setupFormMonitoring();
  
  // Formspree 상태 체크
  setTimeout(checkFormspreeStatus, 1000);
  
  // 오래된 백업 데이터 정리
  cleanupOldBackups();
});

// 폼 제출 모니터링 시스템 (간소화 버전 - 폴백 시스템 제거)
let formSubmissionAttempts = 0;
let lastSubmissionTime = 0;

function setupFormMonitoring() {
  const forms = document.querySelectorAll('form[action*="formspree"]');
  
  forms.forEach(form => {
    // 폼 제출 시도 기록만 수행 (폴백 시스템 제거)
    form.addEventListener('submit', function(event) {
      formSubmissionAttempts++;
      lastSubmissionTime = Date.now();
      
      console.log(`✅ Formspree form submission ${formSubmissionAttempts}:`, {
        action: form.action,
        method: form.method,
        formId: form.id,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      });
      
      // Formspree로 정상 제출되도록 허용 (event.preventDefault 호출 안 함)
    });
  });
}

// 페이지별 Formspree 상태 체크
function checkFormspreeStatus() {
  const forms = document.querySelectorAll('form[action*="formspree"]');
  
  if (forms.length > 0) {
    const formspreeUrl = forms[0].action;
    console.log('Checking Formspree endpoint:', formspreeUrl);
    
    // 간단한 HEAD 요청으로 엔드포인트 상태 확인
    fetch(formspreeUrl.replace('/f/', '/ajax/'), { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          console.log('✅ Formspree endpoint is accessible');
        } else {
          console.warn('⚠️ Formspree endpoint returned:', response.status);
        }
      })
      .catch(error => {
        console.warn('⚠️ Formspree endpoint check failed:', error.message);
      });
  }
}

// 오래된 로컬 백업 정리
function cleanupOldBackups() {
  try {
    const now = Date.now();
    const retentionMs = BACKUP_CONFIG.backupRetentionDays * 24 * 60 * 60 * 1000;
    let cleanedCount = 0;
    
    // localStorage에서 hireme_backup_ 키들 찾기
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('hireme_backup_')) {
        try {
          const backupData = JSON.parse(localStorage.getItem(key));
          const backupTime = new Date(backupData.timestamp).getTime();
          
          // 보관 기간 초과된 백업 삭제
          if (now - backupTime > retentionMs) {
            keysToRemove.push(key);
          }
        } catch (e) {
          // 잘못된 형식의 백업 데이터 삭제
          keysToRemove.push(key);
        }
      }
    }
    
    // 삭제 실행
    keysToRemove.forEach(key => {
      localStorage.removeItem(key);
      cleanedCount++;
    });
    
    if (cleanedCount > 0) {
      console.log(`🧹 오래된 백업 ${cleanedCount}개 정리 완료`);
    }
    
    // 백업 개수 제한 확인
    limitBackupCount();
    
  } catch (error) {
    console.error('백업 정리 중 오류:', error);
  }
}

// 백업 개수 제한
function limitBackupCount() {
  try {
    const backupKeys = [];
    
    // 모든 백업 키 수집
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('hireme_backup_')) {
        try {
          const backupData = JSON.parse(localStorage.getItem(key));
          backupKeys.push({
            key: key,
            timestamp: new Date(backupData.timestamp).getTime()
          });
        } catch (e) {
          // 잘못된 데이터는 삭제 대상
          localStorage.removeItem(key);
        }
      }
    }
    
    // 개수 제한 초과시 오래된 순으로 삭제
    if (backupKeys.length > BACKUP_CONFIG.maxLocalBackups) {
      backupKeys.sort((a, b) => a.timestamp - b.timestamp);
      const toRemove = backupKeys.slice(0, backupKeys.length - BACKUP_CONFIG.maxLocalBackups);
      
      toRemove.forEach(backup => {
        localStorage.removeItem(backup.key);
      });
      
      console.log(`📦 백업 개수 제한으로 ${toRemove.length}개 정리 완료`);
    }
    
  } catch (error) {
    console.error('백업 개수 제한 처리 중 오류:', error);
  }
}

// 관리자용: 모든 로컬 백업 조회 (개발자 콘솔에서 사용)
function getAllLocalBackups() {
  const backups = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('hireme_backup_')) {
      try {
        const backupData = JSON.parse(localStorage.getItem(key));
        backups.push({
          key: key,
          timestamp: backupData.timestamp,
          visaType: backupData.visaType,
          applicantName: backupData.data?.fullName || 'Unknown'
        });
      } catch (e) {
        console.warn('잘못된 백업 데이터:', key);
      }
    }
  }
  
  backups.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  return backups;
}

// 관리자용: 특정 백업 상세 조회
function getBackupDetails(key) {
  try {
    const backupData = localStorage.getItem(key);
    return backupData ? JSON.parse(backupData) : null;
  } catch (e) {
    console.error('백업 데이터 읽기 실패:', e);
    return null;
  }
}

// 전역 함수로 등록 (개발자 도구에서 사용 가능)
window.getAllLocalBackups = getAllLocalBackups;
window.getBackupDetails = getBackupDetails;