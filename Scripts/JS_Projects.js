

let TargetClick = document.querySelector("button.logo-button")
let elementToChange = document.querySelector(".logoTest");
let colourString = document.querySelector("div.colourString");
let fontString = document.querySelector("div.fontString");

let ballGame = document.querySelector(".ball-game")
let gameReveal = document.querySelector(".game-reveal-button")
let ball = document.getElementById("ball");
let gameOverBox = document.querySelector(".game-over-box")

let redLight = document.querySelector(".red")
let amberLight = document.querySelector(".amber")
let greenLight = document.querySelector(".green")
let trafficButton = document.querySelector(".traffic-button")
let maggie = document.querySelector(".dog")
let resetButton = document.querySelector(".reset-button")
let Home = document.querySelector(".home-msg")

// FUNCTION TO CHANGE LOGO MAKER BACKGROUND COLOUR

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    elementToChange.style.backgroundColor = "#" + randomColor;
    colourString.innerHTML = "Colour: " + "#" + randomColor;
  }
  
  TargetClick.addEventListener("click", setBg);
  setBg();
  
  
  // random array selectro for fonts
  
  const fontGen = () => {
    const fontArr = ['Playfair Display', 'Mea Culpa', 'UnifrakturMaguntia', 'Festive', 'Kaushan Script', 'Syne Mono', 'Farsan', 'Merienda', 'Lobster', 'Rubik Glitch Pop', 'Monofett', 'Creepster', 'Tektur', 'Trade Winds', 'Kenia', 'Codystar', 'Orbitron', 'Teko', 'Londrina Shadow', 'Alumni Sans Pinstripe', 'Rubik Gemstones', 'Rubik Bubbles', 'Rubik Puddles', 'Rubik Glitch', 'Chela One', 'Frijole', 'Rubik Vinyl', 'Rubik Wet Paint', 'Bungee Shade', 'Bungee Outline', 'Ballet', 'Jacquard 24 Charted', 'Akronim']
  let switchFont = Math.floor(Math.random() * fontArr.length);
  //return fontArr[switchFont]; 
  elementToChange.style.fontFamily = fontArr[switchFont];
  fontString.innerHTML = "Font: " + fontArr[switchFont];
  }
  
  TargetClick.addEventListener("click", fontGen);
  fontGen();
  
  
  
  
  
  // BALL GAME FUNCTION
  
  //document.getElementById('ball').style.backgroundColor = 'red';
  
  // Keycodes:
  // A: 65
  // D: 68
  // W: 87
  
  
  function showGame () {
    document.querySelector(".ball-game").style.display = 'block';
  }
  
  gameReveal.addEventListener('click', showGame);
  
  window.addEventListener('keydown', move);
  
  function move(e){
    if (e.code == 'KeyW') {ball.style.bottom = '300px';}
    else if (e.code == 'KeyD') {ball.style.left = '900px';}
  }
  
  window.addEventListener('keyup', moveBack);
  
  function moveBack(e){
    if (e.code == 'KeyW') {ball.style.bottom = '0px';}
    else if (e.code == 'KeyD') {ball.style.left = '10px';}
  }
  
 
  function trafficLights () {
   amberLight.style.color = 'orange';
   amberLight.style.backgroundColor = 'orange';
   setTimeout(amberToGreen, 1000);
   setTimeout(maggieMove, 2000);
  }

    trafficButton.addEventListener('click', trafficLights);

  function amberToGreen () {
    amberLight.style.color = 'black';
    amberLight.style.backgroundColor = 'black';
    redLight.style.backgroundColor = 'black';
    redLight.style.color = 'black';
    greenLight.style.color = 'green';
    greenLight.style.backgroundColor = 'green';
  }

  function maggieMove () {
   maggie.style.left = '90%';
   setTimeout(maggieDisappear, 3000);
   setTimeout(resetButtAppear, 4000);
   setTimeout(textAppears, 3500)
  }
  
  function maggieDisappear () {
    maggie.style.display = 'none';
  }

  function resetButtAppear () {
    resetButton.style.display = 'block';
  }

  function textAppears () {
    Home.style.display = 'block';
  }
    
  function resetMaggie () {
    maggie.style.display = 'block';
    maggie.style.left = '15%';
    amberLight.style.color = 'black';
    amberLight.style.backgroundColor = 'black';
    redLight.style.backgroundColor = 'red';
    redLight.style.color = 'red';
    greenLight.style.color = 'black';
    greenLight.style.backgroundColor = 'black';
    Home.style.display = 'none';
  }

  resetButton.addEventListener('click', resetMaggie);