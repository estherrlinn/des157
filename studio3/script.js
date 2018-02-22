document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // variable mymap, add coordinates (long/lat) and zoom amount
    var mymap = L.map('mapid').setView([38.5395, -121.7231], 14);

    // map box streets tile layer
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic21nYW56ZXIiLCJhIjoiY2l6ZWk1ZjZxMjU3MDMzcXBvemZsdmJnbyJ9.6m8Vaso24T-LH_i6Oi-y2w', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'your.mapbox.project.id',
        accessToken: 'your.mapbox.public.access.token'
    }).addTo(mymap);

    //marker
    var marker = L.marker([38.5395, -121.7231]).addTo(mymap);

    // use openOn instead of addTo because it handles automatic closing of a previously opened popup when opening a new one which is good for usability
    var popup = L.popup()
        .setLatLng([38.5430, -121.7230])
        .setContent("Here is your current location.</br>Click on a profile to see where they are!")
        .openOn(mymap);

    // tag pop up on click
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }

    mymap.on('click', onMapClick);

    var profile1 = L.icon({
        iconUrl: 'profile1.png',

        iconSize: [60, 60], // icon size
        iconAnchor: [20, 17], // point of the icon which will correspond to marker's location
        popupAnchor: [9, -20] // point from which the popup should open relative to the iconAnchor
    });

    var profile2 = L.icon({
        iconUrl: 'profile2.png',

        iconSize: [60, 60],
        iconAnchor: [20, 17],
        popupAnchor: [9, -20]
    });

    var profile3 = L.icon({
        iconUrl: 'profile3.png',

        iconSize: [60, 60],
        iconAnchor: [20, 17],
        popupAnchor: [9, -20]
    });

    var profile4 = L.icon({
        iconUrl: 'profile4.png',

        iconSize: [60, 60],
        iconAnchor: [20, 17],
        popupAnchor: [9, -20]
    });

    var profile5 = L.icon({
        iconUrl: 'profile5.png',

        iconSize: [60, 60],
        iconAnchor: [20, 17],
        popupAnchor: [9, -20]
    });


    L.marker([38.5433, -121.7542], {
        icon: profile1
    }).addTo(mymap).bindPopup("Tanya Morgan @tanyadesign <br> Location: Cruess Hall");

    L.marker([38.539722, -121.749167], {
        icon: profile2
    }).addTo(mymap).bindPopup("Esther Lin @essalynn_ <br> Location: Shields Library");

    L.marker([38.5446, -121.7393], {
        icon: profile3
    }).addTo(mymap).bindPopup("Bob Russ @bobtheartist <br> Location: Copyland");

    L.marker([38.5414, -121.7163], {
        icon: profile4
    }).addTo(mymap).bindPopup("Anika Fulla @anikaart <br> Location: Marguerite Montgomery Elementary School");

    L.marker([38.5600, -121.7153], {
        icon: profile5
    }).addTo(mymap).bindPopup("Dave Rogers @daverogers <br> Location: Slide Hill Park");


});
