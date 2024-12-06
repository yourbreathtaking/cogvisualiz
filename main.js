import GeoTIFF from 'ol/source/GeoTIFF.js';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import OSM from'ol/source/OSM.js';
import Tile from 'ol/Tile';



const source = new GeoTIFF({
  sources: [
    {
      url: 'https://github.com/BoukhdouLamyae/projet/raw/refs/heads/main/NOUVcog.cog',
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
