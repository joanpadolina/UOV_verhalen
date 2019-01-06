var filtershow =
document.querySelector("#zoek");

var header =
document.querySelector("body > form");

filtershow.addEventListener("click", function(){
  header.classList.toggle("showfil");

});
