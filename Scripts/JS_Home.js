
//console.log('this is a test')

//alert('this is a test')


let myImageTarget = document.getElementById("myPic")
let myInfo = document.querySelector(".info-box")



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














