

// Ster met popuanimatie

var ster = document.querySelector('.bookmark');
var popup= document.querySelector('.steranimatie');

function toggleClass() {
    ster.classList.toggle('bookmark-color');
    popup.classList.toggle('sterappear');
}

ster.addEventListener('click', toggleClass);


// Zoekicoon vergroot

var hidezoek = document.querySelector('.zoekbalkboven');
var search = document.querySelector('.searchl');

search.onclick = function() {
  search.classList.toggle('search-move');
  hidezoek.classList.toggle('show-zoekbalk');
}

// Filter verschijnt mobile version

var filterAnim = document.querySelector('.filter');
var filterKnop = document.querySelector('.filterknop');
var toonFilt = document.querySelector('#zoek');


filterKnop.onclick = function() {
  filterAnim.classList.toggle('filter-show');
}

toonFilt.onclick = function() {
  filterAnim.classList.toggle('filter-unshow');
}