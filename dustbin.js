class Dustbin {
    constructor(x, y, w, h) {
      var options = {
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.width = w;
      this.height= h;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill(255,0,0);
      rect(pos.x, pos.y, this.body.w, this.body.h);
      pop();
    }
  };
  