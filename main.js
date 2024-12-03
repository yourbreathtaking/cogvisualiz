import GeoTIFF from 'ol/source/GeoTIFF.js';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import OSM from'ol/source/OSM.js';
import Tile from 'ol/Tile';



const source = new GeoTIFF({
  sources: [
    {
      url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif',
    },
  ],
});
const osmLayer = new TileLayer({
  source: new OSM(),
});
const map = new Map({
  target: 'map',
  layers: [osmLayer,
    
    new TileLayer({
      source: source,
    })
  ],
  view: source.getView(),
});
