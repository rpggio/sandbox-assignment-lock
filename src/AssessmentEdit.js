import React from 'react';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

import css from './AssessmentEdit.css';

class AssessmentEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assessment: props.assessment || {}
    };
  }

  handleChange(change) {
    this.setState(state => {
      if (change.assessment) {
        const newState = Object.assign({}, state);
        newState.assessment = Object.assign(
          newState.assessment,
          change.assessment
        );
        return newState;
      }
      return Object.assign(state, change);
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
      timeFormat: 'HH:mm',
      timeIntervals: 15,
      dateFormat: 'llll',
      timeCaption: 'time',
      showTimeSelect: true,
      popperClassName: 'pop',
      className: css.dateField
    };

    return (
      <div className={css.container}>
        <div className={css.part}>Assessment Begins</div>
        <DatePicker
          selected={beginsAt}
          onChange={d => this.handleChange({ assessment: { beginsAt: d } })}

          minDate={moment()}
          maxDate={(dueAt && dueAt.subtract(1, 'day')) || moment().add(1, 'year')}

          {...datePickerFormat}
        />

        <div className={css.part}>Assessment Due</div>
        <DatePicker
          selected={dueAt}
          onChange={d => this.handleChange({ assessment: { dueAt: d } })}

          minDate={(beginsAt && beginsAt.add(1, 'day')) || moment()}
          maxDate={moment().add(1, 'year')}

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
