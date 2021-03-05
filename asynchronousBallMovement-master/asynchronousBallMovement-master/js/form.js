class Form {
constructor(){
    this.input=createInput("name")
   this.button= createButton('play')
    this.greeting = createElement('h3')
}
hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
}
display(){
var title=createElement('H1')   
title.html("car racing game")
title.position(250,10)

this.input.position(300,150)

this.button.position(270,200)

this.button.mousePressed(()=>{
 this.input.hide() 
 this.button.hide() 
 player.name=this.input.value() 
 playerCount+=1
 player.index= playerCount
 player.update()
 player.updateCount(playerCount)
 this.greeting.html("namaste"+player.name)
this. greeting.position(250,250)
})
} 
}