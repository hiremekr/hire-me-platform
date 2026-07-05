// hireme 전용 Airtable 프록시 — 외국인 고용 계산기 명단(company 테이블) 저장용
// 주소: /api/company  (계산기가 이 주소로 데이터를 보냄)
// 토큰은 코드에 없음 → Cloudflare 환경변수(AIRTABLE_TOKEN)에서 안전하게 불러옴

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();

    const baseId = 'appqZ4tJx9S4cNLLk';   // Check Visa 베이스
    const tableId = 'tblL1r9nmkyeCJRD2';   // company 테이블 (외국인 고용 계산기)

    const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fields: body.fields })
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Airtable API 오류:', data);
      return new Response(JSON.stringify({ error: data }), {
        status: res.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
