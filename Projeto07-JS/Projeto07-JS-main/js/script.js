let circulo = document.getElementById('circulo')
let upbtn = document.getElementById('upbtn')
let downbtn = document.getElementById('downbtn')

let rodarValor = circulo.style.transform;
let rodarSoma

upbtn.onclick = function(){
    rodarSoma = rodarValor + 'rotate(-90deg)'
    circulo.style.transform = rodarSoma
    rodarValor = rodarSoma
}

downbtn.onclick = function(){
    rodarSoma = rodarValor + 'rotate(90deg)'
    circulo.style.transform = rodarSoma
    rodarValor = rodarSoma
}

