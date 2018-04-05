import React from 'react';
import moment from 'moment';
import { Flex, Box } from 'grid-styled';

import DatePicker from 'react-datepicker';

import '!style-loader!react-datepicker/dist/react-datepicker.css';

import css from './AssignmentEdit.css';

class AssignmentEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assignment: {
      }
    };
  }

  handleChange(change) {
    this.setState(state => {
      const newState = Object.assign(state, change);
      if(change.assignment){
        newState.assignment = Object.assign(state, change.assignment);
      }
      return newState;
    });
  }

  render() {
    const { assignment: { beginsAt, dueAt } } = this.state;

    const datePickerFormat = {
      timeFormat: 'HH:mm',
      timeIntervals: 15,
      dateFormat: 'llll',
      timeCaption: 'time',
      showTimeSelect: true,
      popperClassName: 'pop'
    };

console.log('render', this.state);

    return (
      <div className={css.container}>
        <Box mt={12}>Assignment Begins</Box>
        <DatePicker
          selected={beginsAt}
          onChange={d => this.handleChange({ assignment: { beginsAt: d } })}
          {...datePickerFormat}
        />

        <Box mt={12}>Assignment Due</Box>
        <DatePicker
          selected={dueAt}
          onChange={d => this.handleChange({ assignment: { dueAt: d } })}
          {...datePickerFormat}
        />
      </div>
    );
  }
}

export default AssignmentEdit;
