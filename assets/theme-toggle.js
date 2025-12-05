// Theme Toggle Script
// Hybrid approach: respects system preference but allows manual override

(function() {
  // Get system preference
  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Get saved theme or fall back to system preference
  const getSavedTheme = () => {
    return localStorage.getItem('theme') || getSystemTheme();
  };

  // Apply theme
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    updateToggleButton(theme);
  };

  // Update toggle button appearance
  const updateToggleButton = (theme) => {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.querySelector('.theme-icon');
    
    if (toggleBtn && themeIcon) {
      themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
      toggleBtn.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
    }
  };

  // Initialize theme on page load
  const initTheme = () => {
    const theme = getSavedTheme();
    applyTheme(theme);
  };

  // Toggle theme
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleButton(newTheme);
  };

  // Set up event listener when DOM is ready
  const setupToggleButton = () => {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }
  };

  // Listen for system theme changes
  const watchSystemTheme = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  };

  // Initialize everything
  initTheme();
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupToggleButton();
      watchSystemTheme();
    });
  } else {
    setupToggleButton();
    watchSystemTheme();
  }
})();
