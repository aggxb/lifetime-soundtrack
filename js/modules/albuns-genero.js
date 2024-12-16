import initAnimacaoScroll from "./animacao-scroll.js";
import initSlideAlbuns from "./slide-albuns.js";

export default function initAlbunsGenero() {
  const aplicarAnimacao = initAnimacaoScroll(); 
  const path = window.location.pathname;

  const adicionarAlbunsGeneros = (genero) => {
    const container = document.querySelector('.albuns-lista');
    
    genero.forEach((album) => {
      const elemento = document.createElement('li');

      elemento.innerHTML = 
      `
        <div class="album-img" data-animar="right">
          <a href="${album.link}" target="_blank">
            <img src="${album.imagem}" alt="Imagem do Álbum ${album.album}">
          </a>
        </div>
        <div class="album-info" data-animar="down">
          <h2 class="font-1-m">${album.album}</h2>
          <h3 class="font-1-p">${album.artista}</h3>
        </div>
      `;
      
      elemento.classList.add('album-item');
      container.appendChild(elemento);

      const childrenArray = Array.from(elemento.children);
      
      childrenArray.forEach((child) => {
        aplicarAnimacao(child);
      });
    });

    initSlideAlbuns();
  }

  if (path.includes('r&b')) {
    const albunsRB = [
      { artista: 'Brent Faiyaz', album: 'Wasteland', imagem: '/assets/albuns-img/wasteland.jpg', link: 'https://open.spotify.com/intl-pt/album/0PHMNbcgHfzSUALlfk7wGg?si=HlU34iJVQw2Hy4TgNyLLUw' },
      { artista: 'Frank Ocean', album: 'Blond', imagem: '/assets/albuns-img/blond.jpg', link: 'https://open.spotify.com/intl-pt/album/3mH6qwIy9crq0I9YQbOuDf?si=xBPVU2JhSuSl7iPaCXwFuA' },
      { artista: 'Usher', album: 'Confessions', imagem: '/assets/albuns-img/confessions.jpg', link: 'https://open.spotify.com/intl-pt/album/1RM6MGv6bcl6NrAG8PGoZk?si=3OWKol6ET6mpBK01_0_Fsg' },
      { artista: 'Sade', album: 'Love Deluxe', imagem: '/assets/albuns-img/love-deluxe.jpg', link: 'https://open.spotify.com/intl-pt/album/2PfGKHtqEX58bHtkQxJnWG?si=xj6K2psoRFSKArbE_UbToA' },
      { artista: 'Frank Ocean', album: 'channel ORANGE', imagem: '/assets/albuns-img/channel-orange.jpg', link: 'https://open.spotify.com/intl-pt/album/392p3shh2jkxUxY2VHvlH8?si=YLqidLQbQRCln5ikrpigFw' },
    ];
    adicionarAlbunsGeneros(albunsRB);
  } else if (path.includes('mpb')) {
    const albunsMPB = [
      { artista: 'Djavan', album: 'Djavan', imagem: '/assets/albuns-img/djavan.jpg', link: 'https://open.spotify.com/intl-pt/album/3SrW9PsWq7ipPERLgck3tA?si=vydu2vZxT1exaxbfZ9DOkA' },
      { artista: 'Milton Nascimento', album: 'Clube da Esquina', imagem: '/assets/albuns-img/clube-da-esquina.jpg', link: 'https://open.spotify.com/intl-pt/album/5risYG7klZCSLMNxB9dZhf?si=FNXRJA2QS2m4VUBcRqBhwA' },
      { artista: 'Seu Jorge', album: 'Música para Churrasco, Vol 1', imagem: '/assets/albuns-img/musica-para-churrasco.jpg', link: 'https://open.spotify.com/intl-pt/album/3LVFK1YwvyZMU1u20U2dMg?si=2hX7GlZoSoy0quCZy805hw' },
      { artista: 'Djavan', album: 'Djavan "Ao Vivo"', imagem: '/assets/albuns-img/djavan-ao-vivo.jpg', link: 'https://open.spotify.com/intl-pt/album/2WWakvH7foDm8RjWFMDcL7?si=mTS-z107QyGSH2GmXXHnYQ' },
      { artista: 'Stan Getz, João Gilberto', album: 'Getz/Gilberto', imagem: '/assets/albuns-img/getz-gilberto.jpg', link: 'https://open.spotify.com/intl-pt/album/2W6Hvrtg2Zpc9dW4aBDbdP?si=zPrppfmmRQGK_7a0-NhVNw' },
    ];
    adicionarAlbunsGeneros(albunsMPB);
  } else if (path.includes('samba')) {
    const albunsSamba = [
      { artista: 'Exaltasamba', album: 'Pagode do Exalta Ao Vivo', imagem: '/assets/albuns-img/pagode-do-exalta.jpg', link: 'https://open.spotify.com/intl-pt/album/0wDdO69c0YKDD4PwXOed0H?si=KxVaXfdTSUG49cXDwQ5y4A' },
      { artista: 'Soweto', album: 'Farol das Estrelas', imagem: '/assets/albuns-img/farol-das-estrelas.jpg', link: 'https://open.spotify.com/intl-pt/album/6M6AmZEmjXWwcSxRls4UIX?si=-KsEzv5pQUikDZXXq5qKRA' },
      { artista: 'Exaltasamba', album: '25 Anos (Ao Vivo)', imagem: '/assets/albuns-img/exaltasamba-25-anos.jpg', link: 'https://open.spotify.com/intl-pt/album/1rMqTbwki2gVgD7mfgkIpK?si=rggwDFHrS2-UG2Q9SlYdcQ' },
      { artista: 'Thiaguinho', album: 'Ousadia & Alegria', imagem: '/assets/albuns-img/ousadia&alegria.jpg', link: 'https://open.spotify.com/intl-pt/album/6FQGBtXpHeJ8loDjSHfMbV?si=yx7xn4yJRgS7jXCqQzuSXw' },
      { artista: 'Exaltasamba', album: 'Ao Vivo Na Ilha da Magia', imagem: '/assets/albuns-img/ilha-da-magia.jpg', link: 'https://open.spotify.com/intl-pt/album/7MTM9UeZBGJQqbrVpWk3sM?si=tF6bzRWsRmWcePix1G7RDA' },
    ];
    adicionarAlbunsGeneros(albunsSamba);
  } else if (path.includes('rap')) {
    const albunsRap = [
      { artista: "Racionais MC's ", album: 'Nada Como um Dia Após o Outro Dia, Vol. 1 & 2', imagem: '/assets/albuns-img/nada-como-um-dia-apos-o-outro-dia.jpg', link: 'https://open.spotify.com/intl-pt/album/4HcPzKyKVtcZCwJgesoZWn?si=JltBn6qbTZynEhd4_yj1gg' },
      { artista: 'Recayd Mob', album: 'Calzone Tapes 3', imagem: '/assets/albuns-img/calzone-tapes.jpg', link: 'https://open.spotify.com/intl-pt/album/5ka0HFmEwwvDjxOy0t9VnC?si=NVBah8goT_KwYD_9R8AVlQ' },
      { artista: 'Travis Scott', album: 'UTOPIA', imagem: '/assets/albuns-img/utopia.jpg', link: 'https://open.spotify.com/intl-pt/album/18NOKLkZETa4sWwLMIm0UZ?si=qWRJjkrPQ-OiGfv2lk-trQ' },
      { artista: "BK'", album: 'Castelos & Ruínas', imagem: '/assets/albuns-img/castelos&ruinas.jpg', link: 'https://open.spotify.com/intl-pt/album/5BCxlla9sHRzzP302BOMH0?si=B0wTzHa0Q1ynPLXR9af67Q' },
      { artista: 'Tyler, The Creator', album: 'IGOR', imagem: '/assets/albuns-img/igor.jpg', link: 'https://open.spotify.com/intl-pt/album/5zi7WsKlIiUXv09tbGLKsE?si=Ep076lg9RgSciUgVB6CNKw' },
    ];
    adicionarAlbunsGeneros(albunsRap);
  }
}
