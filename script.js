let score = 0;
const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;let time = 30;
let gameOver = false;

const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const area = document.getElementById("gameArea");
const result = document.getElementById("result");
const medalText = document.getElementById("medal");
function createTarget(){

    if(gameOver) return;

    let target = document.createElement("div");
    target.className = "target";

    let random = Math.random();

    if(random < 0.65){
        target.innerHTML = "🥔";
        target.value = 10;
    }
    else if(random < 0.80){
        target.innerHTML = "👑🥔";
        target.value = 50;
        target.classList.add("gold");
    }
    else if(random < 0.85){
        target.innerHTML = "💀🥔";
        target.value = -20;
        target.classList.add("bad");
    }
    else{
    target.innerHTML = "💙 KRIIII";
    target.value = 100;
    target.classList.add("gold");
    };
    


    target.style.left = Math.random()*75+"%";
    target.style.top = Math.random()*80+"%";


    target.onclick=function(){
    if (!musicStarted) {
    bgMusic.volume = 0.4;
    bgMusic.play().catch(() => {});
    musicStarted = true;
    }
        score += target.value;

        if(score < 0){
            score = 0;
        }

        scoreText.innerHTML = score;

        if(target.value === 100){
            confetti();
        }

        target.remove();
    }


    area.appendChild(target);


    setTimeout(()=>{
        target.remove();
    },1200);

}



let spawn = setInterval(createTarget,650);



let timer=setInterval(()=>{

    time--;

    timeText.innerHTML=time;

    if(time<=0){
        endGame();
    }

},1000);



function endGame(){

    gameOver=true;

    clearInterval(spawn);
    clearInterval(timer);


    document.querySelectorAll(".target")
    .forEach(x=>x.remove());


    let medal="🥉";

    if(score>=500){
        medal="🥇";
    }
    else if(score>=200){
        medal="🥈";
    }


    let best=localStorage.getItem("bestScore") || 0;


    if(score>best){
        localStorage.setItem("bestScore",score);
        best=score;
    }

    medalText.innerHTML = medal;
    result.innerHTML=
    medal+" Madalya<br>"+
    "🏆 Skor: "+score+
    "<br>💎 Rekor: "+best;

}



function confetti(){

    for(let i=0;i<30;i++){

        let c=document.createElement("div");

        c.innerHTML="✨";

        c.style.position="absolute";
        c.style.left=Math.random()*100+"%";
        c.style.top="0";

        c.style.fontSize="25px";

        area.appendChild(c);


        setTimeout(()=>{
            c.remove();
        },1000);

    }

}



function restartGame(){

    location.reload();

        }
