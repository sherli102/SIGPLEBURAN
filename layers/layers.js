var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_buildpleburan_2 = new ol.format.GeoJSON();
var features_buildpleburan_2 = format_buildpleburan_2.readFeatures(json_buildpleburan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildpleburan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildpleburan_2.addFeatures(features_buildpleburan_2);
var lyr_buildpleburan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buildpleburan_2, 
                style: style_buildpleburan_2,
                interactive: true,
                title: '<img src="styles/legend/buildpleburan_2.png" /> buildpleburan'
            });
var format_schoolpleburan_3 = new ol.format.GeoJSON();
var features_schoolpleburan_3 = format_schoolpleburan_3.readFeatures(json_schoolpleburan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schoolpleburan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_schoolpleburan_3.addFeatures(features_schoolpleburan_3);
var lyr_schoolpleburan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_schoolpleburan_3, 
                style: style_schoolpleburan_3,
                interactive: true,
                title: '<img src="styles/legend/schoolpleburan_3.png" /> schoolpleburan'
            });
var format_mosquepleburan_4 = new ol.format.GeoJSON();
var features_mosquepleburan_4 = format_mosquepleburan_4.readFeatures(json_mosquepleburan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mosquepleburan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mosquepleburan_4.addFeatures(features_mosquepleburan_4);
var lyr_mosquepleburan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mosquepleburan_4, 
                style: style_mosquepleburan_4,
                interactive: true,
                title: '<img src="styles/legend/mosquepleburan_4.png" /> mosquepleburan'
            });
var format_streetpleburan_5 = new ol.format.GeoJSON();
var features_streetpleburan_5 = format_streetpleburan_5.readFeatures(json_streetpleburan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_streetpleburan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_streetpleburan_5.addFeatures(features_streetpleburan_5);
var lyr_streetpleburan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_streetpleburan_5, 
                style: style_streetpleburan_5,
                interactive: true,
                title: '<img src="styles/legend/streetpleburan_5.png" /> streetpleburan'
            });
