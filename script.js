//setting the map
var map = L.mapbox.map('map', 'lifewinning.gajkhin7', 
    {zoomControl: false
        // , minZoom:12, maxZoom:18
    })
    .setView([41.9112, -73.5612], 12);
var ui = document.getElementById('map-ui');

new L.Control.Zoom({ position: 'bottomright' }).addTo(map);

//markers
// var markerstyle = {
//     "marker-color": "#E18E54"
// };

// function popUp(f,l){
//     var out = [];
//     if (f.properties){
//         for(key in f.properties){
//             out.push(f.properties[key]);
//         }
//         l.bindPopup(out.join("<br />"));
//     }
// }


// markers = new L.geoJson.ajax("markers.geojson",  {onEachFeature: popUp, style: markerstyle});

//here are the sattellite layers
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-test'), 'a bog monster', '41.77297600540535,-73.52359771728514');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-13'), 'some weird green faces', '41.9544,-73.5130');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-03'), 'more trees','41.9270,-73.5359');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-04'), 'some thoughts from mr.fitz','41.8751,-73.5726');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-05'), 'i think that is a frog','41.9620,-73.5364');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-06'), 'lots of stick figures', '');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-07'), 'i think that is a horse');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-08'), 'what someone thought was here');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-09'), 'firsts');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-10'), 'places the police are');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-11'), 'rope swings and cemeteries');
addLayer(L.mapbox.tileLayer('lifewinning.webatuck-12'), 'imaginary slip and slide (apparently for rednecks)');
//addLayer(markers, 'narrative');


//this is the thing that controls all the layers, it's important
function addLayer(layer, name, position) {
    
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
            var loc = position.split(',');
            map.setView(loc, 14);
        

        }
    };

    item.appendChild(link);
    ui.appendChild(item);
    var layer_ids= document.getElementsByTagName('a');
   
}

var hash = new L.Hash(map);