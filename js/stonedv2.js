console.log('Joan');


// verhalen website

var stoney = document.querySelector('.pngstoned');
var verhaalp = document.querySelector('.paralaxcontainer');
var img2 = document.querySelector('.pngstoned2');
var img3 = document.querySelector('.pngstoned3');

stoney.addEventListener('click', function(){
  verhaalp.classList.toggle('showp');
  stoney.classList.toggle('shovepng');
  img2.classList.toggle('byebyepng1');
  img3.classList.toggle('byebyepng2');

});
