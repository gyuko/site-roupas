let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/azul2.jpg') {
      minhaImagem.setAttribute ('src','imagens/bege.jpg');
    } else if (meuSrc === 'imagens/bege.jpg'){
		minhaImagem.setAttribute ('src','imagens/vermelho.jpg');
	} else {
		minhaImagem.setAttribute ('src','imagens/azul2.jpg');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario(){
	let meuNome = prompt('Por favor, digite seu nome.');
	if (!meuNome || meuNome === null){
		defineNomeUsuario();
	} else {
		localStorage.setItem('nome', meuNome);
		meuCabecalho.textContent = 'Bem-vindo, ' + meuNome;
	}
}

if (!localStorage.getItem('nome')){
	defineNomeUsuario();
}else {
	let nomeGuardado = localStorage.getItem('nome');
	meuCabecalho.textContent = 'Bem-vindo, ' + nomeGuardado;
}

meuBotao.onclick = function(){
	defineNomeUsuario();
}