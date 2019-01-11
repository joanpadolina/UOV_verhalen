animusjs.init();

function active(element, options) {
  if (options.status === 'animate') {
    element.classList.add('active');
  }
  if (options.status === 'reverse') {
    element.classList.remove('active');
  }
}
console.log("oo");

var herhaalscroll = document.querySelector('.infinitescroll');
// var nextItem = "text";
// var loadMore = function() {
//   for (var i = 0; i < 20; i++) {
//     var hallo = document.createTextNode('EYOOOOO ');
//     var item;
//     item = document.createElement('div');
//
//     item.innerText = 'TEST DEZE SHIT ';
//     item.appendChild(hallo);
//     document.body.appendChild(item);
//   }
// }

// scroll detection

// herhaalscroll.addEventListener('scroll',
//   function() {
//     if (herhaalscroll.scrollTop + herhaalscroll.clientHeight >= herhaalscroll.scrollHeight) {
//       loadMore()
//     }
//   });
//
// loadMore();
// function() {
//   var addInfinite = function() {
//     var text = document.createTextNode('Voor altijdddd');
//     var newDoc;
//     newDoc = document.createElement('div');
//     newDoc.appendChild('txt');
//     document.body.appendChild('newDoc');
//   };
// })();


(function() {

	var addElements = function() {

		var txt = document.createTextNode('I am lazy and late to the party.');
		var el;

		el = document.createElement('div');
		el.appendChild(txt);
		document.body.appendChild(el);

		// If we want newly injected elements to be watched, refresh ScrollWatch. It will re-query the dom and start watching new elements.
		swInstance.refresh();

	};

	var swInstance = new ScrollWatch({
		watch: 'div',
		infiniteScroll: true,
		infiniteOffset: 200,
		onInfiniteYInView: addElements
	});

})();
