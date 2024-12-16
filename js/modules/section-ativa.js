export default function initSectionAtiva () {
  const sectionLinks = document.querySelectorAll('.page-header a');
  const sectionLista = document.querySelectorAll('[data-section]');

  if(sectionLinks.length && sectionLista.length) {
    let thresholdValor = .6;
    
    if (window.location.pathname === '/pages/rap.html') {
      thresholdValor = .3;
    }

    if (window.location.pathname === '/pages/my-lifetime-soundtrack.html') {
      thresholdValor = .25;
    }

    const sectionAtivaObserver = new IntersectionObserver(sections => {
      sections.forEach(section => {
        const sectionId = section.target.id;
  
        if(section.isIntersecting) {
          sectionLinks.forEach(link => {
            link.classList.remove('ativo');
          });
  
          sectionLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            
            if(linkHref.includes(sectionId)) {
              link.classList.add('ativo');
            }
          });
        }
      });
    },
    {
      threshold: thresholdValor,
    });
  
    sectionLista.forEach(section => {
      sectionAtivaObserver.observe(section);
    });
  
    sectionLinks[0].classList.add('ativo');
  }
}