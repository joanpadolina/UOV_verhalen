var ster = document.querySelector('.bookmark');

// ster.onclick = function() {
//   ster.classList.toggle('bookmark-color');
//
// };

function toggleClass( element ) {
    ster.classList.toggle('bookmark-color');
}

ster.addEventListener('click', toggleClass);



var hidezoek = document.querySelector('.zoekbalkboven');
var search = document.querySelector('.searchl');

search.onclick = function() {
  search.classList.toggle('search-move');
  hidezoek.classList.toggle('show-zoekbalk');
};

var filterAnim = document.querySelector('.filter');
var filterKnop = document.querySelector('.filterknop');
var toonFilt = document.querySelector('#zoek');


filterKnop.onclick = function() {
  filterAnim.classList.toggle('filter-show');
};

toonFilt.onclick = function(){
  filterAnim.classList.toggle('filter-unshow');
};
