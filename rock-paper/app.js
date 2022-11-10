let psr = document.querySelector(".psr")
const secondPage = document.querySelector(".second-page");

const myimg = document.querySelector("#myimg");
const compimg = document.querySelector("#compimg");

const score = document.querySelector(".score-amount");
const h1 = document.querySelector(".scoreh1");

const again = document.querySelector(".again");

let res = 0;


const mychoice = (hand) => {
    psr.style.display = "none";
    secondPage.style.display = "flex";
    myimg.src = `./images/${hand}.png`;
    let compchoice = compchoicefc();
    rules(hand, compchoice);
}

const compchoicefc = () => {
    const hands = ["paper", "scissors", "rock"];
    const compchoice = hands[Math.floor(Math.random() * 3)];
    compimg.src = `./images/${compchoice}.png`
    return compchoice;
}


const rules = (mychoice,cpchoice) => {
    if (mychoice == "paper" && cpchoice == "scissors") {
        result("YOU LOSE");
        scorefc(res -= 1);
    }
    if (mychoice == "paper" && cpchoice == "rock") {
        result("YOU WIN");
        scorefc(res += 1);
    }
    if (mychoice == "paper" && cpchoice == "paper") {
        result("DRAW");
    }
    if (mychoice == "scissors" && cpchoice == "paper") {
        result("YOU WIN");
        scorefc(res += 1);
    }
    if (mychoice == "scissors" && cpchoice == "rock") {
        result("YOU LOSE");
        scorefc(res -= 1);
    }
    if (mychoice == "scissors" && cpchoice == "scissors") {
        result("DRAW");
    }
    if (mychoice == "rock" && cpchoice == "scissors") {
        result("YOU WIN");
        scorefc(res += 1);
    }
    if (mychoice == "rock" && cpchoice == "paper") {
        result("YOU LOSE");
        scorefc(res -= 1);
    }
    if (mychoice == "rock" && cpchoice == "rock") {
        result("DRAW");
    }
}

const result = (result) => {
    h1.innerText = result;
    scorefc(res)
}

const scorefc = (res) => {
    score.innerText = res;
}

const playagain = () => {
    psr.style.display = "flex";
    secondPage.style.display = "none";
}

const rulesopen = () => {
    document.querySelector(".rules").style.display = "flex";
}

const rulesclose = () => {
    document.querySelector(".rules").style.display = "none";
}





