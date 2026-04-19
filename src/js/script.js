mapboxgl.accessToken =
  "";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.5, 40],
  zoom: 9,
});

let Positions = [
  [-77.0365, 38.897],
  [-21.9270884, 64.1436456],
  [-74.006, 40.7128],
  [27.4371, -14.11888],
];

Positions.forEach((Position) => {
  let Marker_1_Pos = new mapboxgl.LngLat(Position[0], Position[1]);
  new mapboxgl.Marker().setLngLat(Marker_1_Pos).addTo(map);
});
