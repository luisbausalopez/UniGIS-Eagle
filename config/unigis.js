var icmconfig = {
  "crs": L.CRS.EPSG3857,
  "center": {
        lat: 52.752087, //Approx HHNK
        lng: 4.896941,
        zoom: 5
  },
  "beelden":[
	{ beeld: 'situation', title: 'Current situation', timestamp: 0, beeldonderdeel: 
	  [ {id:'summary', title: 'Summary', isedit: false, zeker: true}
	  ]}    
	,{ beeld: 'report', title: 'Reports', timestamp: 0, beeldonderdeel: 
	  [ {title:'Timeline',id:'timeline', isedit: false, zeker: true},
		{title:'Notifications',id:'notifications' , isedit: false, zeker: true},
		{title: 'Urgent', id:'urgent', isedit: false, zeker: true},
		{title: 'Local situation',id: 'place', isedit: false, zeker: true} ,
		{title: 'Actions/Measures',id:'measures' , isedit: false, zeker: true}
	]}
	,{ beeld: 'operation', title: 'Operational team', timestamp: 0, beeldonderdeel: 
	  [ {title:'Timeline',id:'timeline', isedit: false, zeker: true},
		{title:'Notifications',id:'notifications', isedit: false, zeker: true},
		{title:'Remarks',id:'remarks', isedit: false, zeker: true},
		{title:'Decisions',id:'decisions', isedit: false, zeker: true},
		{title:'Bottlenecks',id:'bottlenecks', isedit: false, zeker: true},
		{title:'Actions/Measures',id:'measures', isedit: false, zeker: true},
		{title:'Safety staff',id:'safety', isedit: false, zeker: true},
		{title:'Prognose (forecast)',id:'prognose', isedit: false, zeker: true}
	]}
	,{ beeld: 'tactic', title: 'Tactical Team', timestamp: 0, beeldonderdeel:
	  [ {title:'Timeline',id:'timeline', isedit: false, zeker: true},
		{title:'Notifications',id:'notifications', isedit: false, zeker: true},
		{title:'Remarks',id:'remarks', isedit: false, zeker: true},
		{title:'Decisions',id:'decisions', isedit: false, zeker: true},
		{title:'Bottlenecks',id:'bottlenecks', isedit: false, zeker: true},
		{title:'Actions/Measures',id:'measures', isedit: false, zeker: true},          
		{title:'Prognose (forecast)',id:'prognose', isedit: false, zeker: true}
	]}        
	,{ beeld: 'strategic', title: 'Strategical team', timestamp: 0, beeldonderdeel: 
	  [ {title:'Timeline',id:'timeline', isedit: false, zeker: true},
		{title:'Notifications',id:'notifications', isedit: false, zeker: true},
		{title:'Remarks',id:'remarks', isedit: false, zeker: true},
		{title:'Decisions',id:'decisions', isedit: false, zeker: true},
		{title:'Bottlenecks',id:'bottlenecks', isedit: false, zeker: true},
		{title:'Actions/Measures',id:'measures', isedit: false, zeker: true},          
		{title:'Prognose (forecast)',id:'prognose', isedit: false, zeker: true}
	]}
	,{ beeld: 'scenarios', title: 'Scenarios', timestamp: 0, beeldonderdeel: 
	  [ {title:'High probability',id:'high', isedit: false, zeker: true},
		{title:'Medium probability',id:'medium', isedit: false, zeker: true},
		{title:'Low probability',id:'low', isedit: false, zeker: true}
	]}
	,{ beeld: 'communicatie', title: 'Communication', timestamp: 0, beeldonderdeel: 
	  [ {title:'Main messages',id:'main', isedit: false, zeker: true},
		{title:'Context and environment',id:'environment', isedit: false, zeker: true}
	]}
   ],
   drawstyles:{
      linestyles:  [
        {stroke: '#000'},
        {stroke: '#f57900'},
        {stroke: '#204a87'},
        {stroke: '#cc0000'},
        {stroke: '#5c3566'},
        {stroke: '#4e9a06'}],
      polygonstyles: [
        {stroke: '#000'   ,fill: '#000'  },
        {stroke: '#f57900',fill: '#f57900'},
        {stroke: '#204a87',fill: '#204a87'},
        {stroke: '#cc0000',fill: '#cc0000'},
        {stroke: '#5c3566',fill: '#5c3566'},
        {stroke: '#4e9a06',fill: '#4e9a06'}],
      icontypes:[
         {"cat":"none", "text":"ZW", "url":"mapicons/direction_downleft.png"}
        ,{"cat":"none", "text":"Z","url":"mapicons/direction_down.png"}
        ,{"cat":"none", "text":"ZO","url":"mapicons/direction_downright.png"}
        ,{"cat":"none", "text":"O","url":"mapicons/direction_left.png"}
        ,{"cat":"none", "text":"W","url":"mapicons/direction_right.png"}
        ,{"cat":"none", "text":"NW","url":"mapicons/direction_upleft.png"}
        ,{"cat":"none", "text":"N","url":"mapicons/direction_up.png"}
        ,{"cat":"none", "text":"NO","url":"mapicons/direction_upright.png"}
        ,{"cat":"none", "text":"Afgesloten","url":"mapicons/accesdenied.png"}
        ,{"cat":"none", "text":"Let op!","url":"mapicons/caution.png"}
        ,{"cat":"none", "text":"Groepsvervoer","url":"mapicons/bus.png"}
        ,{"cat":"none", "text":"Parkeerplaats","url":"mapicons/parkinggarage.png"}
        ,{"cat":"none", "text":"EHBO","url":"mapicons/firstaid.png"}
        ,{"cat":"none", "text":"Noodtelefoon","url":"mapicons/emergencyphone.png"}
        ,{"cat":"none", "text":"Ambulancepost","url":"mapicons/ambulance.png"}
        ,{"cat":"none", "text":"Ziekenhuis","url":"mapicons/hospital-building.png"}
        ,{"cat":"none", "text":"Apotheek","url":"mapicons/medicine.png"}
        ,{"cat":"none", "text":"School","url":"mapicons/school.png"}
        ,{"cat":"none", "text":"Zaal","url":"mapicons/communitycentre.png"}
        ,{"cat":"none", "text":"Verzorgingstehuis","url":"mapicons/seniorsite.png"}
        ,{"cat":"none", "text":"none","url":"mapicons/family.png"}
        ,{"cat":"none", "text":"Kinderopvang","url":"mapicons/daycare.png"}
        ,{"cat":"none", "text":"Calamiteit","url":"mapicons/blast.png"}
        ,{"cat":"none", "text":"Dodelijke slachtoffers","url":"mapicons/skull.png"}
        ,{"cat":"none", "text":"Schade aan huis","url":"mapicons/earthquake-3.png"}
        ,{"cat":"none", "text":"Stroomuitval","url":"mapicons/poweroutage.png"}
        ,{"cat":"none", "text":"Brand","url":"mapicons/fire.png"}
        ,{"cat":"none", "text":"Overstroming","url":"mapicons/flood.png"}
        ,{"cat":"none", "text":"Radio zender","url":"mapicons/radio-station-2.png"}
        ,{"cat":"none", "text":"Verzamelpunt","url":"mapicons/regroup.png"}
        ,{"cat":"none", "text":"Netwerk","url":"mapicons/wifi.png"}
        ,{"cat":"none", "text":"Groep mensen","url":"mapicons/group-2.png"}
        ,{"cat":"none", "text":"Brandweer","url":"mapicons/firemen.png"}
        ,{"cat":"none", "text":"Politie","url":"mapicons/police.png"}
        ,{"cat":"none", "text":"Camera","url":"mapicons/cctv.png"}
        ,{"cat":"none", "text":"Gemeentehuis","url":"mapicons/moderntower.png"}
        ,{"cat":"none", "text":"Commentaar","url":"mapicons/comment-map-icon.png"}
        ,{"cat":"none", "text":"Happy","url":"mapicons/smiley_happy.png"}
      ]
   },
  "definedlayers":{
      osm: {
			name: "OpenStreetMap",
			url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			type: 'xyz'
            },
     osm_grey: {
			name: 'OSM grey',
			url: 'http://a.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
			type: 'xyz'
			}
  },
  "layers":
  {
      "ahn1": {"type": "overlay", "category": "Terrain", "layer": {"type":"betterwms","visible":true,"name":"Height map","url":"http://t3.edugis.nl/tiles/tilecache.py?map=maps/edugis/cache/hoogte.map","layerOptions":{"layers":"hoogtes","format":"image/png","transparent":true,"opacity":0.8}}}//,

	  // "brp":  {"type": "overlay", "category": "External", "layer": {"type": "betterwms","visible": true, "name": "Crop parcels","url": "http://research.geodan.nl/service/ngr/brpgewaspercelen/wms","layerOptions": {"layers": "brpgewaspercelen","format": "image/png","transparent": true}}},

	  // zwemwater:{type: 'overlay', category: 'External', layer: {type: 'betterwms',visible: true, name: "Bathing locations",url: 'http://www.zwemwater.nl/zwr-ogc/services/zwr-wms',layerOptions: {layers: 'zwemwaterlocatie',format: 'image/png',transparent: true}}},

	  // zw_gebied:{type: 'overlay', category: 'External', layer: {type: 'betterwms',visible: true, name: "Bathing Areas",url: 'http://www.zwemwater.nl/zwr-ogc/services/zwr-wms',layerOptions: {layers: 'gebied',format: 'image/png',transparent: true}}},

	  // golffront: {type: 'overlay', category: '3Di', layer:{ 
				// name: "Wave front",
				// type:  'betterwms',
				// url: "http://result.3di.lizard.net/3di/wms",
				// visible: true,
				// layerOptions: {
					// layers: '61f5a464c35044c19bc7d4b42d7f58cb:arrival',
					// format: 'image/png',
					// transparent: true
				// }
			// }
		// },

		// waterdepth: {type: 'overlay', category: '3Di', layer:{ 
				// name: "Water depth",
				// type:  'betterwms',
				// url: "http://result.3di.lizard.net/3di/wms",
				// visible: true,
				// layerOptions: {
					// layers: '61f5a464c35044c19bc7d4b42d7f58cb:maxdepth',
					// format: 'image/png',
					// transparent: true
				// }
			// }
		// }
  }
};


