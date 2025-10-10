export const Header = () => {
  return (
    <header class="fixed top-0 w-full bg-white shadow-md z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          {/* 로고 */}
          <div class="flex items-center">
            <a href="/" class="flex items-center">
              <img 
                src="/static/hireme-logo.png" 
                alt="HIRE ME" 
                class="h-10 w-auto"
              />
            </a>
          </div>
          
          {/* 네비게이션 메뉴 */}
          <nav class="hidden md:flex items-center space-x-8">
            <a href="/apply" class="text-gray-700 hover:text-teal-blue font-medium transition-colors">
              구직의뢰
            </a>
            <a href="/company" class="text-gray-700 hover:text-teal-blue font-medium transition-colors">
              기업채용
            </a>
            <div class="flex items-center space-x-2">
              <i class="fas fa-globe text-gray-500"></i>
              <select class="bg-transparent text-gray-700 text-sm focus:outline-none">
                <option value="ko">한국어</option>
                <option value="en">English</option>
              </select>
            </div>
          </nav>
          
          {/* 모바일 메뉴 버튼 */}
          <div class="md:hidden">
            <button 
              id="mobile-menu-btn"
              onclick="toggleMobileMenu()"
              class="text-gray-700 hover:text-teal-blue focus:outline-none"
              type="button"
            >
              <i class="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        
        {/* 모바일 메뉴 */}
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="/apply" class="block px-3 py-2 text-gray-700 hover:text-teal-blue font-medium">
              구직의뢰
            </a>
            <a href="/company" class="block px-3 py-2 text-gray-700 hover:text-teal-blue font-medium">
              기업채용
            </a>
            <div class="px-3 py-2">
              <select class="bg-transparent text-gray-700 text-sm focus:outline-none">
                <option value="ko">한국어</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}