// // Code for a Guess a Number..?

let bdy = document.getElementById('body');
let randomNumber = Math.floor(Math.random()*100);
let b = document.getElementsByTagName('b');
let qsn = document.getElementById('qn');
let inpt = document.getElementById('input');
let chck = document.getElementById('check');
let para = document.getElementById('guess');
let cnt = 100;
chck.addEventListener('click', () => {
    
    if(randomNumber < parseInt(inpt.value)){
        para.innerText = "Guess is High";
        cnt --;
        b[1].innerHTML = cnt;
    }else if(randomNumber > parseInt(inpt.value)){
        para.innerText = "Guess is Low";
        cnt --;
        b[1].innerHTML = cnt;
    }else{
        para.innerText = "Correct Guess You Won..!";
        cnt --;
        qsn.innerText = randomNumber;
        b[2].innerText = cnt;
        bdy.setAttribute('style', 'background-color:green');
    }
})