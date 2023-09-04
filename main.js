let paper = "rock";
let rock = "paper";
let scissor = "scissor";
let result;
let totals = [];
// let gameStart = document.getElementById('items');
// gameStart.addEventListener('change', () => {
//     game();
// })
let start = document.getElementById("start");
start.addEventListener("click", () => {
    game();
});

function logic(value) {
    let randomItem = [paper, rock, scissor];
    // let userChoice = gameStart.value;
    let userChoice = value.toLowerCase();
    let random = Math.floor(Math.random() * randomItem.length);
    let pcChoice = randomItem[random];
    switch (true) {
        case userChoice === "rock" && pcChoice === "rock":
            result = "it's draw";
            // console.log("it's draw");
            break;
        case userChoice === "paper" && pcChoice === "paper":
            result = "it's draw";
            // console.log("it's draw");
            break;
        case userChoice === "scissor" && pcChoice === "scissor":
            result = "it's draw";
            // console.log("it's draw");
            break;
        case userChoice === "rock" && pcChoice === "scissor":
            result = "pc win";
            // console.log("pc win");
            break;
        case userChoice === "paper" && pcChoice === "rock":
            result = "u win";
            // console.log("u win");
            break;
        case userChoice === "paper" && pcChoice === "scissor":
            result = "pc win";
            // console.log("pc win");
            break;
        case userChoice === "scissor" && pcChoice === "rock":
            result = "pc win";
            // console.log("pc win");
            break;
        case userChoice === "rock" && pcChoice === "paper":
            result = "pc win";
            // console.log("pc win");
            break;
        case userChoice === "scissor" && pcChoice === "paper":
            result = "u win";
            // console.log("u win");
            break;
        default:
            // console.log(userChoice + " " + pcChoice);
            break;
    }
}

function game() {
    totals = [];
    for (let index = 0; index < 5; index++) {
        value = prompt("Rock or Paper or Scissor", "rock");
        logic(value);
        totals.push(result);
        console.log(result);
    }
    const userWin = "u win";
    const pcWin = "pc win";
    const draw = "it's draw";
    let userCount = 0;
    let pcCount = 0;
    let drawCount = 0;

    for (const item of totals) {
        if (item === userWin) {
            userCount++;
        } else if (item === pcWin) {
            pcCount++;
        } else if (item === draw) {
            drawCount++
        } else {
            console.log('error');
        }
    }
    console.log('user win ' + userCount);
    console.log('pc win ' + pcCount);
    console.log('draw ' + drawCount);

    let highestNumber;

    if (userCount >= pcCount && userCount >= drawCount) {
        highestNumber = 'User Win the round ' + userCount;
    } else if (pcCount >= userCount && pcCount >= drawCount) {
        highestNumber = 'Pc win the round ' + pcCount;
    } else {
        highestNumber = 'It is draw' + drawCount;
    }
    console.log(highestNumber);
}
