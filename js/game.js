class Game {
  constructor(canvasName) {


    // Model
    this.level = 1;
    this.keys = [];
    this.scene = menu();

    this.stars = 0;
    this.timer = 0;
    this.difficulty = 1;

  }

  onkeydown(event) {
    this.keys[event.keyCode] = true;
  }

  onkeyup(event) {
    this.keys[event.keyCode] = false;
  }


  loop() {
    // move all the objects
    for (var i in this.scene) {
      this.scene[i].move(this);
    }

    // Render the scene
    for (i in this.scene) {
      this.scene[i].draw(this);
    }

    // Loop animation
    document.getElementById("score").innerHTML = this.stars;
    requestAnimationFrame( this.loop.bind(this) );

  }
}
