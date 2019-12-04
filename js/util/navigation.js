export function navigation() {
  const HAMBURGER_MENU = document.getElementById('menu');
  const NAVIGATION = document.getElementById('main-navigation');

  HAMBURGER_MENU.addEventListener('click', function(event) {
    HAMBURGER_MENU.classList.toggle('open');
    NAVIGATION.classList.toggle('main-navigation--open');
  });
}
