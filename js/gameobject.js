class GameObject {
  constructor(x, y, size) {
    // Constructor, generates a new GameObject
    this.x = x;
    this.y = y;
    this.size = size;
    this.physical = true;
  }

  move(game) {}

  // Check object collision
  checkCollision(scene) {
    // Test collision
    for (var i in scene) {
      var obj = scene[i];
      // Object is not physical
      if (obj == this || !obj.physical) continue;
      var test =
        this.x >= obj.x + obj.size ||
        this.x + this.size <= obj.x-25 ||
        this.y >= obj.y+50 + obj.size ||
        this.y + this.size <= obj.y+50;
      if (!test) {
        return obj;
      }
    }
    return false;
  }

  // Draw self
  draw(game) {
    ctx.save();
    ctx.restore();
  }
}