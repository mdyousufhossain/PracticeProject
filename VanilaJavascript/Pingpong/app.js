const ball = document.querySelector('#gameBoard');

ball.style.border = '1px solid black'
ball.style.borderRadius = '50%'
ball.style.marginTop = '100px';

ball.style.marginLeft = '100px';

window.addEventListener('keydown', (e)=>{
    console.log(e.keyCode);
})
