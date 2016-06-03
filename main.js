function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: {
			lat: -33.888304,
			lng: 151.193576
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var layer = new google.maps.FusionTablesLayer({
		map: map,
		heatmap: {
			enabled: false
		},
		query: {
			select: "col2",
			from: "16m_DzRAkWdrNwY4LodqXM3GjcXdwSY8Z-3TUeyRV",
			where: ""
		},
		options: {
			styleId: 2,
			templateId: 2
		}
	});


	setMarkers(map);

}

function setMarkers(map) {
	// Adds markers to the map.

	// Marker sizes are expressed as a Size of X,Y where the origin of the image
	// (0,0) is located in the top left of the image.

	// Origins, anchor positions and coordinates of the marker increase in the X
	// direction to the right and in the Y direction down.
	var image = {
		url: './img/camera.png',
		// This marker is 20 pixels wide by 32 pixels high.
		size: new google.maps.Size(15, 17),
		// The origin for this image is (0, 0).
		origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at (0, 32).
		anchor: new google.maps.Point(9, 9)
	};
	// Shapes define the clickable region of the icon. The type defines an HTML
	// <area> element 'poly' which traces out a polygon as a series of X,Y points.
	// The final coordinate closes the poly by connecting to the first coordinate.
	var shape = {
		coords: [1, 1, 1, 15, 14, 15, 15, 1],
		type: 'poly'
	};
	for (var i = 0; i < cameras.length; i++) {
		var beach = cameras[i];
		var marker = new google.maps.Marker({
			position: {
				lat: beach[1],
				lng: beach[2]
			},
			map: map,
			icon: image,
			shape: shape,
			title: beach[0],
			zIndex: beach[3]
		});
	}
}
