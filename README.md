# HIRE ME - 외국인 취업 매칭 플랫폼

## 🎯 프로젝트 개요

**HIRE ME**는 외국인 구직자와 기업을 연결하는 전문 취업 매칭 플랫폼입니다. 구직부터 비자 취득까지 원스톱 서비스를 제공합니다.

- **목표**: 외국인 구직자의 안정적인 취업과 비자 취득 지원
- **대상**: E-7-4R, F-2-R, E-7-1, E-7-4 비자 신청자 및 채용 기업
- **특징**: 전문 행정사와 리크루팅 업체의 협업 서비스

## 🌐 서비스 URL

- **개발 서버**: https://3000-ih9zoa9oftxqirxv6bfzv-6532622b.e2b.dev
- **GitHub**: 설정 후 업데이트 예정

### 주요 기능 URL
- **홈페이지**: https://3000-ih9zoa9oftxqirxv6bfzv-6532622b.e2b.dev/
- **구직의뢰**: https://3000-ih9zoa9oftxqirxv6bfzv-6532622b.e2b.dev/apply
- **E-7-4R 신청**: https://3000-ih9zoa9oftxqirxv6bfzv-6532622b.e2b.dev/apply/e-7-4r
- **F-2-R 신청**: https://3000-ih9zoa9oftxqirxv6bfzv-6532622b.e2b.dev/apply/f-2-r
- **기업채용**: https://3000-ih9zoa9oftxqirxv6bfzv-6532622b.e2b.dev/company

## 📊 주요 기능

### ✅ 완료된 기능

#### 🏠 HOME 페이지 (/)
- 브랜드 로고 적용 및 히어로 섹션 
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

#### 🌐 이중언어 지원 기능 (NEW!)
- **폼 필드**: 모든 라벨이 한국어/영어 이중 표기
- **동의사항**: 한국어/영어 대역 제공
- **오류 메시지**: 이중언어로 안내
- **필수 필드 최소화**: 이름/전화번호/국적만 필수 (외국인 사용자 편의성 고려)

#### 🏢 기업채용 페이지 (/company)
- 인재 풀 롤링 배너 (12명 후보자)
- 빠른 매칭 신청 폼
- 서비스 특장점 소개
- 프로세스 안내

#### 📋 기업 상세 신청 (/company/apply)
- 서비스 프로세스 안내
- 개인정보 보호 정책
- 상세 기업 정보 수집 폼
- 채용 분야별 맞춤 필드

#### ✅ 신청 완료 페이지 (/apply/success)
- 신청 완료 확인
- 다음 단계 안내
- 연락처 정보

## 🗂️ 데이터 구조

### JSON 기반 데이터 관리
- **성공 케이스**: `data/success-cases.json` (9개 사례) - 현실적 데이터로 업데이트
- **인재 풀**: `data/candidates.json` (12명 후보자)  
- **이용자 후기**: `data/reviews.json` (6개 후기) - 리얼한 경험 데이터로 업데이트
- **로고 이미지**: `public/static/hireme-logo.png` - 브랜드 로고 추가

### 주요 데이터 항목
- **국적별 분포**: 네팔 (최다) > 방글라데시 > 스리랑카 > 기타
- **비자 타입별**: E-7-4R (50%) > F-2-R (35%) > E-7-1 (15%)
- **지역별 매칭**: 전국 17개 시도별 성공 사례

## 🛠️ 기술 스택

### Backend
- **Hono Framework**: 경량 웹 프레임워리
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

## 📁 프로젝트 구조

```
webapp/
├── src/
│   ├── components/       # 재사용 가능한 컴포넌트
│   │   ├── Header.tsx    # 헤더 네비게이션 (로고 적용)
│   │   ├── Footer.tsx    # 푸터 (로고 적용)
│   │   └── JobApplicationForm.tsx  # 공통 신청 폼 (이중언어)
│   ├── pages/           # 페이지 컴포넌트
│   │   ├── ApplyPage.tsx
│   │   ├── CompanyPage.tsx
│   │   ├── CompanyApplyPage.tsx
│   │   ├── F2RSelectionPage.tsx
│   │   ├── E74RFormPage.tsx
│   │   ├── F2RStudentFormPage.tsx
│   │   ├── F2RIncomeFormPage.tsx
│   │   ├── E71FormPage.tsx
│   │   ├── E74TransferFormPage.tsx
│   │   └── SuccessPage.tsx
│   ├── index.tsx        # 메인 애플리케이션
│   └── renderer.tsx     # JSX 렌더러
├── public/static/       # 정적 파일
│   ├── hireme-logo.png  # 브랜드 로고 이미지
│   ├── styles.css       # 커스텀 CSS
│   └── app.js          # 클라이언트 JavaScript
├── data/               # JSON 데이터
│   ├── candidates.json  # 인재 풀 데이터
│   ├── success-cases.json # 성공 사례 (업데이트)
│   └── reviews.json     # 이용자 후기 (업데이트)
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

### Cloudflare Pages 배포
```bash
# 프로덕션 빌드 및 배포
npm run deploy

# 프로젝트명 지정 배포  
npm run deploy:prod
```

## 📱 반응형 디자인

### 중단점
- **Mobile**: < 768px (1단 레이아웃, 햄버거 메뉴)
- **Tablet**: 768-1024px (2단 그리드)
- **Desktop**: > 1024px (3-4단 그리드, 최대 너비 1280px)

### 주요 반응형 요소
- 네비게이션: Desktop 풀메뉴 ↔ Mobile 햔버거 메뉴
- 카드 그리드: Desktop 3개 ↔ Tablet 2개 ↔ Mobile 1개
- 롤링 배너: Desktop 3개 ↔ Tablet 2개 ↔ Mobile 1개
- 폼 레이아웃: Desktop 2열 ↔ Mobile 1열

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

## 📋 향후 개선 사항

### 🔄 현재 데모 기능 (실제 구현 필요)
- **폼 제출 처리**: 현재 클라이언트단 시뮬레이션
- **이메일 연동**: 실제 이메일 발송 시스템 구축
- **파일 업로드**: 실제 파일 저장 시스템 구축
- **데이터베이스 연동**: JSON → 실제 DB 전환

### 🚀 추가 기능 개발
- 관리자 페이지 (매칭 관리, 통계 대시보드)
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
- 개발 문의: 개발팀
- 배포 문의: 인프라팀

---

**최종 업데이트**: 2024년 12월 기준  
**개발 상태**: ✅ 프로토타입 완성 + 사용자 피드백 반영 완료

**주요 개선사항**: 
- 브랜드 로고 적용
- 이중언어 지원 (한국어/영어)
- 사용자 친화적 폼 필드 간소화
- 현실적인 데이터로 업데이트

**기술 스택**: Hono + Cloudflare Pages + TypeScript + TailwindCSS