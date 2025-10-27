# HIRE ME - 외국인 취업 매칭 플랫폼

## 🎯 프로젝트 개요

**HIRE ME**는 외국인 구직자와 기업을 연결하는 전문 취업 매칭 플랫폼입니다. 구직부터 비자 취득까지 원스톱 서비스를 제공합니다.

- **목표**: 외국인 구직자의 안정적인 취업과 비자 취득 지원
- **대상**: E-7-4R, F-2-R, E-7-1, E-7-4 비자 신청자 및 채용 기업
- **특징**: 전문 행정사와 리크루팅 업체의 협업 서비스

## 🌐 **배포된 서비스 URL** ✅

### **🚀 실제 서비스 (커스텀 도메인)**
- **메인 서비스**: https://hireme.kr ✅ **NEW!**
- **이전 배포 (GitHub 연동)**: https://hire-me-platform1.pages.dev
- **이전 배포 (수동)**: https://hire-me-platform.pages.dev

### 주요 기능 URL (hireme.kr 도메인)
- **홈페이지**: https://hireme.kr/
- **구직의뢰**: https://hireme.kr/apply
- **E-7-4R 신청**: https://hireme.kr/apply/e74r
- **F-2-R 신청**: https://hireme.kr/apply/f-2-r
- **기업채용**: https://hireme.kr/company
- **인재풀**: https://hireme.kr/company/talents
- **기업 상세 신청**: https://hireme.kr/company/apply
- **구직 완료**: https://hireme.kr/apply/success
- **기업 요청 완료**: https://hireme.kr/company/success

### **개발/테스트 URL**
- **샌드박스**: https://3000-ih9zoa9oftxqirxv6bfzv-6532622b.e2b.dev

## 📊 주요 기능

### ✅ 완료된 기능

#### 🏠 HOME 페이지 (/)
- 전문 브랜드 로고 적용 및 히어로 섹션 
- 구직자/기업용 CTA 배너
- 성공 케이스 쇼케이스 (9개 실제 사례 - 현실적 데이터로 업데이트)
- 신뢰 지표 및 인증 정보

#### 👤 구직의뢰 페이지 (/apply)
- 통계 카드 (3개: TOP 인재풀, 최고 성공률, ONE-STOP 서비스)
- 7단계 프로세스 안내
- 실제 이용자 후기 (6개 - 리얼한 경험담으로 업데이트)
- 4가지 비자 타입 선택 인터페이스

#### 📝 비자별 신청 폼 (이중언어 지원)
- **E-7-4R**: 지역특화형 숙련기능인력 (`/apply/e-7-4r`)
  - 설명: 인구감소지역에서 지자체 추천을 받은 숙련기능인력을 위한 비자
- **F-2-R**: 지역특화형 우수인재
  - 유학생 요건 (`/apply/f-2-r/student`)
  - 소득요건 (`/apply/f-2-r/income`)
  - 선택 페이지 (`/apply/f-2-r`)
- **E-7-1**: 특정활동 (`/apply/e-7-1`)
- **E-7-4**: 사업장변경 (`/apply/e-7-4-transfer`)

#### 🌐 이중언어 지원 기능
- **폼 필드**: 모든 라벨이 한국어/영어 이중 표기
- **동의사항**: 한국어/영어 대역 제공
- **오류 메시지**: 이중언어로 안내
- **필수 필드 최소화**: 이름/전화번호/국적만 필수 (외국인 사용자 편의성 고려)
- **모바일 최적화**: textarea 너비 20% 축소로 모바일 UX 개선 ✅

#### 🏢 기업채용 페이지 (/company)
- 인재 풀 롤링 배너 (24명 후보자로 확장)
- 빠른 매칭 신청 폼
- 서비스 특장점 소개
- 프로세스 안내
- 인재풀 바로가기 링크

#### 👥 인재풀 페이지 (/company/talents)
- **24명의 검증된 외국인 인재** 전체 조회
- **실시간 필터링 기능**: 국적, 희망비자, 성별로 검색
- **당근마켓 스타일** 반응형 카드 레이아웃 (1-4열)
- **인재별 상세 정보**: 희망비자 강조 표시, 경력, 한국거주기간, 한국어수준
- **관리자 친화적**: 인재 추가 시 자동 페이지 반영
- **수정 가능한 구조**: JSON 기반 데이터 관리

#### 📋 기업 상세 신청 (/company/apply)
- **간소화된 필수 항목**: 담당자명, 담당자 전화번호만 필수
- **EPS 16개국 선호국적**: 네팔~이집트까지 전체 EPS 국가 지원
- 서비스 프로세스 안내
- 개인정보 보호 정책
- 상세 기업 정보 수집 폼 (대부분 선택사항)
- 채용 분야별 맞춤 필드

