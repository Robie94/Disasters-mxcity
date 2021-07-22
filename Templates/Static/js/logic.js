/// Create the createMap function
var myMap = L.map("map", {
  center: [19.378389743260904, -99.1405631170717],
  zoom: 10
});

myMap.invalidateSize();
  // Create the tile layer that will be the background of our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 20,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Get the modal


// // Get the button that opens the modal
// var btn = d3.select("#modal1");

// // Get the <span> element that closes the modal
// //var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }


d3.selectAll("#modal1").on("click", modalstyle);

function modalstyle(){
  var modal = d3.selectAll("#About")
  modal.style.display = "block";
}

d3.selectAll("#close").on("click", btnclose);

function btnclose(){
  var modal = d3.selectAll("#About")
  modal.style.display = "none";
}