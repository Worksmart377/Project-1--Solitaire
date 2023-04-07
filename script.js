 /*PseudoCode-

The browser will load with all of the tiles layed out and the game will be ready to play and be initialized.
The board will consist of a minimum of 8 rows and 8 columns of tiles (2D array).
Each tile design will be assigned a numeric value so that when they are placed into the array they can be randomized and matched to their like tile. 
The tiles will be placed into random order in the array using a shuffle function. 

Single Player Gameplay:

The player will need to locate two exposed matching tiles, meaning they are open on the left or the right side. 

When the player clicks on a tile it will be highlighted (selected with an eventlistener) until the player clicks on it's match. These clicked items may have be added to a new empty array.  
Once both have been clicked they will be highlighted for 3 seconds and then they will both be removed from the board (array) using a splice method. 

If the player clicks on an unmatching tile there will be a message that states "Tile is not a match. Try again!" (about 3 seconds)

If the player wants to change the originally clicked tile to select another set of matches, then they will have to reclick the highlighted tile in order to remove the selection. I think here I can use a class and a function to toggle between 'active' and 'not active' potentially placing the clicked tiles into a new empty array until they are clicked again to take them out.

If the player has no visible and exposed tiles to click then they can click the shuffle button which will randomly shuffle all of the tiles left on the board using the shuffle function.

Win Logic :

Once the player selects every match on the board and they have all been removed then they win and they can click restart game to play again. This will replace the board for a new game and reshuffle tiles in a randomn order (intialize). When there are only 2 tiles left on the board there will be a message that states, "Great Job, you won!"









 */
 
 
 
 /*----- constants variables -----*/

 let  tilesArr = [

    { name:'r-bamboo', Image:'/images/r-bamboo.png'},
    { name:'bamboo2', Image:'/images/bamboo2-b.png'},
    { name:'blank', Image:'/images/blank.png'},
    { name:'bamboo4', Image:'/images/bamboo4-b.png'},
    { name:'chun', Image:'/images/chun.png'},
    { name:'bamboo5', Image:'/images/bamboo5-b.png'},
    { name:'man1', Image:'/images/man1.png'},
    { name:'bamboo6', Image:'/images/bamboo6-b.png'},

    { name:'man2', Image:'/images/man2.png'},
    { name:'bamboo7', Image:'/images/bamboo7-b.png'},
    { name:'man8', Image: '/images/man8.png'},
    { name:'bamboo8', Image:'/images/bamboo8-b.png'},
    { name:'pin9', Image:'/images/pin9.png'},
    { name:'bamboo9', Image:'/images/bamboo9-b.png'},
    { name:'man4', Image:'/images/man4.png'},
    { name:'bird', Image:'/images/bird-b.png'},

    { name:'bamboo4', Image:'/images/bamboo4.png'},
    { name:'blank', Image:'/images/blank-b.png'},
    { name:'bamboo5', Image:'/images/bamboo5.png'},
    { name:'chun', Image:'/images/chun-b.png'},
    { name:'shaa', Image:'/images/shaa.png'},
    { name:'hatsu', Image: '/images/hatsu-b.png'},
    { name:'bamboo6', Image:'/images/bamboo6.png'},
    { name:'man1', Image:'/images/man1-b.png'},

    { name:'bamboo7', Image:'/images/bamboo7.png'},
    { name:'man2', Image:'/images/man2-b.png'},
    { name:'rpin5',Image:'/images/rpin5.png'},
    { name:'man3', Image:'/images/man3-b.png'}, 
    { name:'bird', Image:'/images/bird.png'},
    { name:'man4', Image:'/images/man4-b.png'},
    { name:'pin10', Image:'/images/pin10.png'},
    { name:'man5', Image:'/images/man5-b.png'},

    { name:'pin6', Image:'/images/pin6.png'},
    { name:'man6', Image:'/images/man6-b.png'},
    { name:'pin8', Image:'/images/pin8.png'},
    { name:'man7', Image:'/images/man7-b.png'},
    { name:'bamboo8', Image:'/images/bamboo8.png'},
    { name:'man8', Image:'/images/man8-b.png'},
    { name:'pin3', Image:'/images/pin3.png'},
    { name:'nan', Image:'/images/nan-b.png'},

    { name:'pin5', Image:'/images/pin5.png'},
    { name:'pei', Image:'/images/pei-b.png'},
    { name:'pin4', Image:'/images/pin4.png'},
    { name:'pin1', Image:'/images/pin1-b.png'},
    { name:'hatsu', Image:'/images/hatsu.png'},
    { name:'shaa', Image:'/images/shaa-b.png'},
    { name:'nan', Image:'/images/nan.png'},
    { name:'pin3', Image:'/images/pin3-b.png'},

    {name:'pin1', Image:'/images/pin1.png'},
    {name:'pin4', Image:'/images/pin4-b.png'},
    {name:'pei', Image:'/images/pei.png'},
    {name:'pin5', Image:'/images/pin5-b.png'},
    {name:'man6', Image:'/images/man6.png'},
    {name:'pin6', Image:'/images/pin6-b.png'},
    {name:'man7', Image: '/images/man7.png'}, 
    {name:'pin8', Image: '/images/pin8-b.png'},


    {name:'bamboo9', Image:'/images/bamboo9.png'},
    {name:'pin9', Image:'/images/pin9-b.png'},
    {name:'man5', Image: '/images/man5.png'},
    {name:'pin10', Image:'/images/pin10-b.png'},
    {name:'bamboo2', Image:'/images/bamboo2.png'},
    {name:'r-bamboo', Image:'/images/r-bamboo-b.png'},
    {name:'man3', Image:'/images/man3.png'},
    {name:'rpin5', Image:'/images/rpin5-b.png'},
]



  /*----- changing variables -----*/
