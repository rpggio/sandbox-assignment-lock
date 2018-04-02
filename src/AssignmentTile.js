import React from 'react';
import cn from 'classnames';

import css from './AssignmentTile.css';

const AssignmentTile = ({
  assessment: { unlockAt, lockAt, timeLimit, isLocked },
  onToggleLocked,
  onBeginEdit
}) => (
  <div className="assignmentTile">
    <div className={cn(css.header, isLocked ? css.locked : css.unlocked)}>
      <span className={cn(css.title)}>{isLocked ? 'Locked' : 'Unlocked'}</span>
    </div>
    <div className="content" />
  </div>
);

AssignmentTile.defaultProps = {
  assessment: {},
  onToggleLocked: () => {},
  onBeginEdit: () => {}
};

export default AssignmentTile;
