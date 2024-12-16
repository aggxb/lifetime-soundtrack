export default function initAnimacaoScroll() {
  const observerConfig = (elemento) => {
    let threshold = 0;

    if (elemento.classList.contains('album-img')) {
      threshold = .2;
    } else if (elemento.classList.contains('albuns-info')) {
      threshold = .7;
    } else {
      threshold = .1;
    }

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
  }

  const elementosLista = document.querySelectorAll('[data-animar]');
  
  elementosLista.forEach((elemento) => {
    observerConfig(elemento);
  });
  
  return observerConfig;
}