var addCameraLayers = function(LeafletService,map){

     var cameraMarkerOptions = {
         radius: 4,
         fillColor: "#ff7800",
         color: "#000",
         weight: 1,
         opacity: 1,
         fillOpacity: 0.8
     };

	var cambox = function(feat, container, element, event){
        var self = this;
        var fid = feat.id;
        var feature = feat;
        var g, svg;
        var loc = d3.mouse(element); //Wrong on firefox
        var center = {x: event.layerX, y: event.layerY};
        var fe = d3         
            .select('.leaflet-popup-pane')
            .selectAll('.cambox').data([feat]);
        var textbox  = fe.enter()
            .append('div')
            .style('position','absolute')
            .classed('cambox',true)
            .classed('panel panel-primary',true)
            .style('max-width','300px')
			.on('click',function(){d3.selectAll('.cambox').remove();});
        textbox.append('div')
            .classed('panel-heading',true)
			.append('h4')
            .classed('panel-title',true)
			.html(feat.properties.camid);
        textbox.append('div')
            .classed('panel-body',true)
            .html("Cam ID: " + feat.properties.camid + 
				"<br>Region: " + feat.properties.region +
				"<br>Area: " + feat.properties.area +
				"<br>Brand: " + feat.properties.brand +
				"<br>Type: " + feat.properties.type +
				"<br>Azimuth: " + feat.properties.azimuth +
				"<br>Latitude: " + feat.geometry.coordinates[1] +
				"<br>Longitude: " + feat.geometry.coordinates[0]);
       fe.style('left', function(){return loc[0] + 10 + 'px';})
            .style('top', function(){return loc[1] + 10 + 'px';})
            .style("width", '250px');
    };
	
    /* Cameras layer */
    var cameraCollection = {"type":"FeatureCollection","features":[]};
	var cameraLayer = new L.geoJson(cameraCollection, {
        pointToLayer: function(feature, latlng){
            return L.circleMarker(latlng, cameraMarkerOptions);
        },
        style: function (feature) {
            return {color: 'red',weight: 1};
        },
        onEachFeature: function (feature, layer) {
            layer.bindLabel(feature.properties.camid,{ noHide: false });
            layer.bindPopup("Cam ID: " + feature.properties.camid + 
				"<br>Region: " + feature.properties.region +
				"<br>Area: " + feature.properties.area +
				"<br>Brand: " + feature.properties.brand +
				"<br>Type: " + feature.properties.type +
				"<br>Azimuth: " + feature.properties.azimuth +
				"<br>Latitude: " + feature.geometry.coordinates[1] +
				"<br>Longitude: " + feature.geometry.coordinates[0]);
        }
    });
    cameraLayer.name = 'Cameras';
    cameraLayer.buttonclass = false;
    LeafletService.layers.icmlayers.cameraLayer = cameraLayer;
	d3.json('./data/cameras.json', function(data){
		for (var i= 0; i< data.length;i++){
			var d = data[i];
			feature = {
				id: d.CameraId,
				type: 'Feature', 
				geometry: {
					coordinates: [d.Lat,d.Lon],
					type: 'Point'
				},
				properties: {
					camid: d.CameraId,
					region: d.Region,
					area: d.Area,
					type: d.Type,
					azimuth: d.Azimuth,
					brand: d.Brand
				}
			}
			cameraCollection.features.push(feature);
		}
		cameraLayer.addData(cameraCollection);
	});
};





