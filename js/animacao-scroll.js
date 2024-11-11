export default function initAnimacaoScroll() {
  const elementosLista = document.querySelectorAll('[data-animar]');

  let threshold = 0;

  elementosLista.forEach((elemento) => {
    threshold = elemento.classList.contains('album-img') || elemento.classList.contains('album-info') ? .4 : .1

    const elementObserver = new IntersectionObserver((elementos) => {
      elementos.forEach((elemento) => {
        if (elemento.isIntersecting) {
          elemento.target.classList.add('animar');
        } else {
          elemento.target.classList.remove('animar');
        }
      })
    }, {
      threshold: threshold,
    });

    elementObserver.observe(elemento);
  });
  
}