var format_pleburan_6 = new ol.format.GeoJSON();
var features_pleburan_6 = format_pleburan_6.readFeatures(json_pleburan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pleburan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pleburan_6.addFeatures(features_pleburan_6);
var lyr_pleburan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pleburan_6, 
                style: style_pleburan_6,
                interactive: true,
                title: '<img src="styles/legend/pleburan_6.png" /> pleburan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_buildpleburan_2.setVisible(true);lyr_schoolpleburan_3.setVisible(true);lyr_mosquepleburan_4.setVisible(true);lyr_streetpleburan_5.setVisible(true);lyr_pleburan_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_buildpleburan_2,lyr_schoolpleburan_3,lyr_mosquepleburan_4,lyr_streetpleburan_5,lyr_pleburan_6];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'brand': 'brand', 'wheelchair': 'wheelchair', 'roof:orientation': 'roof:orientation', 'roof:material': 'roof:material', 'roof:colour': 'roof:colour', 'operator': 'operator', 'opening_hours': 'opening_hours', 'club': 'club', 'parking': 'parking', 'amenity': 'amenity', 'name': 'name', 'description': 'description', });
lyr_buildpleburan_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'parking': 'parking', 'capacity': 'capacity', 'building_f': 'building_f', 'layer': 'layer', 'industrial': 'industrial', 'residentia': 'residentia', 'government': 'government', 'outdoor_se': 'outdoor_se', 'delivery': 'delivery', 'landuse': 'landuse', 'substation': 'substation', 'power': 'power', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'microbrewe': 'microbrewe', 'constructi': 'constructi', 'tower_type': 'tower_type', 'tower_cons': 'tower_cons', 'covered': 'covered', 'rooms': 'rooms', 'reservatio': 'reservatio', 'image': 'image', 'descriptio': 'descriptio', 'official_n': 'official_n', 'official_1': 'official_1', 'contact_we': 'contact_we', 'contact_fa': 'contact_fa', 'self_servi': 'self_servi', 'denominati': 'denominati', 'contact_ph': 'contact_ph', 'alt_name': 'alt_name', 'takeaway': 'takeaway', 'drive_thro': 'drive_thro', 'brand_wiki': 'brand_wiki', 'stars': 'stars', 'official_2': 'official_2', 'cuisine': 'cuisine', 'pump_unit': 'pump_unit', 'name_ja': 'name_ja', 'name_en': 'name_en', 'dispensing': 'dispensing', 'branch': 'branch', 'smoking': 'smoking', 'house': 'house', 'operator': 'operator', 'man_made': 'man_made', 'wheelchair': 'wheelchair', 'opening_ho': 'opening_ho', 'beauty': 'beauty', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'building_w': 'building_w', 'shelter_ty': 'shelter_ty', 'healthcare': 'healthcare', 'social_fac': 'social_fac', 'water_sour': 'water_sour', 'toilets_nu': 'toilets_nu', 'toilet_fac': 'toilet_fac', 'shelter': 'shelter', 'kitchen_fa': 'kitchen_fa', 'unisex': 'unisex', 'atm': 'atm', 'ground_flo': 'ground_flo', 'name_es': 'name_es', 'phone': 'phone', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'internet_2': 'internet_2', 'fax': 'fax', 'email': 'email', 'bar': 'bar', 'air_condit': 'air_condit', 'short_name': 'short_name', 'addr_house': 'addr_house', 'wikipedia': 'wikipedia', 'website': 'website', 'addr_hou_1': 'addr_hou_1', 'religion': 'religion', 'sport': 'sport', 'leisure': 'leisure', 'access': 'access', 'addr_postc': 'addr_postc', 'addr_stree': 'addr_stree', 'addr_provi': 'addr_provi', 'addr_count': 'addr_count', 'shop': 'shop', 'height': 'height', 'evacuation': 'evacuation', 'admin_leve': 'admin_leve', 'tourism': 'tourism', 'office': 'office', 'name': 'name', 'amenity': 'amenity', 'school_typ': 'school_typ', 'operator_t': 'operator_t', 'capacity_p': 'capacity_p', 'building_s': 'building_s', 'building_r': 'building_r', 'building_m': 'building_m', 'building_l': 'building_l', 'building_1': 'building_1', 'building_c': 'building_c', 'backup_gen': 'backup_gen', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'access_roo': 'access_roo', 'type': 'type', });
lyr_schoolpleburan_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'capacity_p': 'capacity_p', 'building_s': 'building_s', 'building_r': 'building_r', 'building_m': 'building_m', 'building_l': 'building_l', 'building_f': 'building_f', 'building_c': 'building_c', 'building': 'building', 'backup_gen': 'backup_gen', 'access_roo': 'access_roo', 'school_typ': 'school_typ', 'operator_t': 'operator_t', 'name': 'name', 'addr_full': 'addr_full', 'addr_city': 'addr_city', });
lyr_mosquepleburan_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'religion': 'religion', 'evacuation': 'evacuation', 'name': 'name', 'capacity_p': 'capacity_p', 'building_s': 'building_s', 'building_r': 'building_r', 'building_m': 'building_m', 'building_l': 'building_l', 'building_f': 'building_f', 'building_c': 'building_c', 'building': 'building', 'backup_gen': 'backup_gen', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'access_roo': 'access_roo', });
lyr_streetpleburan_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'junction': 'junction', 'bicycle': 'bicycle', 'service': 'service', 'highway': 'highway', 'oneway_con': 'oneway_con', 'tunnel': 'tunnel', 'import': 'import', 'moped': 'moped', 'mofa': 'mofa', 'covered': 'covered', 'motor_vehi': 'motor_vehi', 'oneway_mot': 'oneway_mot', 'foot': 'foot', 'layer': 'layer', 'bridge': 'bridge', 'horse': 'horse', 'width': 'width', 'surface': 'surface', 'smoothness': 'smoothness', 'oneway': 'oneway', 'name': 'name', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'lanes': 'lanes', 'cycleway': 'cycleway', 'access': 'access', });
lyr_pleburan_6.set('fieldAliases', {'FID_Admini': 'FID_Admini', 'OBJECTID': 'OBJECTID', 'FID_mfd_20': 'FID_mfd_20', 'FID_ADMI_1': 'FID_ADMI_1', 'WADMPR': 'WADMPR', 'KODE_KAB': 'KODE_KAB', 'KABUPATEN': 'KABUPATEN', 'DESA': 'DESA', 'KODE_KEC': 'KODE_KEC', 'KECAMATAN': 'KECAMATAN', 'ID_2018': 'ID_2018', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'brand': '', 'wheelchair': '', 'roof:orientation': '', 'roof:material': '', 'roof:colour': '', 'operator': '', 'opening_hours': '', 'club': '', 'parking': '', 'amenity': '', 'name': '', 'description': '', });
lyr_buildpleburan_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'parking': '', 'capacity': '', 'building_f': '', 'layer': '', 'industrial': '', 'residentia': '', 'government': '', 'outdoor_se': '', 'delivery': '', 'landuse': '', 'substation': '', 'power': '', 'operator_w': '', 'operator_1': '', 'microbrewe': '', 'constructi': '', 'tower_type': '', 'tower_cons': '', 'covered': '', 'rooms': '', 'reservatio': '', 'image': '', 'descriptio': '', 'official_n': '', 'official_1': '', 'contact_we': '', 'contact_fa': '', 'self_servi': '', 'denominati': '', 'contact_ph': '', 'alt_name': '', 'takeaway': '', 'drive_thro': '', 'brand_wiki': '', 'stars': '', 'official_2': '', 'cuisine': '', 'pump_unit': '', 'name_ja': '', 'name_en': '', 'dispensing': '', 'branch': '', 'smoking': '', 'house': '', 'operator': '', 'man_made': '', 'wheelchair': '', 'opening_ho': '', 'beauty': '', 'brand_wi_1': '', 'brand': '', 'building_w': '', 'shelter_ty': '', 'healthcare': '', 'social_fac': '', 'water_sour': '', 'toilets_nu': '', 'toilet_fac': '', 'shelter': '', 'kitchen_fa': '', 'unisex': '', 'atm': '', 'ground_flo': '', 'name_es': '', 'phone': '', 'internet_a': '', 'internet_1': '', 'internet_2': '', 'fax': '', 'email': '', 'bar': '', 'air_condit': '', 'short_name': '', 'addr_house': '', 'wikipedia': '', 'website': '', 'addr_hou_1': '', 'religion': '', 'sport': '', 'leisure': '', 'access': '', 'addr_postc': '', 'addr_stree': '', 'addr_provi': '', 'addr_count': '', 'shop': '', 'height': '', 'evacuation': '', 'admin_leve': '', 'tourism': '', 'office': '', 'name': '', 'amenity': '', 'school_typ': '', 'operator_t': '', 'capacity_p': '', 'building_s': '', 'building_r': '', 'building_m': '', 'building_l': '', 'building_1': '', 'building_c': '', 'backup_gen': '', 'addr_full': '', 'addr_city': '', 'access_roo': '', 'type': '', });
lyr_schoolpleburan_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'capacity_p': '', 'building_s': '', 'building_r': '', 'building_m': '', 'building_l': '', 'building_f': '', 'building_c': '', 'building': '', 'backup_gen': '', 'access_roo': '', 'school_typ': '', 'operator_t': '', 'name': '', 'addr_full': '', 'addr_city': '', });
lyr_mosquepleburan_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'religion': '', 'evacuation': '', 'name': '', 'capacity_p': '', 'building_s': '', 'building_r': '', 'building_m': '', 'building_l': '', 'building_f': '', 'building_c': '', 'building': '', 'backup_gen': '', 'addr_full': '', 'addr_city': '', 'access_roo': '', });
lyr_streetpleburan_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'junction': '', 'bicycle': '', 'service': '', 'highway': '', 'oneway_con': '', 'tunnel': '', 'import': '', 'moped': '', 'mofa': '', 'covered': '', 'motor_vehi': '', 'oneway_mot': '', 'foot': '', 'layer': '', 'bridge': '', 'horse': '', 'width': '', 'surface': '', 'smoothness': '', 'oneway': '', 'name': '', 'motorcycle': '', 'motorcar': '', 'lanes': '', 'cycleway': '', 'access': '', });
lyr_pleburan_6.set('fieldImages', {'FID_Admini': 'TextEdit', 'OBJECTID': 'TextEdit', 'FID_mfd_20': 'TextEdit', 'FID_ADMI_1': 'TextEdit', 'WADMPR': 'TextEdit', 'KODE_KAB': 'TextEdit', 'KABUPATEN': 'TextEdit', 'DESA': 'TextEdit', 'KODE_KEC': 'TextEdit', 'KECAMATAN': 'TextEdit', 'ID_2018': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'brand': 'no label', 'wheelchair': 'no label', 'roof:orientation': 'no label', 'roof:material': 'no label', 'roof:colour': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'club': 'no label', 'parking': 'no label', 'amenity': 'no label', 'name': 'no label', 'description': 'no label', });
lyr_buildpleburan_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'parking': 'no label', 'capacity': 'no label', 'building_f': 'no label', 'layer': 'no label', 'industrial': 'no label', 'residentia': 'no label', 'government': 'no label', 'outdoor_se': 'no label', 'delivery': 'no label', 'landuse': 'no label', 'substation': 'no label', 'power': 'no label', 'operator_w': 'no label', 'operator_1': 'no label', 'microbrewe': 'no label', 'constructi': 'no label', 'tower_type': 'no label', 'tower_cons': 'no label', 'covered': 'no label', 'rooms': 'no label', 'reservatio': 'no label', 'image': 'no label', 'descriptio': 'no label', 'official_n': 'no label', 'official_1': 'no label', 'contact_we': 'no label', 'contact_fa': 'no label', 'self_servi': 'no label', 'denominati': 'no label', 'contact_ph': 'no label', 'alt_name': 'no label', 'takeaway': 'no label', 'drive_thro': 'no label', 'brand_wiki': 'no label', 'stars': 'no label', 'official_2': 'no label', 'cuisine': 'no label', 'pump_unit': 'no label', 'name_ja': 'no label', 'name_en': 'no label', 'dispensing': 'no label', 'branch': 'no label', 'smoking': 'no label', 'house': 'no label', 'operator': 'no label', 'man_made': 'no label', 'wheelchair': 'no label', 'opening_ho': 'no label', 'beauty': 'no label', 'brand_wi_1': 'no label', 'brand': 'no label', 'building_w': 'no label', 'shelter_ty': 'no label', 'healthcare': 'no label', 'social_fac': 'no label', 'water_sour': 'no label', 'toilets_nu': 'no label', 'toilet_fac': 'no label', 'shelter': 'no label', 'kitchen_fa': 'no label', 'unisex': 'no label', 'atm': 'no label', 'ground_flo': 'no label', 'name_es': 'no label', 'phone': 'no label', 'internet_a': 'no label', 'internet_1': 'no label', 'internet_2': 'no label', 'fax': 'no label', 'email': 'no label', 'bar': 'no label', 'air_condit': 'no label', 'short_name': 'no label', 'addr_house': 'no label', 'wikipedia': 'no label', 'website': 'no label', 'addr_hou_1': 'no label', 'religion': 'no label', 'sport': 'no label', 'leisure': 'no label', 'access': 'no label', 'addr_postc': 'no label', 'addr_stree': 'no label', 'addr_provi': 'no label', 'addr_count': 'no label', 'shop': 'no label', 'height': 'no label', 'evacuation': 'no label', 'admin_leve': 'no label', 'tourism': 'no label', 'office': 'no label', 'name': 'no label', 'amenity': 'no label', 'school_typ': 'no label', 'operator_t': 'no label', 'capacity_p': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_m': 'no label', 'building_l': 'no label', 'building_1': 'no label', 'building_c': 'no label', 'backup_gen': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', 'access_roo': 'no label', 'type': 'no label', });
lyr_schoolpleburan_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'capacity_p': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_m': 'no label', 'building_l': 'no label', 'building_f': 'no label', 'building_c': 'no label', 'building': 'no label', 'backup_gen': 'no label', 'access_roo': 'no label', 'school_typ': 'no label', 'operator_t': 'no label', 'name': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', });
lyr_mosquepleburan_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'religion': 'no label', 'evacuation': 'no label', 'name': 'no label', 'capacity_p': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_m': 'no label', 'building_l': 'no label', 'building_f': 'no label', 'building_c': 'no label', 'building': 'no label', 'backup_gen': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', 'access_roo': 'no label', });
lyr_streetpleburan_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'junction': 'no label', 'bicycle': 'no label', 'service': 'no label', 'highway': 'no label', 'oneway_con': 'no label', 'tunnel': 'no label', 'import': 'no label', 'moped': 'no label', 'mofa': 'no label', 'covered': 'no label', 'motor_vehi': 'no label', 'oneway_mot': 'no label', 'foot': 'no label', 'layer': 'no label', 'bridge': 'no label', 'horse': 'no label', 'width': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'oneway': 'no label', 'name': 'no label', 'motorcycle': 'no label', 'motorcar': 'no label', 'lanes': 'no label', 'cycleway': 'no label', 'access': 'no label', });
lyr_pleburan_6.set('fieldLabels', {'FID_Admini': 'no label', 'OBJECTID': 'no label', 'FID_mfd_20': 'no label', 'FID_ADMI_1': 'no label', 'WADMPR': 'no label', 'KODE_KAB': 'no label', 'KABUPATEN': 'no label', 'DESA': 'no label', 'KODE_KEC': 'no label', 'KECAMATAN': 'no label', 'ID_2018': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_pleburan_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});