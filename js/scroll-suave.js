export default function initScrollSuave() {
  const eventos = ['click', 'touchstart'];
  const listaLinks = document.querySelectorAll('[data-page-header] a');

  const getScrollTop = (element) => {
    const elementId = element.getAttribute('href');

    return document.querySelector(elementId).offsetTop;
  }

  const scrollToSection = (to) => {
    window.scroll({
      top: to,
      behavior: 'smooth',
    });
  }

  const scrollToId = (event) => {
    event.preventDefault();
    const sectionCoord = getScrollTop(event.target) - 180;

    scrollToSection(sectionCoord);
  }

  eventos.forEach((evento) => {
    listaLinks.forEach((link) => {
      link.addEventListener(evento, scrollToId);
    });
  });
}