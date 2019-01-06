animusjs.init();

function active(element, options) {
  if(options.status === 'animate') {
    element.classList.add('active');
  }
  if(options.status === 'reverse') {
    element.classList.remove('active');
  }
}
console.log("oo");
