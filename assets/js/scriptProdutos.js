document.addEventListener("DOMContentLoaded", function () {
    const formFiltro = document.querySelector('.formFiltro');
    formFiltro.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const categoriaSelecionada = document.getElementById('inputStateCategoria').value.toLowerCase();
        const nomeSelecionado = document.getElementById('inputNome').value.toLowerCase();
        const statusSelecionado = document.getElementById('inputState').value.toLowerCase();
        const codigoSelecionado = document.getElementById('inputCodigo').value.toLowerCase();

        const linhasTabela = document.querySelectorAll('.table tbody tr');

        linhasTabela.forEach(function (linha) {
            const categoriaColuna = linha.cells[4].textContent.trim().toLowerCase();
            const nomeColuna = linha.cells[3].textContent.trim().toLowerCase();
            const statusColuna = linha.cells[2].querySelector('select').value.toLowerCase();
            const codigoColuna = linha.cells[1].textContent.trim().toLowerCase();

            const categoriaCorresponde = categoriaSelecionada === '' || categoriaSelecionada === categoriaColuna;
            const nomeCorresponde = nomeSelecionado === '' || nomeColuna.includes(nomeSelecionado);
            const statusCorresponde = statusSelecionado === '' || statusSelecionado === statusColuna;
            const codigoCorresponde = codigoSelecionado === '' || codigoSelecionado === codigoColuna;

            if (categoriaCorresponde && nomeCorresponde && statusCorresponde && codigoCorresponde) {
                linha.style.display = 'table-row';
            } else {
                linha.style.display = 'none';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");

    function isPageScrolledToBottom() {
        return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    window.addEventListener("scroll", function() {
        if (isPageScrolledToBottom()) {
            footer.style.display = "block";
        } else {
            footer.style.display = "none";
        }
    });
});