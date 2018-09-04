//map-footer//

var mymap = L.map('my_osm_widget_map', { /* use the same name as your <div id=""> */
  center: [48.887284, 2.510894], /* set GPS Coordinates */
  zoom: 17, /* define the zoom level */
  zoomControl:true, /* false = no zoom control buttons displayed */
  scrollWheelZoom: true/* false = scrolling zoom on the map is locked */
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hhZGQiLCJhIjoiY2poNmhmeG81MWExaDJ3bWp4enI5dGtuZSJ9._jQSVPAZCTQJmHGkmA1p-w', { /* set your personal MapBox Access Token */
  maxZoom: 20, /* zoom limit of the map */
 
    id: 'mapbox.streets' /* mapbox.light / dark / streets / outdoors / satellite */
}).addTo(mymap);

L.marker([48.887284, 2.510894]).addTo(mymap); 

//effet navbars//

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("nav-bars").style.top = "0";
//   } else {
//     document.getElementById("nav-bars").style.top = "-170px";
//   }
//   prevScrollpos = currentScrollPos;
// }

//carousel photo//

var myIndex = 0;
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); 
  
}
carousel();




