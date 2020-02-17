var game;
var canvas;
var ctx; 
var sound;
var clicksound;
var winsound;
var starsound;
var start_timer;
var sound_playing;
var bike = 1;
// Just start up our game

window.onload = function () {
	//sound
  clicksound = document.getElementById("click");
  sound = document.getElementById("menu");
  winsound = document.getElementById("win");
  starsound = document.getElementById("starsound");
  win.volume = 0.2;
  starsound.volume = 0.2;
  sound.loop = true;

  	//canvas
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.onclick = click;

   //game
  game = new Game("canvas");
  game.loop();
  timer();

  	//key handelers
  window.onkeydown = function (event) {
  	game.onkeydown(event);
  };

  window.onkeyup = function (event) {
  	game.onkeyup(event);
  };

};

function StartGame () {
	//sound
	sound.pause();
	sound = document.getElementById("game");
	sound.loop = true;

	//start selected level
	game.scene = eval("level"+game.level+"();");

	game.timer = 1;

	document.getElementById("timer").removeAttribute("hidden");
	document.getElementById("score").removeAttribute("hidden");
};

function click(){
  var x = event.pageX - canvas.offsetLeft
  var y = event.pageY - canvas.offsetTop

  clicksound.play();
  
  for (var i in game.scene) {
    var z = game.scene[i]
    if (x > z.x && x < z.x + z.width &&
        y > z.y && y < z.y + z.height) {
        z.onclick()
    }
  }
};

/*function playAudio() {
	sound.play();
}

function pauseAudio() {
	sound.pause();
}*/
