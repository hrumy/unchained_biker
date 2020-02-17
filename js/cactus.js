class Cactus extends GameObject {
  constructor(x, y) {
    var size = 50;
    super(x * size, y * size, size);
    this.img = document.getElementById("cactus");
    this.physical = false;
  }

    move(game) {
    //detekovanie kolizie
    var obj = this.checkCollision(game.scene);
    if(obj instanceof Player) {
      // restart level
      game.stars = 0;
      game.timer = 1;
      game.scene = eval("level"+game.level+"();");
    }
  }

  draw(game) {
    ctx.beginPath();
    ctx.drawImage(this.img, this.x, this.y-50, this.size+25, this.size+50);
    ctx.closePath();
    ctx.fill();
    
  }
}