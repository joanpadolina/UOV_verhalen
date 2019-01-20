// Ster met popuanimatie

var ster = document.querySelector('.bookmark');
var popup = document.querySelector('.steranimatie');
var spanophaal = document.querySelector('span');

function toggleClass() {
  ster.classList.toggle('bookmark-color');
  popup.classList.toggle('sterappear');
  spanophaal.classList.toggle('spananimate');
}

ster.addEventListener('click', toggleClass);


// Zoekicoon vergroot

var hidezoek = document.querySelector('.zoekbalkboven');
var search = document.querySelector('.searchl');


function searchreveal() {
  hidezoek.classList.toggle('show-zoekbalk');
}
search.addEventListener('click', searchreveal);


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
//comment verschijnt wanneer er gedrukt

//
//chat gif aankijkt
var commentgif = document.querySelector('.chatgif');
var chatknop = document.querySelector('.chat');
var chatcontainer = document.querySelector('.containchatfave');
var reviewtext = document.querySelector('.commentverschijn');
function chatgifappear() {
    commentgif.classList.toggle('show-comment-gif');
    chatcontainer.classList.toggle('show-reviewcontent', 'show-comment');
    chatknop.style.display = 'none';
    reviewtext.style.display = 'block';

}
function chatdelete(){
    commentgif.classList.remove('show-comment-gif');
    chatcontainer.classList.remove('show-reviewcontent');
    chatknop.style.display ='block';
    reviewtext.style.display = 'none';
}

chatknop.addEventListener('click', chatgifappear);
commentgif.addEventListener('click', chatdelete);
