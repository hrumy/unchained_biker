class Finish extends GameObject {
  constructor(x, y) {
    var size = 50;
    super(x * size, y * size, size);
    this.img = document.getElementById("finish");
    this.physical = false;
  }

  move(game) {
    // If the player reaches the finish
    var obj = this.checkCollision(game.scene);
    if(obj instanceof Player) {
      // Load next level
      game.level++;
      game.stars = 0;
      game.timer = 1;
      if(sound_playing == 1)
        winsound.play();
      sound.pause();
      sound_playing = 0;
      StartGame();
    }
  }

  draw(game) {
    ctx.beginPath();
    ctx.drawImage(this.img, this.x, this.y-50, this.size, this.size+50);
    ctx.closePath();
    ctx.fill();
  }
}