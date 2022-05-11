import {
  Ion,
  Viewer,
  createWorldTerrain,
  Cartesian3,
  Cesium3DTileset,
  Math
} from "cesium";
import React from 'react';

/**
 * Props:
 * - tileSetUrl: string
 */
export default class CesiumViewer extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.tileSetPrimitive = null;
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

  componentDidUpdate(prevProps, prevState) {
    // If the tile set url has changed, then update the scene
    if ([this.props.tileSetUrl !== prevProps.tileSetUrl]) {
      if (this.tileSetPrimitive && this.viewer) {
        this.viewer.scene.primitives.remove(this.tileSetPrimitive);
        this.tileSetPrimitive = null;
      }
      if (this.props.tileSetUrl && this.viewer) {
        this.tileSetPrimitive = this.viewer.scene.primitives.add(new Cesium3DTileset({
          url: this.props.tileSetUrl,
        }));
      }
    }
  }

  render() {
    return (<div ref={this.containerRef} className="cesiumContainer"></div>);
  }
}
