import { useState, useEffect } from 'preact/hooks'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

// ── 타입 정의 ──────────────────────────────────────────
interface Talent {
  no: number
  name: string
  nationality: string
  visa: string
  career: number
  korean: string
  gender: string
  age: number
}

// ── 설정 ───────────────────────────────────────────────
const API_URL = 'https://script.google.com/macros/s/AKfycbwg14TmdT8_ieHiswYaoIQ78orlWyXysSj647VN2enwO2SUwnzrcgK6XaE1hl-Yi7Bn/exec'

// ── 국기 SVG ───────────────────────────────────────────
const FLAGS: Record<string, string> = {
  '네팔': `<svg viewBox="0 0 60 72" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 60,26 0,52" fill="#DC143C"/><polygon points="0,0 50,22 0,44" fill="#DC143C" stroke="#003893" stroke-width="3"/><polygon points="0,44 50,22 0,72" fill="#003893"/><circle cx="10" cy="17" r="4" fill="#fff"/><polygon points="10,36 12.5,43 7.5,43" fill="#fff"/></svg>`,
  '미얀마': `<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="7" fill="#FECB00"/><rect y="7" width="30" height="6" fill="#34B233"/><rect y="13" width="30" height="7" fill="#EA2839"/><polygon points="15,2 17,8 23,8 18,12 20,18 15,14 10,18 12,12 7,8 13,8" fill="#fff"/></svg>`,
  '방글라데시': `<svg viewBox="0 0 30 18" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="18" fill="#006A4E"/><circle cx="14" cy="9" r="5.5" fill="#F42A41"/></svg>`,
  '베트남': `<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#DA251D"/><polygon points="15,5 17,11 23,11 18,14 20,20 15,16 10,20 12,14 7,11 13,11" fill="#FFFF00"/></svg>`,
  '스리랑카': `<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#FFBE29"/><rect x="0" y="0" width="4" height="20" fill="#8D153A"/><rect x="4" y="0" width="4" height="20" fill="#00843D"/><rect x="8" y="1" width="21" height="18" fill="#8D153A" rx="1"/></svg>`,
  '인도네시아': `<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="10" fill="#CE1126"/><rect y="10" width="30" height="10" fill="#FFFFFF"/></svg>`,
  '태국': `<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#A51931"/><rect y="4" width="30" height="12" fill="#F4F5F8"/><rect y="7" width="30" height="6" fill="#2D2A4A"/></svg>`,
  '캄보디아': `<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="7" fill="#032EA1"/><rect y="7" width="30" height="6" fill="#E00025"/><rect y="13" width="30" height="7" fill="#032EA1"/></svg>`,
  '필리핀': `<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="10" fill="#0038A8"/><rect y="10" width="30" height="10" fill="#CE1126"/><polygon points="0,0 12,10 0,20" fill="#FCD116"/></svg>`,
  '우즈베키스탄': `<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="7" fill="#1EB53A"/><rect y="7" width="30" height="6" fill="#fff"/><rect y="13" width="30" height="7" fill="#CE1126"/></svg>`,
  '몽골': `<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="20" fill="#C4272F"/><rect x="10" width="10" height="20" fill="#015197"/><rect x="20" width="10" height="20" fill="#C4272F"/></svg>`,
  '파키스탄': `<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="7" height="20" fill="#fff"/><rect x="7" width="23" height="20" fill="#01411C"/></svg>`,
}

function getFlag(nationality: string): string {
  return FLAGS[nationality] || `<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#94a3b8"/></svg>`
}

function getAvatar(gender: string): string {
  return gender === '여' ? '👩🏽' : '👨🏽'
}

function getKoreanLevelNum(korean: string): number {
  if (!korean) return 0
  const match = korean.match(/(\d+)/)
  return match ? parseInt(match[1]) : 0
}

// ── 카드 컴포넌트 ───────────────────────────────────────
interface TalentCardProps {
  talent: Talent
  onRequest: (talent: Talent) => void
  delay: number
}

