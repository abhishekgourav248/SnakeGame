import {SNAKE_SPEED, update as updateSnake, draw as drawSnake,getsnakeHead,snakeIntersection} from './snake.js'
import { outsideGrid } from './grid.js'

import {update as updateFood, draw as drawFood} from "./food.js"
let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

let gameOver = false;

function main(currentTime){
    if(gameOver)
    {
        if(confirm("You lost. Press Ok to restart")){
            window.location = 'http://127.0.0.1:5500/Snake%20Game/Snake.html'
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000
    if(secondsSinceLastRender<1/SNAKE_SPEED) return
    lastRenderTime = currentTime
    console.log(currentTime)

    update()
    draw()
}

window.requestAnimationFrame(main)

function checkDeath(){
    gameOver = outsideGrid(getsnakeHead()) || snakeIntersection()
}

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

