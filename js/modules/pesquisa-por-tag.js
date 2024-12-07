export default function initPesquisaPorTag() {
  const tags = document.querySelectorAll('[data-pesquisa]');

  if (tags.length) {
    tags[0].classList.add('ativo');

    setTimeout(() => {
      const albuns = document.querySelectorAll('.avaliacoes-item');
  
      const buscarGenero = (tag, elemento) => {
        tags.forEach((tag) => {
          tag.classList.remove('ativo');
        });
  
        elemento.classList.add('ativo');
  
        albuns.forEach((album) => {
          const albumGenero = album.getAttribute('data-genero');
  
          if (albumGenero === tag || tag === 'todos') {
            album.style.display = 'flex';
          } else {
            album.style.display = 'none';
          }
        });
      }
  
      tags.forEach((tag) => {
        const tagGenero = tag.getAttribute('data-pesquisa');
        tag.addEventListener('click', (event) => {
          const tagElemento = event.target;
          buscarGenero(tagGenero, tagElemento);
        });
      });
  
    }, 2000);
  }
}