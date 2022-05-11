import { Ion, Viewer, createWorldTerrain, createOsmBuildings, Cartesian3, Math } from "cesium";
import React from 'react';

export default class CesiumViewer extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    const containerRef = this.containerRef.current;
    if (!containerRef) {
      throw new Error('No container ref element for creating the Cesium Viewer')
    }
    // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
     const viewer = new Viewer(containerRef, {
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

    this.viewer = viewer;
  }

  render() {
    return (<div ref={this.containerRef} className="cesiumContainer"></div>);
  }
}
