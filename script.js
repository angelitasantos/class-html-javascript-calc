
    var calculadora = "Calculadora"
    var simples = "Simples"
    var cientifica = "Científica"
    var financeira = "Financeira"

    document.getElementById("calculadora").innerHTML=calculadora;
    document.getElementById("simples").innerHTML=simples;
    document.getElementById("cientifica").innerHTML=cientifica;
    document.getElementById("financeira").innerHTML=financeira;

    var valor;
    var resultado;

function botao(numero){
    valor = document.calc_simples.visor_simples.value += numero;
}

function limpar(){
    document.calc_simples.visor_simples.value = '';
}

function calcular(){
    resultado = eval(valor)
    document.calc_simples.visor_simples.value = resultado;
}

function desabilitado(){
    alert('Função Desabilitada');
}
