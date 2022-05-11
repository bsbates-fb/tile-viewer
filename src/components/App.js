import React from 'react';

import CesiumViewer from './CesiumViewer';
import Overlay from './Overlay';

const App = (props) => {
  const [state, setState] = React.useState({
    tileSetUrl: '',
  });
  return (
    <>
      <CesiumViewer tileSetUrl={state.tileSetUrl} />
      <Overlay onTileSetLoadClick={tileSetUrl => setState({...state, tileSetUrl: tileSetUrl})} />
    </>
  );
}

export default App;
