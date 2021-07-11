class Fuel {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      World.add(world, this.body);
      this.width = 50;
      this.height = 50;
      this.image=loadImage("images/feul.png")
    }
    display(){
      push();
      var pos =this.body.position;
      imageMode(CENTER);
      fill("grey");
      image(this.image,pos.x, pos.y, this.width, this.height);
      pop();
    }
  };