import {onSnake,expandSnake} from './snake.js'
import {randomGridPosition}from "./grid.js"
function getRandomFoodPosition(){
    let newFoodPos;
    while(newFoodPos == null || onSnake(newFoodPos)){
        newFoodPos = randomGridPosition()
    }
    return newFoodPos
}

let food = getRandomFoodPosition()
const EXPANSION_RATE = 1
export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard){
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.x
        foodElement.style.gridColumnStart = food.y
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}


