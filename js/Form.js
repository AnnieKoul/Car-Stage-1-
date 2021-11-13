class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  setElementsPosition(){
    this.titleImg.position(100,150)
    this.input.position(width/2,height/2)
    this.playButton.position(width/2+50,height/2+100)
    this.greeting.position(width/2-200,height/2-100)
  }
  setElementsStyle(){
    this.titleImg.class('gameTitle')
    this.input.class('customInput')
    this.playButton.class('customButton')
    this.greeting.class('greeting')
  }
  handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      this.greeting.html("hello"+this.input.value()+"Wait for another player to join")
    })
  }
display(){
  this.setElementsPosition()
  this.setElementsStyle()
  this.handleMousePressed()
}
}


