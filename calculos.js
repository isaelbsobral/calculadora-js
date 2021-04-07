document.getElementById("calcular").addEventListener('click', function(event){
    event.preventDefault();
    var valor01 = parseFloat(document.getElementById("txtValor01").value);
    var valor02 = parseFloat(document.getElementById("txtValor02").value);

    var soma= parseInt(document.getElementById("soma").value);
    if(soma===10){
        document.getElementById("teste").innerHTML = "Total: "+soma;
    }else if(op=="-"){
        document.getElementById("teste").innerHTML = "Total: "+op;
    }







})