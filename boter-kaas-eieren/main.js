let playerxPoints = 0;
let playeroPoints = 0;
//geeft aan dat de punten beginnen bij 0 punten
const playerxPointsElement=document.querySelector(".player-x-points");
const playeroPointsElement=document.querySelector(".player-o-points");
//dit haalt de classes player-x-points en player-o-points op uit html
const boxes = document.querySelectorAll("#gameboard");
//dit haalt de id gameboard op uit html
let turn = "x";
//hier word de beurt gegeven aan x
const divBoxes = document.querySelectorAll(".box");
  //dit geeft de class box op uit html
const restartBtn = document.querySelector("#restartBtn");
//dit geeft de id restartBtn op uit html
const resetPoints = document.querySelector(".resetPuntenBtn");
resetPoints.addEventListener("click", () => {
  window.location.reload();
})
//deze code zorgt ervoor dat als je erop klikt dat alle punten naar 0 gaan
restartBtn.addEventListener("click", function () {
  for (let i = 0; i < divBoxes.length; i++) {
    const div = divBoxes[i];
    div.textContent = "";
  }
  //dit geeft de restart button een functie en zorgt ervoor dat het werkt en dat alle vakken leeg worden nadat er op word geklikt
});


function onClick(event) {
  console.log(event);
  if (event.target.textContent == "") {
    event.target.textContent = turn;
    //dit geeft beurten aan 

    if (turn == "x") {//wie aan de beurt is veranderd naar x
      turn = "o"; // wie aan de beurt is wordt veranderd naar O
    } else {
      turn = "x";
    }
//wie aan de beurt is veranderd naar x
    checkWin();
    //checken wie heeft gewonnen
  }
}

for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];
  console.log(box);
  box.addEventListener("click", onClick);
}
//dit zorgt ervoor dat de boxes worden opgevuld

function checkWin() {
  const b1 = document.querySelector(".div-0").textContent;
  const b2 = document.querySelector(".div-1").textContent;
  const b3 = document.querySelector(".div-2").textContent;
  const b4 = document.querySelector(".div-3").textContent;
  const b5 = document.querySelector(".div-4").textContent;
  const b6 = document.querySelector(".div-5").textContent;
  const b7 = document.querySelector(".div-6").textContent;
  const b8 = document.querySelector(".div-7").textContent;
  const b9 = document.querySelector(".div-8").textContent;
//dit laat b1 linken aan div0, b2 aan div1, b3 aan div4 enz


  let x=0;
  let o=0;
//dit geeft aan de dat de punten met 0 beginnen

  if (b1 == "x" && b2 == "x" && b3 == "x") {
    showMessage("X heeft gewonnen");
    addPlayerPoints("x");
  } else if (b4 == "x" && b5 == "x" && b6 == "x") {
    showMessage("X heeft gewonnen");
    addPlayerPoints("x");
  } else if (b7 == "x" && b8 == "x" && b9 == "x") {
    showMessage("X heeft gewonnen");
    addPlayerPoints("x");
  } else if (b1 == "x" && b4 == "x" && b7 == "x") {
    showMessage("X heeft gewonnen");
    addPlayerPoints("x");
  } else if (b2 == "x" && b5 == "x" && b8 == "x") {
    showMessage("X heeft gewonnen");
    addPlayerPoints("x");
  } else if (b3 == "x" && b6 == "x" && b9 == "x") {
    showMessage("X heeft gewonnen");
    addPlayerPoints("x");
  } else if (b1 == "x" && b5 == "x" && b9 == "x") {
    showMessage("X heeft gewonnen");
    addPlayerPoints("x");
  } else if (b3 == "x" && b5 == "x" && b7 == "x") {
    showMessage("X heeft gewonnen");
    addPlayerPoints("x");
  }
  //deze codes geven aan dat er bij verschillende combinaties x gewonnen heeft dus
   //als bijv bij b1, b2 en b3 x is ingevuld zal x winnen en dat is bij elke combinatie zo geschreven waar het voor
   // x mogelijk is om te winnen 

  if (b1 == "o" && b2 == "o" && b3 == "o") {
    showMessage("O heeft gewonnen");
    addPlayerPoints("o");
  } else if (b4 == "o" && b5 == "o" && b6 == "o") {
    showMessage("O heeft gewonnen");
    addPlayerPoints("o");
  } else if (b7 == "o" && b8 == "o" && b9 == "o") {
    showMessage("O heeft gewonnen");
    addPlayerPoints("o");
  } else if (b1 == "o" && b4 == "o" && b7 == "o") {
    showMessage("O heeft gewonnen");
    addPlayerPoints("o");
  } else if (b2 == "o" && b5 == "o" && b8 == "o") {
    showMessage("O heeft gewonnen");
    addPlayerPoints("o");
  } else if (b1 == "o" && b5 == "o" && b9 == "o") {
    showMessage("O heeft gewonnen");
    addPlayerPoints("o");
  } else if (b3 == "o" && b5 == "o" && b7 == "o") {
    showMessage("O heeft gewonnen");
    addPlayerPoints("o");
  }
//deze codes geven aan dat er bij verschillende combinaties o gewonnen heeft dus
   //als bijv bij b1, b2 en b3 o is ingevuld zal x winnen en dat is bij elke combinatie zo geschreven waar het voor
   // o mogelijk is om te winnen 

  if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9) {
    showMessage("het is gelijkspel");
  }
  //hier geeft de codes de combinaties aan wanneer hij moet aangeven wanneer het gelijkspel is 
}
function showMessage(message) {
  const pElement = document.querySelector(".message");
  console.log(message);
  pElement.textContent = message;
}
//dit laat de message werken van wie er heeft gewonnen
function addPlayerPoints(player){
if (player=="x"){
    playerxPoints++;
    playerxPointsElement.textContent=playerxPoints;
}
if (player=="o"){
    playeroPoints++;
    playeroPointsElement.textContent=playeroPoints;
}
//deze twee geven de scoreboard een functie en er zal een punt e=omhoog gaan wannneer x of o een ronde de heeft gewonnen
};

/*const player_1 = document.querySelector(".player1");
const player_2 = document.querySelector(".player2");
const saveBtn = document.querySelector(".opslaan");

saveBtn.addEventListener("click", function () {
  const player1 = player_1.value;
  localStorage.setItem("player1", player1);

  const player2 = player_2.value;
  localStorage.setItem("player2", player_2);
});

const x = localStorage.getItem("adress");
addrDiv.textContent = x;*/