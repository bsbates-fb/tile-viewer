import { Ion, Viewer, createWorldTerrain, createOsmBuildings, Cartesian3, Math } from "cesium";
import "cesium/Widgets/widgets.css";
import "../src/css/main.css"

Ion.defaultAccessToken = process.env.ION_ACCESS_TOKEN;

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer('cesiumContainer', {
  terrainProvider: createWorldTerrain()
});

// Add Cesium OSM Buildings, a global 3D buildings layer.
viewer.scene.primitives.add(createOsmBuildings());

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination : Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation : {
    heading : Math.toRadians(0.0),
    pitch : Math.toRadians(-15.0),
  }
});
