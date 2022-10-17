const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const screen = document.getElementById('screen');
let counter = 0;
screen.innerHTML = counter;

btn1.addEventListener('click', ()=>{
    counter++;
    screen.innerHTML = counter;
    
})

btn2.addEventListener('click', ()=>{
    counter--;
    screen.innerHTML = counter;
})



