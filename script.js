const intro = document.getElementById("intro");
const game = document.getElementById("game");
const startBtn = document.getElementById("startBtn");

const music = document.getElementById("music");

const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const message = document.getElementById("message");


let score = 0;
let time = 30;
let gameStarted = false;


setTimeout(() => {

    intro.style.display = "none";
    game.style.display = "block";

}, 3000);



startBtn.onclick = function(){

    if(gameStarted) return;

    gameStarted = true;

    startBtn.remove();

    music.play();

    startGame();

};



function startGame(){

    let timer = setInterval(()=>{

        time--;

        timeText.innerText = time;


        if(time <= 0){

            clearInterval(timer);

            message.innerText = "Oyun Bitti 🎮";

        }

    },1000);



    setInterval(()=>{

        if(time > 0){

            createEmoji();

        }

    },800);

}




function createEmoji(){

    const emoji = document.createElement("div");

    let random = Math.random();


    if(random < 0.75){

        emoji.innerHTML = "🥔";

    }
    else if(random < 0.95){

        emoji.innerHTML = "🎃";

    }
    else{

        emoji.innerHTML = "💙";

    }



    emoji.style.position = "absolute";
    emoji.style.top = "-50px";
    emoji.style.left = Math.random()*90 + "%";
    emoji.style.fontSize = "45px";
    emoji.style.cursor = "pointer";


    document.body.appendChild(emoji);



    let fall = setInterval(()=>{

        emoji.style.top =
        emoji.offsetTop + 5 + "px";


        if(emoji.offsetTop > window.innerHeight){

            emoji.remove();
            clearInterval(fall);

        }

    },30);



    emoji.onclick = ()=>{


        if(emoji.innerHTML == "🥔"){

            score += 10;

        }


        if(emoji.innerHTML == "🎃"){

            score -= 50;

        }


        if(emoji.innerHTML == "💙"){

            score += 100;

            message.innerText = "PATATESKRI! 🎊";

            setTimeout(()=>{

                message.innerText="";

            },1000);

        }


        scoreText.innerText = score;


        emoji.remove();

    };


}
