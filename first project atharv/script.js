let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu-icon.onclick  = function(){
    bx.classList.toggle('bx-x');
    navlist.classList.toggle('open');

}
const sr = scrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
sr.revel('.hero-text',{delay:200, origin:'top'});
sr.revel('.hero-img',{delay:450, origin:'top'});
sr.revel('.icons',{delay:500, origin:'left'});
sr.revel('.scroll-down',{delay:500, origin:'right'});



// function toggleDiv() {
//   var div = document.getElementById("navlist");
//   if (div.style.display === "none") {
//     div.style.display = "block";
//   } else {
//     div.style.display = "none";
//   }
// }
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
});
