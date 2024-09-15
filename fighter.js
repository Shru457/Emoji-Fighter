//Fighter and weapon arrays
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];
let weapon = ["✂️", "📃", "🪨"];

//DOM Elements
let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fighterButton");
let stageTwo = document.getElementById("stage2");
let startFight = document.getElementById("startButton");
let playerOne = document.getElementById("player1");
let playerTwo = document.getElementById("player2");
let messageEl = document.getElementById("message-el");

//Score Board Elements
let fighter1WinsEl = document.getElementById('fighter1-wins');
let fighter2WinsEl = document.getElementById('fighter2-wins');

//Audio Elements
let pickSound = document.getElementById("pick-sound");
let fightSound = document.getElementById("fight-sound");
let winSound = document.getElementById("win-sound");

//Event Listeners
fightButton.addEventListener("click", pickFighter);
startFight.addEventListener("click", start);

//function to play sound
function playSound(sound){
    sound.play();
}

//function to pick random fighters
function pickFighter(){
    playSound(pickSound);

    let fighter1 = Math.floor( Math.random() * fighters.length);
    let fighter2 = Math.floor( Math.random() * fighters.length);

    //Ensure fighters are different
    while(fighter1===fighter2){
        fighter2 = Math.floor( Math.random() * fighters.length);
    }

    stageEl.textContent = `${fighters[fighter1]} V/S ${fighters[fighter2]}`;
    
    //stores fighters for use in start function
    playerOne.dataset.fighter = fighter1;
    playerTwo.dataset.fighter = fighter2;
}

//Function to start the fight
function start(){
    playSound(fightSound);

    let p1 = Math.floor( Math.random() * weapon.length);
    let p2 = Math.floor( Math.random() * weapon.length);
    
    stageTwo.textContent = `${fighters[playerOne.dataset.fighter]} (${weapon[p1]}) vs ${fighters[playerTwo.dataset.fighter]} (${weapon[p2]})`;

    //Display the result based on game rules
    if ((weapon[p1] === "✂️" && weapon[p2] === "📃") || 
        (weapon[p1] === "📃" && weapon[p2] === "🪨") || 
        (weapon[p1] === "🪨" && weapon[p2] === "✂️")) {
        messageEl.textContent = `${fighters[playerOne.dataset.fighter]} Won!!!`;
        playSound(winSound);
        updateScore(1);
    }else if (p1==p2) {
        messageEl.textContent = "It's a draw!";
    }else {
        messageEl.textContent = `${fighters[playerTwo.dataset.fighter]} Won!!!`;
        playSound(winSound);
        updateScore(2);
    }
}    

//function to update the scoreboard
function updateScore(winner) {
    if (winner === 1) {
        fighter1WinsEl.textContent = parseInt(fighter1WinsEl.textContent) + 1;
    } else if (winner === 2) {
        fighter2WinsEl.textContent = parseInt(fighter2WinsEl.textContent) + 1;
    }
}