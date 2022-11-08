contactButton = document.querySelector("#contact button");

contactButton.addEventListener("click", function contactClickhandler(el) {
  alert("ha ha ha sorry mate, i don't speak the uman's language ");
});


var divs = document.getElementsByClassName('toggle-living');

function living_f(id) {
    for (var i = 0; i < divs.length; i++) {
      var div = divs[i];
      if (div.id == id)
        div.style.display = 'block';
      else
        div.style.display = 'none';
    }
}

const colors = ["red", "green", "blue","black", "yellow"];
changeColorButton = document.querySelector("#changeColor button");

changeColorButton.addEventListener("click", function changeBackground(){
  let maxColor = 4
  let randomNum = Math.random() * maxColor; 
  randomNum = Math.floor(randomNum);
  document.body.style.background = colors[randomNum];

  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  let randColor = randomNumber.toString(16);
  document.body.style.color = randColor;
});