#### ✅ 신청 완료 페이지 (/apply/success) - **2025.10.08 업데이트**
- 신청 완료 확인 ✅
- 다음 단계 안내 ✅
- ~~전문 상담사 연락 안내~~ (삭제됨)
- ~~연락처 정보~~ (삭제됨) 
- ~~상담시간 안내~~ (삭제됨)
- 간소화된 성공 메시지로 개선

## 🗂️ 데이터 구조

### JSON 기반 데이터 관리
- **성공 케이스**: `data/success-cases.json` (9개 사례) - 현실적 데이터로 업데이트
- **인재 풀**: `data/candidates.json` (**24명 후보자로 확장**) - 관리자가 추가 시 자동 반영
- **이용자 후기**: `data/reviews.json` (6개 후기) - 리얼한 경험 데이터로 업데이트
- **로고 이미지**: `public/static/hireme-logo.png` - 브랜드 로고 추가

### 주요 데이터 항목
- **국적별 분포**: EPS 16개국 (네팔, 방글라데시, 스리랑카, 미얀마, 베트남, 파키스탄, 인도네시아, 캄보디아, 우즈베키스탄, 몽골, 태국, 필리핀, 라오스, 인도, 말레이지아, 이집트)
- **비자 타입별**: E-7-4R (60%) > F-2-R (25%) > E-7-1 (10%) > 기타 (5%)
- **성별 분포**: 남성 (85%) > 여성 (15%)
- **지역별 매칭**: 전국 17개 시도별 성공 사례

## 🛠️ 기술 스택

### Backend
- **Hono Framework**: 경량 웹 프레임워크
- **Cloudflare Workers**: 엣지 런타임 환경
- **TypeScript**: 타입 안전성

### Frontend  
- **JSX**: 서버사이드 렌더링
- **TailwindCSS**: 유틸리티 퍼스트 CSS
- **Font Awesome**: 아이콘 라이브러리
- **Vanilla JS**: 클라이언트 상호작용

### 개발 도구
- **Vite**: 빌드 도구
- **Wrangler**: Cloudflare CLI
- **PM2**: 프로세스 관리

### 배포 환경
- **Cloudflare Pages**: 글로벌 CDN 배포 ✅
- **Edge Runtime**: 전 세계 엣지 서버
- **자동 HTTPS**: SSL 인증서 자동 관리
- **Git 연동**: 코드 변경 시 자동 배포 준비

## 📁 프로젝트 구조

```
webapp/
├── src/
│   ├── components/       # 재사용 가능한 컴포넌트
│   │   ├── Header.tsx    # 헤더 네비게이션 (전문 이미지 로고 적용)
│   │   ├── Footer.tsx    # 푸터 (카카오톡 링크 업데이트)
│   │   └── JobApplicationForm.tsx  # 공통 신청 폼 (이중언어)
│   ├── pages/           # 페이지 컴포넌트
│   │   ├── ApplyPage.tsx
│   │   ├── CompanyPage.tsx
│   │   ├── CompanyApplyPage.tsx    # 필수 항목 간소화
│   │   ├── TalentPoolPage.tsx      # 인재풀 페이지
│   │   ├── TalentRequestPage.tsx   # 인재정보 요청 페이지 (모바일 최적화)
│   │   ├── F2RSelectionPage.tsx
│   │   ├── E74RFormPage.tsx        # E-7-4R 설명 업데이트
│   │   ├── F2RStudentFormPage.tsx
│   │   ├── F2RIncomeFormPage.tsx
│   │   ├── E71FormPage.tsx
│   │   ├── E74TransferFormPage.tsx
│   │   └── SuccessPage.tsx
│   ├── index.tsx        # 메인 애플리케이션
│   └── renderer.tsx     # JSX 렌더러
├── public/static/       # 정적 파일
│   ├── hireme-logo.png  # 브랜드 로고 이미지
│   ├── styles.css       # 커스텀 CSS (모바일 최적화 포함)
│   └── app.js          # 클라이언트 JavaScript
├── data/               # JSON 데이터
│   ├── candidates.json  # 인재 풀 데이터 (24명, 관리자 추가 가능)
│   ├── success-cases.json # 성공 사례 (업데이트)
│   └── reviews.json     # 이용자 후기 (업데이트)
├── dist/               # 빌드 결과물 (배포용)
├── ecosystem.config.cjs # PM2 설정
├── wrangler.jsonc      # Cloudflare 설정
├── vite.config.ts      # Vite 빌드 설정
└── package.json        # 의존성 및 스크립트
```

## 🎨 디자인 시스템

