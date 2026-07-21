alert("Script çalıştı!");
const loadingScreen = document.getElementById("loadingScreen");
const menu = document.getElementById("menu");
const game = document.getElementById("game");
const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");

setTimeout(() => {
    loadingScreen.style.display = "none";
    menu.style.display = "block";
}, 2000);

startBtn.addEventListener("click", () => {

    menu.style.display = "none";
    game.style.display = "block";

    bgMusic.volume = 0.4;
    bgMusic.play().catch(err => {
        console.log("Müzik başlatılamadı:", err);
    });

});
