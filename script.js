let score = 0;
let time = 30;
let gameOver = false;

const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const area = document.getElementById("gameArea");
const result = document.getElementById("result");

function createTarget() {

    if (gameOver) return;

    let target = document.createElement("div");
    target.className = "target";

    let random = Math.random();

    if (random < 0.70) {
        target.innerHTML = "🥔";
        target.value = 10;
    } 
    else if (random < 0.85) {
        target.innerHTML = "👑🥔";
        target.value = 50;
        target.classList.add("gold");
    }
    else {
        target.innerHTML = "💀🥔";
        target.value = -20;
        target.classList.add("bad");
    }

    target.style.left = Math.random() * 80 + "%";
    target.style.top = Math.random() * 85 + "%";

    target.onclick = function() {
        score += target.value;
        scoreText.innerHTML = score;
        target.remove();
    };

    area.appendChild(target);

    setTimeout(() => {
        target.remove();
    }, 1200);
}


let spawn = setInterval(createTarget, 700);


let timer = setInterval(() => {

    time--;
    timeText.innerHTML = time;

    if(time <= 0){
        endGame();
    }

},1000);


function endGame(){

    gameOver = true;

    clearInterval(spawn);
    clearInterval(timer);

    document.querySelectorAll(".target").forEach(x=>x.remove());

    let best = localStorage.getItem("bestScore") || 0;

    if(score > best){
        localStorage.setItem("bestScore",score);
        best = score;
    }

    result.innerHTML =
    "🏆 Oyun Bitti!<br>Skor: "
    + score +
    "<br>💎 Rekor: "
    + best;
}


function restartGame(){

    location.reload();

                        }
