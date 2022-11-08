contactButton = document.querySelector("#contact button");

contactButton.addEventListener("click", function contactClickhandler(el) {
  alert("Not implemented");
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