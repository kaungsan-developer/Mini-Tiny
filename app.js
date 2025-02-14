let image = document.getElementById("myImg");
let btn = document.getElementById("btn");
let u = document.getElementById("you");
let heart = document.getElementById("heart");
let opacityValue = 0;
let heartOpacity = 0;
let interval;
let currentLetter = 0;
let letters = ["Y", "O", "U"];

function img(path, text) {
  clearInterval(interval);
  u.style.display = "none";
  heart.style.display = "none";
  image.style.display = "inline";
  image.src = path;
  btn.innerHTML = text;
}

function you() {
  opacityValue = 0;
  heartOpacity = 0;
  currentLetter = 0;
  u.style.opacity = 1;
  u.style.display = "inline";
  heart.style.display = "none";
  heart.style.opacity = 0;
  u.innerHTML = "";
  image.style.display = "none";
  btn.innerHTML = "1080p";
  clearInterval(interval);
  interval = setInterval(opacity, 20);
}

function opacity() {
  if (opacityValue >= 1) {
    opacityValue = 0;
    currentLetter++;
    if (currentLetter >= letters.length) {
      clearInterval(interval);
      heart.style.display = "block";
      interval = setInterval(showHeart, 50);
      return;
    }
  }

  opacityValue += 0.02;
  let displayText = "";
  for (let i = 0; i < letters.length; i++) {
    if (i < currentLetter) {
      displayText += letters[i];
    } else if (i === currentLetter) {
      displayText += `<span style="opacity: ${opacityValue}">${letters[i]}</span>`;
    }
  }
  console.log(displayText);
  u.innerHTML = displayText;
}
function showHeart() {
  heartOpacity = parseFloat(heart.style.opacity) || 0;
  if (heartOpacity >= 0.9) {
    heartOpacity = 0;
    clearInterval(interval);
    return;
  }
  heartOpacity += 0.02;
  heart.style.opacity = heartOpacity;
}
