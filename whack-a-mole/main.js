console.log('main loaded')
/*Dit geeft aan dat er in de console.log main loaded moet staan*/

 const minimumTime = 500;
 const maximumTime = 1250;
 let gameStarted = false;
/*Dit geeft aan dat in minimaal 500 milliseconde en maximaal 1250 milliseconde de mol zich moet verplaatsen*/

 let playerPoints = 3;
 /*Dit geeft de basis aan van de score dus dat hij begint bij 0 punten*/
 let timerId
 const playerPointsElement = document.querySelector('.player-points')
 /*Dit zorgt ervoor dat er in de game de nummer veranderd van je punten wanneer je een punt scoort*/
 const allTiles = document.querySelectorAll('.tile');
//dit selecteerd elke tile
console.log(allTiles);
/*Dit zorgt ervoor dast er in de console.log allTiles word aangegeven*/ 

getRandomNumber(1, 50); 

function getRandomNumber (min, max){
  /*  let random = Math.random();
    console.log(random);
    console.log(min);
    console.log(max);
    console.log(Math.floor(random));
    console.log(max - min + 1);
    console.log(Math.floor(random * (max - min + 1)));*/
    return Math.floor(Math.random() * (max - min + 1) + min);
}

allTiles.forEach(function(tile){
   // console.log(tile);
    tile.addEventListener('click', function(){
        if (gameStarted){
            tileClicked(tile);
        }
        
    });   
});
 

function tileClicked(tile){
    //dit ;laat in de console log de tekst tile zien
    console.log(tile);

    //Dit betekent dat als je op de mole klikt krijg je 1 punt erbij en als je mist ga je 2 punten omlaag
    if(tile.classList.contains('active')){
        playerPoints = playerPoints + 1;
    }
else{
    playerPoints = playerPoints - 1;
}
if(playerPoints<= 0) {
endGame();
};

//dit laat in de console log de tekst playeroints zien
console.log(playerPoints);
//Dit laat de tekst playerpoints zien in de console log
tile.classList.remove('active');
playerPointsElement.textContent = playerPoints;

};


/*dit is een function om constant een andere tile te activeren*/
function activateRandomTile(){
    const currentActiveTile = document.querySelector('.tile.active');
    if(currentActiveTile){
        currentActiveTile.classList.remove('active');
        
    }
    let randomTileNumber = getRandomNumber(0, allTiles.length - 1);
        const selectedTile = allTiles[randomTileNumber];
        selectedTile.classList.add('active');

        startGame();
};


//deze functie bepaalt een random  tijdstussen de min en max
function startGame(){
    const randomTime =  getRandomNumber(minimumTime, maximumTime);

    timerId = setTimeout (activateRandomTile, randomTime);
}
function endGame(){
    gameStarted = false;
    clearInterval(timerId);
}



const startGameButton = document.querySelector('.start-game-button')
startGameButton.addEventListener('click', function(){
    startGameButton.disabled = true;
   if(!gameStarted){
    startGame();
   };
gameStarted = true;
playerPoints = 3;
playerPointsElement.textContent = playerPoints;

});

function clearTiles(){
    for(let i = 0; i < allTiles.length; i++){
        const tileElement = allTiles[i];
        tileElement.classList.remove('.active');
    }
}