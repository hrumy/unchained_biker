class Player extends GameObject {
  constructor(x, y) {
    var size = 50;
    super(x * size, y * size, size);
    if(bike == 1)
      this.img = document.getElementById("bike");
    if(bike == 2)
      this.img = document.getElementById("bike2");
    if(bike == 3)
      this.img = document.getElementById("bike3");
    this.x = x;
    this.y = y;
    this.x_vel = 0;
    this.y_vel = 0;
    this.jumping = 1;
  }

   move(game) {
    var last_x = this.x;
    var last_y = this.y;

    this.x += this.x_vel;
    this.y += this.y_vel;
    this.x_vel *= 0.95;// friction
    this.y_vel *= 0.89;// friction


    //hard difficulty
    if(game.difficulty == 2){
      this.y_vel += 1.2; //gravity
      if (game.keys[39]) this.x_vel += 0.4;
      if (game.keys[37]) this.x_vel -= 0.2;
      if (game.keys[38]) {
        this.y_vel -= 3;
        //this.x_vel -= 0.1;
      }
    }

    //easy difficulty
    if(game.difficulty == 1){
      this.y_vel += 0.9; //gravity
      if (game.keys[39]) this.x_vel += 0.35;//0.2 
      if (game.keys[37]) this.x_vel -= 0.3;//0.2
      if (game.keys[38]) 
      {
        if(this.jumping == 0){
          this.y_vel -= 22;
        }
      }
    }


    // kolizia so zemou
    if(this.y >= 298.7317965150281) {
      this.y = 298.7317965150281;
      this.jumping = 0;
    }                                     
      
    //kolizia s ostnami
    if(this.y <= 50){
      game.stars = 0;
      game.timer = 1;
      game.scene = eval("level"+game.level+"();");    
    }

    //ciel
    if(this.x >= 1410)
      this.x = last_x;

    //zaciatok
    if(this.x <= 0)       
      this.x = last_x;
    
    //detek skoku
    if(this.y < 298)
      this.jumping = 1;


   

  //console.log(game.level);

}

  draw(game) {
    ctx.beginPath();
    ctx.closePath();
    ctx.fill();
    ctx.drawImage(this.img, this.x, this.y, this.size+20, this.size);
  }
}