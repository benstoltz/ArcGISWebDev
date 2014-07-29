require([
        'dojo/query',
        'esri/map',
        'esri/layers/FeatureLayer'
        ], function(query, Map, FeatureLayer) {
    var map = new Map('map', {
        basemap: 'streets',
        autoResize: true,
        center: [-118.2095, 34.0866],
        zoom: 10
    });

    var featureLayer = new FeatureLayer('http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/la_county_labor_centroid/FeatureServer/0');

    featureLayer.setDefinitionExpression('TOTAL_POP > 5000');

    map.addLayer(featureLayer);

    query('#population').on('change', function(e) {
        var population = e.target.selectedOptions[0].value;
        var definitionExpression = 'TOTAL_POP > ' + population;
        featureLayer.setDefinitionExpression(definitionExpression);
    });

});
