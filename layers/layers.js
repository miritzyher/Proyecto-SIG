var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Coloniasporniveldeafectacin_1 = new ol.format.GeoJSON();
var features_Coloniasporniveldeafectacin_1 = format_Coloniasporniveldeafectacin_1.readFeatures(json_Coloniasporniveldeafectacin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coloniasporniveldeafectacin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coloniasporniveldeafectacin_1.addFeatures(features_Coloniasporniveldeafectacin_1);
var lyr_Coloniasporniveldeafectacin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coloniasporniveldeafectacin_1, 
                style: style_Coloniasporniveldeafectacin_1,
                popuplayertitle: 'Colonias por nivel de afectación',
                interactive: true,
    title: 'Colonias por nivel de afectación<br />\
    <img src="styles/legend/Coloniasporniveldeafectacin_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Coloniasporniveldeafectacin_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/Coloniasporniveldeafectacin_1_2.png" /> 2 - 10<br />' });
var format_SocavonesReportados_2 = new ol.format.GeoJSON();
var features_SocavonesReportados_2 = format_SocavonesReportados_2.readFeatures(json_SocavonesReportados_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SocavonesReportados_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SocavonesReportados_2.addFeatures(features_SocavonesReportados_2);
cluster_SocavonesReportados_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_SocavonesReportados_2
});
var lyr_SocavonesReportados_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SocavonesReportados_2, 
                style: style_SocavonesReportados_2,
                popuplayertitle: 'Socavones Reportados',
                interactive: true,
                title: '<img src="styles/legend/SocavonesReportados_2.png" /> Socavones Reportados'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Coloniasporniveldeafectacin_1.setVisible(true);lyr_SocavonesReportados_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Coloniasporniveldeafectacin_1,lyr_SocavonesReportados_2];
lyr_Coloniasporniveldeafectacin_1.set('fieldAliases', {'ENT': 'ENT', 'CVEDT': 'CVEDT', 'NOMDT': 'NOMDT', 'DTTOLOC': 'DTTOLOC', 'CVEUT': 'CVEUT', 'NOMUT': 'NOMUT', 'ID': 'ID', 'ID_count': 'ID_count', });
lyr_SocavonesReportados_2.set('fieldAliases', {'ID': 'ID', 'Fecha': 'Fecha', 'Fuente': 'Fuente', 'Tipo de Fu': 'Tipo de Fu', 'Descripci�': 'Descripci�', 'Dirección': 'Dirección', 'Colonia': 'Colonia', 'lat': 'lat', 'lon': 'lon', 'source_url': 'source_url', });
lyr_Coloniasporniveldeafectacin_1.set('fieldImages', {'ENT': 'TextEdit', 'CVEDT': 'TextEdit', 'NOMDT': 'TextEdit', 'DTTOLOC': 'TextEdit', 'CVEUT': 'TextEdit', 'NOMUT': 'TextEdit', 'ID': 'Range', 'ID_count': 'TextEdit', });
lyr_SocavonesReportados_2.set('fieldImages', {'ID': 'TextEdit', 'Fecha': 'TextEdit', 'Fuente': 'TextEdit', 'Tipo de Fu': 'TextEdit', 'Descripci�': 'TextEdit', 'Dirección': 'TextEdit', 'Colonia': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'source_url': 'TextEdit', });
lyr_Coloniasporniveldeafectacin_1.set('fieldLabels', {'ENT': 'header label - visible with data', 'CVEDT': 'header label - visible with data', 'NOMDT': 'no label', 'DTTOLOC': 'no label', 'CVEUT': 'no label', 'NOMUT': 'header label - visible with data', 'ID': 'no label', 'ID_count': 'no label', });
lyr_SocavonesReportados_2.set('fieldLabels', {'ID': 'no label', 'Fecha': 'header label - visible with data', 'Fuente': 'header label - visible with data', 'Tipo de Fu': 'inline label - visible with data', 'Descripci�': 'inline label - visible with data', 'Dirección': 'inline label - visible with data', 'Colonia': 'inline label - visible with data', 'lat': 'no label', 'lon': 'no label', 'source_url': 'hidden field', });
lyr_SocavonesReportados_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});