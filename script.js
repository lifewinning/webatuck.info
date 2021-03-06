//setting the map
var map = L.mapbox.map('map', 'lifewinning.gajkhin7', 
    {zoomControl: false})
    .setView([41.9112, -73.5612], 12);
var ui = document.getElementById('map-ui');

new L.Control.Zoom({ position: 'bottomright' }).addTo(map);


// function popUp(f,l){
//     var out = [];
//     if (f.properties){
//         for(key in f.properties){
//             out.push(f.properties[key]);
//         }
//         l.bindPopup(out.join("<br />"));
//     }
// }


// markers = new L.geoJson.ajax("markers.geojson",  {onEachFeature: popUp});

//here are the sattellite layers
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-test'), 'a bog monster');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-13'), 'some weird green faces');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-03'), 'more trees','41.9270,-73.5359');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-04'), 'some thoughts from mr.fitz');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-05'), 'i think that is a frog');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-06'), 'lots of stick figures');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-07'), 'i think that is a horse');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-08'), 'what someone thought was here');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-09'), 'firsts');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-10'), 'places the police are');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-11'), 'rope swings and cemeteries');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-12'), 'imaginary slip and slide (apparently for rednecks');
//addLayer(markers, 'some narrative');


//this is the thing that controls all the layers, it's important
function addLayer(layer, name) {
    
    layer
        .addTo(map);
    
    //generating a key of layers so viewer can select to add and remove at will
    var item = document.createElement('li');
    var link = document.createElement('a');

    link.href = '#';
    link.innerHTML = name;

    link.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
            this.className = ''
        } else {
            map.addLayer(layer);
            this.className = 'active';
        }
    };

    item.appendChild(link);
    ui.appendChild(item);
    var layer_ids= document.getElementsByTagName('a');
   
}

var hash = new L.Hash(map);