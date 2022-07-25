class Sword {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("swod.png")
    
    }

    display(){
       // var pos =this.body.position;
       var pos={}
        pos.x=mouseX;
        pos.y=mouseY
        var angle= this.body.angle
        push()
        translate(pos.x,pos.y)
       // rotate(angle)
       imageMode(CENTER)
  image(this.image,0,0,55,50)
  pop()
      }

  };