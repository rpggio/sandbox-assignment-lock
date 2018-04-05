import React from 'react';
import InputMoment from 'input-moment';

import css from './DateTimeInput.css';

class DateTimeInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  render() {
    const { moment, onChange, onSave } = this.props;
    const { expanded } = this.state;
    const handleExpand = () => this.setState({ expanded: true });
    const handleSave = () => {
      this.setState({ expanded: false });
      onSave();
    };
    return (
      <div>
        {expanded ? (
          <InputMoment
            moment={moment}
            onChange={onChange}
            onSave={handleSave}
          />
        ) : (
          <div className={css.field} onClick={handleExpand}>
            {moment && moment.format('llll')}
          </div>
        )}
      </div>
    );
  }
}

export default DateTimeInput;
