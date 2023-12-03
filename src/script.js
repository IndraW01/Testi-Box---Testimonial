const sideToggleDesktop = document.getElementById('side-toggle-dekstop');
const sideToggleMobile = document.getElementById('side-toggle-mobile');
const sideDekstop = document.getElementById('side-dekstop');
const sideMobile = document.getElementById('side-mobile');
const content = document.getElementById('content');

sideToggleDesktop.addEventListener('click', () => {
  sideDekstop.classList.remove('sm:flex')
  sideDekstop.classList.add('sm:hidden')
  sideMobile.classList.remove('sm:hidden');
  sideMobile.classList.add('sm:flex');
  content.classList.remove('sm:ml-[216px]');
  content.classList.add('sm:ml-[100px]');
});

sideToggleMobile.addEventListener('click', () => {
  sideMobile.classList.remove('sm:flex');
  sideMobile.classList.add('sm:hidden');
  sideDekstop.classList.remove('sm:hidden')
  sideDekstop.classList.add('sm:flex')
  content.classList.remove('sm:ml-[100px]');
  content.classList.add('sm:ml-[216px]');
});