var addGeofortLayers = function(LeafletService,map){
    /* Floodlayer */
     var data = [];
     var floodlayer = new L.geoJson(data, {
         style: function (feature) {
             var style = {};
             if (feature.properties.tijdstip == 'after 4 hours'){
                 style.opacity  = 0.2;
             }
             else if (feature.properties.tijdstip == 'after 8 hours'){
                 style.opacity  = 0.4;
             }
             else if (feature.properties.tijdstip == 'after 12 hours'){
                 style.opacity  = 0.6;
             }
             else if (feature.properties.tijdstip == 'after 16 hours'){
                 style.opacity  = 0.8;
             }
             //style.fillOpacity = 0;
             style.fillColor = "None";
             return style;
         },
         onEachFeature: function (feature, layer) {
             layer.bindPopup(feature.properties.tijdstip);
         }
     }).addTo(map);
     floodlayer.name = 'Model Output';
     floodlayer.buttonclass = true;
     LeafletService.layers.icmlayers.floodlayer = floodlayer;
     //self.layercontrol.addOverlay(floodlayer,"Inundatie");
     d3.json('./data/flood_merged.geojson',function(data){
            var collection = {"type":"FeatureCollection","features":[]};
             collection.features = data.features;
             floodlayer.addData(collection);
     });
     /*Kwetsbare objecten*/
     var geojsonMarkerOptions = {
         radius: 8,
         fillColor: "#ff7800",
         color: "#000",
         weight: 1,
         opacity: 1,
         fillOpacity: 0.8
     };
     
     var kwetsbareobjectenlayer = new L.geoJson(data, {
         pointToLayer: function(feature, latlng){
             return L.circleMarker(latlng, geojsonMarkerOptions);
         },
         style: function (feature) {
             if (feature.properties.PRIORITEIT == 1){
                 return {fillColor: 'red'};
             }
             else if (feature.properties.PRIORITEIT == 2){
                 return {fillColor: 'orange'};
             }
             else if (feature.properties.PRIORITEIT == 3){
                 return {fillColor: 'yellow'};
             }
             else if (feature.properties.PRIORITEIT == 4){
                 return {fillColor: 'blue'};
             }
             else{
                 return {fillColor: 'blue'};
             }
         },
         onEachFeature: function (feature, layer) {
             layer.bindLabel(feature.properties.ROT_NAAM + "<br>" + (feature.properties.OMSCHRI5 || ''),{ noHide: false });
             layer.bindPopup(feature.properties.ROT_NAAM + "<br>" + (feature.properties.OMSCHRI5 || ''));
         }
     });
     kwetsbareobjectenlayer.buttonclass = false;
     kwetsbareobjectenlayer.name = 'Kwetsbare objecten';
     LeafletService.layers.icmlayers.kwetsbareobjectenlayer = kwetsbareobjectenlayer;
     //self.layercontrol.addOverlay(kwetsbareobjectenlayer,"Kwetsbare objecten");
     d3.json('./data/kwetsbareobjecten.geojson',function(data){
            var collection = {"type":"FeatureCollection","features":[]};
             collection.features = data.features;
             kwetsbareobjectenlayer.addData(collection);
     });
     
     /* Opvanglocaties */
     var opvanglocatieslayer = new L.geoJson(data, {
         pointToLayer: function(feature, latlng){
             return L.circleMarker(latlng, geojsonMarkerOptions);
         },
         style: function (feature) {
             return {color: 'red',weight: 1};
         },
         onEachFeature: function (feature, layer) {
             layer.bindLabel(feature.properties.naam,{ noHide: false });
             layer.bindPopup(feature.properties.omschrijvi);
         }
     });
     opvanglocatieslayer.name = 'Opvanglocaties';
     opvanglocatieslayer.buttonclass = false;
     LeafletService.layers.icmlayers.opvanglocatieslayer = opvanglocatieslayer;
     //self.layercontrol.addOverlay(opvanglocatieslayer,"Openbare functies");
     //d3.json('./data/publieke_functie.geojson',function(data){
     d3.json('./data/opvanglocaties.geojson',function(data){
             var collection = {"type":"FeatureCollection","features":[]};
             collection.features = data.features;
             opvanglocatieslayer.addData(collection);
     });
};

