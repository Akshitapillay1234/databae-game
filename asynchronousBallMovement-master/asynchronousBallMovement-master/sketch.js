
var database;
var player,game,form
var playerCount
var gameState=0;
var allPlayers
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    
}

function draw(){
    background("white");
   game=new Game()
   game.getState()
   game.start()
   if(playerCount===4){
   game.update(1)
   }
   if(gameState===1){
 clear()
 game.play()
   }
}

