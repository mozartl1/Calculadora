const resultado = document.querySelector('.result')
const confirmar = document.querySelector('.igual')

function clean(){
    resultado.innerHTML = ''
}

function backspace(){
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1)
    }
}

function insert(valor){
    resultado.innerHTML += valor
}

function confirm(){
    if(resultado.textContent){
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
    }
}