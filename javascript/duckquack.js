var clickActive = false;
var waitTime = 150;

document.querySelector(".logoBig").onclick = function () {
  if (!clickActive) {
    var audio = new Audio("quack.mp3");
    audio.play();
    clickActive = true;
    this.style.animation = "getSmaller " + waitTime + "ms";
    setTimeout(() => {
      this.style.animation = "";
      clickActive = false;
    }, waitTime);
  }
};
