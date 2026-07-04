// console.log("map.js is loaded");

// // ✅ Only select map once
// const mapDiv = document.getElementById("map");
// if (mapDiv) {
//   const userLocation = mapDiv.dataset.location; // renamed from `location` to avoid conflict

//   async function getCoords(locationText) {
//     const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${locationText}`);
//     const data = await response.json();
//     if (data.length === 0) {
//       console.error("No coordinates found");
//       return [28.6139, 77.2090]; // fallback: Delhi
//     }
//     return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
//   }

//   getCoords(userLocation).then((coords) => {
//     const map = L.map('map').setView(coords, 13);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 19,
//     }).addTo(map);

//     L.marker(coords).addTo(map).bindPopup(userLocation).openPopup();
//   });
// }

  mapboxgl.accessToken=mapToken;
  const map=new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v12",
    center:listing.geometry.coordinates,
    zoom:9,
  });

  const marker=new mapboxgl.Marker({color:"red"})
  .setLingLat(listing.geometry.coordinates)
  .setPopup(

  new mapboxgl.Popup({offset:25}).setHTML(
    `<h4>${listing.location}</h4><p>Exact Location Provided after booking</p>`
  )
)
.addTo(map);