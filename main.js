import "./style.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Style, Fill, Stroke } from "ol/style";

const params = {
  format: 'geojson',
  page_size: 10,
  language: 'fr'
}

const source = new VectorSource({
  format: new GeoJSON(),
  url: `https://biodiv-sports.fr/api/v2/sensitivearea/?${new URLSearchParams(params).toString()}`,
});

const style = new Style({
  fill: new Fill({
    color: "rgba(255, 99, 71, 0.5)",
  }),
  stroke: new Stroke({
    color: "rgb(255, 0, 0)",
  }),
});

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    new VectorLayer({
      source: source,
      style: style,
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});
