// map functions

/*
function  is invoked every time the tab button presented to the user as "Location" is clicked.
function contains the information the generate and center a google map at the location of
the university of Washington, Tacoma
*/
function init() {
  var map = new google.maps.LatLng(47.2554865, -122.47653350000002);

  var mapOptions = { // Set up the map options
    center: map,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 16
  };
  var venueMap; // Map() draws a map
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

  var startPosition = new google.maps.Marker({ // Create a new marker
    position: map, // Set its position
    map: venueMap, // Specify the map
  });
}

/*
function is invoked every time the tab button presented to the user as "Location" is clicked.
function contains the begining information to pull information from a javscript file, and invokes the
function "init" which displays a google map centered at the corrdiantes for the university of Washington, Tacoma
*/
function loadScript() {
  var script = document.createElement('script'); // Create <script> element
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script); // Add element to page
}




/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
// alignment functions



/*
function if invoked on load and whenever the window is resized
*/
window.onload = align;
window.onresize = align;

function align() {


  //calculates height percentage of logo and navbar and adds them together to set the logocontainer height
  var logoheight = 100 / (window.innerHeight / document.getElementById('logoimg').clientHeight);
  var buttonheight = 100 / (window.innerHeight / document.getElementById('navbar').clientHeight);
  document.getElementById('logocontainer').style.height = (logoheight + buttonheight) + '%';

  //finds height of logocontainer and navbar and makes half the navbar extend beyond the logocontainer
  var containerheight = document.getElementById('logocontainer').clientHeight;
  var navbarheight = document.getElementById('navbar').clientHeight;
  document.getElementById('navbar').style.top = (containerheight - (navbarheight / 2)) + 'px';
}

var handler = window.onresize;
//handler();
//or
handler.apply(window, [' On']);
