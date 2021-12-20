
const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
const openModalBtn=document.querySelector('[data-modal-open]');
menuBtnRef.addEventListener('click', () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);
  mobileMenuRef.classList.toggle('is-open');
});

openModalBtn.addEventListener('click', (event)=>{
  event.preventDefault();
  mobileMenuRef.classList.remove('is-open');
});
