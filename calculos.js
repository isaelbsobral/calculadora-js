let inputResultado=document.getElementById("valores");
//objeto para o cálculo
let calculo={
    primeiroValor:0,
    segundoValor:0,
    funcaoParaCalcular:null
};
window.addEventListener("load", function(){


})
//ATRIBUIR EVENTTOS PARA OS BOTÕES DA CALCULADOR
function atribuirEventos() {
    
    document.getElementById("botao0").addEventListener("click", inserirNumero);
    document.getElementById("botao1").addEventListener("click", inserirNumero);
    document.getElementById("botao2").addEventListener("click", inserirNumero);
    document.getElementById("botao3").addEventListener("click", inserirNumero);
    document.getElementById("botao4").addEventListener("click", inserirNumero);
    document.getElementById("botao5").addEventListener("click", inserirNumero);
    document.getElementById("botao6").addEventListener("click", inserirNumero);
    document.getElementById("botao7").addEventListener("click", inserirNumero);
    document.getElementById("botao8").addEventListener("click", inserirNumero);
    document.getElementById("botao9").addEventListener("click", inserirNumero);

    document.getElementById("botaoLimpar").addEventListener("click", limparDados);
}
//insere numero no input da calc
function inserirNumero() {
    // Se o valor na tela não for um número,
    // substitui pelo número/valor do botão
    //isnan verificar se o valor capturado é um número
    if (isNaN(inputResultado.value)) {
        inputResultado.value = event.target.textContent;
        // Senão, adiciona o texto junto com o existente
    } else {
        // Se o valor na tela for zero, substitui o valor na tela pelo número clicado
        if (inputResultado.value == 0) {
            inputResultado.value = event.target.textContent;
        // Senão adiciona o número ao input para criar digitos maiores que 0
        } else {
            inputResultado.value += event.target.textContent;
        }
    }
}
function somarValores(valor1, valor2){
    return valor1 + valor2;
}
function subtrairValores(valor1, valor2){
    return valor1 - valor2;
}
function multiplcarValores(valor1, valor2){
    return valor1 * valor2;
}
function dividirValores(valor1, valor2){
    if(valor2 == 0){
        return "Erro, divisão por zero!";
    }else{
        return valor1 / valor2;
    }
}
function limparDados(){
    inputResultado.value = "";
    calculo.primeiroValor = 0;
    calculo.segundoValor = 0;
    calculo.funcaoParaCalcular = null;
}