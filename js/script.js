
// obter o elemento correspondente ao canvas
let canvas = document.getElementById("snake");

// explicitar que é um canvas  2D:
let context = canvas.getContext("2d");

// Dimensão das caixinhas: 32x32 px
let box = 32;

// Função para criar o canvas de fato:
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box)
}

criarBG();

// TODO: Criar cobrinha