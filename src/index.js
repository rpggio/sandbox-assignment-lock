import React from 'react';
import { render } from 'react-dom';

import Toggle from './Toggle';
import AssignmentTile from './AssignmentTile';

const App = () => {
  return (
    <div>
      <div>
        <Toggle isOn={true} />
        <Toggle isOn={false} />
      </div>
      <div>
        <AssignmentTile />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('app'));
