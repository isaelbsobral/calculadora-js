//variável pra armazenar o valor capturado dentro do input
let valoresLidos=document.getElementById("valores");
//variável do tipo objeto para fazer o cálculo
let calculo={   
    valorInserido:null,
    funcaoCalcular:null
};
window.addEventListener("load", function(){
    atribuirEventos();

})
//ATRIBUIR EVENTTOS PARA OS BOTÕES DA CALCULADORA
function atribuirEventos() {
    //Atribuindo eventos nos botões dos números
    for (var i=0;i<=9;i++){
    document.getElementById("botao"+i).addEventListener("click", getNumero);
    }   
   
    //Atribuindo evento aos botões de operações
    for (var j=1;j<=5;j++){
    document.getElementById("operacao"+j).addEventListener("click",clicarOperador);
    }    
    //Atribuindo evento do botão limpar chamando a função pra limpar
    document.getElementById("botaoLimpar").addEventListener("click", limparDados);
    //Atribuindo evento ao botão ponto chamando a função inserir ponto
    document.getElementById("botaoPonto").addEventListener("click",getPonto);
    //Atribuindo evento ao botão de resultado
    document.getElementById("botaoResultado").addEventListener("click", clicarResultado);
    
}


//FUNÇÃO PARA PEGAR NÚMERO E COLOCAR NO INPUT
function getNumero(event) {
    event.preventDefault();
    // Se o valor na tela não for um número,
    // substitui pelo número/valor do botão
    //isnan verificar se o valor capturado é um número
    if (isNaN(valoresLidos.value)) {
        valoresLidos.value = event.target.textContent;
        // Senão, adiciona o texto junto com o existente
    } else {
        // Se o valor na tela for zero, substitui o valor na tela pelo número clicado
        if (valoresLidos.value == 0) {
            valoresLidos.value = event.target.textContent; // retorna o conteúdo de texto (textContent) do local onde o clique foi pressionado
        // Senão adiciona o número ao input para criar digitos maiores que 0
        } else {
            valoresLidos.value += event.target.textContent;
        }
    }
}

//FUNÇÕES DE OPERAÇÃO
function somar(valor1, valor2){
    return valor1 + valor2;
}
function subtrair(valor1, valor2){
    return valor1 - valor2;
}
function multiplicar(valor1, valor2){
    return valor1 * valor2;
}
function dividir(valor1, valor2){
    if(valor2 == 0){
        return "Não divide por 0";
    }else{
        return valor1 / valor2;
    }
}
function potencia(valor1,valor2){
    return Math.pow(valor1,valor2);
}
//FUNÇÕES DE MANIPULAÇÃO
//Limpando dados do input
function limparDados(){
    valoresLidos.value = "";
    calculo.valorInserido = null;
    calculo.funcaoCalcular = null;
}
//Pegando o "." do input
function getPonto(){
    //se o valor do input estiver vazio e não for um número ele preenche o input com 0.
    if(valoresLidos.value ==="" || isNaN(valoresLidos.value)){
        valoresLidos.value = "0.";
    }else if(!valoresLidos.value.includes(".")){//include verifica se o valor tem tal valor dentro do (), retorna true se possui e false se não possui a ! nega a condição, ou seja se ele n inclui o ponto
        valoresLidos.value = valoresLidos.value + ".";
    }
}
//FUNÇÕES PARA ATRIBUIR OPERAÇÕES AO CÁLCULO
//Atualiza o objeto calculo com o valor do operador
function clicarOperador(event) {
    event.preventDefault();
    if(!isNaN(valoresLidos.value)){
       if(calculo.valorInserido==null){//se o valor lido(caracter/numero) no input for um numero ele verifica se o valor inserido pelo botao está vazio
           calculo.valorInserido=Number(valoresLidos.value);//se sim ele armazena o valor convertido em numero no valor par calculo 
       }else if (calculo.funcaoCalcular !=null){//
           calculo.valorInserido=calculo.funcaoCalcular(calculo.valorInserido,Number(valoresLidos.value))
       }
    }
    // senao for numerico ele pega o caracter(operador) inserido e coloca na var op por meio do target.textContent
    let op = event.target.textContent;
    atribuirOperacoes(op); //passa o operador como parametro de atribuirOperacoes
    valoresLidos.value=op; 
}
//atribui a função correta para cada operador clicado dentro do metodo funçaoCalcular do objeto calculo

function atribuirOperacoes(op){
    if (op=="+"){
        calculo.funcaoCalcular=somar;
    }else if(op=="-"){
        calculo.funcaoCalcular=subtrair;
    }else if(op=="x"){
        calculo.funcaoCalcular=multiplicar;
    }else if (op=="/") {
        calculo.funcaoCalcular=dividir;
    }else{
        calculo.funcaoCalcular=potencia;
    }
}
//FUNÇÃO PARA RETORNAR O RESULTADO

function clicarResultado(){ //verifica se o valor inserido é um numero e se a função para calcular q foi
                            //preenchida no obejto é diferente de vazio
    if(!isNaN(valoresLidos.value) && calculo.funcaoCalcular !=null){
        let res = calculo.funcaoCalcular(calculo.valorInserido, Number(valoresLidos.value));
        valoresLidos.value = res;//armazena o resultado no input e exibe ao usuario
        calculo.valorInserido= res; //armazena  o resultado no valor inserido caso a pessoa queira continuar a conta com o valor encontrado
        calculo.funcaoCalcular = null;//reseta a função q tem as funçoes das operaçoes

    }
}
