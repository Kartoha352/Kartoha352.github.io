let btn = document.querySelector(".btn")

function position(){
    navigator.geolocation.getCurrentPosition(function(pos){
    coords = pos.coords

    let latitude = pos.coords.latitude
    let longitude = pos.coords.longitude

    let path = 'https://www.openstreetmap.org/#map=18/' +latitude + '/' + longitude
    let map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([longitude, latitude]),
          zoom: 20
        })
      });
    btn.style.visibility = "hidden"
})}
