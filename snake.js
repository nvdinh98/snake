
class Snake {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.grid = 20;
        this.xDirection = this.grid;
        this.yDirection = 0;
        this.tail = [];
        this.initialTail = 1;

    }
    drawSnake() {
        ctx.fillStyle = "lime";
        ctx.fillRect(this.x, this.y, this.grid-2,this.grid-2)

    }
    changeDirection(direction) {
        if (direction === "Left" && this.xDirection === 0) {
            this.xDirection = -this.grid;
            this.yDirection = 0;
        }
        if (direction === "Up" && this.yDirection === 0) {
            this.xDirection = 0;
            this.yDirection = -this.grid;
        }
        if (direction === "Right" && this.xDirection === 0) {
            this.xDirection = this.grid;
            this.yDirection = 0;
        }
        if (direction === "Down" && this.yDirection === 0) {
            this.xDirection = 0;
            this.yDirection = this.grid;
        }
    }
    autoMove(check) {
        if (check === false) {
            this.x += this.xDirection;
            this.y += this.yDirection;
            this.changeDirection();
            if (this.x >= canvas.width) {
                this.x = 0;
            } else if (this.x < 0){
                this.x = canvas.width;
            }
            if (this.y >= canvas.height) {
                this.y = 0;
            } else if (this.y < 0) {
                this.y = canvas.height;
            }
            this.tail.unshift({x: this.x, y: this.y});
            if (this.tail.length > this.initialTail) {
                this.tail.pop();
            }
        }
    }
    eatFood() {
        if (this.x === myFood.x && this.y === myFood.y) {
            myFood.resetFood();
            this.initialTail++;
            score++;
            soundEatFood.play();
        }
    }
    drawTail() {
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillStyle = "green";
            ctx.fillRect(this.tail[i].x, this.tail[i].y, this.grid-2, this.grid -2)

        }
    }
}