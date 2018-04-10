import React from 'react';
import { render } from 'react-dom';

import 'semantic-ui-css/semantic.min.css';

import AssessmentTile from './AssessmentTile';
import AssessmentEdit from './AssessmentEdit';

import css from './index.css';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      assessment: {},
      showEdit: false
    }
  }

  handleChange(change){
    this.setState(state => Object.assign({}, state, change));
  }

  toggleLocked() {
    const { assessment } = this.state;
    this.handleChange(
      { 
        assessment: Object.assign(assessment, { isLocked: !assessment.isLocked })
      });
  }

  render() {
    const { assessment, showEdit } = this.state;
    return (
      <div className={css.container}>
        
        <AssessmentTile 
          assessment={assessment}
          onBeginEdit={() => this.handleChange({showEdit: true}) }
          onToggleLocked={() => this.toggleLocked()} />
        
        { showEdit && 
          <AssessmentEdit 
            assessment={assessment}
            onSave={a => this.handleChange({assessment: a})}
            onClose={() => this.handleChange({showEdit: false})} /> }

        <div className={css.bottom}>
          <a href="https://academicmerit.atlassian.net/browse/FY-1344" target="_blank">FY-1344</a> 
          – Advanced option to set a Start and End Date for an Assignment.
        </div>

      </div>
    );
  }
};

render(<App />, document.getElementById('app'));
