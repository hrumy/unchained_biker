class Background1 extends GameObject {
  constructor() {
    super(0, 0, 0);
   	this.physical = false;
 	this.img = document.getElementById("lvl1");
  }

  move(game) {}

  draw(game) {
   ctx.drawImage(this.img, 0 , 0, 800, 400);
   ctx.drawImage(this.img, 800 , 0, 800, 400);
  }
}

class Background2 extends GameObject {
  constructor() {
    super(0, 0, 0);
   	this.physical = false;
   	this.img = document.getElementById("lvl2");
  }

  move(game) {}

  draw(game) {
   ctx.drawImage(this.img, 0 , 0, 800, 400);
   ctx.drawImage(this.img, 800 , 0, 800, 400);
  }
}