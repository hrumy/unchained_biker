function timer (){
    var start = setInterval(Timer, 10);
    var ms = 0;
    var sec = 0; 

    function Timer() {
      ms++;

      //pocitanie sekund
      if(ms >= 100){
        sec++;
        ms = 0;
      }

      //reset timer
      if(game.timer == 1){
        ms = 0;
        sec = 0;
        game.timer = 0;
      }

      document.getElementById("timer").innerHTML = sec + ":" + ms + "s";
    }
}

