//selecionar os pratos
let pratoEscolido;
let nomePrato;
let precoPrato;

function selecione(prato){
    //desmarcar o botao que tinha sido marcado
    //remover a clase corSelecionado que tinha sido marcado
    const pratoSelecionatoAntes = document.querySelector('.primeiro-prato .corSelecionado');
    const icon = document.querySelector('.primeiro-prato .icon');
    icon.classList.remove('icon');

    if( pratoSelecionatoAntes !== null){
    pratoSelecionatoAntes.classList.remove('corSelecionado');
    }
    //-----selecionando o botao clicado------
    //pegar o prato que cliquei e traxer para o js

    //const pratoSelecionato = document.querySelector(pratos);

    //alterar a formatacao - cor 
    // adicionar a classe da cor no prato
    prato.classList.toggle('corSelecionado');

    pratoEscolido = prato.innerHTML;

    const nome = document.querySelector('.primeiro-prato .nome');
    
    nomePrato = nome.innerHTML;

    const preco = document.querySelector('.primeiro-prato .preco');

    precoPrato = preco.innerHTML;

    botaoContinuar()
    
}


let bebidaEscolido;
let nomePrato2;
let precoPrato2;

function selecioneBebida(prato) {
    const bebidaSelecionada = document.querySelector('.bebidas .corSelecionado');

    const icon = document.querySelector('.bebidas .icon');
    icon.classList.remove('icon');

    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove('corSelecionado');
    }

    prato.classList.toggle('corSelecionado');

    bebidaEscolido = prato.innerHTML;

    const nome = document.querySelector('.bebidas .nome2');
    
    nomePrato2 = nome.innerHTML;

    const preco = document.querySelector('.bebidas .preco2');

    precoPrato2 = preco.innerHTML;

    botaoContinuar()
}

let sobremesaEscolido;
let nomePrato3;
let precoPrato3;

function selecioneSobremesa(prato) {
    const sobremesaSelecionada = document.querySelector('.sobremesas .corSelecionado');

    const icon = document.querySelector('.sobremesas .icon');
    icon.classList.remove('icon');

    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove('corSelecionado');
    }

    prato.classList.toggle('corSelecionado');

    sobremesaEscolido = prato.innerHTML;

    const nome = document.querySelector('.sobremesas .nome3');
    
    nomePrato3 = nome.innerHTML;

    const preco = document.querySelector('.sobremesas .preco3');

    precoPrato3 = preco.innerHTML;

    botaoContinuar()
}

function pedido(){
    //exibir o pedido
    const painel = document.querySelector('.aparece');
    painel.classList.remove('escondido');

    //pegar o prato, a bebida e sobremesa selecionados
    //pegar os valores e somar
    //exibir com o innerHTML

    const pedido11 = document.querySelector('.pedido1');
    pedido11.innerHTML = nomePrato; 

    const pedido12 = document.querySelector('.pedido1Valor');
    pedido12.innerHTML = precoPrato; 

    const pedido21 = document.querySelector('.pedido2');
    pedido21.innerHTML = nomePrato2; 
    
    const pedido22 = document.querySelector('.pedido2Valor');
    pedido22.innerHTML = precoPrato2; 

    const pedido31 = document.querySelector('.pedido3');
    pedido31.innerHTML = nomePrato3; 

    const pedido32 = document.querySelector('.pedido3Valor');
    pedido32.innerHTML = precoPrato3; 
    
    const precoFinal = document.querySelector('.total');
    precoFinal.innerHTML = precoPrato + precoPrato2 + precoPrato3; 
}

function botaoContinuar(){
    if(pratoEscolido !== undefined){
        if(bebidaEscolido !== undefined){
            if(sobremesaEscolido !== undefined){
                const continuar = document.querySelector('.button1');
                continuar.classList.add('button1-1');
                continuar.innerHTML = "Fechar pedido";
            }
        }
    }
}

function cancela(){
    const painel = document.querySelector('.aparece');
    painel.classList.add('escondido');
}

// whapp

function whapp(){
    const app = "Olá!, gostaria de fazer o pedido: \n - Prato:" + nomePrato +
    "\n - Bebeda: "+ nomePrato2 +
    "\n - Sobremesa: "+ nomePrato3 +
    "\n - Total: R$ "+ total;
    window.open(" https://wa.me/55XXXXXXXXXXX");
}

