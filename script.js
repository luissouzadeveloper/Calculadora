// Função para inserir números
function inserir(numero){
    document.querySelector('#resultado').innerHTML += numero;
}

// Função para apagar tudo
function limpar(){
    document.querySelector('#resultado').innerHTML = '';
}

// Função para apagar sequencialmente
function apagar(){
    var resultado = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

// Função para fazer cálculos
function calcular(){
    var resultado = document.querySelector('#resultado').innerHTML;
    if(resultado){
        var resultado = document.querySelector('#resultado').innerHTML = eval(resultado);
    } else {
        document.querySelector('#resultado').innerHTML = 'Nada para calcular!'
    }
}