import React from 'react';
import moment from 'moment';

import DatePicker from 'react-datepicker';

// import '!style-loader!react-datepicker/dist/react-datepicker.css';

import css from './AssessmentEdit.css';

class AssessmentEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assessment: {
      }
    };
  }

  handleChange(change) {
    this.setState(state => {
      const newState = Object.assign(state, change);
      if (change.assessment){
        newState.assessment = Object.assign(state, change.assessment);
      }
      return newState;
    });
  }

  render() {
    const { assessment: { beginsAt, dueAt } } = this.state;

    const datePickerFormat = {
      timeFormat: 'HH:mm',
      timeIntervals: 15,
      dateFormat: 'llll',
      timeCaption: 'time',
      showTimeSelect: true,
      popperClassName: 'pop'
    };

    return (
      <div className={css.container}>
        <div className={css.part}>Assessment Begins</div>
        <DatePicker
          selected={beginsAt}
          onChange={d => this.handleChange({ assessment: { beginsAt: d } })}
          {...datePickerFormat}
        />

        <div className={css.part}>Assessment Due</div>
        <DatePicker
          selected={dueAt}
          onChange={d => this.handleChange({ assessment: { dueAt: d } })}
          {...datePickerFormat}
        />
      </div>
    );
  }
}

export default AssessmentEdit;
