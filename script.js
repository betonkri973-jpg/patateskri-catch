let score = 0;
let time = 30;
let gameStarted = false;
let timer;


// Görseller

const patates = document.getElementById("patates");
const patatesKri = document.getElementById("patatesKri");
const curuk = document.getElementById("curuk");

const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");

const gameArea = document.getElementById("gameArea");



// Sesler

const muzik = new Audio("assets/sounds/muzik.mp3");
const tik = new Audio("assets/sounds/tik.mp3");
const bonus = new Audio("assets/sounds/bonus.mp3");
const curukSes = new Audio("assets/sounds/curuk.mp3");

muzik.loop = true;



// Oyunu başlat

startBtn.onclick = function(){

    if(gameStarted) return;

    gameStarted = true;

    score = 0;
    time = 30;

    scoreText.innerHTML = score;
    timeText.innerHTML = time;

    message.innerHTML = "";

    muzik.play();

    timer = setInterval(() => {

        time--;

        timeText.innerHTML = time;


        if(time <= 0){

            bitir();

        }


    },1000);


    hedefCikar();

};




// Rastgele hedef

function hedefCikar(){


    if(!gameStarted) return;



    let secim = Math.floor(Math.random()*3);


    let hedef;


    if(secim === 0){

        hedef = patates;

    }

    else if(secim === 1){

        hedef = patatesKri;

    }

    else {

        hedef = curuk;

    }



    let x = Math.random() *
    (gameArea.clientWidth - 90);


    let y = Math.random() *
    (gameArea.clientHeight - 90);



    hedef.style.left = x + "px";

    hedef.style.top = y + "px";

    hedef.style.display = "block";



    setTimeout(()=>{

        hedef.style.display = "none";

        hedefCikar();


    },900);



}





// Tıklama sistemi


patates.onclick = function(){

    puan(10);

    tik.play();

};


patatesKri.onclick = function(){

    puan(50);

    bonus.play();

};


curuk.onclick = function(){

    puan(-20);

    curukSes.play();

};




// Skor

function puan(deger){

    score += deger;


    if(score < 0){

        score = 0;

    }


    scoreText.innerHTML = score;



    if(score >= 1000){

        message.innerHTML =
        "🥔 PATATESKRİ USTASI! 👑";

    }

}




// Oyun bitiş

function bitir(){


    gameStarted = false;


    clearInterval(timer);


    patates.style.display="none";
    patatesKri.style.display="none";
    curuk.style.display="none";


    muzik.pause();


    message.innerHTML =
    "🎮 Oyun Bitti! Skorun: " + score;


        }
