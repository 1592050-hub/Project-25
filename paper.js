class paper{
    constructor(x,y,width,height) {
 var options = {
            isStatic:false,
            restitution=0.3,
            friction:.5,
            density:1.2
        }
        this.body = Bodies.ellipse(x, y, w, h,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/paper.png");
      this.radius=7;
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        fill("purple");
        ellipse(pos.x, pos.y, this.width, this.height);
    }

}