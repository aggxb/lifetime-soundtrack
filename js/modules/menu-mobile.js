export default function initMenuMobile() {
  const btnMenu = document.querySelector('[data-btn="menu"]');
  const nav = document.querySelector('[data-nav]');
  const overlay = document.querySelector('[data-overlay]');

  const classeAtiva = 'ativo';
  const eventos = ['click', 'touchstart'];
  
  const toggleMenu = (event) => {
    event.preventDefault();

    nav.classList.toggle(classeAtiva);
    overlay.classList.toggle(classeAtiva);
  }

  const fecharMenu = () => {
    nav.classList.remove(classeAtiva);
    overlay.classList.remove(classeAtiva);
  }

  eventos.forEach(evento => {
    btnMenu.addEventListener(evento, toggleMenu);
    overlay.addEventListener(evento, fecharMenu);
  })

}