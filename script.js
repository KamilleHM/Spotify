const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return
    }
    
    requestApi(searchTerm);
})



// document.addEventListener() -> To escutando esse evento pra q na hr q esse evento acontecer essa logica vai acontecer na tela (é a função que vai ter td o codigo, td o comportamento que queremos)

// dois == mostra se sao iguais
// tres === se valores sao iguais e do mesmo tipo

//Usa o fetch para consumir apis

//Inves de pedir pra api "me traz td que é artista", vai pedir  "quero um artista com o nome parecido com esse que eu digitar". que é o queryparametro. Isso ajuda em performance, so entregar pra quem ta consumindo oq ele esta procurando (é a parte do `...?name_like=${variavel que esta usando de parametro}`)

//then = programação assincrona, consegue fazer requisição de api, leitura em arquivos