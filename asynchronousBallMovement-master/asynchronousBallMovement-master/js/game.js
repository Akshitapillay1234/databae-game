class  Game{
    constructor(){}
    
    getState(){
    var gameStateRef = database.ref('gameState')
   gameStateRef.on("value",function(data){
    gameState=data.val()
   })
    }
 update(state){
 database.ref('/').update({
   gameState:state 
 })
 }
 start(){
  if(gameState===0)  {
   player=new Player()
   player.getCount()
   
   form=new Form()
  form.display()
  } 

 }
 play(){
  form.hide()
  textSize(30)
  text("car racing",300,11)
  Player.getPlayerinfo()
  if(allPlayers!==undefined){
  var displayposition=150
  for(var plr in allPlayers){
    if(plr ==="player"+player.index){
   fill ("blue")  
  }
  else{
    fill("black")
    
  }
displayposition+=20
textSize(20)
text(allPlayers[plr].name+":"+allPlayers[plr].distance,200,displayposition)
  }
 }
if(keyIsDown(UP_ARROW)&&player.index!==null){
player.distance+=50
player.update()
}
}
}