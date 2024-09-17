export default function initLinkAtivo() {
  function verificarLink() {
    const paginaAtual = window.location.pathname;
    const links = document.querySelectorAll('.main-header-links a');
    
    links.forEach(link => {
      const href = link.href;

      if (href.includes(paginaAtual)) {
        link.classList.add('ativo');
      }
    })
  }

  verificarLink()
}