
var ster = document.querySelector('.bookmark');
function toggleClass() {
    ster.classList.toggle('bookmark-color');
}

ster.addEventListener('click', toggleClass);



var hidezoek = document.querySelector('.zoekbalkboven');
var search = document.querySelector('.searchl');

search.onclick = function() {
  search.classList.toggle('search-move');
  hidezoek.classList.toggle('show-zoekbalk');
}

var filterAnim = document.querySelector('.filter');
var filterKnop = document.querySelector('.filterknop');
var toonFilt = document.querySelector('#zoek');


filterKnop.onclick = function() {
  filterAnim.classList.toggle('filter-show');
}

toonFilt.onclick = function() {
  filterAnim.classList.toggle('filter-unshow');
}

function changeImage()
{
element=document.getElementById('sterID')
if (element.src.match("out"))
  {
  element.src="./assets/gif/ster.gif";
  }
else
  {
  }
}
var sterklik = document.getElementById('sterID');
sterklik.addEventListener('click', changeImage);
