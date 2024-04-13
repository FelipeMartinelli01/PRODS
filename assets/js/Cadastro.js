document.getElementById('cadastrar').addEventListener('click', function () {
    var nome = document.getElementById('inputNome').value;
    var categoria = document.getElementById('inputCategoria').value;
    var preco = document.getElementById('inputPreco').value;
    var estoque = document.getElementById('inputEstoque').value;
    var status = document.getElementById('inputStatus').value;
    var descricao = document.getElementById('inputDescricao').value;

    if (!nome || !categoria || !preco || !estoque || !status || !descricao) {
        alert('Erro: É necessário preencher todas as informações do produto.');
        console.log('NOafnspg')
    } else {
        alert('Cadastrado com sucesso!');
        document.getElementById('productForm').submit();
    }
});

document.getElementById('limpar').addEventListener('click', function () {
    document.getElementById('inputNome').value = '';
    document.getElementById('inputCategoria').value = '';
    document.getElementById('inputPreco').value = '';
    document.getElementById('inputEstoque').value = '';
    document.getElementById('inputStatus').value = '';
    document.getElementById('inputDescricao').value = '';
});

document.getElementById('cancelar').addEventListener('click', function () {
    window.location.href = 'produtos.html';
});

document.getElementById('foto').addEventListener('click', function (){
    alert('Foto Adicionada com Sucesso!')
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