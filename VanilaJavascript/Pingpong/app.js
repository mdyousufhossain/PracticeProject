const ball = document.querySelector('#gameBoard');

ball.style.border = '1px solid black'
ball.style.borderRadius = '50%'


var    left    = 0;
var    top     = 0;
var    right   = 0;
var    down    = 0;

document.addEventListener('keydown', (e)=>{

    if(e.keyCode === 39){
        left++
        ball.style.marginLeft = `${left}px`;
        console.log(left)
    }    else if(e.keyCode === 40){
        down++
        
        ball.style.marginTop = `${down}px`;
    }else if(e.keyCode === 38){
        top++
        ball.style.marginBottom = `${top}px`;
    }
})



document.addEventListener('keydown',e => console.log(e.keyCode) )

