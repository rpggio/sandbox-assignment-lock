import React from 'react';
import { render } from 'react-dom';

import Toggle from './Toggle';
import AssessmentTile from './AssessmentTile';
import AssessmentEdit from './AssessmentEdit';

import css from './index.css';

// import 'normalize.css';

const App = () => {
  return (
    <div className={css.container}>
      
      <AssessmentTile isLocked={true} />
      
      <AssessmentEdit />

    </div>
  );
};

render(<App />, document.getElementById('app'));
