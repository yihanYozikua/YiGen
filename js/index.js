$(function () {
  var $constellationelCanvas = $('canvas#banner-constellationel')

  // Init plugin
  $constellationelCanvas.constellation({
    star: {
      color: 'rgb(38, 105, 178)',
      width: 3.5,
      randomWidth: false
    },
    line: {
      color: 'rgb(58, 125, 198)',
    },
    velocity: 0.5,
    width: $constellationelCanvas.width(),
    height: $constellationelCanvas.height(),
    length: $constellationelCanvas.width() / 30,
    radius: $constellationelCanvas.width(),
    distance: $constellationelCanvas.width() / 6.5,
    initStars: [
      { x: 43, y: 45 },
      { x: 34, y: 141 },
      { x: 14, y: 271 },
      { x: 213, y: 49 },
      { x: 204, y: 144 },
      { x: 82, y: 232 },
      { x: 162, y: 209 },
      { x: 226, y: 295 },
      { x: 234, y: 310 },
      { x: 452, y: 113 },
      { x: 457, y: 120 },
      { x: 484, y: 203 },
      { x: 451, y: 247 },
      { x: 574, y: 270 },
      { x: 524, y: 359 },
      { x: 670, y: 31 },
      { x: 683, y: 132 },
      { x: 626, y: 402 },
      { x: 759, y: 227 },
      { x: 728, y: 346 },
      { x: 781, y: 103 },
      { x: 880, y: 54 },
      { x: 823, y: 317 },
      { x: 844, y: 426 },
      { x: 932, y: 186 },
      { x: 991, y: 90 },
      { x: 1068, y: 207 },
      { x: 1020, y: 245 },
      { x: 1048, y: 335 },
      { x: 1066, y: 335 },
      { x: 1261, y: 146 },
      { x: 1229, y: 302 },
      { x: 1302, y: 155 },
      { x: 1293, y: 305 },
      { x: 1366, y: 239 },
      { x: 1315, y: 407 },
      { x: 1440, y: 220 },
      { x: 1458, y: 157 },
      { x: 1461, y: 302 },
      { x: 1464, y: 408 },
    ]
    // rad
  });

})

function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.674, lng: -73.945 },
      zoom: 12,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ecdcc3"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "gamma": 0.01
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "saturation": -31
                    },
                    {
                        "lightness": -33
                    },
                    {
                        "weight": 2
                    },
                    {
                        "gamma": 0.8
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#776340"
                    },
                    {
                        "invert_lightness": true
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#776340"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 30
                    },
                    {
                        "saturation": 30
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#e5d8c3"
                    },
                    {
                        "lightness": "-6"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "saturation": 20
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 20
                    },
                    {
                        "saturation": -20
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "weight": "1"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 10
                    },
                    {
                        "saturation": -30
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#8f8470"
                    },
                    {
                        "lightness": "0"
                    },
                    {
                        "weight": "1"
                    },
                    {
                        "invert_lightness": true
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "saturation": 25
                    },
                    {
                        "lightness": 25
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "2.00"
                    },
                    {
                        "invert_lightness": true
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "2"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "invert_lightness": true
                    },
                    {
                        "lightness": "37"
                    }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.station.bus",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.station.rail",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit.station.rail",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#b0b0b0"
                    }
                ]
            },
            {
                "featureType": "transit.station.rail",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.station.rail",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": -20
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": "28"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
    //   styles: [
    //       { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    //       { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    //       { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    //       {
    //           featureType: 'administrative.locality',
    //           elementType: 'labels.text.fill',
    //           stylers: [{ color: '#d59563' }]
    //       },
    //       {
    //           featureType: 'poi',
    //           elementType: 'labels.text.fill',
    //           stylers: [{ color: '#d59563' }]
    //       },
    //       {
    //           featureType: 'poi.park',
    //           elementType: 'geometry',
    //           stylers: [{ color: '#263c3f' }]
    //       },
    //       {
    //           featureType: 'poi.park',
    //           elementType: 'labels.text.fill',
    //           stylers: [{ color: '#6b9a76' }]
    //       },
    //       {
    //           featureType: 'road',
    //           elementType: 'geometry',
    //           stylers: [{ color: '#38414e' }]
    //       },
    //       {
    //           featureType: 'road',
    //           elementType: 'geometry.stroke',
    //           stylers: [{ color: '#212a37' }]
    //       },
    //       {
    //           featureType: 'road',
    //           elementType: 'labels.text.fill',
    //           stylers: [{ color: '#9ca5b3' }]
    //       },
    //       {
    //           featureType: 'road.highway',
    //           elementType: 'geometry',
    //           stylers: [{ color: '#746855' }]
    //       },
    //       {
    //           featureType: 'road.highway',
    //           elementType: 'geometry.stroke',
    //           stylers: [{ color: '#1f2835' }]
    //       },
    //       {
    //           featureType: 'road.highway',
    //           elementType: 'labels.text.fill',
    //           stylers: [{ color: '#f3d19c' }]
    //       },
    //       {
    //           featureType: 'transit',
    //           elementType: 'geometry',
    //           stylers: [{ color: '#2f3948' }]
    //       },
    //       {
    //           featureType: 'transit.station',
    //           elementType: 'labels.text.fill',
    //           stylers: [{ color: '#d59563' }]
    //       },
    //       {
    //           featureType: 'water',
    //           elementType: 'geometry',
    //           stylers: [{ color: '#17263c' }]
    //       },
    //       {
    //           featureType: 'water',
    //           elementType: 'labels.text.fill',
    //           stylers: [{ color: '#515c6d' }]
    //       },
    //       {
    //           featureType: 'water',
    //           elementType: 'labels.text.stroke',
    //           stylers: [{ color: '#17263c' }]
    //       }
    //   ]
  });
}