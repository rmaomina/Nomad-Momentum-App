const body = document.querySelector("body");
const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  // const image = new Image();
  const image = document.querySelector(".bgImg");
  
  // const image = document.createElement("div");
  // image.classList.add("bgImg");
  // body.prepend(image);

  const imageSrc = "url('images/"+(imgNumber+1)+".jpg')";
  image.style.backgroundImage = imageSrc;
}

function genRandom() {
  const number = Math.floor(Math.random()*IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();