class Icicle extends GameObject {
  constructor(x, y) {
    var size = 50;
    super(x * size, y * size, size);
    this.img = document.getElementById("icicle");
    this.physical = false;
  }

    move(game) {
    	
  }

  draw(game) {
    ctx.beginPath();
    ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
    ctx.closePath();
    ctx.fill();
  }
}