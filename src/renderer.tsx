import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title = 'HIRE ME - 외국인 취업 매칭 플랫폼' }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Font Awesome Icons */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Google Fonts - Noto Sans KR */}
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        
        {/* Custom CSS */}
        <link href="/static/styles.css" rel="stylesheet" />
        
        {/* EmailJS Library */}
        <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
        
        {/* SEO Meta Tags */}
        <meta name="description" content="외국인 구직자와 기업을 연결하는 전문 취업 매칭 플랫폼. E-7-4R, F-2-R 등 비자별 맞춤 서비스 제공." />
        <meta name="keywords" content="외국인 취업, 비자, E-7-4R, F-2-R, 구직, 채용, 매칭" />
        <meta property="og:title" content="HIRE ME - 외국인 취업 매칭 플랫폼" />
        <meta property="og:description" content="취업부터 비자까지, 전문가가 원스톱으로 지원합니다" />
        <meta property="og:type" content="website" />
      </head>
      <body class="min-h-screen bg-gray-50 font-['Noto_Sans_KR']">
        {children}
        
        {/* Axios for API calls */}
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        
        {/* Custom JavaScript */}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
