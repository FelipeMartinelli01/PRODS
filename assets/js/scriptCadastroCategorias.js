document.addEventListener('DOMContentLoaded', function () {
    const categorias = [];

    document.getElementById('categoriaForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const nomeCategoria = document.getElementById('nomeCategoria').value.trim();
        if (nomeCategoria !== '') {
            categorias.push(nomeCategoria);
            atualizarListaCategorias();
            document.getElementById('nomeCategoria').value = '';
        }
    });

    function atualizarListaCategorias() {
        let listaCategoriasHtml = '';
        categorias.forEach(function (categoria, index) {
            listaCategoriasHtml += `<li class="list-group-item">${index + 1}. ${categoria}</li>`;
        });
        document.getElementById('listaCategorias').innerHTML = listaCategoriasHtml;
    }

    document.getElementById('scrollDownBtn').addEventListener('click', function () {
        document.getElementById('listaCategorias').scrollIntoView({ behavior: 'smooth' });
    });
});