function TalentCard({ talent, onRequest, delay }: TalentCardProps) {
  return (
    <div
      className="talent-card bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-200 flex flex-col"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        transition: 'all 0.22s cubic-bezier(0.4,0,0.2,1)',
        animation: `fadeUp 0.4s ease ${delay}s both`,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = '0 14px 28px rgba(10,102,194,0.13)'
        el.style.borderColor = '#0a66c2'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'
        el.style.borderColor = '#e5e7eb'
      }}
    >
      {/* 상단 그라데이션 바 */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{
          height: 72,
          background: 'linear-gradient(90deg, #0a66c2 0%, #0952a0 50%, #0a66c2 100%)',
        }}
      />

      {/* 프로필 영역 */}
      <div className="px-5 pb-5 flex flex-col flex-1" style={{ marginTop: -36 }}>

        {/* 아바타 + 국기 */}
        <div className="relative inline-block" style={{ width: 72, height: 72 }}>
          <div
            className="w-full h-full rounded-full flex items-center justify-center bg-white"
            style={{ padding: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          >
            <div
              className="w-full h-full rounded-full flex items-center justify-center text-4xl"
              style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)' }}
            >
              {getAvatar(talent.gender)}
            </div>
          </div>
          {/* 국기 뱃지 */}
          <div
            className="absolute overflow-hidden rounded-full"
            style={{
              bottom: 0, right: -2,
              width: 26, height: 26,
              border: '2.5px solid #fff',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            }}
            dangerouslySetInnerHTML={{ __html: getFlag(talent.nationality) }}
          />
        </div>

        {/* 이름 */}
        <div className="mt-3 font-extrabold text-gray-900 text-lg tracking-tight">
          {talent.name}
        </div>
        <div className="text-sm text-gray-500 mt-0.5 font-medium">
          {talent.nationality} · 경력 {talent.career}년
        </div>
        <div className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
          {talent.nationality}
          <span className="inline-block w-1 h-1 rounded-full bg-gray-300" />
          {talent.gender === '여' ? '여성' : '남성'}
          <span className="inline-block w-1 h-1 rounded-full bg-gray-300" />
          {talent.age}세
        </div>

        {/* 구분선 */}
        <div className="my-3.5 border-t border-gray-100" />

        {/* 스탯 */}
        <div className="grid grid-cols-2 gap-2.5 mb-3">
          <div className="bg-slate-50 rounded-lg p-2.5">
            <div className="text-xs text-gray-400 font-bold uppercase tracking-wide">경력</div>
            <div className="text-sm font-extrabold text-gray-900 mt-0.5">{talent.career}년</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-2.5">
            <div className="text-xs text-gray-400 font-bold uppercase tracking-wide">한국어</div>
            <div className="text-sm font-extrabold text-gray-900 mt-0.5">{talent.korean || '미정'}</div>
          </div>
        </div>

        {/* 희망 비자 */}
        <div
          className="rounded-lg px-3.5 py-3 flex items-center justify-between mb-3.5"
          style={{
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            border: '1px solid #fcd34d',
          }}
        >
          <span className="text-xs font-bold text-yellow-800">🎯 희망 비자</span>
          <span className="text-base font-black text-yellow-900 tracking-wide">{talent.visa}</span>
        </div>

        {/* CTA 버튼 */}
        <button
          onClick={() => onRequest(talent)}
          className="mt-auto w-full py-2.5 rounded-full text-sm font-bold border-2 border-blue-600 text-blue-600 bg-white transition-all hover:bg-blue-600 hover:text-white"
        >
          인재 정보 요청하기
        </button>
      </div>
    </div>
  )
}

