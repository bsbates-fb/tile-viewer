import "./Overlay.css"

import React from 'react';

/**
 * Props:
 * - onTileSetLoadClick: (tileSetUrl: string) => void
 */
const Overlay = (props) => {
  const [state, setState] = React.useState({
    controlPanelExpanded: false,
    tileSetUrl: '',
  });
  return (
    <div className="Overlay_root">
      {state.controlPanelExpanded ?
        <div className="Overlay_control_panel">
          <div className="Overlay_control_panel_header">
            <div className="Overlay_control_panel_heading h1">3D Tile Viewer</div>
            <div
              className="Overlay_collapse_section"
              onClick={() => setState({...state, controlPanelExpanded: false})}>
              <i className="gg-chevron-left-r"/>
            </div>
          </div>
          <div className="Overlay_control_panel_body">
            <label>
              Tile Set URL
              <input
                type="text"
                value={state.tileSetUrl}
                onChange={event => setState({...state, tileSetUrl: event.target.value})}
              />
            </label>
            <button
              type="button"
              className="primary Overlay_load_button"
              onClick={() => props.onTileSetLoadClick(state.tileSetUrl)}>
              Load Tile Set
            </button>
          </div>
        </div>
      : <div
          className="Overlay_expand_section"
          onClick={() => setState({...state, controlPanelExpanded: true})}
        >
          <i className="gg-chevron-right-r"/>
        </div>
      }
    </div>
  );
}

export default Overlay;
