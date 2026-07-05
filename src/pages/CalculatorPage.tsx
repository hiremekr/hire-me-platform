import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const CalculatorPage = () => {
  return (
    <div>
      <Header />

      <style>{`
/* ============================================================
     디자인 토큰 - 이메일/PPT와 통일
     ============================================================ */
  :root {
    --navy: #0F1F4D;
    --navy-deep: #081538;
    --navy-soft: #1E3A8A;
    --ink: #0F172A;
    --body: #334155;
    --muted: #64748B;
    --line: #E2E8F0;
    --bg: #FFFFFF;
    --bg-soft: #F8FAFC;
    --bg-card: #F1F5F9;
    --accent: #F76F4C;
    --accent-deep: #E55A37;
    --accent-soft: #FFE9E1;
    --gold: #A88547;
    --gold-dark: #7A5F30;
    --success: #16A34A;
    --success-bg: #DCFCE7;
    --warn: #D97706;
    --warn-bg: #FEF3C7;
    --warn-border: #FCD34D;
    --danger: #DC2626;
    --danger-bg: #FEE2E2;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
  body {
    background-color: var(--bg-soft);
    color: var(--ink);
    font-family: 'Pretendard', 'Malgun Gothic', '맑은 고딕', 'Apple SD Gothic Neo', sans-serif;
    font-size: 15px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .wrap {
    max-width: 720px;
    margin: 0 auto;
    padding-bottom: 80px;
  }

  /* ============================================================
     히어로 헤더
     ============================================================ */
  .hero {
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 100%);
    color: #fff;
    padding: 56px 32px 64px;
    margin-bottom: 24px;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: "";
    position: absolute;
    top: -60px;
    right: -60px;
    width: 240px;
    height: 240px;
    background: radial-gradient(circle, rgba(247, 111, 76, 0.18) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
  .hero-content { position: relative; z-index: 1; max-width: 660px; }
  .eyebrow {
    color: var(--accent);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 4px;
    margin-bottom: 16px;
    text-transform: uppercase;
  }
  .hero h1 {
    font-size: 30px;
    font-weight: 800;
    line-height: 1.32;
    letter-spacing: -0.5px;
    margin-bottom: 14px;
    color: #fff;
  }
  .hero p {
    color: #CBD5E1;
    font-size: 14px;
    line-height: 1.7;
  }
  .hero-brand {
    margin-top: 28px;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.12);
    font-size: 12px;
    color: #94A3B8;
  }
  .hero-brand strong { color: #fff; font-weight: 600; }

  /* ============================================================
     카드
     ============================================================ */
  .card {
    background: var(--bg);
    margin: 0 16px 12px;
    padding: 28px 24px;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(15,23,42,0.04), 0 0 0 1px rgba(15,23,42,0.04);
  }

  /* 스텝 헤더 */
  .step-head {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 6px;
  }
  .step-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: var(--navy);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    flex-shrink: 0;
    letter-spacing: 0;
  }
  .step-head h2 {
    font-size: 16px;
    font-weight: 700;
    color: var(--ink);
    letter-spacing: -0.2px;
  }
  .step-desc {
    color: var(--muted);
    font-size: 13px;
    margin-bottom: 22px;
    margin-left: 38px;
    line-height: 1.55;
  }

  /* ============================================================
     폼 요소
     ============================================================ */
  .field { margin-bottom: 20px; }
  .field:last-child { margin-bottom: 0; }

  label.field-label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 8px;
  }
  .field-help {
    display: block;
    font-weight: 400;
    color: var(--muted);
    font-size: 12px;
    margin-top: 4px;
    line-height: 1.5;
  }
  .req { color: var(--accent); margin-left: 2px; }

  input[type="text"],
  input[type="number"] {
    width: 100%;
    padding: 12px 14px;
    border: 1.5px solid var(--line);
    border-radius: 8px;
    font-size: 15px;
    color: var(--ink);
    font-family: inherit;
    transition: border-color 0.15s, box-shadow 0.15s;
    background: #fff;
  }
  input[type="text"]:focus,
  input[type="number"]:focus {
    outline: none;
    border-color: var(--navy);
    box-shadow: 0 0 0 3px rgba(15,31,77,0.08);
  }
  input::placeholder { color: #94A3B8; }
  /* 숫자 입력 스피너 제거 */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none; margin: 0;
  }
  input[type="number"] { -moz-appearance: textfield; }

  /* 자동완성 */
  .autocomplete-wrap { position: relative; }
  .suggestions {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 8px;
    max-height: 280px;
    overflow-y: auto;
    z-index: 10;
    box-shadow: 0 6px 20px rgba(15,23,42,0.10);
    display: none;
  }
  .suggestions.show { display: block; }
  .suggestion {
    padding: 11px 14px;
    cursor: pointer;
    font-size: 14px;
    border-bottom: 1px solid var(--bg-soft);
    transition: background 0.1s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .suggestion:last-child { border-bottom: none; }
  .suggestion:hover, .suggestion.active { background: var(--bg-soft); }
  .suggestion .place {
    color: var(--ink);
    font-weight: 500;
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .suggestion .place .sido {
    color: var(--muted);
    font-weight: 400;
    font-size: 12px;
    margin-left: 6px;
  }
  .tag-chip {
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 4px;
    font-weight: 700;
    letter-spacing: 0.5px;
    flex-shrink: 0;
    white-space: nowrap;
  }
  .tag-declining { background: var(--success-bg); color: #15803D; }
  .tag-attention { background: var(--warn-bg); color: var(--warn); }
  .tag-general { background: var(--bg-card); color: var(--muted); }

  /* 위치 판정 결과 (입력란 아래) */
  .region-result {
    margin-top: 12px;
    padding: 14px 16px;
    border-radius: 8px;
    font-size: 13px;
    line-height: 1.5;
    display: none;
  }
  .region-result.show { display: block; }
  .region-result.declining { background: var(--success-bg); color: #14532D; }
  .region-result.attention { background: var(--warn-bg); color: #78350F; }
  .region-result.general { background: var(--bg-card); color: var(--body); }
  .region-result strong { font-weight: 700; }
  .region-result .small { display: block; margin-top: 4px; opacity: 0.85; font-size: 12px; }

  /* 체크박스 행 */
  .check-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px 16px;
    background: var(--bg-soft);
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.1s;
  }
  .check-row:hover:not(.disabled) { background: var(--bg-card); }
  .check-row input[type="checkbox"],
  .check-row input[type="radio"] {
    width: 18px;
    height: 18px;
    accent-color: var(--navy);
    cursor: pointer;
    flex-shrink: 0;
  }
  .check-row label {
    margin: 0;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    flex: 1;
    color: var(--ink);
  }
  .check-row .row-help {
    color: var(--muted);
    font-size: 12px;
    font-weight: 400;
    margin-top: 2px;
    line-height: 1.4;
  }
  .check-row.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  /* ★[2026.6] 업종 특례 라디오 그룹 (농축어업/뿌리산업/해당없음) */
  .industry-group { display: flex; flex-direction: column; gap: 8px; }
  .industry-group.disabled { opacity: 0.5; pointer-events: none; }
  .industry-note {
    font-size: 12px;
    color: var(--muted);
    margin-top: 8px;
    line-height: 1.55;
  }
  .industry-note strong { color: var(--body); }

  /* 결격사유 체크리스트 */
  .checklist {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .checklist-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 13px 16px;
    background: var(--bg-soft);
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.1s;
  }
  .checklist-item:hover { background: var(--bg-card); }
  .checklist-item input {
    width: 18px;
    height: 18px;
    accent-color: var(--accent);
    cursor: pointer;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .checklist-item label {
    margin: 0;
    cursor: pointer;
    font-weight: 400;
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--body);
  }

  /* 도움말 토글 */
  .help-toggle {
    background: none;
    border: none;
    color: var(--navy);
    font-size: 12px;
    cursor: pointer;
    padding: 0;
    margin-top: 6px;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-style: dashed;
    text-underline-offset: 3px;
    font-family: inherit;
  }
  .help-toggle:hover { color: var(--accent); }
  .help-content {
    display: none;
    margin-top: 10px;
    padding: 14px 16px;
    background: var(--bg-soft);
    border-radius: 8px;
    font-size: 13px;
    color: var(--body);
    line-height: 1.6;
  }
  .help-content.show { display: block; }

  /* ============================================================
     액션 버튼
     ============================================================ */
  .btn-primary {
    display: block;
    width: 100%;
    padding: 16px;
    background: var(--accent);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
    margin: 8px 16px 0;
    width: calc(100% - 32px);
    letter-spacing: -0.1px;
    box-shadow: 0 2px 8px rgba(247,111,76,0.25);
  }
  .btn-primary:hover { background: var(--accent-deep); }
  .btn-primary:active { transform: translateY(1px); }
  .btn-primary:disabled {
    background: #CBD5E1;
    cursor: not-allowed;
    box-shadow: none;
  }

  /* 카톡 버튼 */
  .btn-kakao {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 24px;
    background: var(--navy);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.15s, transform 0.1s;
    width: 100%;
    max-width: 320px;
  }
  .btn-kakao:hover { background: var(--navy-soft); }
  .btn-kakao:active { transform: translateY(1px); }
  .btn-kakao svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  /* ★[방안 A] 결과 하단 인라인 안내신청 폼 (명단 수집) */
  .optin-card {
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 100%);
    margin: 0 16px 12px;
    padding: 28px 26px;
    border-radius: 12px;
    color: #fff;
  }
  .optin-head { text-align: center; margin-bottom: 20px; }
  .optin-eyebrow {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--accent);
    background: rgba(247,111,76,0.14);
    padding: 5px 12px;
    border-radius: 100px;
    margin-bottom: 12px;
  }
  .optin-head h3 {
    font-size: 17px;
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.3px;
    margin-bottom: 8px;
    line-height: 1.4;
  }
  .optin-head p {
    font-size: 12.5px;
    color: #CBD5E1;
    line-height: 1.65;
  }
  .optin-head p b { color: #fff; }
  .optin-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 16px;
  }
  .optin-field-full { grid-column: 1 / -1; }
  .optin-field label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: #E2E8F0;
    margin-bottom: 6px;
  }
  .optin-field .req { color: var(--accent); }
  .optin-field .opt { color: #94A3B8; font-weight: 400; font-size: 11px; }
  .optin-field input {
    width: 100%;
    padding: 11px 13px;
    border: 1.5px solid rgba(255,255,255,0.18);
    border-radius: 8px;
    font-size: 14px;
    font-family: inherit;
    color: var(--ink);
    background: #fff;
  }
  .optin-field input:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(247,111,76,0.2);
  }
  .optin-field input::placeholder { color: #94A3B8; font-size: 12.5px; }
  .optin-agrees {
    background: rgba(255,255,255,0.06);
    border-radius: 10px;
    padding: 14px 16px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .optin-check {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
  }
  .optin-check input {
    width: 18px;
    height: 18px;
    margin-top: 1px;
    accent-color: var(--accent);
    cursor: pointer;
    flex-shrink: 0;
  }
  .optin-check strong {
    display: block;
    font-size: 12.5px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 3px;
  }
  .optin-check .optin-detail {
    display: block;
    font-size: 10.5px;
    color: #94A3B8;
    line-height: 1.55;
  }
  .optin-submit {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 10px;
    background: var(--accent);
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(247,111,76,0.35);
    transition: background 0.15s, transform 0.1s;
  }
  .optin-submit:hover { background: var(--accent-deep); }
  .optin-submit:active { transform: translateY(1px); }
  .optin-submit:disabled { background: #64748B; cursor: not-allowed; box-shadow: none; }
  .optin-foot {
    text-align: center;
    font-size: 11px;
    color: #94A3B8;
    margin-top: 12px;
  }
  .optin-card.done {
    text-align: center;
  }
  @media (max-width: 480px) {
    .optin-card { margin-left: 12px; margin-right: 12px; padding: 24px 18px; }
    .optin-grid { grid-template-columns: 1fr; }
  }

  /* ★[2026.6] 결과 내 카톡 상담 유도 버튼 */
  .consult-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-decoration: none;
    background: #FEE500;
    color: #3A1D1D;
    font-weight: 700;
    font-size: 13.5px;
    border-radius: 10px;
    padding: 14px 16px;
    margin-top: 12px;
    transition: filter 0.15s;
  }
  .consult-cta:hover { filter: brightness(0.96); }

  /* ============================================================
     결과 영역
     ============================================================ */
  .result-section {
    display: none;
    animation: fadeUp 0.4s ease-out;
  }
  .result-section.show { display: block; }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .result-header-card {
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 100%);
    color: #fff;
    margin: 24px 16px 12px;
    padding: 28px 24px;
    border-radius: 12px;
    text-align: center;
  }
  .result-header-card .label {
    color: var(--accent);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .result-header-card h2 {
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    line-height: 1.35;
    letter-spacing: -0.3px;
    margin-bottom: 6px;
  }
  .result-header-card .subtitle {
    color: #CBD5E1;
    font-size: 13px;
  }

  /* 결격사유 경고 배너 */
  .warning-banner {
    background: var(--warn-bg);
    border: 1.5px solid var(--warn-border);
    margin: 0 16px 12px;
    padding: 18px 20px;
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }
  .warning-banner .icon {
    color: var(--warn);
    font-size: 18px;
    line-height: 1.4;
    flex-shrink: 0;
  }
  .warning-banner .content { flex: 1; }
  .warning-banner h3 {
    color: #78350F;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  .warning-banner p {
    color: #92400E;
    font-size: 13px;
    line-height: 1.6;
    margin: 0;
  }

  /* 비자 결과 카드 */
  .visa-card {
    background: #fff;
    margin: 0 16px 12px;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(15,23,42,0.04), 0 0 0 1px rgba(15,23,42,0.04);
  }
  .visa-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }
  .visa-name {
    font-size: 18px;
    font-weight: 800;
    color: var(--ink);
    letter-spacing: -0.3px;
    flex: 1;
    min-width: 0;
  }
  .visa-name-sub {
    font-size: 12px;
    font-weight: 500;
    color: var(--muted);
    margin-left: 6px;
    letter-spacing: 0;
  }
  .visa-quota {
    font-size: 22px;
    font-weight: 800;
    color: var(--navy);
    letter-spacing: -0.4px;
    white-space: nowrap;
  }
  .visa-quota .num {
    color: var(--accent);
    font-size: 28px;
  }
  .visa-desc {
    color: var(--body);
    font-size: 13px;
    line-height: 1.6;
    margin-bottom: 14px;
  }

  /* 통합 쿼터 카드의 서브 비자 (R / K-POINT) */
  .visa-sub {
    background: var(--bg-soft);
    border-radius: 8px;
    padding: 16px;
    margin-top: 14px;
  }
  .visa-sub-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 14px;
    padding: 10px 0;
    border-bottom: 1px dashed var(--line);
  }
  .visa-sub-item:last-child { border-bottom: none; }
  .visa-sub-item .label-area {
    flex: 1;
    min-width: 0;
  }
  .visa-sub-item .label-name {
    font-size: 14px;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 2px;
  }
  .visa-sub-item .label-detail {
    font-size: 12px;
    color: var(--muted);
    line-height: 1.5;
  }
  .visa-sub-item .quota-num {
    font-size: 18px;
    font-weight: 800;
    color: var(--accent);
    white-space: nowrap;
  }
  .visa-sub-item.unavailable .quota-num {
    color: var(--muted);
    font-size: 13px;
    font-weight: 600;
  }
  .visa-sub-item.unavailable .label-name { color: var(--muted); }
  .visa-sub-note {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--line);
    font-size: 12px;
    color: var(--muted);
    line-height: 1.55;
  }
  .visa-sub-note p { margin-bottom: 4px; }
  .visa-sub-note p:last-child { margin-bottom: 0; }

  /* 비자 카드의 모드 배지 */
  .mode-badge {
    display: inline-block;
    font-size: 10px;
    padding: 2px 7px;
    border-radius: 4px;
    font-weight: 700;
    letter-spacing: 0.3px;
    margin-left: 6px;
    vertical-align: middle;
  }
  .mode-full { background: var(--success-bg); color: #15803D; }
  .mode-change-only { background: var(--warn-bg); color: var(--warn); }
  .mode-na { background: var(--bg-card); color: var(--muted); }
  .mode-special50 { background: var(--accent-soft); color: var(--accent-deep); }

  /* 사용 불가 비자 (얇게 표시) */
  .visa-card.unavailable {
    background: var(--bg-soft);
    box-shadow: none;
    border: 1px dashed var(--line);
  }
  .visa-card.unavailable .visa-name { color: var(--muted); }
  .visa-card.unavailable .visa-desc { color: var(--muted); margin-bottom: 0; }
  .visa-card.unavailable .visa-na-text {
    font-size: 13px;
    color: var(--muted);
    font-weight: 600;
  }

  /* CTA 카드 */
  .cta-card {
    background: var(--accent-soft);
    margin: 0 16px 12px;
    padding: 28px 24px;
    border-radius: 12px;
    text-align: center;
  }
  .cta-card h3 {
    color: var(--navy);
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 8px;
    letter-spacing: -0.2px;
  }
  .cta-card p {
    color: var(--body);
    font-size: 13px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  .cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  .btn-cta-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 28px;
    background: var(--accent);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.15s, transform 0.1s;
    box-shadow: 0 2px 8px rgba(247,111,76,0.25);
    width: 100%;
    max-width: 320px;
  }
  .btn-cta-primary:hover { background: var(--accent-deep); }
  .btn-cta-primary:active { transform: translateY(1px); }

  /* 배우자 비자 안내 박스 */
  .spouse-info {
    background: linear-gradient(135deg, #FFF8F0 0%, #FFFAEB 100%);
    border: 1px solid #FBD38D;
    margin: 0 16px 12px;
    padding: 18px 22px 18px 50px;
    border-radius: 10px;
    position: relative;
  }
  .spouse-info::before {
    content: "💡";
    position: absolute;
    top: 16px;
    left: 18px;
    font-size: 16px;
  }
  .spouse-info h4 {
    color: var(--gold-dark);
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: -0.1px;
  }
  .spouse-info p {
    color: var(--body);
    font-size: 12.5px;
    line-height: 1.7;
    margin: 0;
  }
  .spouse-info p + p {
    margin-top: 6px;
  }
  .spouse-info .visa-code {
    background: #FEF3C7;
    color: var(--gold-dark);
    padding: 1px 6px;
    border-radius: 3px;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0;
  }
  .spouse-info .small-note {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px dashed rgba(168, 133, 71, 0.4);
    font-size: 11.5px;
    color: var(--gold-dark);
    line-height: 1.55;
  }

  /* 면책 박스 */
  .disclaimer {
    background: var(--bg);
    margin: 12px 16px 0;
    padding: 20px 24px;
    border-radius: 12px;
    border: 1px solid var(--line);
  }
  .disclaimer h4 {
    color: var(--navy);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .disclaimer p {
    color: var(--muted);
    font-size: 12px;
    line-height: 1.7;
    margin-bottom: 8px;
  }
  .disclaimer p:last-child { margin-bottom: 0; }
  .disclaimer strong { color: var(--body); }

  /* 다시 계산 버튼 */
  .reset-bar {
    margin: 24px 16px 0;
    text-align: center;
  }
  .btn-reset {
    background: transparent;
    border: 1.5px solid var(--line);
    color: var(--muted);
    padding: 10px 22px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.15s;
  }
  .btn-reset:hover { background: var(--bg-card); color: var(--ink); }

  /* ============================================================
     푸터
     ============================================================ */
  .footer {
    margin: 48px 16px 0;
    padding: 24px;
    border-top: 1px solid var(--line);
    text-align: center;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.7;
  }
  .footer strong { color: var(--ink); }
  .footer a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
  }

  /* ============================================================
     반응형
     ============================================================ */
  @media (max-width: 480px) {
    .hero { padding: 40px 24px 48px; }
    .hero h1 { font-size: 24px; }
    .card { padding: 22px 18px; margin: 0 12px 10px; }
    .visa-card { padding: 20px 18px; margin: 0 12px 10px; }
    .visa-quota { font-size: 18px; }
    .visa-quota .num { font-size: 24px; }
    .result-header-card { padding: 24px 20px; margin: 20px 12px 10px; }
    .result-header-card h2 { font-size: 20px; }
    .cta-card, .disclaimer, .warning-banner { margin-left: 12px; margin-right: 12px; }
    .btn-primary { margin-left: 12px; margin-right: 12px; width: calc(100% - 24px); }
    .step-desc { margin-left: 0; }
  }

  /* 숨김 처리 */
  .hidden { display: none !important; }

  /* ============================================================
     Step 3 결격사유 - 선택사항 토글
     ============================================================ */
  .optional-badge {
    margin-left: auto;
    background: var(--bg-card);
    color: var(--muted);
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 100px;
    letter-spacing: 0.3px;
  }
  .disq-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 14px 16px;
    margin-top: 8px;
    background: var(--bg-soft);
    border: 1.5px dashed var(--line);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    color: var(--body);
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
  }
  .disq-toggle:hover {
    background: var(--bg-card);
    border-color: var(--navy);
    border-style: solid;
  }
  .disq-toggle.expanded {
    background: var(--accent-soft);
    border-color: var(--accent);
    border-style: solid;
    color: var(--ink);
  }
  .disq-toggle-icon {
    transition: transform 0.25s;
    font-size: 12px;
    color: var(--muted);
  }
  .disq-toggle.expanded .disq-toggle-icon {
    transform: rotate(180deg);
    color: var(--accent);
  }
  .disq-collapsed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease, margin-top 0.35s ease, opacity 0.25s ease;
    margin-top: 0;
    opacity: 0;
  }
  .disq-collapsed.show {
    max-height: 1200px;
    margin-top: 16px;
    opacity: 1;
  }

  /* ============================================================
     페이지 하단 사이트 링크 (행정사 + 3개 사이트)
     ============================================================ */
  .site-links {
    margin: 32px 16px 0;
    padding: 24px 20px;
    text-align: center;
    border-top: 1px solid var(--line);
    color: var(--muted);
    font-size: 13px;
    line-height: 1.7;
  }
  .site-links-brand {
    color: var(--ink);
    font-size: 14px;
    margin-bottom: 4px;
  }
  .site-links-sub {
    font-size: 12px;
    margin-bottom: 12px;
  }
  .site-links-urls a {
    color: var(--navy);
    text-decoration: none;
    font-weight: 600;
  }
  .site-links-urls a:hover {
    color: var(--accent);
    text-decoration: underline;
  }
  .site-links-urls .dot {
    margin: 0 8px;
    color: var(--line);
  }
  @media (max-width: 480px) {
    .site-links-urls a {
      display: inline-block;
      margin: 4px 0;
    }
    .site-links-urls .dot {
      margin: 0 4px;
    }
  }

      `}</style>

      <div class="wrap" style="padding-top: 80px">

  {/* ============================================================
       히어로
       ============================================================ */}
  <div class="hero">
    <div class="hero-content">
      <div class="eyebrow">CALCULATOR</div>
      <h1>외국인 고용 가능 인원<br />한 번에 확인하세요</h1>
      <p>회사 정보 4가지만 입력하면 F-2-R, E-7-4 (R · K-POINT), E-7-1 비자별로<br />최대 몇 명까지 보유 가능한지 즉시 알려드립니다.</p>
      <div class="hero-brand">
        <strong>행정사사무소 늘좋은</strong> · 법무부 등록 출입국민원 대행기관
      </div>
    </div>
  </div>

  {/* ============================================================
       입력 폼
       ============================================================ */}
  <form id="calc-form" novalidate>

    {/* Step 1. 회사 위치 */}
    <div class="card">
      <div class="step-head">
        <span class="step-num">1</span>
        <h2>회사 소재지</h2>
      </div>
      <div class="step-desc">시·군·구를 입력하면 자동으로 위치 유형이 판정됩니다.</div>

      <div class="field">
        <label class="field-label" for="region-input">시·군·구<span class="req">*</span></label>
        <div class="autocomplete-wrap">
          <input type="text" id="region-input" placeholder="예: 영천시, 화성시, 영덕군" autocomplete="off" />
          <div class="suggestions" id="suggestions"></div>
        </div>
        <div class="region-result" id="region-result"></div>
      </div>

      {/* ★[2026.6] 뿌리산업 단일 체크박스 → 업종 특례 라디오(농축어업/뿌리산업/해당없음) */}
      <div class="field" id="industry-field">
        <label class="field-label">업종 특례 (해당 시 선택)
          <span class="field-help">농축어업·뿌리산업이면 고용허용 인원 특례(50%)가 적용됩니다. 인구감소지역은 이미 특례가 적용되어 선택할 필요가 없습니다.</span>
        </label>
        <div class="industry-group" id="industry-row">
          <div class="check-row">
            <input type="radio" id="industry-none" name="industry" value="none" checked />
            <label for="industry-none">해당 없음 (일반 업종)</label>
          </div>
          <div class="check-row">
            <input type="radio" id="industry-agri" name="industry" value="agri" />
            <div style="flex: 1;">
              <label for="industry-agri">농축어업</label>
              <div class="row-help">농업 · 축산업 · 어업 (2026.6 시행 신규 특례)</div>
            </div>
          </div>
          <div class="check-row">
            <input type="radio" id="industry-root" name="industry" value="root" />
            <div style="flex: 1;">
              <label for="industry-root">뿌리산업</label>
              <div class="row-help">주조·금형·소성가공·용접·열처리·표면처리 등</div>
            </div>
          </div>
        </div>
        <div class="industry-note">
          <strong>※ 농축어업·뿌리산업 해당 여부는 사업주가 판단합니다.</strong> 정확한 분류는 관할 출입국 또는 행정사 상담으로 확인하세요.
        </div>
        <button type="button" class="help-toggle" id="root-help-toggle">뿌리산업이란?</button>
        <div class="help-content" id="root-help-content">
          <strong>뿌리산업</strong>은 「뿌리산업 진흥과 첨단화에 관한 법률」에 따라
          지정된 산업으로, 주조 · 금형 · 소성가공 · 용접 · 열처리 · 표면처리 등이
          포함됩니다. 정확한 분류는 한국생산기술연구원 뿌리산업통합관리센터 또는
          행정사 상담을 통해 확인하시기 바랍니다.
        </div>
      </div>
    </div>

    {/* Step 2. 인원 정보 */}
    <div class="card">
      <div class="step-head">
        <span class="step-num">2</span>
        <h2>회사 인원 정보</h2>
      </div>
      <div class="step-desc">현재 시점의 고용보험 가입 인원을 기준으로 입력해주세요.</div>

      <div class="field">
        <label class="field-label" for="koreans">내국인 고용보험 가입자 수<span class="req">*</span>
          <span class="field-help">3개월 이상, 최저임금 이상 급여를 수령하는 한국인 직원</span>
        </label>
        <input type="number" id="koreans" min="0" placeholder="예: 10" />
      </div>

      <div class="field">
        <label class="field-label" for="foreigners">외국인 직원 수<span class="req">*</span>
          <span class="field-help">현재 재직 중인 모든 외국인 (E-9, E-7, F-2, F-4 등 합산)</span>
        </label>
        <input type="number" id="foreigners" min="0" placeholder="예: 4" />
      </div>

      <div class="field">
        <label class="field-label">현재 E-9 비자 외국인 직원<span class="req">*</span>
          <span class="field-help">E-7-4R · E-7-4 K-POINT 신청을 위한 선결조건</span>
        </label>
        <div class="check-row">
          <input type="radio" id="has-e9-yes" name="has-e9" value="yes" />
          <label for="has-e9-yes">1명 이상 있음</label>
        </div>
        <div class="check-row" style="margin-top: 8px;">
          <input type="radio" id="has-e9-no" name="has-e9" value="no" />
          <label for="has-e9-no">없음</label>
        </div>
      </div>

      {/* E-7-4 K-POINT 보유 여부 */}
      <div class="field">
        <label class="field-label">현재 E-7-4 K-POINT 외국인 직원<span class="req">*</span>
          <span class="field-help">E-7-4R과 K-POINT를 함께 보유 중인 경우 정확한 판단을 위해 선택해주세요</span>
        </label>
        <div class="check-row">
          <input type="radio" id="has-e74k-yes" name="has-e74k" value="yes" />
          <label for="has-e74k-yes">1명 이상 있음</label>
        </div>
        <div class="check-row" style="margin-top: 8px;">
          <input type="radio" id="has-e74k-no" name="has-e74k" value="no" />
          <label for="has-e74k-no">없음</label>
        </div>
      </div>

    </div>

    {/* Step 3. 결격사유 (선택사항) */}
    <div class="card">
      <div class="step-head">
        <span class="step-num">3</span>
        <h2>외국인 고용 결격사유 확인</h2>
        <span class="optional-badge">선택사항</span>
      </div>
      <div class="step-desc">결격사유는 시간이 지나면 해소되는 경우가 많습니다. 현재 회사 상황을 점검하고 싶은 분만 펼쳐서 확인해 주세요. 체크하지 않아도 결과 확인은 정상적으로 진행됩니다.</div>

      <button type="button" class="disq-toggle" id="disq-toggle">
        <span class="disq-toggle-text">결격사유 6개 항목 펼치기</span>
        <span class="disq-toggle-icon">▼</span>
      </button>

      <div class="checklist disq-collapsed" id="disq-checklist">
        <div class="checklist-item">
          <input type="checkbox" id="d1" class="disq" />
          <label for="d1">최근 3년 내 출입국관리법 위반(허위초청, 불법 고용 등)으로 처벌받은 사실이 있다</label>
        </div>
        <div class="checklist-item">
          <input type="checkbox" id="d2" class="disq" />
          <label for="d2">최근 3년 내 임금체불 · 산재은폐 등으로 처벌받은 사실이 있다</label>
        </div>
        <div class="checklist-item">
          <input type="checkbox" id="d3" class="disq" />
          <label for="d3">국세 또는 지방세 체납이 있다</label>
        </div>
        <div class="checklist-item">
          <input type="checkbox" id="d4" class="disq" />
          <label for="d4">최근 1년 내 외국인 불법 고용으로 과태료 처분을 받았다</label>
        </div>
        <div class="checklist-item">
          <input type="checkbox" id="d5" class="disq" />
          <label for="d5">대표자가 성매매 · 성폭력 · 마약 관련 처벌받은 사실이 있다</label>
        </div>
        <div class="checklist-item">
          <input type="checkbox" id="d6" class="disq" />
          <label for="d6">외국인고용법 위반 등으로 고용허가 취소 또는 고용제한 조치를 받아, 현재 신규 신청이 제한된 기간에 있다</label>
        </div>
      </div>
    </div>

    <button type="submit" class="btn-primary" id="submit-btn">
      비자별 보유 가능 인원 확인하기
    </button>
  </form>

  {/* ============================================================
       결과 영역
       ============================================================ */}
  <div class="result-section" id="result-section">

    <div class="result-header-card">
      <div class="label">RESULT</div>
      <h2 id="result-title">귀사가 보유 가능한 비자별 인원</h2>
      <div class="subtitle" id="result-subtitle">참고용 수치 · 정확한 판단은 행정사 상담</div>
    </div>

    <div class="warning-banner" id="warning-banner" style="display: none;">
      <div class="icon">⚠️</div>
      <div class="content">
        <h3>결격사유 가능성이 있습니다</h3>
        <p>입력하신 항목 중 외국인 고용에 영향을 줄 수 있는 사유가 포함되어 있습니다. 정확한 판단을 위해 반드시 행정사 상담을 받으신 후 진행하시기 바랍니다.</p>
      </div>
    </div>

    <div id="result-cards"></div>

    <div class="cta-card">
      <h3>다음은 어떻게 진행할까요?</h3>
      <p>실제 운용 가능 인원과 절차는 직종, 임금, 회사 상황에 따라 달라집니다.<br />적합한 인재 매칭부터 정확한 안내까지, 늘좋은이 함께합니다.</p>
      <div class="cta-buttons">
        <a href="/company/talents" class="btn-cta-primary">
          검증된 외국인 인재 살펴보기 →
        </a>
        <a href="http://pf.kakao.com/_pPxnFxj/chat" target="_blank" class="btn-kakao">
          <svg viewBox="0 0 24 24" fill="#FEE500" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.86 5.31 4.65 6.74-.2.74-.73 2.7-.83 3.12-.13.52.19.51.4.37.16-.11 2.61-1.78 3.66-2.5.71.1 1.43.16 2.12.16 5.52 0 10-3.58 10-8s-4.48-8-10-8z"/>
          </svg>
          카카오톡 1:1 무료 상담
        </a>
      </div>
    </div>

    {/* ★[방안 A] 결과 하단 인라인 안내신청 폼 — 원하는 사람만 작성 (강제 아님) */}
    <div class="optin-card" id="optin-card">
      <div class="optin-head">
        <div class="optin-eyebrow">📮 E-7-4 · F-2-R 등 최신 정보 받기</div>
        <h3>법령은 자주 바뀝니다. 가장 먼저 안내받으세요</h3>
        <p>2026.6 농축어업 특례처럼 외국인 고용 기준은 수시로 개정됩니다.<br />이메일을 남겨두시면 <b>귀사에 영향을 주는 변경 사항</b>을 무료로 안내해 드립니다.</p>
      </div>

      <div class="optin-grid">
        <div class="optin-field">
          <label for="consent-company">회사명 <span class="req">*</span></label>
          <input type="text" id="consent-company" placeholder="예: (주)늘좋은" autocomplete="organization" />
        </div>
        <div class="optin-field">
          <label for="consent-email">이메일 <span class="req">*</span></label>
          <input type="email" id="consent-email" placeholder="예: hr@company.com" autocomplete="email" />
        </div>
        <div class="optin-field optin-field-full">
          <label for="consent-phone">연락처 <span class="opt">(선택)</span></label>
          <input type="tel" id="consent-phone" placeholder="정확한 상담이 필요하실 때 연락드립니다" autocomplete="tel" />
        </div>
      </div>

      <div class="optin-agrees">
        <label class="optin-check">
          <input type="checkbox" id="consent-privacy" />
          <span>
            <strong>(필수) 개인정보 수집·이용 동의</strong>
            <span class="optin-detail">수집항목: 회사명, 이메일, 연락처(선택) · 목적: 법령 변경 안내 및 문의 응대 · 보관기간: 동의 철회 시 또는 목적 달성 시까지. 동의를 거부하실 수 있으며, 이 경우 안내 신청만 제한됩니다.</span>
          </span>
        </label>
        <label class="optin-check">
          <input type="checkbox" id="consent-marketing" />
          <span>
            <strong>(선택) 비자·고용 관계법령 변경 안내 수신 동의</strong>
            <span class="optin-detail">비자·외국인 고용 관련 법령 변경 소식과 상담 정보를 이메일·문자로 가장 먼저 받아보실 수 있습니다.</span>
          </span>
        </label>
      </div>

      <button type="button" class="optin-submit" id="consent-submit">📮 최신 정보 신청하기</button>
      <p class="optin-foot">무료 · 언제든 수신거부 가능 · 행정사사무소 늘좋은</p>
    </div>

    <div class="disclaimer">
      <h4>⚠️ 면책 안내</h4>
      <p>본 계산기는 일반적인 기준에 따른 <strong>참고용 수치</strong>이며, 실제 외국인 고용 가능 인원은 직종 코드, 임금 수준, 회사 재무상태, 과거 외국인 채용 이력, 사업장 위치 등 수십 가지 변수에 따라 달라집니다.</p>
      <p>본 결과는 <strong>법적 효력이 없으며</strong>, 결과만 믿고 채용을 진행할 경우 발생하는 문제에 대해 책임을 지지 않습니다. 정확한 인원 산정과 비자 적격성 판단은 반드시 행정사 상담을 통해 확인하시기 바랍니다.</p>
      <p>※ 외국인 채용을 위해서는 <strong>고용보험 가입이 필수</strong>입니다.</p>
    </div>

    <div class="reset-bar">
      <button type="button" class="btn-reset" id="reset-btn">↻ 다시 계산하기</button>
    </div>
  </div>

  {/* 페이지 하단 사이트 링크 */}
  <div class="site-links">
    <div class="site-links-brand"><strong>행정사사무소 늘좋은</strong></div>
    <div class="site-links-sub">법무부 등록 출입국민원 대행기관</div>
    <div class="site-links-urls">
      <a href="https://hireme.kr" target="_blank">hireme.kr</a>
      <span class="dot">·</span>
      <a href="https://checkvisa.co.kr" target="_blank">checkvisa.co.kr</a>
      <span class="dot">·</span>
      <a href="https://alwaysgood.co.kr" target="_blank">alwaysgood.co.kr</a>
    </div>
  </div>

</div>

      <Footer />

      <script src="/static/calculator.js" defer></script>
    </div>
  )
}
