
var audio = document.getElementById('audio_music');
var yes_button = document.getElementById('yes_button');
var no_button = document.getElementById('no_button');
var count = 0;

  function play(){
  
    if(count == 0){
      count = 1;
      audio_music.play();
    }
  
  }
  
  
  function stop(){
  
    if(count == 1){
      count = 0;
      audio_music.pause();
    }
    audio_music.currentTime = 0;
  
  }

