
//ICONBAR
window.onscroll = function() {myFunction()};
var iconBar = document.getElementById("landing-icon-bar");
var typeLogo = document.getElementById("typelogo");
function myFunction() {
  if (window.pageYOffset >= iconBar.clientHeight + typeLogo.scrollHeight + 25) {
    iconBar.classList.add("sticky")
  } else {
    iconBar.classList.remove("sticky");
  }
}



//NEXTPAGE
var landing = document.getElementById("landing") 
function nextPage() {
  document.body.scrollTop = landing.clientHeight;
  document.documentElement.scrollTop = landing.clientHeight;
}



function dropUp() {
  document.getElementById("mydropup").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropup')) {
    var dropdowns = document.getElementsByClassName("dropup-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}