import initAnimacaoScroll from "./animacao-scroll.js";

export default function initFetchAlbuns() {
  const aplicarAnimacao = initAnimacaoScroll();
  const apiKey = '0747637f43b4d8714d3cdaf6def5f80e';

  const path = window.location.pathname;

  async function fetchAlbumInfo(elemento, index, container, artista, album, imagem, genero, musicaFavorita, nota, link) {
    const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&artist=${artista}&album=${album}&format=json`;

    try {
      const resposta = await fetch(apiUrl);
      const dados = await resposta.json();
      
      if (container.classList.value.includes('avaliacoes')) {
        elemento.innerHTML =
        `
          <div class="album-img" data-animar="right">
            <a href="${link}" target="_blank">
              <img src="${imagem ? imagem : dados.album.image[4]['#text']}" alt="Imagem do álbum ${dados.album.name}">
            </a>
          </div>
          <div class="album-desc" data-animar="left">
            <div class="album-info">
              <h2 class="font-1-p">${album === 'Ousadia & Alegria (Ao Vivo)' ? album : dados.album.name}</h2>
              <h3 class="font-1-xp">${dados.album.artist}</h3>
              <h4 class="font-1-xxp">${genero}</h4>
            </div>
            <div class="album-avaliacao">
              <p class="font-1-xp"><span>Nota:</span> ${nota}</p>
              <p class="font-1-xp"><span>Música favorita:</span> ${typeof musicaFavorita === 'string' ? musicaFavorita : dados.album.tracks.track[musicaFavorita].name}</p>
            </div>
          </div>
        `;

        elemento.classList.add('avaliacoes-item');
        elemento.setAttribute('data-genero', genero.toLowerCase());
      } else if (container.hasAttribute('data-lts')) {
        elemento.innerHTML = 
        `
          <div class="album-img" data-animar="right">
            <a href="${link}" target="_blank">
              <img src="${imagem ? imagem : dados.album.image[4]['#text']}" alt="Imagem do álbum ${dados.album.name}">
            </a>
          </div>
          <div class="album-desc" data-animar="left">
            <span class="font-1-m">${index}°</span>
            <div class="album-info">
              <h2 class="font-1-m">${dados.album.name}</h2>
              <h3 class="font-1-p">${dados.album.artist}</h3>
              <h4 class="font-1-xp">${genero}</h4>
            </div>
            <div class="album-avaliacao">
              <p class="font-1-p"><span>Nota:</span> ${nota}</p>
              <p class="font-1-p"><span>Música favorita:</span> ${dados.album.tracks.track[musicaFavorita].name}</p>
            </div>
          </div>
        `;

        elemento.classList.add('album-item');
      }

      container.appendChild(elemento);

      const childrenArray = Array.from(elemento.children);
    
      childrenArray.forEach((child) => {
        aplicarAnimacao(child);
      });
    } catch (error) {
      console.log(`Erro ao buscar informações do álbum: ${error}`);
    }
  }

  const adicionarAlbunsLts = async () => {
    const albuns = [
      { id: 1, artista: 'Exaltasamba', album: 'Pagode do Exalta Ao Vivo', imagem: '', genero: 'Samba', favorita: 12, nota: 10, link:'https://open.spotify.com/intl-pt/album/0wDdO69c0YKDD4PwXOed0H?si=hbdkp3F9Q8Wkg2KQjQ7MiQ' },
      { id: 2, artista: 'Frank Ocean', album: 'Blond', imagem: '/assets/albuns-img/blond.jpg', genero: 'R&B', favorita: 8, nota: 10, link: 'https://open.spotify.com/intl-pt/album/3mH6qwIy9crq0I9YQbOuDf?si=kjcpK_ogSJa_wWKc7nVlSA' },
      { id: 3, artista: 'Exaltasamba', album: '25 Anos Ao Vivo', imagem: '', genero: 'Samba', favorita: 2, nota: 10, link: 'https://open.spotify.com/intl-pt/album/1rMqTbwki2gVgD7mfgkIpK?si=Cxoi1uqkTG2qTVxVlEAvgw' }
    ];

    const container = document.querySelector('.albuns-lista');

    const promises = albuns.map(async (album) => {
      const elemento = document.createElement('li');
      await fetchAlbumInfo(elemento, album.id, container, album.artista, album.album, album.imagem, album.genero, album.favorita, album.nota, album.link);

      return elemento;
    });

    const elementosOrdenados = await Promise.all(promises);

    elementosOrdenados.forEach((elemento) => {
      container.appendChild(elemento);
    });
  }

  const adicionarAlbunsAv = () => {
    const albuns = [
      { artista: 'Exaltasamba', album: 'Pagode Do Exalta Ao Vivo', genero: 'Samba', imagem: '', nota: 10, favorita: 12, link: 'https://open.spotify.com/intl-pt/album/0wDdO69c0YKDD4PwXOed0H?si=hbdkp3F9Q8Wkg2KQjQ7MiQ' },
      { artista: 'Djavan', album: 'Djavan Ao Vivo', genero: 'MPB', imagem: '', nota: 9.4, favorita: 7, link: 'https://open.spotify.com/intl-pt/album/2WWakvH7foDm8RjWFMDcL7?si=SabWmOUcTXOriLyBLokjcA' },
      { artista: 'Kyan', album: 'Só Vilão, Aqui Não Tem Herói [Explicit]', genero: 'Rap', imagem: '', nota: 7.4, favorita: 6, link: 'https://open.spotify.com/intl-pt/album/2vMgIV8p4Lo4ZlaclzOyqt?si=oQW--BmDR5uKDeumlu_rMA'},
      { artista: 'Alee', album: 'DIAS ANTES DO CAOS', genero: 'Rap', imagem: '', nota: 8.7, favorita: 'PENTE LONGO', link: 'https://open.spotify.com/intl-pt/album/2BFosqa97kxv0HBBeB02d8?si=pMzZ7QnhRWi1AN8TA3caNg' },
      { artista: 'Brent Faiyaz', album: 'WASTELAND', genero: 'R&B', imagem: '', nota: 8.2, favorita: 9, link: 'https://open.spotify.com/intl-pt/album/0PHMNbcgHfzSUALlfk7wGg?si=u_54C84PR9W2RoQjBxE3KQ'},
      { artista: 'Frank Ocean', album: 'channel ORANGE', genero: 'R&B', imagem: '', nota: 9.5, favorita: 9, link: 'https://open.spotify.com/intl-pt/album/392p3shh2jkxUxY2VHvlH8?si=eBnYORUnRKKewNs5WERWFQ' },
      { artista: 'Travis Scott', album: 'UTOPIA', genero: 'Rap', imagem: '', nota: 8.2, favorita: 14, link: 'https://open.spotify.com/intl-pt/album/18NOKLkZETa4sWwLMIm0UZ?si=LwMuu5CaTouvC2KaQZufIA' },
      { artista: 'Alee', album: 'Caos', genero: 'Rap', imagem: '', nota: 8.5, favorita: 'ALPINISTA SOCIAL', link: 'https://open.spotify.com/intl-pt/album/6fgLXQA1I40kOPXy8G4BK8?si=kM2ah7ONSw2S8-Bujg3u3g' },
      { artista: 'Exaltasamba', album: 'Todos Os Sambas Ao Vivo', genero: 'Samba', imagem: '', nota: 9.7, favorita: 12, link: 'https://open.spotify.com/intl-pt/album/2W8ViHHagurfjE7gYKxQ49?si=xuby92XnScyvX_t8Sqzz7g' },
      { artista: 'Frank Ocean', album: 'Blond', genero: 'R&B', imagem: '/assets/albuns-img/blond.jpg', nota: 10, favorita: 8, link: 'https://open.spotify.com/intl-pt/album/3mH6qwIy9crq0I9YQbOuDf?si=kjcpK_ogSJa_wWKc7nVlSA' },
      { artista: 'Thiaguinho', album: 'Ousadia & Alegria (Ao Vivo)', genero: 'Samba', imagem: '/assets/albuns-img/ousadia&alegria.jpg', nota: 9.9, favorita: 'Motel - Ao Vivo', link: 'https://open.spotify.com/intl-pt/album/6FQGBtXpHeJ8loDjSHfMbV?si=RMmRIUHUQE-AgTqkiqxIhQ' },
      { artista: 'Exaltasamba', album: 'Ao Vivo Na Ilha Da Magia', genero: 'Samba', imagem: '', nota: 9.9, favorita: 7, link: 'https://open.spotify.com/intl-pt/album/7MTM9UeZBGJQqbrVpWk3sM?si=yTKRulOaQ6GbhM47Dspt3w' },
    ];

    const container = document.querySelector('.avaliacoes-list');

    albuns.forEach((album) => {
      const elemento = document.createElement('li');
      fetchAlbumInfo(elemento, '', container, album.artista, album.album, album.imagem, album.genero, album.favorita, album.nota, album.link);
    });
  }
  
  if (path.includes('my-lifetime-soundtrack')) {
    adicionarAlbunsLts();
  } else if (path.includes('avaliacoes')) {
    adicionarAlbunsAv();
  }
} 