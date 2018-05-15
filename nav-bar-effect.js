var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bars").style.top = "0";
  } else {
    document.getElementById("nav-bars").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}