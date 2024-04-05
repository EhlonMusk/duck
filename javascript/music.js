let isPlaying = false;
// your function
function myPlay() {
  var audio = new Audio("ohmygod.mp3");
  var music = new Audio("duckmusic.mp3");
  if (isPlaying == false) {
    audio.play();
    music.play();
  } else {
    audio.stop();
    music.play();
  }
  isPlaying = !isPlaying;
}
