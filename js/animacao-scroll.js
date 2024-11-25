export default function initAnimacaoScroll() {
  const observerConfig = (elemento) => {
    const threshold = elemento.classList.contains('album-img') || elemento.classList.contains('album-info') ? .4 : .1;
    
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