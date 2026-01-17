export const HeaderEN = () => {
  return (
    <header class="fixed top-0 w-full bg-white shadow-md z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          {/* Logo */}
          <div class="flex items-center">
            <a href="/en" class="flex items-center">
              <img 
                src="/static/hireme-logo.png" 
                alt="HIRE ME" 
                class="h-10 w-auto"
              />
            </a>
          </div>
          
          {/* Navigation Menu */}
          <nav class="hidden md:flex items-center space-x-8">
            <a href="/en/apply" class="text-gray-700 hover:text-teal-blue font-medium transition-colors">
              Job Application
            </a>
            <a href="/company" class="text-gray-700 hover:text-teal-blue font-medium transition-colors">
              For Companies
            </a>
            <a href="/jobs-portal" class="text-gray-700 hover:text-teal-blue font-medium transition-colors">
              Jobs Portal
            </a>
            <div class="flex items-center space-x-2">
              <i class="fas fa-globe text-gray-500"></i>
              <select 
                class="bg-transparent text-gray-700 text-sm focus:outline-none"
                onchange="location.href=this.value"
              >
                <option value="/">한국어</option>
                <option value="/en" selected>English</option>
              </select>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
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
        
        {/* Mobile Menu */}
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="/en/apply" class="block px-3 py-2 text-gray-700 hover:text-teal-blue font-medium">
              Job Application
            </a>
            <a href="/company" class="block px-3 py-2 text-gray-700 hover:text-teal-blue font-medium">
              For Companies
            </a>
            <a href="/jobs-portal" class="block px-3 py-2 text-gray-700 hover:text-teal-blue font-medium">
              Jobs Portal
            </a>
            <div class="px-3 py-2">
              <select 
                class="bg-transparent text-gray-700 text-sm focus:outline-none"
                onchange="location.href=this.value"
              >
                <option value="/">한국어</option>
                <option value="/en" selected>English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
