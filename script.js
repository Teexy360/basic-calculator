
function insert(num){
  let numero = document.getElementById('display').innerHTML
  document.getElementById('display').innerHTML = numero + num
}

function limpar(){
  document.getElementById('display').innerHTML = ''
}

function back(){
  let resultado = document.getElementById('display').innerHTML
  document.getElementById('display').innerHTML = resultado.slice(0,-1)
}

function soma(){
  let resultado = document.getElementById('display').innerHTML
  document.getElementById('display').innerHTML = eval(resultado)
}