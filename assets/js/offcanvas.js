// Mobile menu toggle
const menuButton = document.querySelector('.lg\\:hidden button');
const mobileMenu = document.querySelector('.lg\\:hidden[role="dialog"]');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  const targetElement = event.target;
  const isMenuOpen = !mobileMenu.classList.contains('hidden');

  if (isMenuOpen && !targetElement.closest('.lg\\:hidden')) {
    mobileMenu.classList.add('hidden');
  }
});