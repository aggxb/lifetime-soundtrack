export default function initSlideAlbuns() {
  const slider = document.querySelector('[data-slide="wrapper"]');
  const slideList = document.querySelector('[data-slide="slide"]');

  if (slider && slideList) {
    const distancias = { posicaoFinal: 0, inicioX: 0, movimento: 0 };
    let tipoMov = '';
    const classeAtiva = 'ativo';

    const adicionarEventos = () => {
      slider.addEventListener('mousedown', aoInicio);
      slider.addEventListener('touchstart', aoInicio);
      slider.addEventListener('mouseup', aoFinal);
      slider.addEventListener('touchend', aoFinal);
      window.addEventListener('resize', aoAjustarTela);
    }

    const aoInicio = (event) => {
      if (event.type === 'mousedown') {
        event.preventDefault();
        distancias.inicioX = event.clientX;
        tipoMov = 'mousemove';
      } else {
        distancias.inicioX = event.changedTouches[0].clientX;
        tipoMov = 'touchmove';
      }

      slider.addEventListener(tipoMov, aoMover);

      adicionarTransicao(false);
    } 

    const atualizarDistancias = (clientX) => {
      distancias.movimento = (distancias.inicioX - clientX) * 1.6;

      return distancias.posicaoFinal - distancias.movimento;
    }

    const moverSlide = (distanciaX) => {
      distancias.posicaoAtual = distanciaX;
      slideList.style.transform = `translate3d(${distanciaX}px, 0, 0)`;
    }

    const aoMover = (event) => {
      const posicaoPointer = event.type === 'mousemove' ? event.clientX : event.changedTouches[0].clientX;
      const posicaoFinal = atualizarDistancias(posicaoPointer);

      moverSlide(posicaoFinal);
    }

    const aoFinal = () => {
      slider.removeEventListener(tipoMov, aoMover);

      distancias.posicaoFinal = distancias.posicaoAtual;
      
      adicionarTransicao(true);
      mudarItemAoFinal();
    }

    // configurações

    const posicionarSlide = (slideItem) => {
      const margin = (slider.offsetWidth - slideItem.offsetWidth) / 2;

      return -(slideItem.offsetLeft - margin);
    }

    let slideArray = [...slideList.children].map((elemento) => {
      const posicao = posicionarSlide(elemento);
      return { elemento, posicao };
    });

    const indice = { anterior: 0, atual: 0, proximo: 0 }
    const ultimo = slideArray.length - 1;

    const gerenciarIndexSlide = (index) => {
      indice.anterior = index ? index - 1 : undefined;
      indice.atual = index;
      indice.proximo = index !== ultimo ? index + 1 : undefined;

      slideArray = [...slideList.children].map((elemento) => {
        const posicao = posicionarSlide(elemento);
        return { elemento, posicao };
      });

      return indice;
    }

    const mudarItemSlide = (index) => {
      const itemAtivo = slideArray[index];

      moverSlide(itemAtivo.posicao);
      gerenciarIndexSlide(index);

      distancias.posicaoFinal = itemAtivo.posicao;

      mudarClasseAtiva();
    }

    const ativarSlideAnterior = () => {
      if (indice.anterior !== undefined) {
        mudarItemSlide(indice.anterior);
      }
    }

    const ativarProximoSlide = () => {
      if (indice.proximo !== undefined) {
        mudarItemSlide(indice.proximo);
      }
    }

    const mudarItemAoFinal = () => {
      if (distancias.movimento < -120 && indice.anterior !== undefined) {
        ativarSlideAnterior();
      } else if (distancias.movimento > 120 && indice.proximo !== undefined) {
        ativarProximoSlide();
      } else {
        mudarItemSlide(indice.atual);
      }

      distancias.movimento = 0;
    }

    const mudarClasseAtiva = () => {
      slideArray.forEach((item) => {
        item.elemento.classList.remove(classeAtiva);
      });

      slideArray[indice.atual].elemento.classList.add(classeAtiva);
    }

    const adicionarTransicao = (ativo) => {
      slideList.style.transition = ativo ? 'transform .3s' : ''
    }

    const aoAjustarTela = () => {
      setTimeout(() => {
        mudarItemSlide(indice.atual);
        gerenciarIndexSlide(indice.atual);
      }, 1000);
    }

    const aoClicarNoItem = (item, index) => {
      if (!item.elemento.classList.contains(classeAtiva) && indice.proximo === index) {
        ativarProximoSlide();
      } else if (!item.elemento.classList.contains(classeAtiva) && indice.anterior === index) {
        ativarSlideAnterior();
      }
    }

    const gerenciarClique = () => {
      slideArray.forEach((item, index) => {  
        item.elemento.addEventListener('click', (event) => {
          event.preventDefault();
          aoClicarNoItem(item, index);
        });
      });

      aoClicarNoAlbum()
    }

    const aoClicarNoAlbum = () => {
      slideArray.forEach((item) => {
        const itemHref = item.elemento.querySelector('a');
        item.elemento.addEventListener('dblclick', () => {
          window.open(itemHref, '_blank');
        });
      });
    }

    const ativarNoIntervalo = () => {
      setInterval(() => {
        if (indice.proximo !== undefined) {
          ativarProximoSlide();
        } else if (indice.anterior !== undefined) {
          mudarItemSlide(0)
        }
      }, 1000 * 60);
    }

    const ativarFuncoes = () => {
      adicionarEventos();
      ativarNoIntervalo();
      gerenciarClique();
      aoAjustarTela();
      adicionarTransicao(true);
      mudarItemSlide(0);
    }

    ativarFuncoes();
  }
}