### 컬러 팔레트
- **Navy**: #1B365D (헤더, 제목, 중요 텍스트)
- **Teal Blue**: #4A90A4 (링크, 아이콘, 보더)
- **Green**: #48BB78 (성공, 긍정 요소)
- **Orange**: #FF7F50 (CTA 버튼, 강조)
- **Gray**: #6B7280 (본문, 설명)
- **Light Gray**: #F7FAFC (섹션 배경)

### 타이포그래피
- **헤드라인**: Cardo Bold, 48-64px
- **서브헤딩**: Cardo Semibold, 32-40px
- **본문**: Noto Sans KR Regular, 16-18px

## 🚀 개발 및 배포

### 로컬 개발
```bash
# 의존성 설치
npm install

# 개발 서버 시작 (Vite)
npm run dev

# 빌드
npm run build

# 샌드박스 환경에서 개발 서버 시작
npm run dev:sandbox

# 포트 정리
npm run clean-port
```

### PM2 관리
```bash
# PM2 서비스 시작
pm2 start ecosystem.config.cjs

# 서비스 목록 확인
pm2 list

# 로그 확인 (non-blocking)
pm2 logs --nostream

# 서비스 재시작
pm2 restart webapp

# 서비스 중지
pm2 delete webapp
```

### Cloudflare Pages 배포 ✅
```bash
# 프로덕션 빌드 및 배포
npm run build
npx wrangler pages deploy dist --project-name hire-me-platform

# 프로젝트 생성 (최초 1회)
npx wrangler pages project create hire-me-platform --production-branch main
```

## 📱 반응형 디자인

### 중단점
- **Mobile**: < 768px (1단 레이아웃, 햄버거 메뉴)
- **Tablet**: 768-1024px (2단 그리드)
- **Desktop**: > 1024px (3-4단 그리드, 최대 너비 1280px)

### 주요 반응형 요소
- 네비게이션: Desktop 풀메뉴 ↔ Mobile 햄버거 메뉴
- 카드 그리드: Desktop 4개 ↔ Tablet 3개 ↔ Mobile 2개 ↔ Mobile Small 1개
- 롤링 배너: Desktop 3개 ↔ Tablet 2개 ↔ Mobile 1개
- **인재풀 그리드**: xl:4열 → lg:3열 → sm:2열 → xs:1열 (당근마켓 스타일)
- 폼 레이아웃: Desktop 2열 ↔ Mobile 1열
- **필터 영역**: Desktop 3열 → Mobile 1열 (국적/희망비자/성별)
- **모바일 textarea 최적화**: 250px 고정 너비로 오버플로우 해결 ✅

## 🔧 주요 기능 구현

### 롤링 배너 (인재 풀)
- 자동 슬라이드 (3초 간격)
- 마우스 오버 시 일시정지
- 좌우 네비게이션 버튼
- 반응형 카드 개수 조정

### 폼 검증 (업데이트)
- **필수 필드 최소화**: 이름, 전화번호, 국적만 필수 (외국인 사용자 편의성 고려)
- **이중언어 검증**: 한국어/영어 오류 메시지
- **선택적 검증**: 이메일 입력 시에만 형식 검증
- **파일 업로드**: 미리보기 지원, 나중 제출 가능 안내
- **동적 필드**: 필요에 따른 필드 표시/숨김

### 상태 관리
- 로딩 스피너 표시
- 성공/오류 알림 메시지
- 폼 제출 후 리다이렉션

## 📋 배포 현황 및 향후 개선사항

