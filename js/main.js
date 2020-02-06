'use strict';

// let box1 = document.getElementById('target1');
// let box2 = document.getElementById('target2');
// let box3 = document.getElementById('target3');

// box1.onclick = () => {
//        box1.classList.toggle('circle');
// };
// box2.onclick = () => {
//     box2.classList.toggle('circle');
// };
// box3.onclick = () => {
//     box3.classList.toggle('circle');
// };


const num = 5;
const winner = Math.floor(Math.random() * num); //0-4

for (let i = 0; i < num; i++){        
    const div = document.createElement('div');
    div.classList.add('box');
    // div.textContent = i;
    div.addEventListener('click', () => {
    // div.classList.toggle('circle');
    if (i === winner){
        div.textContent = 'Win!';
        div.classList.add('win');
    } else {
        div.textContent = 'Lose!';
        div.classList.add('lose');
    };
    });
          
document.body.appendChild(div);
};