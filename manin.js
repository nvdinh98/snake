let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let soundEatFood = document.getElementById("music");

let speedGame = 8;
let score = 0;

let mySnake = new Snake(200, 200);
let myFood = new Food(100, 100);

function playGame() {
    clearCanvas();
    drawScore();
    mySnake.drawTail();
    mySnake.eatFood();
    mySnake.autoMove(gameOver());
    myFood.drawFood();
    mySnake.drawSnake();
    setTimeout(playGame, 1000 / speedGame);
}

function clearCanvas() {
    ctx.clearRect(0, 0, 600, 400);
}

function drawScore() {
    ctx.fillStyle = "white";
    ctx.font = "12px Arial";
    ctx.fillText("Score :  " + score, canvas.width - 70, 20);
    if (score > 5) {
        return speedGame = 12;
    }
    if (score > 10) {
        return speedGame = 16;
    }
    if (score > 15) {
        return speedGame = 20;
    }
}

function gameOver() {
    for (let i = 4; i < mySnake.tail.length - 1; i++) {
        if (mySnake.x === mySnake.tail[i].x && mySnake.y === mySnake.tail[i].y) {
            ctx.fillStyle = "white";
            ctx.font = "80px Arial";
            ctx.fillText("Game Over!", canvas.width / 8, canvas.height / 2);
            return true;
        }
    }
    return false;
}

window.addEventListener("keydown", ((event) => {
            let direction = event.key.replace("Arrow", "")
            mySnake.changeDirection(direction);
        }
    )
)

playGame();

