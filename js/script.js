
// obter o elemento correspondente ao canvas
let canvas = document.getElementById("snake");

// explicitar que é um canvas  2D:
let context = canvas.getContext("2d");

// Dimensão das caixinhas: 32x32 px
let box = 32;

// cobrinha  vai ser um array de coordenadas dentro do canvas:
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

// Função para criar o canvas de fato:
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box)
}

// A cobrinha anda pela adição de um elemento em um array e pela remoção do primeiro
function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        // cor da cobrinha
        context.fillStyle = "green";
        // posiciona a cobrinha no canvas:
        context.fillRect(snake[i].x, snake[i].y, box, box);
        
    }
}

criarBG();
criarCobrinha();