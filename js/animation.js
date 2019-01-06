var ster = document.querySelector('.bookmark');

ster.onclick=function(){
    ster.classList.toggle('bookmark-color');

};

var hidezoek = document.querySelector('.zoekbalkboven');
var search = document.querySelector('.searchl');

search.onclick=function(){
    search.classList.toggle('search-move');
    hidezoek.classList.toggle('show-zoekbalk');
    }