// ── 메인 페이지 ────────────────────────────────────────
export const TalentPoolPage = () => {
  const [talents, setTalents] = useState<Talent[]>([])
  const [filtered, setFiltered] = useState<Talent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // 필터 상태
  const [filterNation, setFilterNation] = useState('')
  const [filterVisa, setFilterVisa] = useState('')
  const [filterGender, setFilterGender] = useState('')
  const [filterKorean, setFilterKorean] = useState('')

  // 국적 목록 (동적)
  const [nations, setNations] = useState<string[]>([])

  // ── 데이터 로드 ──
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        const data: Talent[] = json.talent || []
        setTalents(data)
        setFiltered(data)
        setNations([...new Set(data.map(t => t.nationality))].sort())
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  // ── 필터 적용 ──
  useEffect(() => {
    let result = talents
    if (filterNation) result = result.filter(t => t.nationality === filterNation)
    if (filterVisa)   result = result.filter(t => t.visa === filterVisa)
    if (filterGender) result = result.filter(t => t.gender === filterGender)
    if (filterKorean) result = result.filter(t => getKoreanLevelNum(t.korean) === parseInt(filterKorean))
    setFiltered(result)
  }, [filterNation, filterVisa, filterGender, filterKorean, talents])

  // ── 인재 요청 (기존 TalentRequestPage로 이동) ──
  const handleRequest = (talent: Talent) => {
    window.location.href = `/company/request?talent_id=${talent.no}&talent_name=${encodeURIComponent(talent.name)}&talent_info=${encodeURIComponent(`${talent.nationality} / ${talent.gender === '여' ? '여성' : '남성'} / ${talent.age}세 / 경력 ${talent.career}년 / ${talent.korean} / 희망 ${talent.visa}`)}`
  }

  const resetFilters = () => {
    setFilterNation('')
    setFilterVisa('')
    setFilterGender('')
    setFilterKorean('')
  }

  return (
    <div>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .spinner {
          width: 40px; height: 40px;
          border: 3px solid #e2e8f0;
          border-top-color: #0a66c2;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 16px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <Header />

      {/* 히어로 */}
      <section className="text-center pt-12 pb-10 px-5"
        style={{ background: 'linear-gradient(180deg, #fff 0%, #f3f5f8 100%)' }}>
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
          🎯 외국인 인재풀
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">
          우수한 외국인 인재를 만나보세요
        </h1>
        <p className="text-gray-500 text-base mb-5">
          한국에서 바로 근무 가능한 검증된 외국인 인재를 찾아보세요
        </p>
        <div className="inline-flex items-center gap-6 bg-white border border-gray-200 rounded-full px-8 py-3.5 text-sm shadow-sm">
          <div>
            <span className="font-black text-blue-600 text-xl mr-1">
              {loading ? '-' : talents.length}
            </span>명의 인재 등록
          </div>
          <div className="w-px h-5 bg-gray-200" />
          <div><span className="font-black text-blue-600 text-xl mr-1">실시간</span> 업데이트</div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 pb-20">

        {/* 필터 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 mb-5
                        grid grid-cols-2 md:grid-cols-4 gap-3 items-end">
          {/* 국적 */}
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1.5">🌏 국적</label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:border-blue-500 focus:outline-none"
              value={filterNation}
              onChange={e => setFilterNation(e.target.value)}
            >
              <option value="">전체 국적</option>
              {nations.map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>

          {/* 비자 */}
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1.5">📋 희망 비자</label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:border-blue-500 focus:outline-none"
              value={filterVisa}
              onChange={e => setFilterVisa(e.target.value)}
            >
              <option value="">전체 비자</option>
              <option value="E-7-4R">E-7-4R (지역특화)</option>
              <option value="F-2-R">F-2-R (거주)</option>
              <option value="E-7-1">E-7-1 (전문직)</option>
            </select>
          </div>

          {/* 성별 */}
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1.5">👥 성별</label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:border-blue-500 focus:outline-none"
              value={filterGender}
              onChange={e => setFilterGender(e.target.value)}
            >
              <option value="">전체</option>
              <option value="남">남성</option>
              <option value="여">여성</option>
            </select>
          </div>

          {/* 한국어 */}
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1.5">🗣 한국어 수준</label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:border-blue-500 focus:outline-none"
              value={filterKorean}
              onChange={e => setFilterKorean(e.target.value)}
            >
              <option value="">전체</option>
              <option value="1">1단계 / TOPIK 1급</option>
              <option value="2">2단계 / TOPIK 2급</option>
              <option value="3">3단계 / TOPIK 3급</option>
              <option value="4">4단계 / TOPIK 4급</option>
              <option value="5">5단계 / TOPIK 5~6급</option>
            </select>
          </div>

          {/* 초기화 버튼 */}
          <button
            onClick={resetFilters}
            className="col-span-2 md:col-span-4 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors text-right"
          >
            ✕ 필터 초기화
          </button>
        </div>

        {/* 결과 카운트 */}
        <div className="text-sm text-gray-500 mb-4 font-medium">
          <strong className="text-blue-600 font-black">{filtered.length}명</strong>의 인재가 검색되었습니다
        </div>

        {/* 카드 그리드 */}
        {loading && (
          <div className="text-center py-20 text-gray-400">
            <div className="spinner" />
            <p>인재 정보를 불러오는 중입니다...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">⚠️</div>
            <p>데이터를 불러오지 못했습니다.<br />잠시 후 다시 시도해주세요.</p>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-500 mb-2">조건에 맞는 인재가 없습니다</h3>
            <p className="text-gray-400 mb-6">다른 조건으로 다시 검색해보세요</p>
            <button onClick={resetFilters}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
              전체 인재 보기
            </button>
          </div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((talent, i) => (
              <TalentCard
                key={talent.no}
                talent={talent}
                onRequest={handleRequest}
                delay={i * 0.04}
              />
            ))}
          </div>
        )}

        {/* CTA 섹션 */}
        {!loading && (
          <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-black text-gray-900 mb-3">
              🤝 맞춤형 인재 추천 서비스
            </h3>
            <p className="text-gray-500 mb-6">
              원하는 조건의 인재를 찾지 못하셨나요?<br />
              상세한 채용 요구사항을 알려주시면 최적의 인재를 추천해드립니다.
            </p>
            <a
              href="/company/apply"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-colors no-underline"
            >
              맞춤형 인재 추천 신청하기 →
            </a>
          </div>
        )}

      </div>

      <Footer />
    </div>
  )
}
