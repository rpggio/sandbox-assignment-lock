import React from 'react';
import { render } from 'react-dom';

import Toggle from './Toggle';

const App = () => {
  return (
    <div>
      <Toggle isOn={true} />
      <Toggle isOn={false} />
    </div>
  );
};

render(<App />, document.getElementById('app'));
