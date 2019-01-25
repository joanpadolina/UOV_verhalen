// Ster met popuanimatie

var ster = document.querySelector('.bookmark');
var popup = document.querySelector('.steranimatie');
var spanophaal = document.querySelector('.eentje');

ster.addEventListener('click', function(){
  ster.classList.toggle('bookmark-color');
  popup.classList.toggle('sterappear');
  spanophaal.classList.toggle('spananimate');
  spanophaal.style.display = 'block';
  window.setTimeout(function(){
  spanophaal.style.display = 'none';}, 3000);
});

// Zoekicoon vergroot

var hidezoek = document.querySelector('.zoekbalkboven');
var search = document.querySelector('.searchl');


search.addEventListener('click', function(){
  hidezoek.classList.toggle('show-zoekbalk');
});


// Filter verschijnt mobile version

var filterAnim = document.querySelector('.filter');
var filterKnop = document.querySelector('.filterknop');
var toonFilt = document.querySelector('#zoek');

filterKnop.addEventListener('click', function(){
  filterAnim.classList.toggle('filter-show');
});

toonFilt.addEventListener('click', function(){
  filterAnim.classList.toggle('filter-unshow');
});

//comment verschijnt wanneer er gedrukt

//
//chat gif aankijkt
var commentgif = document.querySelector('.chatgif');
var chatknop = document.querySelector('.chat');
var chatcontainer = document.querySelector('.containchatfave');
var reviewtext = document.querySelector('.commentverschijn');

chatknop.addEventListener('click', function() {
    commentgif.classList.toggle('show-comment-gif');
    chatcontainer.classList.toggle('show-reviewcontent', 'show-comment');
    chatknop.style.display = 'none';
    reviewtext.style.display = 'block';

});
commentgif.addEventListener('click', function(){
    commentgif.classList.remove('show-comment-gif');
    chatcontainer.classList.remove('show-reviewcontent');
    chatknop.style.display ='block';
    reviewtext.style.display = 'none';
});


//animation humor klik blubble verdwijn

var humorknop = document.querySelector('.humorpng');
var humorweg = document.querySelector('.humorklikgif');

humorknop.addEventListener('click', function(){
  humorweg.style.display = 'block';
  humorknop.style.opacity = '0';
  window.setInterval(function(){
  humorweg.style.display = 'none';}, 500);
});





// // Account meer laten zien
// var loginboxgroter = document.querySelector('.accountbox');
// var nieuwknop = document.querySelector('.buttonnieuw');
//  nieuwknop.addEventListener('click', function(){
//    loginboxgroter.classList.toggle('appear-herhaalpw');
//  });
