
let TargetClick = document.querySelector("button.logo-button")
let elementToChange = document.querySelector("div.logoTest");
let colourString = document.querySelector("div.colourString");
let fontString = document.querySelector("div.fontString");
let myImageTarget = document.querySelector("img")
let myInfo = document.querySelector(".info-box")

//FUNCTION FOR ABOUT PAGE - REVEAL INFO BOX
//(display style - currently set to none, hence it is hidden)

function showInfo () {
  document.querySelector(".info-box").style.display = 'block';
  document.querySelector(".vl").style.display = 'block';
}

//Once the function has been defined, apply the click event listener to the element 
//(the function has two parameters: the event listener and the function name to be applied)

myImageTarget.addEventListener('click', showInfo);




// FUNCTION TO HIDE THE INFO BOX AGAIN

function hideInfo (){
  document.querySelector(".info-box").style.display = 'none';
  document.querySelector(".vl").style.display = 'none';
}

myInfo.addEventListener('click', hideInfo);




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



// NAVBAR FUNCTION FOR HAMBURGER ICON VIEW


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }; 
}



// BALL GAME FUNCTION

document.querySelector(".float-ball").style.display = 'none';

//document.getElementById('ball').style.backgroundColor = 'red';

let ball = document.getElementById("ball");

// Write your code below
function up(){
  ball.style.bottom = '400px';
}

function down(){
  ball.style.bottom = '0px';
}

function bounce(){
  ball.style.bottom = '70px';
  ball.style.bottom = '50px';
  ball.style.bottom = '58px';
  ball.style.bottom = '50px';
}

document.addEventListener('keydown', up);
document.addEventListener('keyup', down);
//document.addEventListener('keydown', bounce);