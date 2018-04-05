import React from 'react';
import moment from 'moment';
import { Flex, Box } from 'grid-styled';
import 'input-moment/dist/input-moment.css';

import DateTimeInput from './DateTimeInput';
import css from './AssignmentEdit.css';

class AssignmentEdit extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.state = {
      unlockMoment: moment()
    };
  }

  handleChange(m) {
    console.log('change', m);
    this.setState({ m });
  }

  handleSave() {
    // console.log('saved', this.state.m.format('llll'));
  }

  render() {
    return (
      <div className={css.container}>
        <Box mt={12}>Assignment Begins</Box>
        <DateTimeInput
          moment={this.state.unlockMoment}
          onChange={this.handleChange}
          onSave={this.handleSave}
        />

        <Box mt={12}>Assignment Due</Box>
        <Box mt={12}>
          <DateTimeInput
            moment={this.state.unlockMoment}
            onChange={this.handleChange}
            onSave={this.handleSave}
          />
        </Box>
      </div>
    );
  }
}

export default AssignmentEdit;
