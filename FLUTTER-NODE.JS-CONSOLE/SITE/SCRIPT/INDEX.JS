function restart() {

    // Recarregar página
    document.addEventListener('click', () => {
        location.reload()

    })
}

function TrocaDivs(id) {
    // Esconder todas as divs de pesquisa
    var pesquisas = document.querySelectorAll('.box-pesquisa');
    
    pesquisas.forEach(function (pesquisa) {
        pesquisa.style.display = 'none';
    });

    // Mostrar a div correspondente ao botão clicado
    var footer = document.querySelector('.content-footer');
    footer.style.position = 'relative';
    let divPesquisa = document.getElementById(id);
    divPesquisa.style.display = 'grid';
}
