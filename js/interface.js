class Background_menu extends GameObject {
  constructor() {
    super(0, 0, 0);
   	this.physical = false;
	this.img = document.getElementById("menubackground")
	}
	draw(game){
		 ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height);
	}
}

class Play{
	constructor(){
		this.img = document.getElementById("play");
		this.x = 613;
		this.y = 150;
		this.width = 300;
		this.height = 100;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		sound.pause();
		game.scene = eval("level_select();");	
	}
}

class Settings{
	constructor(){
		this.img = document.getElementById("settings");
		this.x = 500;
		this.y = 250;
		this.width = 220;
		this.height = 100;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		game.scene = eval ("howtoplay();");	
	}
	
}

class Sound{
	constructor(){
		this.img = document.getElementById("sound-off");
		this.x = 1400;
		this.y = 0;
		this.width = 100;
		this.height = 100;
		this.click = 0;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		this.click++;

		if(this.click % 2 != 0){
			sound_playing = 1;
			sound.play();
			this.img = document.getElementById("sound-on");
		}
		else {
			sound_playing = 0;
			sound.pause();
			this.img = document.getElementById("sound-off");
		}	
	}
	
}

class Level_menu extends GameObject {
  constructor() {
    super(0, 0, 0);
   	this.physical = false;
	this.img = document.getElementById("level_select")
	}
	draw(game){
		 ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height);
	}
}

class Lvl1{
	constructor(){
		this.img = document.getElementById("1");
		this.x = 200;
		this.y = 240;
		this.width = 100;
		this.height = 100;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		sound.pause();
		game.level = 1;
		game.scene = select();
	}
	
}

class Lvl2{
	constructor(){
		this.img = document.getElementById("2");
		this.x = 400;
		this.y = 240;
		this.width = 100;
		this.height = 100;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		sound.pause();
		game.level = 2;
		game.scene = select();
	}
	
}

class Lvl3{
	constructor(){
		this.img = document.getElementById("3");
		this.x = 1000;
		this.y = 240;
		this.width = 100;
		this.height = 100;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		sound.pause();
		game.level = 3;
		game.scene = select();
	}
	
}

class Lvl4{
	constructor(){
		this.img = document.getElementById("4");
		this.x = 1200;
		this.y = 240;
		this.width = 100;
		this.height = 100;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		sound.pause();
		game.level = 4;
		game.scene = select();
	}
	
}


class Sipka{
	constructor(){
		this.img = document.getElementById("sipka");
		this.x = 0;
		this.y = 0;
		if(game.level == 5)
		{
			this.x = 370;
			this.y = 230;
		}
		this.width = 100;
		this.height = 100;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		sound.pause();
		sound = document.getElementById("menu");
		game.level = 1;
		game.scene = eval("menu();");
	}
	
}
class Pause{
	constructor(){
		this.img = document.getElementById("pause");
		this.x = 1300;
		this.y = 0;
		this.width = 100;
		this.height = 100;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		document.getElementById("score").setAttribute("hidden" , "true");
		document.getElementById("timer").setAttribute("hidden" , "true");
		sound.pause();
		sound = document.getElementById("menu");
		game.level = 1;
		game.scene = eval("menu();");
	}
	
}

class Difficulty extends GameObject {
  constructor() {
    super(0, 0, 0);
   	this.physical = false;
	this.img = document.getElementById("sel_dif")
	}
	draw(game){
		 ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height);
	}
}

class Easy{
	constructor(){
		this.img = document.getElementById("easy");
		this.x = 400;
		this.y = 275;
		this.width = 100;
		this.height = 50;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		game.difficulty = 1;
		sound_playing = 0;
		StartGame();
	}
	
}

class Hard{
	constructor(){
		this.img = document.getElementById("hard");
		this.x = 1000;
		this.y = 275;
		this.width = 100;
		this.height = 50;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		game.difficulty = 2;
		sound_playing = 0;
		StartGame();
	}
	
}

class Win{
	constructor(){
		this.img = document.getElementById("win_screen");
		this.x = 300;
		this.y = 0;
		this.width = 800;
		this.height = 400;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		document.getElementById("timer").setAttribute("hidden" , "true");
		document.getElementById("score").setAttribute("hidden" , "true");
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();

	}

	onclick(){}
	
}

class Restart{
	constructor(){
		this.img = document.getElementById("reset");
		this.x = 930;
		this.y = 230;
		this.width = 100;
		this.height = 100;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		game.level = 1;
		StartGame();
	}
	
}

class How_to_play extends GameObject {
  constructor() {
    super(0, 0, 0);
   	this.physical = false;
	this.img = document.getElementById("htp")
	}
	draw(game){
		 ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height);
	}
}

class Garage_back extends GameObject {
  constructor() {
    super(0, 0, 0);
   	this.physical = false;
	this.img = document.getElementById("garage")
	}
	draw(game){
		 ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height);
	}
}

class Garage{
	constructor(){
		this.img = document.getElementById("garage_button");
		this.x = 800;
		this.y = 259;
		this.width = 220;
		this.height = 80;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		sound.pause();
		game.scene = eval ("garage();");	
	}
	
}

class Select1{
	constructor(){
		this.img = document.getElementById("hard");
		this.x = 195;
		this.y = 340;
		this.width = 100;
		this.height = 50;
	}

	move(game){}

	draw(game){
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	}
	onclick(){
		bike = 3;
		sound.pause();
		game.scene = eval("menu();");
	}
	
}

class Select2{
	constructor(){
		this.img = document.getElementById("hard");
		this.x = 695;
		this.y = 340;
		this.width = 100;
		this.height = 50;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		bike = 2;
		sound.pause();
		game.scene = eval("menu();");
	}
	
}
class Select3{
	constructor(){
		this.img = document.getElementById("hard");
		this.x = 1195;
		this.y = 340;
		this.width = 100;
		this.height = 50;
	}

	move(game){}

	draw(game){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.closePath();
    	ctx.fill();
	}
	onclick(){
		bike = 1;
		sound.pause();
		game.scene = eval("menu();");
	}
	
}