maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
  container: 'map',
  style: maptilersdk.MapStyle.STREETS,
  center: [0, 0],
  zoom: 18,
});

const gc = new maptilersdkMaptilerGeocoder.GeocodingControl({
  limit: 1,
});
map.addControl(gc, 'top-left');

gc.setQuery(defaultLocation);

