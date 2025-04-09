//document.querySelector("section.projheader").innerHTML = 'JAVASCRIPT IS WORKING NOW!!!';

/*
let element = document.querySelector("div.logoTest");

function turnLogoRed(){
element.style.backgroundColor = 'red';
element.style.color = 'white';
element.innerHTML = 'Red Logo';
}

//Then apply 'onclick' property to the variable we want to target by assigning the function to it.

element.onclick = turnLogoRed;
*/

let TargetClick = document.querySelector("button.logo-button")
let elementToChange = document.querySelector("div.logoTest");
let colourString = document.querySelector("div.colourString");
let fontString = document.querySelector("div.fontString");

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

// switch case for alternate fonts
/*
function newStyle (){
    //let newColor = '';
    let newFont = '';
    let x = Math.floor(Math.random()*7); 

    switch (x){
      case 0:
        //newColor = 'red';
        newFont = 'Times New Roman'; 
        break;
      case 1: 
        //newColor = 'blue';
        newFont = 'Florence, cursive'; 
        break;
      case 2:
        //newColor = 'yellow';
        newFont = 'Verdana';
        break; 
      case 3:
        //newColor= 'purple';
        newFont = 'Courier New';
        break
      case 4:
       // newColor = 'cyan';
        newFont = 'Georgia'; 
        break;
      case 5:
          //newColor = 'maroon';
          newFont = 'Palatino';
          break;
      case 6: 
          //newColor = 'lime';
          newFont = 'Impact';
          break;
    }

    //elementToChange.style.backgroundColor = newColor;
    elementToChange.style.fontFamily = newFont; 
}
    
TargetClick.addEventListener('click', newStyle);
*/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }; 
}