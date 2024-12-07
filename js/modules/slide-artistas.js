export default function initSlideArtistas() {
  const slideContainer = document.querySelector('.slider')
  const slideArtistas = document.querySelector('.artistas-slide');
  const listaArtistas = document.querySelectorAll('.artista-item');
  
  if (slideContainer && slideArtistas && listaArtistas) {
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');
  
    let indexAtual = 0;
    let slideWidth = listaArtistas[0].clientWidth;

    const eventos = ['click', 'touchstart'];

    function mudarItem() {
      slideArtistas.style.transform = `translateX(${-indexAtual * slideWidth}px)`;
  
      ajustarContainerHeight();
    }
  
    function ajustarContainerHeight() {
      const slideAtual = listaArtistas[indexAtual];
      const slideHeight = slideAtual.scrollHeight;
  
      slideContainer.style.height = `${slideHeight}px`;
    }
  
    function ajustarSlideWidth() {
      slideWidth = listaArtistas[0].clientWidth;
  
      mudarItem();
    }

    eventos.forEach((evento) => {
      prevBtn.addEventListener(evento, (event) => {
        event.preventDefault();
        indexAtual = (indexAtual === 0) ? listaArtistas.length - 1 : indexAtual - 1;
    
        mudarItem();
      });
    });

    eventos.forEach((evento) => {
      nextBtn.addEventListener(evento, (event) => {
        event.preventDefault();
        indexAtual = (indexAtual === listaArtistas.length - 1) ? 0 : indexAtual + 1;
    
        mudarItem();
      });
    });
  
    setInterval(() => {
      indexAtual = (indexAtual === listaArtistas.length - 1) ? 0 : indexAtual + 1;
  
      mudarItem();
    }, 1000 * 60);
  
    window.addEventListener('resize', ajustarSlideWidth);
    ajustarContainerHeight();
  }
}