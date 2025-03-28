var wms_layers = [];

var lyr_northern_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'northern<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/northern_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-19856182.740047, 9064943.311300, -15088714.032953, 11601678.464600]
        })
    });

lyr_northern_0.setVisible(true);
var layersList = [lyr_northern_0];
