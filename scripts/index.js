let intervalTime = 600; //0.6sec
let countBugs = 5; //количество жуков
let widthBug = 40; // ширина жука
let heightBug = 40; // высота жука

const gameBoard = document.querySelector('#game-board'); //игровое поле
const repeatBtn = document.querySelector('#btn-repeat'); //кнопка повторения игры

const strWidth =getComputedStyle(gameBoard).width; //ширина игрового поля в рх (строка)
const width = +strWidth.substring(0, strWidth.indexOf('px')); //ширина игрового поля число

const strHeight =getComputedStyle(gameBoard).height; //высота игрового поля в рх (строка)
const height = +strHeight.substring(0, strHeight.indexOf('px')); //высота игрового поля число


setInterval(() => {
    gameBoard.replaceChildren();
    for(let i =0; i < countBugs; i++){
        createBag();
    }
},intervalTime);


function createBag(){
    let bug = document.createElement('img'); 
    bug.src = 'images/bag.png';    
    bug.style.width = widthBug +'px';
    bug.style.height = heightBug +'px';
    bug.style.left = Math.round(Math.random() * (width-widthBug))+'px';
    bug.style.top = Math.round(Math.random() * (height-heightBug))+'px';
    gameBoard.appendChild(bug); 
    bug.addEventListener('click',e => {
        countBugs--;
        e.target.remove();        
        if(countBugs == 0){
            alert('Поздравляю! Вы поймали всех жуков!')
        }     
    });      
}

repeatBtn.addEventListener(('click'), () =>{
    countBugs = 5;
});