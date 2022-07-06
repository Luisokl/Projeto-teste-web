let minhaImagem = document.querySelector('img')
minhaImagem.onclick = function () {
    let meuSrc = minhaImagem.getAttribute('src')
    if (meuSrc === '/fotoJs') {
        minhaImagem.setAttribute('src','/imagens/fotoJs.png')
    } else {
        minhaImagem.setAttribute('src','/imagens/fotoJs2.png')
    }
}

let meuBotao = document.querySelector('button')
let meuCabecalho = document.querySelector('h1')

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome: ')
    if (!meuNome || meuNome === null ) {
        defineNomeUsuario()
    }
    localStorage.setItem('nome',meuNome)
    meuCabecalho.textContent = 'JavaScript é legal,' + meuNome
}

if (!localStorage.getItem('nome')){
    defineNomeUsuario()
} else {
    let nomeGuardado = localStorage.getItem('nome')
    meuCabecalho.textContent = 'JavaScript é legal,' + nomeGuardado
}

meuBotao.onclick = function() {
    defineNomeUsuario()
}