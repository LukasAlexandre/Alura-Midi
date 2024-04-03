// PRIMEIRA MANEIRA
/*const pom = document.querySelector('.tecla_pom');
pom.addEventListener('click', function(){
    document.querySelector('#som_tecla_pom').play();
});
*/

// SEGUNDA MANEIRA - ativa
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        alert('Elemento não encontrado')
    };
    if (elemento != null && elemento.localName === 'audio') {

        elemento.play();
    };

};

const listaDeTeclas = document.querySelectorAll('.tecla');


// enquanto 
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    //fazer o loop para percorrer as teclas 
    const tecla = listaDeTeclas[contador];

    //construindo parametro da interação
    const instrumento = tecla.classList[1];

    // interação para construir o id específico de cada audio
    const idAudio = `#som_${instrumento}`;

    // montar os dois parâmetros tecla e audio para dar play
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code == 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    };



    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    };

};
