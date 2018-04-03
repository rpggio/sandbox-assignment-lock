import React from 'react';
import { render } from 'react-dom';

import Toggle from './Toggle';
import AssignmentTile from './AssignmentTile';

import css from '../styles/main.css';

const App = () => {
  return (
    <div>
      <div>
        <AssignmentTile isLocked={true} />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('app'));
