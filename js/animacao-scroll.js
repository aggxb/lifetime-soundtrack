export default function initAnimacaoScroll() {
  const elementosLista = document.querySelectorAll('[data-animar]');

  const elementObserver = new IntersectionObserver((elementos) => {
    elementos.forEach((elemento) => {
      if (elemento.isIntersecting) {
        elemento.target.classList.add('animar');
      } else {
        elemento.target.classList.remove('animar');
      }
    })
  }, {
    threshold: .1,
  });

  elementosLista.forEach((elemento) => {
    elementObserver.observe(elemento);
  });
}