class Block extends GameObject {
  constructor(x, y) {
    var size = 50;
    super(x * size, y * size, size);
    this.img = document.getElementById("block");
  }

  draw(game) {
    ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  }
}