let winner;

const width = 8;
 let boardArr = [];
 let matchesArr = [];
 let parentDivArr = [];





  /*----- cached elements  -----*/
const restartGame = document.querySelector('#Restart');
const shuffleTiles = document.querySelector('#Shuffle');
const messageToPlayer = document.getElementById('message');
const gameBoard = document.getElementById('board');


  /*----- event listeners -----*/
restartGame.addEventListener('click',resetBoard);
shuffleTiles.addEventListener('click',shuffleBoard);
 

/*----- functions -----*/

initialize();

 function resetBoard() {
    location.reload;
    playSound();
 } 
  
  function initialize() {
    // window.onload =function() {
    //     renderBoard
    //  }
      renderBoard();
    
}

 function renderBoard() {
        for (let i=0; i < tilesArr.length; i++) {
            let tile = document.createElement('div');
            let pic = document.createElement("img");
            pic.setAttribute('src','.'+tilesArr[i].Image);
            pic.classList.add(tilesArr[i].name);
            tile.appendChild(pic);
            gameBoard.appendChild(tile);
            boardArr.push(tile);
            
    }   
    
 }
 
 gameBoard.addEventListener('click',function(e){
    if (e.target.tagName === 'IMG' && matchesArr.length <= 1) {
        let tileName = e.target.classList[0]
        matchesArr.push(tileName);
        let parentDiv = e.target.parentElement;
        parentDivArr.push(parentDiv);
        console.log(e.target.parentElement);
    }   
    if (matchesArr.length === 2) {  
        if (matchesArr[0] === matchesArr[1]) {
            console.log(matchesArr);
            parentDivArr[0].style.border = 'solid 5px darkRed';
            parentDivArr[1].style.border = 'solid 5px darkRed';
            setTimeout(parentDivArr[0].remove(), 3.0 *1000);
            setTimeout(parentDivArr[1].remove(), 3.0 * 1000);
            parentDivArr = [];
            matchesArr = [];
        } else {
            matchesArr = [];
            messageToPlayer.innerText = 'Not a match, try again!';  
        } 
    }  
 })
 
 
   
function shuffleBoard()  {
   let randomArr = [];        //temp holder for board array
    while (boardArr.length > 0) {
          let randomTile = boardArr.splice([Math.floor(Math.random() * boardArr.length)], 1)[0]
          randomArr.push(randomTile)  //using splice on boardarr, will pick a random location within array and splice that index by passing in 1
        }   
    boardArr = randomArr;
    for (let i=0; i < boardArr.length; i++) {
        let tile = document.createElement('div');
        tile.classList = 'tileCells';
        let pic = document.createElement("img");
        pic.setAttribute('src',boardArr[i].firstChild.getAttribute('src')); //boardarr index has one child(image-tag) which has an attribute that will use getAttribute to pass in src to grab the image
        tile.appendChild(pic);
        
        gameBoard.appendChild(tile);
}
playSound();
}


    



//this function will play sound when shuffle or restart game buttion is clicked
function playSound() {
        let sound = new Audio('dieShuffle3.wav');
        sound.loop = false;
        sound.play(); 
        audio = document.querySelectorAll('button')

    }
    