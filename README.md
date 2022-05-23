# Tile Viewer
A web application for viewing 3d map tiles, using CesiumJS. The idea is that we can use 3D meshes that we might display on our VR headsets and instead make them available via 3D viewer on the web.

This will enable several new workflows that we expect our 3D map tiles will require, such as QA pipelines for mesh verification of buildings/POIs, entrance location matching, ground truth verification, etc. 

## Installation
This project uses yarn to manage dependencies. Install them with:
```
yarn install
```

## Environment setup
Add a `.env` file to this directory, and include the following values:
```
# Access token for cesium
# Access tokens can be found at: https://cesium.com/ion/tokens.
ION_ACCESS_TOKEN=<PUT TOKEN HERE>
```

## Building
Webpack is used to build the source assets into a web app.
You can build the app using the `build` command
```
yarn run build
```

## Running Locally
Webpack server can be run to view the web application locally, by running the `start` command.
Note that this will run the server process in the active terminal.
```
yarn run start
```
