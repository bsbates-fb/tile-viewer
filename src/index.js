import { Ion } from "cesium";
import React from 'react';
import ReactDOM from 'react-dom/client';

import "cesium/Widgets/widgets.css";
import "./index.css"

import App from './components/App';

// Set the access token from the environment (see the .env file)
Ion.defaultAccessToken = process.env.ION_ACCESS_TOKEN;

// Initialize the react application
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