### ✅ **2025년 10월 9일 배포 완료** 
- **커스텀 도메인**: https://hireme.kr ✅ **NEW!**
- **GitHub 연동**: https://github.com/hiremekr/hire-me-platform ✅ **NEW!**
- **실제 서비스**: https://hire-me-platform.pages.dev ✅
- **Cloudflare Pages**: 전 세계 CDN 배포 완료 ✅
- **모바일 최적화**: textarea 너비 문제 해결 ✅
- **모바일 메뉴**: 햄버거 메뉴 클릭 문제 해결 ✅ **NEW!**
- **새로운 로고**: 전문적인 이미지 로고로 업데이트 ✅ **NEW!**
- **Google Drive API 롤백**: 성능 최적화 완료 ✅
- **카카오톡 링크**: 실제 채널 연동 완료 (URL 수정: http://pf.kakao.com/_pPxnFxj/chat) ✅

### ✅ **폼 제출 시스템 (실제 운영 중)**
- **Formspree 연동 완료**: 모든 폼이 Formspree로 통합 운영 ✅ **NEW!**
  - **구직 신청 폼**: https://formspree.io/f/xanpdpdz ✅
  - **기업 신청 폼**: https://formspree.io/f/xjkaedgv ✅ **NEW!**
- **EmailJS 완전 제거**: JavaScript 의존성 없는 순수 HTML 폼 ✅ **NEW!**
- **파일 업로드**: 이력서, 사진, 한국어 능력 증명서 첨부 가능 ✅
- **이메일 전달**: hireme.kr@gmail.com로 자동 전송 ✅
- **성공 페이지**: 제출 후 자동 리다이렉션 ✅

### 🔄 현재 데모 기능 (추가 개발 가능)
- **데이터베이스 연동**: JSON → Cloudflare D1/KV 전환 검토
- **관리자 대시보드**: 제출된 신청서 관리 시스템

### 🚀 추가 기능 개발
- **인재 등록 관리자 페이지**: 웹 UI를 통한 인재 추가/수정/삭제
- **인재정보 요청 처리**: TalentRequestPage 폼 처리 로직
- **통계 대시보드**: 매칭 성공률, 지역별/비자별 분석
- 실시간 채팅 상담 시스템
- 다국어 지원 (영어, 베트남어, 네팔어)
- 모바일 앱 개발
- SEO 최적화 및 사이트맵 생성

### 🔐 보안 강화
- API 인증 시스템
- 파일 업로드 보안 검증
- 스팸 방지 시스템
- 개인정보 암호화

## 📞 연락처

### 운영 기관
- **더글로벌리크루팅**: 구직 서비스 담당
- **행정사사무소 늘좋은**: 비자 업무 담당

### 기술 지원
- **카카오톡 상담**: http://pf.kakao.com/_pPxnFxj/chat ✅
- **전화 문의**: 010-6326-5572
- **이메일**: hireme.kr@gmail.com

---

**🚀 배포 완료**: 2025년 10월 9일  
**⚡ 배포 상태**: ✅ **실제 서비스 운영 중**
- **커스텀 도메인**: https://hireme.kr (메인 서비스) ✅ **NEW!**
- **GitHub 연동**: https://github.com/hiremekr/hire-me-platform ✅ **업데이트 완료!**
- **자동 배포**: https://hire-me-platform1.pages.dev (GitHub 연동) ✅
- **수동 배포**: https://hire-me-platform.pages.dev (CLI 배포)  
**📱 모바일 최적화**: ✅ **완료** (textarea 너비 20% 축소)  
**🔄 성능 최적화**: ✅ **완료** (Google Drive API 롤백)  
**📧 폼 제출 시스템**: ✅ **완료** (Formspree 통합, EmailJS 완전 제거) ✅ **NEW!**  

**주요 개선사항**: 
- **커스텀 도메인 연결**: hireme.kr 도메인으로 전문적인 브랜딩 완성 ✅ **NEW!**
- **Cloudflare Pages 실제 배포**: 글로벌 CDN으로 전 세계 접속 가능 ✅
- **모바일 UX 최적화**: textarea 오버플로우 문제 해결 ✅ 
- **성능 최적화**: Google Drive API 제거로 로딩 속도 개선 ✅
- **카카오톡 링크 수정**: 올바른 URL로 연동 완료 (http://pf.kakao.com/_pPxnFxj/chat) ✅
- **폼 제출 시스템**: Formspree 완전 통합, EmailJS 의존성 제거 ✅ **NEW!**
- **성공 페이지 개선**: 불필요한 연락처/상담시간 정보 제거 ✅
- **GitHub 연동**: 코드 변경사항 자동 배포 시스템 ✅ (https://github.com/hiremekr/hire-me-platform)
- **인재풀 시스템**: 24명 인재 데이터베이스 + 실시간 필터링
- **기업 신청 간소화**: 필수 항목 최소화 (담당자명/전화번호만)
- **EPS 16개국 지원**: 네팔~이집트까지 전체 EPS 국가 선택 가능
- **당근마켓 스타일 UI**: 모바일 최적화 반응형 카드 레이아웃
- **이중언어 지원**: 한국어/영어 완전 지원
- **현실적인 데이터**: 실제 서비스 수준의 콘텐츠

**핵심 특징**:
- **글로벌 배포**: Cloudflare Pages로 전 세계 빠른 접속 ✅
- **확장성**: 관리자가 인재 추가 시 자동으로 페이지에 반영
- **검색성**: 국적/희망비자/성별 조합 필터링으로 정확한 인재 검색
- **사용성**: 담당자 정보만으로 빠른 기업 신청 가능
- **완성도**: 실제 서비스 운영 가능한 수준의 UI/UX
- **모바일 친화**: 모든 디바이스에서 최적화된 사용자 경험

**기술 스택**: Hono + Cloudflare Pages + TypeScript + TailwindCSS

**백업**: https://page.gensparksite.com/project_backups/hire-me-platform-working-version.tar.gz