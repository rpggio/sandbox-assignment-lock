import React from 'react';
import { render } from 'react-dom';

import Toggle from './Toggle';
import AssignmentTile from './AssignmentTile';
import AssignmentEdit from './AssignmentEdit';

// import 'normalize.css';

const App = () => {
  return (
    <div>
      
      <AssignmentTile isLocked={true} />
      
      <AssignmentEdit />

    </div>
  );
};

render(<App />, document.getElementById('app'));
