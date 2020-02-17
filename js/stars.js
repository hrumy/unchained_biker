class Star extends GameObject {
  constructor(x, y) {
    var size = 50;
    super(x * size, y * size, size);
    this.img = document.getElementById("star");
    this.physical = false;
    this.count = 0;
  }

  move(game) {
    // detek kolizie s hracom
    var obj = this.checkCollision(game.scene);
    if(obj instanceof Player) {
      this.x = 1000;
      this.y = 1000;
      // count stars
      game.stars++;

      if (sound_playing == 1)
        starsound.play();
    }

  }

  draw(game) {
    this.count++;
    if(this.count < 20)
      this.y--;
    else
      this.y++;
    if(this.y == 315)
      this.count = 0;
    ctx.beginPath(); 
    ctx.drawImage(this.img, this.x, this.y, this.size-20, this.size-20);
    ctx.closePath();
    ctx.fill();
  }
}