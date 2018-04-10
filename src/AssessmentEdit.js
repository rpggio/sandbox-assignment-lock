import React from 'react';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

import css from './AssessmentEdit.css';

class AssessmentEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assessment: props.assessment ? 
        Object.assign({}, props.assessment) : 
        {}
    };
  }

  handleChange(change) {
    this.setState(state => {
      const newState = Object.assign({}, state, change);
      if (change.assessment) {
        newState.assessment = Object.assign({}, state.assessment, change.assessment);
      }
      return newState;
    });
  }

  handleSave() {
    this.props.onSave(this.state.assessment);
    this.props.onClose();
  }

  handleCancel() {
    this.props.onClose();
  }

  render() {
    const { assessment: { beginsAt, dueAt } } = this.state;

    const datePickerFormat = {
      timeIntervals: 30,
      dateFormat: 'llll',
      timeCaption: 'time',
      showTimeSelect: true,
      popperClassName: 'pop',
      className: css.dateField,
      minTime: moment().hours(5).minutes(0),
      maxTime: moment().hours(22).minutes(0)
    };

    return (
      <div className={css.container}>
        <div className={css.part}>Assessment Begins</div>
        <DatePicker
          selected={beginsAt}
          minDate={moment()}
          maxDate={dueAt || moment().add(1, 'year')}
          onChange={d => this.handleChange({ assessment: { beginsAt: d } })}
          {...datePickerFormat}
        />

        <div className={css.part}>Assessment Due</div>
        <DatePicker
          selected={dueAt}
          minDate={beginsAt || moment()}
          maxDate={moment().add(1, 'year')}
          onChange={d => this.handleChange({ assessment: { dueAt: d } })}
          {...datePickerFormat}
        />

        <div className={css.buttons}>
          <Button primary onClick={() => this.handleSave()}>
            Save
          </Button>
          <Button onClick={() => this.handleCancel()}>Cancel</Button>
        </div>
      </div>
    );
  }
}

export default AssessmentEdit;
